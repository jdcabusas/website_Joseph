// src/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
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

  // Add a function to navigate to the home page
  const handleGoHome = () => {
    navigate('/'); // Navigate to the root route (App.js)
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
              <MenuItem onClick={() => handleNavigate('/career')}>Career Outline</MenuItem> {/* Updated to navigate */}
              <MenuItem onClick={() => handleNavigate('/resume')}>Resume</MenuItem>
            </Menu>
          )}

          <Button color="inherit" onClick={(event) => handleMenuOpen(event, 'youtube')}>
            Youtube API
          </Button>
          {selectedButton === 'youtube' && (
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={() => handleNavigate('/youtube')}>Youtube API Overview</MenuItem>
              <MenuItem onClick={handleMenuClose}>Source Code</MenuItem>
            </Menu>
          )}

          <Button color="inherit" onClick={(event) => handleMenuOpen(event, 'about')}>
            About Me
          </Button>
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
