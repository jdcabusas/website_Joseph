import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';
import Navbar from './Navbar';

const ImageGenerator = () => {
  const [inputString, setInputString] = useState('');
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); // State for messages

  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  const handleGenerateImage = async () => {
    if (!inputString) return;

    setLoading(true);
    setImageSrc(null); // Reset the image before making the request
    setMessage(''); // Reset any previous message

    try {
      const response = await axios.post(
        'https://hedera-api-29pz.onrender.com/generate-image',
        { input_string: inputString },
        { responseType: 'arraybuffer' } // Expecting an array buffer for the image
      );

      if (response.status === 200) {
        // Check if the response type is an image blob
        const contentType = response.headers['content-type'];

        if (contentType && contentType.includes('image')) {
          const imageUrl = URL.createObjectURL(new Blob([response.data], { type: contentType }));
          setImageSrc(imageUrl); // Set the image source to the blob URL
        } else {
          // Handle JSON response
          const jsonResponse = JSON.parse(new TextDecoder().decode(response.data));
          if (jsonResponse.message) {
            setMessage(jsonResponse.message); // Set the message if it exists in JSON response
          } else {
            setMessage('Unexpected JSON response format.'); // Handle unexpected JSON format
          }
        }
      } else {
        setMessage('Unexpected response status.'); // Handle unexpected status codes
      }
    } catch (error) {
      // Check if the error response is available and display the error message from the backend
      if (error.response) {
        if (error.response.data) {
          // Handle specific messages from the backend
          if (error.response.data.message) {
            setMessage(error.response.data.message); // Set the message if available
          } else if (error.response.data.error) {
            setMessage(error.response.data.error); // Set the error message from the backend
          } else {
            setMessage('An error occurred.'); // Generic error message
          }
        } else {
          setMessage('Error generating image. Please try again.'); // Generic error message
        }
      } else {
        setMessage('Error generating image. Please try again.'); // Generic error message
      }
      console.error('Error generating image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
 <div>
      <Navbar />
    <Box sx={{ padding: '50px 0', backgroundColor: '#eceff1' }}>
      <Container>
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'bold',
            color: '#263238',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          AI Image Generator
        </Typography>

        <TextField
          variant="outlined"
          fullWidth
          placeholder="Enter the type of image you want to generate..."
          value={inputString}
          onChange={handleInputChange}
          sx={{ marginBottom: '20px' }}
        />

        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateImage}
            sx={{ padding: '10px 20px', fontSize: '1.2rem' }}
          >
            Generate Image
          </Button>
        </Box>

        {loading && (
          <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
            <CircularProgress color="primary" />
            <Typography variant="h6" sx={{ color: '#263238', marginTop: '10px' }}>
              Generating image...
            </Typography>
          </Box>
        )}

        {message && (
          <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#f44336' }}>
              {message}  {/* Display message when limit is reached or any error occurs */}
            </Typography>
          </Box>
        )}

        {imageSrc && (
          <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238' }}>
              Generated Image:
            </Typography>
            <img
              src={imageSrc}
              alt="Generated"
              style={{ maxWidth: '100%', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
            />
          </Box>
        )}
      </Container>
    </Box>
    </div>
  );
};

export default ImageGenerator;
