// src/Landing.js
import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid, IconButton, TextField, Paper, Link } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material'; // Importing Icons for arrows
import Navbar from './Navbar'; // Import the Navbar component
import JosephImg from './Joseph_image.jpg'; // Import your image
import MapComponent from './MapComponent'; // Import the MapComponent
import NetlifyDeployments from './NetlifyDeployments';
function Landing() {
// Create references for each section
const computerEngRef = useRef(null);
const youtubeApiRef = useRef(null);
const aboutRef = useRef(null);
const [query, setQuery] = useState('');
const [selectedVideoId, setSelectedVideoId] = useState(null);
const [error, setError] = useState(null);
const [randomCountry, setRandomCountry] = useState(null);
const [loadingCountry, setLoadingCountry] = useState(true);
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
   <Navbar scrollToSection={scrollToSection} computerEngRef={computerEngRef} youtubeApiRef={youtubeApiRef} aboutRef={aboutRef} />
   {/* Computer Engineering Section */}
   <Box ref={computerEngRef} sx={{ padding: '100px 0', backgroundColor: '#eceff1' }}>
   <Container>
      <Grid container spacing={4} alignItems="center">
         <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center" alignItems="center">
               <img src={JosephImg} alt="Joseph Cabusas" style={{ width: '80%', maxWidth: '300px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }} />
            </Box>
         </Grid>
         <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px' }}>
            <Typography variant="h3" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#263238' }} gutterBottom>
            Joseph Cabusas
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a', fontSize: '1.5rem', marginBottom: '20px' }}>
            Software Engineer
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', lineHeight: '1.6', fontSize: '0.8rem', marginTop: '20px' }}>
            Joseph is a highly skilled Software Engineer with expertise in software design, DevOps, and guiding teams to successfully deliver complex projects across the Defense and Commercial sectors. He has made significant contributions to software development teams at leading global companies, including Lockheed Martin, Kapsch TrafficCom, and ASRC Federal.
            </Typography>
            {/* Contact Details Section */}
            <Box sx={{ marginTop: '10px' }}>
            <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238', fontWeight: 'bold' }}>
            Contact
            </Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
               <img src={require('./linkedin.png')} alt="LinkedIn" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
               <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', fontSize: '0.8rem' }}>
               <a href="https://www.linkedin.com/in/josephcabusas/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#37474f' }}>
               Joseph Cabusas
               </a>
               </Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
               <img src={require('./gmail.png')} alt="Gmail" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
               <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', fontSize: '0.8rem' }}>
               <a href="mailto:jdcabusas201@gmail.com" style={{ textDecoration: 'none', color: '#37474f' }}>
               jdcabusas201@gmail.com
               </a>
               </Typography>
            </Box>
            </Paper>
         </Grid>
      </Grid>
   </Container>
   </Box>
   {/* YouTube API and other APIs Section with horizontal scrolling */}
   <Box ref={youtubeApiRef} sx={{ padding: '50px 0', backgroundColor: '#e0e0e0' }}>
   <Container>
      <Typography
      variant="h4"
      align="center"
      gutterBottom
      sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238' }}
      >
      API Services
      </Typography>
      <Typography
      variant="body1"
      align="center"
      gutterBottom
      sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a', marginBottom: '20px' }}
      >
      Joseph is passionate about crafting and maintaining APIs for microservices, and he enjoys exploring the creative possibilities of popular open-source APIs.
      <br />
       <br />
      <strong>Fun Fact:</strong> As a backend, DevOps, and site reliability engineer, Joseph took a leap into frontend development with this webapp—one of his first projects—showcasing his talent for crafting dynamic user experiences using cutting-edge technologies!
      <br />
       <br />
      Want to see how it all works? Click the Source Code button to explore the entire project!
      </Typography>
      <Box display="flex" justifyContent="center" mb={4}>
         <Button variant="contained" color="primary" href="https://github.com/jdcabusas/YoutubeAPI_LandingPage/tree/master" target="_blank">
         Source Code
         </Button>
      </Box>
      {/* Carousel Navigation */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
         <IconButton onClick={() =>
            scrollCarousel('left')}>
            <ArrowBack />
         </IconButton>
         <Box
         id="api-carousel-container"
         sx={{
         display: 'flex',
         overflowX: 'hidden',
         scrollSnapType: 'x mandatory',
         border: '2px solid #3f51b5', // Add a border
         borderRadius: '10px', // Optional: round the corners
         padding: '0px', // Optional: add padding inside the border
         backgroundColor: 'white' // Optional: set background color
         }}
         >
         {/* Netlify Deployments Section */}
         <Box sx={{ minWidth: '100%', scrollSnapAlign: 'start' }}>
         <Box display="flex" justifyContent="center" mb={4}>
            <NetlifyDeployments />
         </Box>
      </Box>
      <Box sx={{padding: 4, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', borderRadius: '8px',minWidth: '100%', scrollSnapAlign: 'start' }}>
      {/* YouTube API */}
      <Typography
      variant="h5"
      align="center"
      gutterBottom
      sx={{
      fontWeight: '600', // Slightly bolder weight for a modern look
      color: '#3f51b5', // Use a primary color for emphasis
      letterSpacing: '0.5px', // Adds a little space between letters for a modern feel
      fontFamily: 'Roboto, sans-serif', // Ensure consistent font family
      }}
      >
      YouTube API
      </Typography>
      <Typography
      variant="body1" // Change to body1 for a more modern and readable style
      align="center"
      sx={{
      color: '#4a4a4a', // Slightly darker color for better contrast
      marginBottom: '20px',
      lineHeight: '1.6', // Improved line height for readability
      fontFamily: 'Roboto, sans-serif', // Consistent font family
      maxWidth: '600px', // Set a max width for better text layout
      margin: '0 auto', // Center align the text block
      padding: '0 16px', // Add padding for better spacing on smaller screens
      }}
      >
      This API integrates with the YouTube Data API to effortlessly fetch videos from YouTube. Simply enter your search query in the search bar, and the first result will be automatically played for you.
      </Typography>
      {/*<Box mb={2} display="flex" justifyContent="center">
         <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cRCsv_KbqdE?"
            title="YouTube Short"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
      </Box>*/}
      <Box display="flex" justifyContent="center" mb={2}>
         <TextField
            variant="outlined"
    label="Search YouTube"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        handleSearch(); // Call handleSearch when Enter is pressed
      }
    }}
    sx={{ marginRight: '10px' }}
         />
         <Button variant="contained" color="primary" onClick={handleSearch}>
         Search
         </Button>
      </Box>
      {error && (
      <Typography variant="body1" color="error" align="center">
         {error}
      </Typography>
      )}
      {selectedVideoId && (
      <Box display="flex" justifyContent="center" mb={2}>
         <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedVideoId}?`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
      </Box>
      )}
      </Box>
      <Box sx={{ minWidth: '100%', scrollSnapAlign: 'start' }}>
      {/* OpenStreetMap Section */}
      <Typography
      variant="h5"
      align="center"
      gutterBottom
      sx={{
      fontWeight: '600', // Slightly bolder weight for a modern look
      color: '#3f51b5', // Use a primary color for emphasis
      letterSpacing: '0.5px', // Adds a little space between letters for a modern feel
      fontFamily: 'Roboto, sans-serif', // Ensure consistent font family
      }}
      >
      Places We’ve Called Home
      </Typography>
      <Typography
      variant="body1" // Change to body1 for a more modern and readable style
      align="center"
      sx={{
      color: '#4a4a4a', // Slightly darker color for better contrast
      marginBottom: '20px',
      lineHeight: '1.6', // Improved line height for readability
      fontFamily: 'Roboto, sans-serif', // Consistent font family
      maxWidth: '600px', // Set a max width for better text layout
      margin: '0 auto', // Center align the text block
      padding: '0 16px', // Add padding for better spacing on smaller screens
      }}
      paragraph // This prop adds spacing between paragraphs
      >
      This API service leverages the OpenStreetMap API, utilizing the Leaflet library to beautifully display interactive maps.
      </Typography>
      <Typography
      variant="body1"
      align="center"
      sx={{
      color: '#4a4a4a', // Slightly darker color for better contrast
      marginBottom: '20px',
      lineHeight: '1.6', // Improved line height for readability
      fontFamily: 'Roboto, sans-serif', // Consistent font family
      maxWidth: '600px', // Set a max width for better text layout
      margin: '0 auto', // Center align the text block
      padding: '0 16px', // Add padding for better spacing on smaller screens
      }}
      paragraph
      >
      Joseph and his wife, a truly diverse couple, have called various places around the world their home.
      </Typography>
      <Typography
      variant="body1"
      align="center"
      sx={{
      color: '#4a4a4a', // Slightly darker color for better contrast
      marginBottom: '20px',
      lineHeight: '1.6', // Improved line height for readability
      fontFamily: 'Roboto, sans-serif', // Consistent font family
      maxWidth: '600px', // Set a max width for better text layout
      margin: '0 auto', // Center align the text block
      padding: '0 16px', // Add padding for better spacing on smaller screens
      }}
      paragraph
      >
      <strong>Fun Fact:</strong> Joseph speaks three languages!
      </Typography>
      <MapComponent />
      </Box>
      {/* Random Country Section */}
      <Box sx={{
      minWidth: '100%',
      scrollSnapAlign: 'start',
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
      }}>
      <Typography
      variant="h5"
      align="center"
      gutterBottom
      sx={{
      fontWeight: '600',
      color: '#3f51b5',
      letterSpacing: '0.5px',
      fontFamily: 'Roboto, sans-serif',
      }}
      >
      Country Discovery Hub
      </Typography>
      <Typography
      variant="body1"
      align="center"
      sx={{
      color: '#4a4a4a',
      marginBottom: '20px',
      lineHeight: '1.6',
      fontFamily: 'Roboto, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '0 16px',
      }}
      paragraph
      >
      This API unlocks a world of information and seamlessly connects to{' '}
      <Link href="https://restcountries.com/" target="_blank" rel="noopener noreferrer" sx={{ color: '#3f51b5', textDecoration: 'none' }}>
      RestCountries
      </Link>
      {' '}to retrieve comprehensive data on countries around the globe.
      </Typography>
      <Typography
      variant="body1"
      align="center"
      sx={{
      color: '#4a4a4a',
      marginBottom: '20px',
      lineHeight: '1.6',
      fontFamily: 'Roboto, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '0 16px',
      }}
      paragraph
      >
      Simply search for a country, and with a click, discover detailed insights about a randomly selected destination!
      </Typography>
      {/* Search Bar */}
      <TextField
         variant="outlined"
         placeholder="Search for a country..."
         onKeyDown={(e) =>
      {
      if (e.key === 'Enter') {
      const countryName = e.target.value;
      fetchCountryByName(countryName);
      }
      }}
      sx={{
      marginBottom: '20px',
      width: '300px',
      '& .MuiOutlinedInput-root': {
      '& fieldset': {
      borderColor: '#3f51b5',
      },
      '&:hover fieldset': {
      borderColor: '#3f51b5',
      },
      '&.Mui-focused fieldset': {
      borderColor: '#3f51b5',
      },
      },
      }}
      />
      {loadingCountry ? (
      <Typography variant="body1" align="center">Loading country information...</Typography>
      ) : (
      <Box display="flex" flexDirection="column" alignItems="center">
         {randomCountry && (
         <>
         <Typography variant="h6" sx={{ color: '#333', fontWeight: 'bold' }}>{randomCountry.name.common}</Typography>
         <Typography variant="body1" sx={{ color: '#555' }}>Capital: {randomCountry.capital ? randomCountry.capital[0] : 'N/A'}</Typography>
         <Typography variant="body1" sx={{ color: '#555' }}>Region: {randomCountry.region}</Typography>
         <Typography variant="body1" sx={{ color: '#555' }}>Subregion: {randomCountry.subregion}</Typography>
         <Typography variant="body1" sx={{ color: '#555' }}>Population: {randomCountry.population.toLocaleString()}</Typography>
         <Typography variant="body1" sx={{ color: '#555' }}>Area: {randomCountry.area.toLocaleString()} km²</Typography>
         <Typography variant="body1" sx={{ color: '#555' }}>Languages: {Object.values(randomCountry.languages || {}).join(', ')}</Typography>
         <Typography variant="body1" sx={{ color: '#555' }}>Currencies: {Object.values(randomCountry.currencies || {}).map(currency => currency.name).join(', ')}</Typography>
         <img src={randomCountry.flags.svg} alt={`${randomCountry.name.common} Flag`} style={{ width: '150px', marginTop: '10px' }} />
         </>
         )}
         <Button variant="contained" color="primary" onClick={fetchRandomCountry} sx={{ marginTop: '20px' }}>
         Generate New Country
         </Button>
      </Box>
      )}
      </Box>
      </Box>
      <IconButton onClick={() =>
         scrollCarousel('right')}>
         <ArrowForward />
      </IconButton>
      </Box>
   </Container>
   </Box>
   <Box ref={aboutRef}> {/* About Section */} </Box>
<Grid container spacing={4}>
  <Grid item xs={12}>
    <Paper elevation={3} sx={{ padding: '40px', backgroundColor: '#fff', borderRadius: '10px', marginBottom: '40px' }}>
      <Typography variant="h4" align="center" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', marginBottom: '20px' }}>
        About Me
      </Typography>
      <Typography variant="body1" align="center" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a', marginBottom: '20px' }}>
        Joseph Cabusas is a software engineer from the USA with a rich multicultural background. Having spent part of his childhood in Venezuela and eight years in the Philippines, where he attended university, he brings diverse life experiences to his work.
      </Typography>
      <Typography variant="body1" align="center" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a', marginBottom: '20px' }}>
        A devoted husband, Joseph enjoys martial arts, playing guitar, singing, and spending time with his brothers.
      </Typography>
      <Typography variant="body1" align="center" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a' }}>
        Driven by his faith in Jesus Christ, Joseph’s dedication to his family, career, and personal projects reflects his passion for excellence and service in all he does.
      </Typography>
    </Paper>
  </Grid>
</Grid>

</div>
);
}
export default Landing;