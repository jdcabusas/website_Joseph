import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { LinkedIn, Email, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';
import JosephImg from './Joseph_image.jpg'; // Import profile image

const LandingHero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1E1E2F 0%, #2A2A5A 100%)',
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
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        sx={{
          position: 'absolute',
          width: '70vh',
          height: '70vh',
          left: '10%',
          top: '15%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(30,30,47,0) 70%)',
          filter: 'blur(40px)',
          zIndex: 1
        }}
      />
      <Box 
        component={motion.div}
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1],
        }} 
        transition={{ 
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        sx={{
          position: 'absolute',
          width: '50vh',
          height: '50vh',
          right: '10%',
          bottom: '10%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(106,90,205,0.15) 0%, rgba(30,30,47,0) 70%)',
          filter: 'blur(40px)',
          zIndex: 1
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          {/* Image */}
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
                  width: { xs: '250px', md: '320px' },
                  height: { xs: '250px', md: '320px' },
                  objectFit: 'cover',
                  borderRadius: '20px',
                  border: '4px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  filter: 'brightness(1.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
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
                  color="primary.light"
                  sx={{ 
                    mb: 1, 
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    letterSpacing: 3,
                    textTransform: 'uppercase'
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
                  variant="h2" 
                  component="h1"
                  sx={{ 
                    mb: 3, 
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.2
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
                  variant="h5" 
                  sx={{ 
                    mb: 3,
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.8)'
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
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.7,
                    fontSize: '1rem',
                    maxWidth: '600px'
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
                    gap: 3, 
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
                      borderColor: 'rgba(255,255,255,0.3)',
                      px: 2,
                      '&:hover': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255,255,255,0.1)'
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
                      borderColor: 'rgba(255,255,255,0.3)',
                      px: 2,
                      '&:hover': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255,255,255,0.1)'
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
                      borderColor: 'rgba(255,255,255,0.3)',
                      px: 2,
                      '&:hover': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255,255,255,0.1)'
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
                    gap: 2,
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
                      fontWeight: 500,
                      fontSize: '1rem',
                      boxShadow: '0 10px 20px rgba(63, 81, 181, 0.3)',
                      '&:hover': {
                        boxShadow: '0 15px 30px rgba(63, 81, 181, 0.4)',
                      },
                    }}
                    onClick={() => {
                      const element = document.getElementById('project-section');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
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
                      borderColor: 'rgba(255,255,255,0.3)',
                      fontWeight: 500,
                      fontSize: '1rem',
                      '&:hover': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                    onClick={() => {
                      const element = document.getElementById('about-section');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
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
          textAlign: 'center'
        }}
      >
        <Typography 
          variant="body2" 
          sx={{ 
            mb: 1,
            color: 'rgba(255,255,255,0.7)',
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
  );
};

export default LandingHero;