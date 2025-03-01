// src/Landing.js
import React, { useRef, useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  IconButton, 
  TextField, 
  Paper, 
  Link,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Chip,
  Avatar,
  Stack
} from '@mui/material';
import { 
  ArrowBack, 
  ArrowForward, 
  LinkedIn, 
  Email, 
  GitHub, 
  KeyboardArrowDown,
  LocationOn,
  Code,
  BubbleChart,
  Memory,
  ArrowForwardIos,
  LocalPhone,
  Public,
  Article
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import JosephImg from './Joseph_image.jpg';
import MapComponent from './MapComponent';
import NetlifyDeployments from './NetlifyDeployments';
import linkedinIcon from './linkedin.png';
import gmailIcon from './gmail.png';

function Landing() {
  // Create references for each section
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const [query, setQuery] = useState('');
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [error, setError] = useState(null);
  const [randomCountry, setRandomCountry] = useState(null);
  const [loadingCountry, setLoadingCountry] = useState(true);
  
  //const YOUTUBE_API_KEY = 'AIzaSyDkT74UC9iq4pFcCvXqTzPgAGhLT0Uo6bo';
  const YOUTUBE_API_KEY = 'AIzaSyDkT74UC9iq4pFcCvXqTzPgAGhLT0Uo6bo';
  const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
  const REST_COUNTRIES_API_URL = 'https://restcountries.com/v3.1/all'; // URL to fetch all countries
  
  const fetchCountryByName = async (countryName) => {
    setLoadingCountry(true);
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      if (!response.ok) throw new Error('Country not found');
      const data = await response.json();
      setRandomCountry(data[0]); // Assuming the first result is the desired country
    } catch (error) {
      console.error('Error fetching country:', error);
      setRandomCountry(null);
    } finally {
      setLoadingCountry(false);
    }
  };
  
  const fetchRandomCountry = () => {
    setLoadingCountry(true);
    fetch(REST_COUNTRIES_API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomCountry(data[randomIndex]);
        setLoadingCountry(false);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
        setLoadingCountry(false);
      });
  };
  
  useEffect(() => {
    fetchRandomCountry(); // Fetch a random country when the component mounts
  }, []);
  
  const handleSearch = () => {
    if (!query) {
      setError('Please enter a search term');
      return;
    }
    setError(null);
    const searchUrl = `${YOUTUBE_API_URL}?part=snippet&q=${encodeURIComponent(query)}&key=${YOUTUBE_API_KEY}&type=video`;
    fetch(searchUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.items.length > 0) {
          const videoId = data.items[0].id.videoId;
          setSelectedVideoId(videoId);
        } else {
          setSelectedVideoId(null);
          setError('No videos found');
        }
      })
      .catch((error) => {
        console.error('Error fetching YouTube data:', error);
        setError('Failed to fetch data from YouTube');
        setSelectedVideoId(null);
      });
  };
  
  // Carousel Scrolling logic
  const scrollCarousel = (direction) => {
    const container = document.getElementById('api-carousel-container');
    const scrollAmount = container.clientWidth;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div>
      {/* Include the Navbar */}
      <Navbar projectsRef={projectsRef} aboutRef={aboutRef} />
      
      {/* Modern Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Box 
          id="home-section"
          sx={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: (theme) => theme.palette.background.gradient,
            color: '#fff',
          }}
        >
          {/* Animated background elements */}
          <Box 
            component={motion.div}
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }} 
            transition={{ 
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            sx={{
              position: 'absolute',
              width: '80vh',
              height: '80vh',
              left: '-10%',
              top: '5%',
              borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0) 70%)',
              filter: 'blur(60px)',
              zIndex: 1,
              opacity: 0.6,
            }}
          />
          <Box 
            component={motion.div}
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
            }} 
            transition={{ 
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            sx={{
              position: 'absolute',
              width: '60vh',
              height: '60vh',
              right: '-5%',
              bottom: '5%',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0) 70%)',
              filter: 'blur(60px)',
              zIndex: 1,
              opacity: 0.7,
            }}
          />

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              {/* Image - Single high-quality image as requested */}
              <Grid item xs={12} md={5} textAlign="center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Box
                    component="img"
                    src={JosephImg}
                    alt="Joseph Cabusas"
                    sx={{
                      width: { xs: '250px', md: '340px' },
                      height: { xs: '250px', md: '340px' },
                      objectFit: 'cover',
                      borderRadius: '24px',
                      boxShadow: (theme) => `0 25px 50px rgba(15, 23, 42, 0.3)`,
                      filter: 'brightness(1.05)',
                      transition: 'transform 0.5s, box-shadow 0.5s',
                      border: '4px solid rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        transform: 'translateY(-10px) scale(1.02)',
                        boxShadow: '0 35px 60px rgba(15, 23, 42, 0.4)',
                      },
                    }}
                  />
                </motion.div>
              </Grid>

              {/* Text Content */}
              <Grid item xs={12} md={7}>
                <Box>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 1, 
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        letterSpacing: 3,
                        textTransform: 'uppercase',
                        color: (theme) => theme.palette.primary.light,
                        background: (theme) => theme.palette.background.accent,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Lead Software Engineer
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Typography 
                      variant="h1" 
                      component="h1"
                      sx={{ 
                        mb: 2, 
                        fontWeight: 700,
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: 1.2,
                        color: (theme) => theme.palette.text.light,
                      }}
                    >
                      Joseph Cabusas
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        mb: 3,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        color: 'rgba(255,255,255,0.9)',
                        lineHeight: 1.4,
                      }}
                    >
                      We Have a Moral Obligation To Be Optimistic
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mb: 4,
                        fontFamily: "'Inter', sans-serif",
                        color: 'rgba(255,255,255,0.8)',
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1.1rem' },
                        maxWidth: '650px'
                      }}
                    >
                      A highly skilled software engineer specializing in software design, DevOps, and team leadership.
                      Experienced in delivering complex projects across Defense and Commercial sectors at Lockheed Martin, Kapsch TrafficCom, and ASRC Federal.
                    </Typography>
                  </motion.div>

                  {/* Social icons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        gap: 2, 
                        mb: 4,
                        flexWrap: 'wrap'
                      }}
                    >
                      <Button
                        startIcon={<LinkedIn />}
                        component="a" 
                        href="https://www.linkedin.com/in/josephcabusas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        color="inherit"
                        sx={{ 
                          borderRadius: '50px',
                          borderColor: 'rgba(255,255,255,0.2)',
                          borderWidth: '2px',
                          px: 2.5,
                          py: 1,
                          fontWeight: 600,
                          '&:hover': {
                            borderColor: 'rgba(255,255,255,0.8)',
                            backgroundColor: 'rgba(255,255,255,0.08)',
                            transform: 'translateY(-3px)',
                          }
                        }}
                      >
                        LinkedIn
                      </Button>

                      <Button
                        startIcon={<Email />}
                        component="a" 
                        href="mailto:jdcabusas201@gmail.com"
                        variant="outlined"
                        color="inherit"
                        sx={{ 
                          borderRadius: '50px',
                          borderColor: 'rgba(255,255,255,0.2)',
                          borderWidth: '2px',
                          px: 2.5,
                          py: 1,
                          fontWeight: 600,
                          '&:hover': {
                            borderColor: 'rgba(255,255,255,0.8)',
                            backgroundColor: 'rgba(255,255,255,0.08)',
                            transform: 'translateY(-3px)',
                          }
                        }}
                      >
                        Email
                      </Button>

                      <Button
                        startIcon={<GitHub />}
                        component="a" 
                        href="https://github.com/jdcabusas"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        color="inherit"
                        sx={{ 
                          borderRadius: '50px',
                          borderColor: 'rgba(255,255,255,0.2)',
                          borderWidth: '2px',
                          px: 2.5,
                          py: 1,
                          fontWeight: 600,
                          '&:hover': {
                            borderColor: 'rgba(255,255,255,0.8)',
                            backgroundColor: 'rgba(255,255,255,0.08)',
                            transform: 'translateY(-3px)',
                          }
                        }}
                      >
                        GitHub
                      </Button>
                    </Box>
                  </motion.div>

                  {/* Call-to-action buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        gap: 2.5,
                        flexWrap: 'wrap'
                      }}
                    >
                      <Button 
                        variant="contained" 
                        size="large"
                        color="primary"
                        sx={{ 
                          borderRadius: '50px',
                          px: 4,
                          py: 1.5,
                          fontWeight: 600,
                          fontSize: '1rem',
                          boxShadow: (theme) => `0 12px 24px rgba(37, 99, 235, 0.25)`,
                          '&:hover': {
                            boxShadow: (theme) => `0 16px 30px rgba(37, 99, 235, 0.35)`,
                            transform: 'translateY(-5px)',
                          },
                        }}
                        onClick={() => scrollToSection(projectsRef)}
                      >
                        View Projects
                      </Button>

                      <Button 
                        variant="outlined"
                        size="large"
                        color="inherit"
                        sx={{ 
                          borderRadius: '50px',
                          px: 4,
                          py: 1.5,
                          borderColor: 'rgba(255,255,255,0.2)',
                          borderWidth: '2px',
                          fontWeight: 600,
                          fontSize: '1rem',
                          '&:hover': {
                            borderColor: 'rgba(255,255,255,0.8)',
                            backgroundColor: 'rgba(255,255,255,0.08)',
                            transform: 'translateY(-5px)',
                          }
                        }}
                        onClick={() => scrollToSection(aboutRef)}
                      >
                        About Me
                      </Button>
                    </Box>
                  </motion.div>
                </Box>
              </Grid>
            </Grid>
          </Container>

          {/* Scroll down indicator */}
          <Box
            component={motion.div}
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
            }}
            sx={{
              position: 'absolute',
              bottom: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
              textAlign: 'center',
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection(projectsRef)}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 1,
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 500,
              }}
            >
              Scroll Down
            </Typography>
            <KeyboardArrowDown 
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                fontSize: '2rem'
              }} 
            />
          </Box>
        </Box>
      </motion.div>
      
      {/* Projects and API Section - Modernized */}
      <Box 
        ref={projectsRef} 
        id="projects-section"
        sx={{ 
          padding: { xs: '60px 0', md: '120px 0' },
          background: '#fff',
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Typography 
              variant="h2" 
              align="center" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                marginBottom: 2,
                position: 'relative',
                display: 'inline-block',
                left: '50%',
                transform: 'translateX(-50%)',
                color: (theme) => theme.palette.text.primary,
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '60px',
                  height: '4px',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: (theme) => theme.palette.background.accent,
                  borderRadius: '2px'
                }
              }}
            >
              API Projects
            </Typography>
            <Typography 
              variant="h6" 
              align="center" 
              color="text.secondary"
              sx={{ 
                maxWidth: '700px',
                margin: '30px auto 60px',
                fontWeight: 400,
                lineHeight: 1.6
              }}
            >
              Explore my collection of API projects showcasing innovative integrations with popular services. 
              Each project demonstrates my expertise in creating dynamic, interactive applications.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* YouTube API Card */}
            <Grid item xs={12} md={12}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    border: '1px solid rgba(15, 23, 42, 0.05)',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)',
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      color: 'white', 
                      padding: 2.5,
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        background: 'radial-gradient(circle at top right, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
                      }}
                    />
                    <Code sx={{ fontSize: 30, mr: 1.5 }} />
                    <Typography variant="h5" fontWeight={600}>YouTube API</Typography>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, padding: 3 }}>
                    <Typography variant="body1" paragraph>
                      Integrated with YouTube Data API to create a dynamic video search and playback experience. 
                      Simply enter a search term to find and watch videos directly on the page.
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      <Divider sx={{ my: 2 }}>
                        <Chip label="Try It Now" color="primary" />
                      </Divider>
                      
                      <Box display="flex" justifyContent="center" mb={2}>
                        <TextField
                          variant="outlined"
                          placeholder="Search YouTube"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleSearch();
                            }
                          }}
                          sx={{ marginRight: '10px' }}
                          size="small"
                          fullWidth
                        />
                        <Button variant="contained" color="primary" onClick={handleSearch}>
                          Search
                        </Button>
                      </Box>
                      {error && (
                        <Typography variant="body2" color="error" align="center">
                          {error}
                        </Typography>
                      )}
                      {selectedVideoId && (
                        <Box display="flex" justifyContent="center" mb={2}>
                          <Box
                            sx={{
                              position: 'relative',
                              width: '100%',
                              paddingBottom: '56.25%', // 16:9 aspect ratio
                              height: 0,
                              overflow: 'hidden',
                              borderRadius: '8px',
                              boxShadow: '0 8px 16px rgba(15, 23, 42, 0.1)',
                            }}
                          >
                            <iframe
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 'none',
                              }}
                              src={`https://www.youtube.com/embed/${selectedVideoId}`}
                              title="YouTube video player"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </Box>
                        </Box>
                      )}
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                      <Chip label="YouTube API" size="small" color="primary" />
                      <Chip label="React" size="small" color="primary" variant="outlined" />
                      <Chip label="Material UI" size="small" color="primary" variant="outlined" />
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 2, backgroundColor: 'rgba(15, 23, 42, 0.02)', borderTop: '1px solid rgba(15, 23, 42, 0.05)' }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      fullWidth
                      component="a"
                      href="/youtube"
                      sx={{ 
                        borderRadius: '8px',
                        fontWeight: 600,
                        boxShadow: (theme) => `0 4px 10px rgba(37, 99, 235, 0.2)`,
                        '&:hover': {
                          boxShadow: (theme) => `0 6px 14px rgba(37, 99, 235, 0.3)`,
                        }
                      }}
                    >
                      View Full Demo
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>

            {/* Map Integration Card */}
            <Grid item xs={12} md={12}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    border: '1px solid rgba(15, 23, 42, 0.05)',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)',
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      background: (theme) => `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                      color: 'white', 
                      padding: 2.5,
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        background: 'radial-gradient(circle at top right, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
                      }}
                    />
                    <LocationOn sx={{ fontSize: 30, mr: 1.5 }} />
                    <Typography variant="h5" fontWeight={600}>Map Integration</Typography>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, padding: 3 }}>
                    <Typography variant="body1" paragraph>
                      This API service leverages the OpenStreetMap API, utilizing the Leaflet library to beautifully display interactive maps.
                    </Typography>
                    
                    <Typography variant="body1" paragraph>
                      Joseph and his wife, a truly diverse couple, have called various places around the world their home.
                    </Typography>
                    
                    <Box sx={{ height: 450, mb: 3, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 12px 24px rgba(15, 23, 42, 0.15)' }}>
                      <MapComponent compact={true} height="450px" />
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mt: 2 }}>
                      Fun Fact: Joseph speaks three languages!
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                      <Chip label="OpenStreetMap" size="small" color="secondary" />
                      <Chip label="Leaflet" size="small" color="secondary" variant="outlined" />
                      <Chip label="GeoJSON" size="small" color="secondary" variant="outlined" />
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 2, backgroundColor: 'rgba(15, 23, 42, 0.02)', borderTop: '1px solid rgba(15, 23, 42, 0.05)' }}>
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      fullWidth
                      sx={{ 
                        borderRadius: '8px',
                        fontWeight: 600,
                        boxShadow: (theme) => `0 4px 10px rgba(139, 92, 246, 0.2)`,
                        '&:hover': {
                          boxShadow: (theme) => `0 6px 14px rgba(139, 92, 246, 0.3)`,
                        }
                      }}
                      onClick={() => scrollToSection(projectsRef)}
                    >
                      Explore Map
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>

            {/* Country Explorer Card */}
            <Grid item xs={12} md={12}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    border: '1px solid rgba(15, 23, 42, 0.05)',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)',
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      background: (theme) => theme.palette.background.accent,
                      color: 'white', 
                      padding: 2.5,
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        background: 'radial-gradient(circle at top right, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
                      }}
                    />
                    <Public sx={{ fontSize: 30, mr: 1.5 }} />
                    <Typography variant="h5" fontWeight={600}>Country Explorer</Typography>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, padding: 3 }}>
                    <Typography variant="body1" paragraph>
                      Discover countries around the world with this interactive explorer.
                      Leverages the RestCountries API to provide comprehensive country information.
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      <TextField
                        variant="outlined"
                        placeholder="Search for a country..."
                        fullWidth
                        size="small"
                        sx={{ 
                          mb: 2,
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            const countryName = e.target.value;
                            fetchCountryByName(countryName);
                          }
                        }}
                      />
                      
                      {loadingCountry ? (
                        <Box sx={{ textAlign: 'center', py: 3 }}>
                          <Typography variant="body2" align="center">Loading country information...</Typography>
                        </Box>
                      ) : (
                        <Box sx={{ 
                          textAlign: 'center',
                          backgroundColor: 'rgba(15, 23, 42, 0.02)', 
                          borderRadius: '12px',
                          padding: 2,
                          border: '1px solid rgba(15, 23, 42, 0.05)'
                        }}>
                          {randomCountry && (
                            <>
                              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>{randomCountry.name.common}</Typography>
                              <img 
                                src={randomCountry.flags.svg} 
                                alt={`${randomCountry.name.common} Flag`} 
                                style={{ 
                                  width: '100%', 
                                  maxWidth: '120px', 
                                  height: 'auto', 
                                  marginBottom: '12px',
                                  borderRadius: '6px',
                                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.1)'
                                }} 
                              />
                              <Grid container spacing={1} sx={{ mt: 1 }}>
                                <Grid item xs={6}>
                                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>Capital:</Typography>
                                  <Typography variant="body2">{randomCountry.capital ? randomCountry.capital[0] : 'N/A'}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>Population:</Typography>
                                  <Typography variant="body2">{randomCountry.population.toLocaleString()}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>Region:</Typography>
                                  <Typography variant="body2">{randomCountry.region}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>Subregion:</Typography>
                                  <Typography variant="body2">{randomCountry.subregion}</Typography>
                                </Grid>
                              </Grid>
                            </>
                          )}
                          <Button 
                            variant="outlined" 
                            size="small" 
                            onClick={fetchRandomCountry} 
                            sx={{ mt: 2 }}
                          >
                            Random Country
                          </Button>
                        </Box>
                      )}
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                      <Chip label="RestCountries API" size="small" color="info" />
                      <Chip label="React" size="small" color="info" variant="outlined" />
                      <Chip label="Fetch API" size="small" color="info" variant="outlined" />
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 2, backgroundColor: 'rgba(15, 23, 42, 0.02)', borderTop: '1px solid rgba(15, 23, 42, 0.05)' }}>
                    <Button 
                      variant="contained" 
                      fullWidth
                      sx={{ 
                        borderRadius: '8px',
                        fontWeight: 600,
                        background: (theme) => theme.palette.background.accent,
                        boxShadow: '0 4px 10px rgba(15, 23, 42, 0.15)',
                        '&:hover': {
                          boxShadow: '0 6px 14px rgba(15, 23, 42, 0.25)',
                          background: (theme) => theme.palette.background.accent,
                        }
                      }}
                      onClick={fetchRandomCountry}
                    >
                      Discover New Country
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mt: 8,
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" color="text.primary" gutterBottom fontWeight={600}>
                AI & Blockchain Projects
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mb: 4 }}>
                Explore my advanced projects leveraging artificial intelligence and blockchain technology.
                From text summarization to image generation, these projects showcase cutting-edge capabilities.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  component="a"
                  href="/image-generator"
                  startIcon={<Memory />}
                  sx={{ 
                    borderRadius: '50px',
                    fontWeight: 600,
                    boxShadow: '0 4px 10px rgba(15, 23, 42, 0.15)',
                  }}
                >
                  AI Image Generator
                </Button>
                <Button 
                  variant="contained" 
                  color="primary"
                  component="a"
                  href="/voicetotext"
                  startIcon={<Memory />}
                  sx={{ 
                    borderRadius: '50px',
                    fontWeight: 600,
                    boxShadow: '0 4px 10px rgba(15, 23, 42, 0.15)',
                  }}
                >
                  Voice to Text
                </Button>
                <Button 
                  variant="contained" 
                  color="primary"
                  component="a"
                  href="/text-summarizer"
                  startIcon={<Memory />}
                  sx={{ 
                    borderRadius: '50px',
                    fontWeight: 600,
                    boxShadow: '0 4px 10px rgba(15, 23, 42, 0.15)',
                  }}
                >
                  Text Summarizer
                </Button>
                <Button 
                  variant="contained" 
                  color="secondary"
                  component="a"
                  href="/hedera"
                  startIcon={<Code />}
                  sx={{ 
                    borderRadius: '50px',
                    fontWeight: 600,
                    boxShadow: '0 4px 10px rgba(15, 23, 42, 0.15)',
                  }}
                >
                  Hedera Blockchain
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
      
      {/* About Section - Modernized */}
      <Box 
        ref={aboutRef} 
        id="about-section"
        sx={{ 
          padding: { xs: '60px 0', md: '120px 0' },
          background: 'linear-gradient(135deg, #f1f5f9 0%, #f8fafc 100%)',
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Typography 
              variant="h2" 
              align="center" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                marginBottom: 6,
                position: 'relative',
                display: 'inline-block',
                left: '50%',
                transform: 'translateX(-50%)',
                color: (theme) => theme.palette.text.primary,
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '60px',
                  height: '4px',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: (theme) => theme.palette.background.accent,
                  borderRadius: '2px'
                }
              }}
            >
              About Me
            </Typography>
          </motion.div>

          <Card 
            sx={{ 
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(15, 23, 42, 0.1)',
              border: '1px solid rgba(15, 23, 42, 0.05)',
            }}
          >
            <Grid container>
              <Grid item xs={12} md={5}>
                <Box 
                  sx={{ 
                    position: 'relative',
                    height: '100%',
                    minHeight: { xs: '300px', md: '100%' },
                    background: (theme) => theme.palette.background.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 3,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <Avatar
                      src={JosephImg}
                      alt="Joseph Cabusas"
                      sx={{
                        width: { xs: 200, md: 240 },
                        height: { xs: 200, md: 240 },
                        border: '4px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                      }}
                    />
                  </motion.div>

                  {/* Contact information overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: 'rgba(15, 23, 42, 0.7)',
                      backdropFilter: 'blur(10px)',
                      padding: 2,
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Stack spacing={1}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Email fontSize="small" sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                        <Typography variant="body2" color="rgba(255, 255, 255, 0.9)" fontWeight={500}>
                          <Link href="mailto:jdcabusas201@gmail.com" color="inherit" underline="hover">
                            jdcabusas201@gmail.com
                          </Link>
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <LinkedIn fontSize="small" sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                        <Typography variant="body2" color="rgba(255, 255, 255, 0.9)" fontWeight={500}>
                          <Link href="https://www.linkedin.com/in/josephcabusas/" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
                            linkedin.com/in/josephcabusas
                          </Link>
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={7}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Box sx={{ p: 5 }}>
                    <Typography variant="h4" gutterBottom fontWeight={700} color="text.primary">
                      My Journey
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.primary' }}>
                      I'm a software engineer with a rich multicultural background. Having spent part of my childhood in Venezuela 
                      and eight years in the Philippines where I attended university, I bring diverse life experiences and 
                      perspectives to my work.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.primary' }}>
                      My expertise spans software design, DevOps practices, and team leadership, with significant contributions 
                      to software development teams at leading global companies including Lockheed Martin, Kapsch TrafficCom, 
                      and ASRC Federal.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.primary' }}>
                      When I'm not coding, I enjoy martial arts, playing guitar, singing, and spending quality time with my family.
                      My faith in Jesus Christ drives my dedication to excellence and service in everything I do.
                    </Typography>
                    
                    <Box sx={{ mt: 4 }}>
                      <Typography variant="h5" gutterBottom fontWeight={600} color="text.primary">
                        Skills
                      </Typography>
                      
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Chip label="Software Architecture" color="primary" sx={{ fontWeight: 500 }} />
                        <Chip label="DevOps Practices" color="primary" sx={{ fontWeight: 500 }} />
                        <Chip label="Cloud Infrastructure" color="primary" sx={{ fontWeight: 500 }} />
                        <Chip label="Microservices" color="primary" sx={{ fontWeight: 500 }} />
                        <Chip label="API Development" color="primary" sx={{ fontWeight: 500 }} />
                        <Chip label="CI/CD Pipelines" color="primary" sx={{ fontWeight: 500 }} />
                        <Chip label="Team Leadership" color="primary" sx={{ fontWeight: 500 }} />
                        <Chip label="Front-end Development" color="primary" sx={{ fontWeight: 500 }} />
                        <Chip label="Security Compliance" color="primary" sx={{ fontWeight: 500 }} />
                        <Chip label="Containerization" color="primary" sx={{ fontWeight: 500 }} />
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Card>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button
                variant="contained"
                size="large"
                component="a"
                href="/resume"
                startIcon={<Article />}
                sx={{ 
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: (theme) => `0 10px 20px rgba(37, 99, 235, 0.2)`,
                  '&:hover': {
                    boxShadow: (theme) => `0 15px 30px rgba(37, 99, 235, 0.3)`,
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                Download Resume
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Footer */}
      <Box 
        sx={{ 
          backgroundColor: 'background.dark',
          color: 'text.light',
          py: 4, 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                Joseph Cabusas
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Lead Software Engineer specializing in software design, DevOps, and team leadership.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Stack direction="row" spacing={1} sx={{ mb: 1, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                <IconButton 
                  component="a" 
                  href="https://www.linkedin.com/in/josephcabusas/" 
                  target="_blank"
                  sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton 
                  component="a" 
                  href="mailto:jdcabusas201@gmail.com"
                  sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  <Email />
                </IconButton>
                <IconButton 
                  component="a" 
                  href="https://github.com/jdcabusas" 
                  target="_blank"
                  sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  <GitHub />
                </IconButton>
              </Stack>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                © {new Date().getFullYear()} Joseph Cabusas. All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Landing;
