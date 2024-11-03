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
    handleNavigate('/hedera'); // Navigate to the Hedera.js route
  };

  const handleAIApiClick = () => {
    handleNavigate('/text-summarizer'); // Navigate to the Text Summarizer route
  };

  const handleVoiceToTextClick = () => {
    handleNavigate('/voicetotext'); // Navigate to the AI Voice to Text route
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
            <MenuItem onClick={handleVoiceToTextClick}>AI Voice to Text</MenuItem> {/* New menu item added */}
          </Menu>

          {/* Move About Me button to the end */}
          <Button color="inherit" onClick={handleAboutClick}>
            About Me
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
