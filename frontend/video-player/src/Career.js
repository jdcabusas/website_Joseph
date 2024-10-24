// src/Career.js
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import Navbar from './Navbar'; // Import the Navbar component

const Career = () => {
  return (
    <div>
      {/* Include the Navbar here */}
      <Navbar />

      {/* Career Outline Section */}
      <Box sx={{ padding: '50px 0', backgroundColor: '#eceff1' }}>
        <Container>
          <Typography variant="h3" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#263238', textAlign: 'center', marginBottom: '40px' }}>
            Career Outline
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px' }}>
                <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238', fontWeight: 'bold', marginBottom: '20px' }}>
                  Software Engineer/Technical Lead
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a', fontSize: '1.2rem', marginBottom: '10px' }}>
                  Lockheed Martin
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', lineHeight: '1.6', marginBottom: '10px' }}>
                  <strong>March 2022 - Present</strong>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', marginTop: '20px' }}>
                <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238', fontWeight: 'bold', marginBottom: '20px' }}>
                  Real Time Software Engineer
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a', fontSize: '1.2rem', marginBottom: '10px' }}>
                  Kapsch TrafficCom North America
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', lineHeight: '1.6', marginBottom: '10px' }}>
                  <strong>July 2021 - March 2022</strong>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', marginTop: '20px' }}>
                <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238', fontWeight: 'bold', marginBottom: '20px' }}>
                  Software Engineer
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a', fontSize: '1.2rem', marginBottom: '10px' }}>
                  ASRC Federal
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', lineHeight: '1.6', marginBottom: '10px' }}>
                  <strong>June 2020 - July 2021</strong>
                </Typography>
              </Paper>
            </Grid>

            {/* Education Section */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', marginTop: '20px' }}>
                <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238', fontWeight: 'bold', marginBottom: '20px' }}>
                  Education
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a', fontSize: '1.2rem', marginBottom: '10px' }}>
                  B.S. in Computer Engineering
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', lineHeight: '1.6', marginBottom: '10px' }}>
                  <strong>University of San Carlos</strong>
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', lineHeight: '1.6', marginBottom: '10px' }}>
                  <strong>October 2012 - April 2018, Cebu City, Philippines</strong>
                </Typography>
              </Paper>
            </Grid>

            {/* Other Work Experience Section */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', marginTop: '20px' }}>
                <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238', fontWeight: 'bold', marginBottom: '20px' }}>
                  Other Work Experience
                </Typography>



                <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a', fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px' }}>
                  Spanish Customer Service Rep
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', lineHeight: '1.6', marginBottom: '10px' }}>
                  Ocean Home Health
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', lineHeight: '1.6', marginBottom: '10px' }}>
                  <strong>May 2018 - Feb 2020</strong>
                </Typography>
              </Paper>
            </Grid>

            {/* Additional Information Section */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', marginTop: '20px' }}>
                <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238', fontWeight: 'bold', marginBottom: '20px' }}>
                  Additional Information
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', lineHeight: '1.6', marginBottom: '10px' }}>
                  - Active SECRET Clearance
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', lineHeight: '1.6', marginBottom: '10px' }}>
                  - Fluent in Spanish
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Career;
