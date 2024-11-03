import React, { useState, useRef, useEffect } from 'react';
import { Button, IconButton, Typography, Box, Container, CircularProgress } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import Navbar from './Navbar';

const Recorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null); // Store blob for sending to backend
  const [transcription, setTranscription] = useState(''); // State for full transcription result
  const [chunks, setChunks] = useState([]); // State for chunks with timestamps
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/flac' });
        setAudioBlob(blob);
        audioChunksRef.current = [];
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const transcribeAudio = async () => {
    if (!audioBlob) {
      console.error("No audio blob to send.");
      return;
    }

    const formData = new FormData();
    formData.append('file', new File([audioBlob], 'recorded-audio.flac', { type: 'audio/flac' }));

    setIsLoading(true); // Set loading to true when transcription starts

    try {
      const response = await fetch('http://127.0.0.1:5000/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text(); // Capture error message
        throw new Error('Network response was not ok: ' + errorText);
      }

      const result = await response.json();
      console.log('Transcription result:', result); // Log the full result for debugging

      // Set full transcription text
      if (result && result.full_text) {
        setTranscription(result.full_text); // Update full text
      } else {
        console.warn('No full_text found in transcription result:', result);
        setTranscription('');
      }

      // Create an array of transcription parts with timestamps
      if (result && result.chunks) {
        const transcriptionChunks = result.chunks.map((chunk) => {
          return {
            timestamp: chunk.timestamp, // Assuming each chunk has a timestamp
            text: chunk.text // Adjust if the text property has a different name
          };
        });
        setChunks(transcriptionChunks); // Update chunks state to display on the UI
      } else {
        setChunks([]);
      }

    } catch (error) {
      console.error('Error during transcription:', error);
      setTranscription('');
      setChunks([]);
    } finally {
      setIsLoading(false); // Set loading to false when transcription is complete
    }
  };

  // Create a URL for the audio blob to enable replaying
  const audioUrl = audioBlob ? URL.createObjectURL(audioBlob) : null;

  useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  return (
    <div>
      <Navbar />
      <Box display="flex" flexDirection="column" alignItems="center" sx={{ padding: '50px 0' }}>
        <Container maxWidth="sm">
          <Typography variant="h4" textAlign="center" gutterBottom>
            AI Voice to Text
          </Typography>

          <Typography variant="body1" sx={{ color: '#455a64', textAlign: 'center', marginBottom: '20px' }}>
            This tool allows users to record audio or voice inputs and converts them into text with accompanying timestamps. It leverages OpenAI's Whisper model via the Hugging Face serverless API to provide accurate transcriptions. The output includes both the full transcribed text and detailed timing information, facilitating easy reference to specific segments of the audio.
            <br /><br />
            <strong>Note:</strong> The backend Flask application that runs the AI model is hosted on Render's free tier service and deployed via Docker containers, which may take approximately 50 seconds to boot up if inactive.
          </Typography>

          {/* Start/Stop Recording Button Centered */}
          <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
            {isRecording ? (
              <IconButton color="secondary" onClick={stopRecording} size="large">
                <StopIcon fontSize="large" />
              </IconButton>
            ) : (
              <IconButton color="primary" onClick={startRecording} size="large">
                <MicIcon fontSize="large" />
              </IconButton>
            )}
          </Box>

          {/* Centered Transcribe Button */}
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={transcribeAudio}
              sx={{ marginTop: '0px' }}
              disabled={!audioBlob || isLoading} // Disable button while loading
            >
              Transcribe Audio
            </Button>
          </Box>

          {/* Loading Indicator */}
          {isLoading && (
            <Box display="flex" justifyContent="center" mt={2}>
              <CircularProgress />
            </Box>
          )}

          {/* Audio Player for Recorded Audio */}
          {audioUrl && (
            <Box display="flex" justifyContent="center" mt={2}>
              <audio controls src={audioUrl} />
            </Box>
          )}

          {/* Display Full Transcription Result */}
          {transcription && (
            <Typography variant="body1" textAlign="center" mt={2}>
              <strong>Full Transcription:</strong> {transcription}
            </Typography>
          )}

          {/* Display Chunks with Timestamps */}
          {chunks.length > 0 && (
            <Typography variant="body1" textAlign="center" mt={2}>
              <strong>Timestamps:</strong>
              <div>
                {chunks.map((chunk, index) => (
                  <div key={index}>
                    <span>[{chunk.timestamp[0]} - {chunk.timestamp[1]}] </span>
                    <span>{chunk.text}</span>
                  </div>
                ))}
              </div>
            </Typography>
          )}
        </Container>
      </Box>
    </div>
  );
};

export default Recorder;
