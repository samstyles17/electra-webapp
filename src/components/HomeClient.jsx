import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { keyframes } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DividerImage from '../assets/img/client_divider.png';

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
import Client14 from '../assets/img/cl15.png';
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

const clients = [
 Client1, Client2,Client3,Client4,Client5,Client6,Client7,
 Client8, Client9, Client10, Client11, Client12, Client13, Client14,
 Client15, Client16, Client17, Client18, Client19, Client20, Client21, Client22
];

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const ClientsCarousel = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
                  animation: `${scroll} 10s linear infinite`,
                  whiteSpace: 'nowrap',
                  width: '200%', // to allow smooth scrolling
                }}
              >
                {clients.concat(clients).map((client, index) => (
                  <Box key={index} component="img" src={client} alt={`Client ${index + 1}`} sx={{ margin: '0 10px', height: '60px', width: 'auto' }} />
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
                  animation: `${scroll} 10s linear infinite`,
                  whiteSpace: 'nowrap',
                }}
              >
                {clients.concat(clients).map((client, index) => (
                  <Box key={index} component="img" src={client} alt={`Client ${index + 1}`} sx={{ margin: '0 10px', height: '60px', width: 'auto' }} />
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
