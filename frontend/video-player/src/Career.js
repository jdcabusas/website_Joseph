// src/Career.js
import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Navbar from './Navbar'; // Import the Navbar component

const Career = () => {
  return (
    <div>
      {/* Include the Navbar here */}
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          height: '20vh', // Reduced height for the hero section
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
        <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '5px', zIndex: 2, fontFamily: 'Roboto, sans-serif' }}>
          CAREER OUTLINE
        </Typography>
      </Box>

      {/* Page Content */}
      <Container sx={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
          Professional Experience
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Lockheed Martin - Technical Lead</Typography>
            <Typography variant="body2">March 2022 - Present</Typography>
            <Typography variant="body2">
              Software Engineer and Technical Lead of multiple teams of Software Engineers focusing on the quick-turn R&D software development of Prototype and Demonstrations for software internally developed to support military exercises across the USA.
            </Typography>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Kapsch TrafficCom North America - Real Time Software Engineer</Typography>
            <Typography variant="body2">July 2021 - March 2022</Typography>
            <Typography variant="body2">
              Software Engineer at Kapsch TrafficCom NA, specializing in software deployment, hardware network configuration, and automating large-scale deployments in the Tolling Industry, supporting cities across the United States.
            </Typography>
          </li>
          <li>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>ASRC Federal - Software Engineer</Typography>
            <Typography variant="body2">June 2020 - July 2021</Typography>
            <Typography variant="body2">
              Software Developer at ASRC Federal Mission Solutions, focusing on the software maintenance and development of the AEGIS weapon system for Australian and Korean deployments.
            </Typography>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Career;
