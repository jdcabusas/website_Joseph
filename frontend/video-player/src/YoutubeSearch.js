// src/YoutubeSearch.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import Navbar from './Navbar'; // Import the Navbar component

function YoutubeSearch() {
  const [query, setQuery] = useState('');
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const handleSearch = () => {
    const searchUrl = `http://localhost:5000/search?query=${encodeURIComponent(query)}`;

    fetch(searchUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.length > 0 && data[0].videoId) {
          setSelectedVideoId(data[0].videoId);
        } else {
          setSelectedVideoId(null);
        }
      })
      .catch(error => {
        console.error('Error fetching YouTube data:', error);
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
