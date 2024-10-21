// src/YoutubeSearch.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import Navbar from './Navbar'; // Import the Navbar component

function YoutubeSearch() {
  const [query, setQuery] = useState('');
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [error, setError] = useState(null); // State for error handling

  const YOUTUBE_API_KEY = 'AIzaSyDkT74UC9iq4pFcCvXqTzPgAGhLT0Uo6bo';
  const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

  const handleSearch = () => {
    if (!query) {
      setError('Please enter a search term');
      return;
    }
    setError(null); // Clear any previous errors

    const searchUrl = `${YOUTUBE_API_URL}?part=snippet&q=${encodeURIComponent(query)}&key=${YOUTUBE_API_KEY}&type=video`;

    fetch(searchUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.items.length > 0) {
          const videoId = data.items[0].id.videoId; // Get the first video's ID
          setSelectedVideoId(videoId);
        } else {
          setSelectedVideoId(null);
          setError('No videos found');
        }
      })
      .catch(error => {
        console.error('Error fetching YouTube data:', error);
        setError('Failed to fetch data from YouTube');
        setSelectedVideoId(null);
      });
  };

  return (
    <>
      {/* Navbar should be outside of the Container */}
      <Navbar />

      <Container>
        {/* Embed YouTube Short */}
        <Box mb={2}>
          <Typography variant="h6">Now Playing YouTube Short:</Typography>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cRCsv_KbqdE?autoplay=1"
            title="YouTube Short"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>

        <Typography variant="h4" gutterBottom>
          YouTube Search
        </Typography>
        <Box display="flex" mb={2}>
          <TextField
            variant="outlined"
            label="Search YouTube"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Box>

        {error && (
          <Typography variant="body1" color="error">{error}</Typography>
        )}

        {selectedVideoId && (
          <Box mb={2}>
            <Typography variant="h6">Now Playing:</Typography>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        )}
      </Container>
    </>
  );
}

export default YoutubeSearch;