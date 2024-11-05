import { Box, Button, Container, TextField, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Navbar from './Navbar';

const TextSummarizer = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setSummary('');

    try {
      const response = await axios.post('https://hedera-api-29pz.onrender.com/summarize', { text: inputText });
      if (response.data) {
        setSummary(response.data.summary_text);
      } else {
        setSummary('No summary available.');
      }
    } catch (error) {
      console.error('Error fetching summary:', error);
      setSummary('Error fetching summary.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ padding: '50px 0', backgroundColor: '#eceff1' }}>
        <Container>
          <Typography variant="h2" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#263238', textAlign: 'center', marginBottom: '20px' }}>
            AI Text Summarizer
          </Typography>

          {/* Add the description here */}
          <Typography variant="body1" sx={{ color: '#455a64', textAlign: 'center', marginBottom: '20px' }}>
            This tool allows users to summarize lengthy texts quickly and effectively. Simply paste your text into the input box below, and the summarizer will process it using the facebook/bart-large-cnn model from HuggingFace. The model is designed to extract key points and generate a coherent summary, making it a useful resource for anyone needing to condense information efficiently.
            <br /><br />
            <strong>Note:</strong> The backend Flask application that runs the AI model is hosted on Render's free tier service and deployed via Docker containers, which may take approximately 50 seconds to boot up if inactive.
          </Typography>

          <TextField
            multiline
            rows={10}
            variant="outlined"
            fullWidth
            placeholder="Paste your text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            sx={{ marginBottom: '20px' }}
          />

          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ padding: '10px 20px', fontSize: '1.2rem' }}
            >
              Summarize Text
            </Button>
          </Box>

          {loading && (
            <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
              <CircularProgress color="primary" />
              <Typography variant="h6" sx={{ color: '#263238', marginTop: '10px' }}>
                Generating summary...
              </Typography>
            </Box>
          )}

          {summary && (
            <Box sx={{ marginTop: '20px', padding: '10px', backgroundColor: '#ffffff', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238' }}>
                Summary:
              </Typography>
              <Typography sx={{ color: '#455a64' }}>
                {summary}
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </div>
  );
};

export default TextSummarizer;
