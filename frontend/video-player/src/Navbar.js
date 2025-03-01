import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Menu, 
  MenuItem, 
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useTheme,
  useMediaQuery,
  Fade
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  Menu as MenuIcon,
  Engineering,
  Code,
  Dvr,
  Person,
  KeyboardArrowDown,
  Home,
  Work,
  Info,
  Article,
  Apps
} from '@mui/icons-material';
import { motion } from 'framer-motion';

function Navbar({ projectsRef, aboutRef }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scrolling for active section
  useEffect(() => {
    const handleScroll = () => {
      // Track active section based on scroll position
      const sections = ['home', 'projects', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(`${section}-section`);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setMobileOpen(false);
  };

  const handleGoHome = () => {
    navigate('/');
    setMobileOpen(false);
    scrollToSection(document.getElementById('home-section'));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (element) => {
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
  };

  const handleSectionClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      scrollToSection(section);
    } else {
      handleGoHome();
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) scrollToSection(section);
      }, 100);
    }
  };

  const handleProjectsClick = () => {
    if (projectsRef && projectsRef.current) {
      scrollToSection(projectsRef.current);
    } else {
      handleGoHome();
      setTimeout(() => {
        if (projectsRef && projectsRef.current) scrollToSection(projectsRef.current);
      }, 100);
    }
  };

  const handleAboutClick = () => {
    if (aboutRef && aboutRef.current) {
      scrollToSection(aboutRef.current);
    } else {
      handleGoHome();
      setTimeout(() => {
        if (aboutRef && aboutRef.current) scrollToSection(aboutRef.current);
      }, 100);
    }
  };
  
  // Mobile drawer content
  const drawer = (
    <Box sx={{ width: 280, pt: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center', 
            fontWeight: 'bold',
            my: 2,
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: '1px',
            position: 'relative',
            display: 'inline-block',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '30%',
              height: '3px',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: theme.palette.background.accent,
              borderRadius: '2px'
            }
          }}
        >
          JOSEPH CABUSAS
        </Typography>
      </Box>
      <Divider />
      <List sx={{ mt: 1 }}>
        <ListItem 
          button
          onClick={() => handleSectionClick('home-section')}
          sx={{ 
            py: 1.5,
            borderRadius: '12px',
            mb: 0.5,
            backgroundColor: activeSection === 'home' ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(37, 99, 235, 0.12)',
            }
          }}
        >
          <ListItemIcon><Home color={activeSection === 'home' ? 'primary' : 'inherit'} /></ListItemIcon>
          <ListItemText 
            primary="Home" 
            primaryTypographyProps={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: activeSection === 'home' ? 600 : 400,
              color: activeSection === 'home' ? theme.palette.primary.main : 'inherit'
            }}
          />
        </ListItem>

        <ListItem 
          button
          onClick={() => handleSectionClick('projects-section')}
          sx={{ 
            py: 1.5,
            borderRadius: '12px',
            mb: 0.5,
            backgroundColor: activeSection === 'projects' ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(37, 99, 235, 0.12)',
            }
          }}
        >
          <ListItemIcon><Apps color={activeSection === 'projects' ? 'primary' : 'inherit'} /></ListItemIcon>
          <ListItemText 
            primary="Projects" 
            primaryTypographyProps={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: activeSection === 'projects' ? 600 : 400,
              color: activeSection === 'projects' ? theme.palette.primary.main : 'inherit'
            }}
          />
        </ListItem>

        <ListItem 
          button
          onClick={() => handleSectionClick('about-section')}
          sx={{ 
            py: 1.5,
            borderRadius: '12px',
            mb: 0.5,
            backgroundColor: activeSection === 'about' ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(37, 99, 235, 0.12)',
            }
          }}
        >
          <ListItemIcon><Info color={activeSection === 'about' ? 'primary' : 'inherit'} /></ListItemIcon>
          <ListItemText 
            primary="About Me" 
            primaryTypographyProps={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: activeSection === 'about' ? 600 : 400,
              color: activeSection === 'about' ? theme.palette.primary.main : 'inherit'
            }}
          />
        </ListItem>

        <Divider sx={{ my: 1.5 }} />

        <ListItem 
          button
          onClick={() => handleNavigate('/resume')}
          sx={{ 
            py: 1.5,
            borderRadius: '12px',
            mb: 0.5,
            '&:hover': {
              backgroundColor: 'rgba(37, 99, 235, 0.12)',
            }
          }}
        >
          <ListItemIcon><Article color="inherit" /></ListItemIcon>
          <ListItemText 
            primary="Resume" 
            primaryTypographyProps={{ fontFamily: 'Inter, sans-serif' }}
          />
        </ListItem>

        <Divider sx={{ my: 1.5 }} />
        
        <ListItem sx={{ color: theme.palette.primary.main, fontWeight: 'bold', py: 1 }}>
          <ListItemIcon><Dvr color="primary" /></ListItemIcon>
          <ListItemText 
            primary="AI & Blockchain Projects" 
            primaryTypographyProps={{ 
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem'
            }}
          />
        </ListItem>

        <ListItem 
          button
          onClick={() => handleNavigate('/hedera')}
          sx={{ 
            py: 1.2,
            pl: 4,
            borderRadius: '12px',
            ml: 1,
            mb: 0.5,
            '&:hover': {
              backgroundColor: 'rgba(37, 99, 235, 0.08)',
            }
          }}
        >
          <ListItemText 
            primary="Hedera Blockchain" 
            primaryTypographyProps={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem'
            }}
          />
        </ListItem>

        <ListItem 
          button
          onClick={() => handleNavigate('/text-summarizer')}
          sx={{ 
            py: 1.2,
            pl: 4,
            borderRadius: '12px',
            ml: 1,
            mb: 0.5,
            '&:hover': {
              backgroundColor: 'rgba(37, 99, 235, 0.08)',
            }
          }}
        >
          <ListItemText 
            primary="AI Text Summarizer" 
            primaryTypographyProps={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem'
            }}
          />
        </ListItem>

        <ListItem 
          button
          onClick={() => handleNavigate('/voicetotext')}
          sx={{ 
            py: 1.2,
            pl: 4,
            borderRadius: '12px',
            ml: 1,
            mb: 0.5,
            '&:hover': {
              backgroundColor: 'rgba(37, 99, 235, 0.08)',
            }
          }}
        >
          <ListItemText 
            primary="AI Voice to Text" 
            primaryTypographyProps={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem'
            }}
          />
        </ListItem>

        <ListItem 
          button
          onClick={() => handleNavigate('/image-generator')}
          sx={{ 
            py: 1.2,
            pl: 4,
            borderRadius: '12px',
            ml: 1,
            mb: 0.5,
            '&:hover': {
              backgroundColor: 'rgba(37, 99, 235, 0.08)',
            }
          }}
        >
          <ListItemText 
            primary="AI Image Generator" 
            primaryTypographyProps={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem'
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={4}
        component={motion.div}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ 
          backgroundColor: (theme) => theme.palette.background.dark,
          boxShadow: '0 4px 20px rgba(15, 23, 42, 0.15)',
          transition: 'all 0.3s ease-in-out',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: { xs: 1.5, md: 1 } }}>
            <Box 
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              sx={{ 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }} 
              onClick={handleGoHome}
            >
              <Typography 
                variant="h6"
                sx={{ 
                  fontWeight: 700,
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: '0.5px',
                  background: theme.palette.background.accent,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 10px rgba(37, 99, 235, 0.2)',
                }}
              >
                JOSEPH CABUSAS
              </Typography>
            </Box>
            
            {/* Mobile menu button */}
            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { xs: 'block', md: 'none' },
                ml: 'auto',
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
            
            {/* Desktop menu */}
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                gap: 0.5,
                alignItems: 'center',
              }}
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                color="inherit"
                onClick={() => handleSectionClick('home-section')}
                sx={{ 
                  position: 'relative',
                  px: 2,
                  py: 1,
                  color: 'white',
                  fontWeight: activeSection === 'home' ? 600 : 400,
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '6px',
                    left: '50%',
                    width: activeSection === 'home' ? '30%' : '0%',
                    height: '3px',
                    backgroundColor: '#fff',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                    borderRadius: '2px',
                    background: theme.palette.background.accent,
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:after': {
                      width: '30%'
                    }
                  }
                }}
              >
                Home
              </Button>

              <Button 
                color="inherit" 
                onClick={() => handleSectionClick('projects-section')}
                sx={{ 
                  position: 'relative',
                  px: 2,
                  py: 1,
                  color: 'white',
                  fontWeight: activeSection === 'projects' ? 600 : 400,
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '6px',
                    left: '50%',
                    width: activeSection === 'projects' ? '30%' : '0%',
                    height: '3px',
                    backgroundColor: '#fff',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                    borderRadius: '2px',
                    background: theme.palette.background.accent,
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:after': {
                      width: '30%'
                    }
                  }
                }}
              >
                Projects
              </Button>

              <Button 
                color="inherit" 
                onClick={(event) => handleMenuOpen(event, 'ai')}
                endIcon={<KeyboardArrowDown sx={{ 
                  transition: 'all 0.3s ease',
                  transform: selectedButton === 'ai' ? 'rotate(180deg)' : 'rotate(0deg)'
                }} />}
                sx={{ 
                  position: 'relative',
                  px: 2,
                  py: 1,
                  color: 'white',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '6px',
                    left: '50%',
                    width: selectedButton === 'ai' ? '30%' : '0%',
                    height: '3px',
                    backgroundColor: '#fff',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                    borderRadius: '2px',
                    background: theme.palette.background.accent,
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:after': {
                      width: '30%'
                    }
                  }
                }}
              >
                AI & Blockchain
              </Button>
              <Menu 
                anchorEl={anchorEl} 
                open={Boolean(anchorEl) && selectedButton === 'ai'} 
                onClose={handleMenuClose}
                TransitionComponent={Fade}
                transitionDuration={200}
                PaperProps={{
                  elevation: 3,
                  sx: {
                    mt: 1.5,
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.15))',
                    borderRadius: '12px',
                    minWidth: 220,
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      left: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              >
                <MenuItem 
                  onClick={() => handleNavigate('/hedera')}
                  sx={{
                    borderRadius: '8px',
                    mx: 0.5,
                    my: 0.3,
                    '&:hover': {
                      backgroundColor: 'rgba(37, 99, 235, 0.08)',
                    },
                    minHeight: '48px',
                    px: 2,
                  }}
                >
                  <ListItemIcon>
                    <Code fontSize="small" sx={{ color: theme.palette.primary.main }} />
                  </ListItemIcon>
                  <ListItemText primary="Hedera Blockchain API" />
                </MenuItem>
                <MenuItem 
                  onClick={() => handleNavigate('/text-summarizer')}
                  sx={{
                    borderRadius: '8px',
                    mx: 0.5,
                    my: 0.3,
                    '&:hover': {
                      backgroundColor: 'rgba(37, 99, 235, 0.08)',
                    },
                    minHeight: '48px',
                    px: 2,
                  }}
                >
                  <ListItemIcon>
                    <Code fontSize="small" sx={{ color: theme.palette.primary.main }} />
                  </ListItemIcon>
                  <ListItemText primary="AI Text Summarizer" />
                </MenuItem>
                <MenuItem 
                  onClick={() => handleNavigate('/voicetotext')}
                  sx={{
                    borderRadius: '8px',
                    mx: 0.5,
                    my: 0.3,
                    '&:hover': {
                      backgroundColor: 'rgba(37, 99, 235, 0.08)',
                    },
                    minHeight: '48px',
                    px: 2,
                  }}
                >
                  <ListItemIcon>
                    <Code fontSize="small" sx={{ color: theme.palette.primary.main }} />
                  </ListItemIcon>
                  <ListItemText primary="AI Voice to Text" />
                </MenuItem>
                <MenuItem 
                  onClick={() => handleNavigate('/image-generator')}
                  sx={{
                    borderRadius: '8px',
                    mx: 0.5,
                    my: 0.3,
                    '&:hover': {
                      backgroundColor: 'rgba(37, 99, 235, 0.08)',
                    },
                    minHeight: '48px',
                    px: 2,
                  }}
                >
                  <ListItemIcon>
                    <Code fontSize="small" sx={{ color: theme.palette.primary.main }} />
                  </ListItemIcon>
                  <ListItemText primary="AI Image Generator" />
                </MenuItem>
              </Menu>

              <Button 
                color="inherit" 
                onClick={() => handleSectionClick('about-section')}
                sx={{ 
                  position: 'relative',
                  px: 2,
                  py: 1,
                  color: 'white',
                  fontWeight: activeSection === 'about' ? 600 : 400,
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '6px',
                    left: '50%',
                    width: activeSection === 'about' ? '30%' : '0%',
                    height: '3px',
                    backgroundColor: '#fff',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                    borderRadius: '2px',
                    background: theme.palette.background.accent,
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:after': {
                      width: '30%'
                    }
                  }
                }}
              >
                About
              </Button>

              <Button 
                variant="contained"
                color="primary"
                onClick={() => handleNavigate('/resume')}
                sx={{ 
                  ml: 1,
                  borderRadius: '50px',
                  boxShadow: '0 4px 10px rgba(15, 23, 42, 0.2)',
                  background: theme.palette.background.accent,
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  '&:hover': {
                    boxShadow: '0 6px 15px rgba(15, 23, 42, 0.3)',
                  }
                }}
              >
                Resume
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            boxShadow: '0 10px 40px rgba(15, 23, 42, 0.2)',
          },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Add spacing to prevent content from hiding behind the fixed AppBar */}
      <Toolbar sx={{ mb: { xs: 1, md: 0 } }} />
    </>
  );
}

export default Navbar;