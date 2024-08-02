import React, { useEffect } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { keyframes } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DividerImage from '../assets/img/client_divider.png';

// Import all client images
import Client1 from '../assets/img/cl1.png';
import Client2 from '../assets/img/cl2.png';
import Client3 from '../assets/img/cl3.png';
import Client4 from '../assets/img/cl4.png';
import Client5 from '../assets/img/cl5.png';
import Client6 from '../assets/img/cl6.png';
import Client7 from '../assets/img/cl7.png';
import Client8 from '../assets/img/cl8.png';
import Client9 from '../assets/img/cl9.png';
import Client10 from '../assets/img/cl10.png';
import Client11 from '../assets/img/cl11.png';
import Client12 from '../assets/img/cl12.png';
import Client13 from '../assets/img/cl14.png';
import Client15 from '../assets/img/cl16.png';
import Client16 from '../assets/img/cl17.png';
import Client17 from '../assets/img/cl18.png';
import Client18 from '../assets/img/cl19.png';
import Client19 from '../assets/img/cl20.png';
import Client20 from '../assets/img/cl21.png';
import Client21 from '../assets/img/cl22.png';
import Client22 from '../assets/img/cl23.png';
const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
  },
});

// Create an array of client image objects
const clients = [
  { src: Client1, alt: 'Client 1' },
  { src: Client2, alt: 'Client 2' },
  { src: Client3, alt: 'Client 3' },
  { src: Client4, alt: 'Client 4' },
  { src: Client5, alt: 'Client 5' },
  { src: Client6, alt: 'Client 6' },
  { src: Client7, alt: 'Client 7' },
  { src: Client8, alt: 'Client 8' },
  { src: Client9, alt: 'Client 9' },
  { src: Client10, alt: 'Client 10' },
  { src: Client11, alt: 'Client 11' },
  { src: Client12, alt: 'Client 12' },
  { src: Client13, alt: 'Client 13' },
  { src: Client15, alt: 'Client 15' },
  { src: Client16, alt: 'Client 16' },
  { src: Client17, alt: 'Client 17' },
  { src: Client18, alt: 'Client 18' },
  { src: Client19, alt: 'Client 19' },
  { src: Client20, alt: 'Client 20' },
  { src: Client21, alt: 'Client 21' },
  { src: Client22, alt: 'Client 22' },
];

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const ClientsCarousel = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  useEffect(() => {
    console.log('Clients array:', clients);
    
    // Log each client's src and alt
    clients.forEach((client, index) => {
      console.log(`Client ${index + 1}:`, client.src, client.alt);
    });
    
    // Check if any client's src is undefined or null
    const invalidClients = clients.filter(client => !client.src);
    if (invalidClients.length > 0) {
      console.warn('Some clients have invalid src:', invalidClients);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: isMobile ? '20px' : '90px', 
          flexDirection: isMobile ? 'column' : 'row',
          borderRadius: isMobile ? '0' : '25px',
          border: isMobile ? 'none' : '0.1px solid grey',
          padding: isMobile ? '0' : '30px 40px',
          backgroundColor: isMobile ? 'transparent' : '#fff',
          width: isMobile ? '100%' : 'auto',
        }}
      >
        {isMobile ? (
          <>
            <Box 
              component="img" 
              src={DividerImage} 
              alt="Divider" 
              sx={{ 
                marginBottom: '20px', 
                height: 'auto', 
                alignSelf: 'center' 
              }} 
            />
            <Typography 
              variant="h6" 
              sx={{ 
                textAlign: 'center', 
                marginBottom: '20px', 
                fontSize: '18px' 
              }}
            >
              OUR CLIENTS
            </Typography>
            <Box sx={{ width: '100%', overflow: 'hidden' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  animation: `${scroll} 30s linear infinite`,
                  whiteSpace: 'nowrap',
                  width: '200%', // to allow smooth scrolling
                }}
              >
                {[...clients, ...clients].map((client, index) => (
                  <Box key={index} component="img" src={client.src} alt={client.alt} sx={{ margin: '0 10px', height: '60px', width: 'auto' }} />
                ))}
              </Box>
            </Box>
            <Box 
              sx={{ 
                width: '100%', 
                borderTop: '1px dashed grey', 
                marginTop: '20px' 
              }} 
            />
          </>
        ) : (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', color: '#000', marginRight: '20px' }}>
              <Box component="img" src={DividerImage} alt="Divider" sx={{ marginRight: '10px', height: 'auto' }} />
              <Typography variant="h6">OUR CLIENTS</Typography>
            </Box>
            <Box sx={{ overflow: 'hidden', flex: 1, display: 'flex', alignItems: 'center', height: '100%' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  animation: `${scroll} 30s linear infinite`,
                  whiteSpace: 'nowrap',
                }}
              >
                {[...clients, ...clients].map((client, index) => (
                  <Box key={index} component="img" src={client.src} alt={client.alt} sx={{ margin: '0 10px', height: '60px', width: 'auto' }} />
                ))}
              </Box>
            </Box>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default ClientsCarousel;