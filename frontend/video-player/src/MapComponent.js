import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Container, List, ListItem, ListItemText, Typography, Paper, Box, Divider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, pink } from '@mui/material/colors';

// Fix Leaflet icon issue - essential for markers to display properly
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix the default icon issue in leaflet with React
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

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

// Add some necessary CSS to make sure the map displays properly
const mapContainerStyle = {
  height: "100%", 
  width: "100%",
  zIndex: 1, // Ensure map is properly layered
  position: "relative" // Important for proper rendering
};

const MapComponent = ({ height = "500px", compact = false }) => {
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

  // Compact mode for preview in cards
  if (compact) {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ 
          height: height, 
          position: "relative", 
          width: "100%", 
          display: "flex", 
          flexDirection: { xs: "column", sm: "row" },
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "8px"
        }}>
          {/* Compact Lists */}
          <Box 
            sx={{ 
              width: { xs: "100%", sm: "40%" }, 
              height: { xs: "50%", sm: "100%" },
              overflowY: "auto",
              bgcolor: "background.paper",
              borderRight: { xs: "none", sm: "1px solid rgba(0,0,0,0.1)" },
              borderBottom: { xs: "1px solid rgba(0,0,0,0.1)", sm: "none" },
              p: 1
            }}
          >
            {/* Joseph's Places */}
            <Box sx={{ mb: 1 }}>
              <Typography variant="subtitle2" color="josephList.main" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', fontSize: '0.8rem' }}>
                <JosephIcon /> Joseph's Places
              </Typography>
              <List dense disablePadding>
                {josephPlaces.map((place, index) => (
                  <ListItem 
                    button 
                    key={index} 
                    onClick={() => setSelectedCoordinates(place.coordinates)}
                    sx={{
                      py: 0.5,
                      borderRadius: 1,
                      mb: 0.5,
                      bgcolor: blue[50],
                      '&:hover': { bgcolor: blue[100] }
                    }}
                  >
                    <ListItemText 
                      primary={place.name}
                      primaryTypographyProps={{ 
                        variant: 'caption', 
                        sx: { fontWeight: 500, fontSize: '0.75rem' } 
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            
            {/* Wife's Places */}
            <Box>
              <Typography variant="subtitle2" color="wifeList.main" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', fontSize: '0.8rem' }}>
                <WifeIcon /> Wife's Places
              </Typography>
              <List dense disablePadding>
                {wifePlaces.map((place, index) => (
                  <ListItem 
                    button 
                    key={index} 
                    onClick={() => setSelectedCoordinates(place.coordinates)}
                    sx={{
                      py: 0.5,
                      borderRadius: 1,
                      mb: 0.5,
                      bgcolor: pink[50],
                      '&:hover': { bgcolor: pink[100] }
                    }}
                  >
                    <ListItemText 
                      primary={place.name}
                      primaryTypographyProps={{ 
                        variant: 'caption', 
                        sx: { fontWeight: 500, fontSize: '0.75rem' } 
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          
          {/* Map */}
          <Box sx={{ 
            width: { xs: "100%", sm: "60%" }, 
            height: { xs: "50%", sm: "100%" }
          }}>
            <MapContainer 
              center={[20, 0]} 
              zoom={1} 
              style={mapContainerStyle}
              scrollWheelZoom={true}
              zoomControl={true}
            >
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
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box display="flex" height={height}>
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
                His Wife's Journey
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
          <Box flex="1" position="relative">
            <MapContainer center={[20, 0]} zoom={2} style={mapContainerStyle}>
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