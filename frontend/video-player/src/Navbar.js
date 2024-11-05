import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar({ youtubeApiRef, aboutRef }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleMenuOpen = (event, buttonName) => {
    setAnchorEl(event.currentTarget);
    setSelectedButton(buttonName);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedButton(null);
  };

  const handleNavigate = (path) => {
    handleMenuClose();
    navigate(path);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const scrollToYoutubeApiSection = () => {
    if (youtubeApiRef && youtubeApiRef.current) {
      youtubeApiRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAboutSection = () => {
    if (aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesApiClick = () => {
    handleGoHome();
    setTimeout(() => {
      scrollToYoutubeApiSection();
    }, 100);
  };

  const handleAboutClick = () => {
    handleGoHome();
    setTimeout(() => {
      scrollToAboutSection();
    }, 100);
  };

  const handleDropdownOpen = (event) => {
    handleMenuOpen(event, 'blockchain');
  };

  const handleHederaApiClick = () => {
    handleNavigate('/hedera');
  };

  const handleAIApiClick = () => {
    handleNavigate('/text-summarizer');
  };

  const handleVoiceToTextClick = () => {
    handleNavigate('/voicetotext');
  };

  const handleImageGeneratorClick = () => {
    handleNavigate('/image-generator'); // New route for AI Image Generator
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }} onClick={handleGoHome} style={{ cursor: 'pointer' }}>
          JOSEPH CABUSAS
        </Typography>
        <div>
          <Button color="inherit" onClick={(event) => handleMenuOpen(event, 'computer')}>
            Computer Engineering
          </Button>
          {selectedButton === 'computer' && (
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={() => handleNavigate('/career')}>Career Outline</MenuItem>
              <MenuItem onClick={() => handleNavigate('/resume')}>Resume</MenuItem>
            </Menu>
          )}
          <Button color="inherit" onClick={handleServicesApiClick}>
            Services API
          </Button>

          {/* Dropdown for Blockchain and AI Services */}
          <Button color="inherit" onClick={handleDropdownOpen}>
            Blockchain and AI Services
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl) && selectedButton === 'blockchain'} onClose={handleMenuClose}>
            <MenuItem onClick={handleHederaApiClick}>Hedera Blockchain API</MenuItem>
            <MenuItem onClick={handleAIApiClick}>AI Text Summarizer</MenuItem>
            <MenuItem onClick={handleVoiceToTextClick}>AI Voice to Text</MenuItem>
            <MenuItem onClick={handleImageGeneratorClick}>AI Image Generator</MenuItem> {/* New item added */}
          </Menu>

          <Button color="inherit" onClick={handleAboutClick}>
            About Me
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
