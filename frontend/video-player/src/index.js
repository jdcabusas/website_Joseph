// src/App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import YoutubeSearch from './YoutubeSearch'; // Import your YoutubeSearch component
import Career from './Career'; // Import your Career component
import Resume from './Resume'; // Import your Career component
import Navbar from './Navbar'; // Import the Navbar component
import headshot from './Joseph_image.jpg'; // Importing the image directly
import cpeImage from './cpe.jpg'; // Import your image for the content section
import ytImage from './youtube.jpg'; // Import your image for the content section
import aboutImage from './about.jpg'; // Import your image for the content section

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/youtube" element={<YoutubeSearch />} /> {/* Add this route */}
        <Route path="/career" element={<Career />} /> {/* Add this route */}
        <Route path="/resume" element={<Resume />} /> {/* Add this route */}
      </Routes>
    </Router>
  </React.StrictMode>
);

function App() {
  return (
    <div>
      {/* Include the Navbar here */}
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          height: '40vh',
          backgroundColor: '#1E1E2F',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
          flexDirection: 'column',
          position: 'relative',
          padding: '10px',
          borderRadius: '1px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          src={headshot}
          alt="Joseph Cabusas"
          style={{
            borderRadius: '10%',
            width: '150px',
            height: '165px',
            marginBottom: '10px',
            position: 'relative',
            zIndex: 2,
            border: '3px solid #fff',
          }}
        />
        <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '5px', zIndex: 2, fontFamily: 'Roboto, sans-serif' }}>
          We Have a Moral Obligation To Be OPTIMISTIC
        </Typography>
        <Box sx={{ zIndex: 2 }}>
          <Typography variant="body1" sx={{ marginTop: '5px', fontSize: '0.9rem', fontFamily: 'Roboto, sans-serif' }}>
            Contact: <a href="mailto:jdcabusas201@gmail.com" style={{ color: '#fff' }}>jdcabusas201@gmail.com</a>
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '0.9rem', fontFamily: 'Roboto, sans-serif' }}>
            LinkedIn: <a href="https://www.linkedin.com/in/josephcabusas/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>Joseph Cabusas</a>
          </Typography>
        </Box>
      </Box>

      {/* Page Content */}
      <Container sx={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
        <Typography variant="h5" align="center" sx={{ marginBottom: '20px' }}>
          Joseph Cabusas is a skilled Lead Software Engineer in software design, DevOps, and leading teams to deliver complex projects in the Defense and Commercial industry.
        </Typography>

        {/* Grid for Images and Descriptions */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <img src={cpeImage} alt="Computer Engineering" style={{ width: '100%', borderRadius: '8px', height: '300px', objectFit: 'cover' }} />
            <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold' }}>Computer Engineering</Typography>
            <Typography variant="body2" sx={{ marginTop: '5px' }}>
              Joseph has contributed to software teams at prominent international companies, including Lockheed Martin, Kapsch TrafficCom, and ASRC Federal.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <img src={ytImage} alt="Youtube API" style={{ width: '100%', borderRadius: '8px', height: '300px', objectFit: 'cover' }} />
            <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold' }}>Youtube API</Typography>
            <Typography variant="body2" sx={{ marginTop: '5px' }}>
              Here's a project Joseph developed that integrates YouTube search functionality using their public API. Fun fact: one of his favorite aspects of software development is creating, maintaining, and upgrading APIs for microservices!
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <img src={aboutImage} alt="About Joseph" style={{ width: '100%', borderRadius: '8px', height: '300px', objectFit: 'cover' }} />
            <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold' }}>About Joseph</Typography>
            <Typography variant="body2" sx={{ marginTop: '5px' }}>
              Learn more about Joseph's personal life, hobbies, and interests.
            </Typography>
          </Grid>
        </Grid>

        {/* Aligning buttons below the images */}
        <Grid container spacing={4} justifyContent="center" sx={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Button variant="contained" sx={{ backgroundColor: '#1E1E2F', color: '#fff' }}>
              Learn More
            </Button>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Button variant="contained" sx={{ backgroundColor: '#1E1E2F', color: '#fff' }}>
              Learn More
            </Button>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Button variant="contained" sx={{ backgroundColor: '#1E1E2F', color: '#fff' }}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
