import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Container, List, ListItem, ListItemText, Typography, Paper, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, pink } from '@mui/material/colors';

// Custom icon components
const JosephIcon = () => (
  <img
    src={require('./marker-icon.png')}
    alt="Joseph's marker icon"
    style={{ width: '20px', height: '20px', marginRight: '8px' }}
  />
);

const WifeIcon = () => (
  <img
    src={require('./location.png')}
    alt="Wife's location icon"
    style={{ width: '20px', height: '20px', marginRight: '8px' }}
  />
);

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h6: {
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  palette: {
    josephList: {
      main: blue[500],
    },
    wifeList: {
      main: pink[500],
    },
  },
});

const MapComponent = () => {
  const [selectedCoordinates, setSelectedCoordinates] = useState(null); // State to track selected coordinates

  // Places Joseph and his wife have lived
  const josephPlaces = [
    { name: 'Emerson, NJ', coordinates: [40.976, -74.021] },
    { name: 'Judibana, Venezuela', coordinates: [10.232, -70.635] },
    { name: 'Cliffside Park, NJ', coordinates: [40.821, -73.987] },
    { name: 'Cebu City, Philippines', coordinates: [10.315, 123.885] },
    { name: 'Moorestown, NJ', coordinates: [39.966, -74.948] },
    { name: 'Moana, South Australia', coordinates: [-35.196, 138.470] },
  ];

  const wifePlaces = [
    { name: 'Hyderabad, India', coordinates: [17.385, 78.486] },
    { name: 'Brampton, Ontario, Canada', coordinates: [43.7315, -79.7624] },
    { name: 'Barrie, Ontario, Canada', coordinates: [44.38, -79.69] },
    { name: 'Trenton, Ontario, Canada', coordinates: [44.105, -77.576] },
    { name: 'Hawkesbury, Ontario, Canada', coordinates: [45.607, -74.604] },
    { name: 'Moana, South Australia', coordinates: [-35.196, 138.470] },
  ];

  const josephIcon = L.icon({
    iconUrl: require('./marker-icon.png'), // Path to Joseph's marker icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const wifeIcon = L.icon({
    iconUrl: require('./location.png'), // Path to Wife's marker icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const MapFlyTo = ({ coordinates }) => {
    const map = useMap();
    useEffect(() => {
      if (coordinates) {
        map.flyTo(coordinates, 13);
      }
    }, [coordinates, map]);
    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box display="flex" height="500px">
          {/* Sidebar with Places */}
          <Paper style={{ width: '300px', padding: '10px', overflowY: 'auto' }}>
            <Box display="flex" alignItems="center">
              <JosephIcon />
              <Typography variant="h6" color="josephList.main" gutterBottom>
                Joseph's Journey
              </Typography>
            </Box>
            <List>
              {josephPlaces.map((place, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => setSelectedCoordinates(place.coordinates)}
                  sx={{
                    backgroundColor: blue[50],
                    marginBottom: '10px',
                    borderRadius: '8px',
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                    '&:hover': {
                      backgroundColor: blue[200],
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  <ListItemText primary={place.name} sx={{ color: blue[900], fontWeight: '500' }} />
                </ListItem>
              ))}
            </List>
            <Box display="flex" alignItems="center" marginTop={2}>
              <WifeIcon />
              <Typography variant="h6" color="wifeList.main" gutterBottom>
                His Wife's' Journey
              </Typography>
            </Box>
            <List>
              {wifePlaces.map((place, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => setSelectedCoordinates(place.coordinates)}
                  sx={{
                    backgroundColor: pink[50],
                    marginBottom: '10px',
                    borderRadius: '8px',
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                    '&:hover': {
                      backgroundColor: pink[200],
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  <ListItemText primary={place.name} sx={{ color: pink[900], fontWeight: '500' }} />
                </ListItem>
              ))}
            </List>
          </Paper>
          {/* Map Component */}
          <Box flex="1">
            <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              {josephPlaces.map((place, index) => (
                <Marker key={index} position={place.coordinates} icon={josephIcon}>
                  <Popup>{place.name}</Popup>
                </Marker>
              ))}
              {wifePlaces.map((place, index) => (
                <Marker key={index} position={place.coordinates} icon={wifeIcon}>
                  <Popup>{place.name}</Popup>
                </Marker>
              ))}
              <MapFlyTo coordinates={selectedCoordinates} />
            </MapContainer>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default MapComponent;
