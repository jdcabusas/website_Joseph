import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar({ youtubeApiRef }) {
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
    navigate(path); // Use navigate to change routes
  };

  const handleGoHome = () => {
    navigate('/'); // Navigate to the root route (App.js)
  };

  const scrollToYoutubeApiSection = () => {
    if (youtubeApiRef && youtubeApiRef.current) {
      youtubeApiRef.current.scrollIntoView({ behavior: 'smooth' });
      handleMenuClose();
    }
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
          <Button color="inherit" onClick={scrollToYoutubeApiSection}>
            Services API
          </Button>
          {selectedButton === 'youtube' && (
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={() => handleNavigate('/youtube')}>Services API</MenuItem>
              <MenuItem onClick={handleMenuClose}>Source Code</MenuItem>
            </Menu>
          )}
          {/*
          <Button color="inherit" onClick={(event) => handleMenuOpen(event, 'about')}>
            About Me
          </Button>
           */}
          {selectedButton === 'about' && (
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>About</MenuItem>
              <MenuItem onClick={handleMenuClose}>Life and Interests</MenuItem>
            </Menu>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
