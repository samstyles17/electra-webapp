import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { keyframes } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import DividerImage from '../assets/img/client_divider.png';

import Client1 from '../assets/img/client1.png';
import Client4 from '../assets/img/client4.png';
import Client6 from '../assets/img/client6.png';
import Client8 from '../assets/img/client8.png';
import Client13 from '../assets/img/client13.png';
import Client14 from '../assets/img/client14.png';
import Client15 from '../assets/img/client15.png';
import Client16 from '../assets/img/client16.png';

const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, Arial, sans-serif',
    },
  });

const clients = [
    Client1,  Client4,  Client6, Client8,
    Client13, Client14, Client15, Client16,
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
          margin: '90px' 
        }}
      >
        <Box
          sx={{
            width: '1193px',
            height: '116px',
            backgroundColor: '#fff',
            borderRadius: '25px',
            border: '0.5px solid grey',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#000', marginRight: '20px' }}>
          <Box component="img" src={DividerImage} alt="Divider" sx={{ marginRight: '10px', height: 'auto' }} />
          <Typography variant="h6">OUR CLIENTS</Typography>
        </Box>
        <Box sx={{ overflow: 'hidden', flex: 1, display: 'flex', alignItems: 'center', height: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              animation: `${scroll} 10s linear infinite`, // 25% faster
              whiteSpace: 'nowrap',
            }}
          >
            {clients.concat(clients).map((client, index) => (
              <Box key={index} component="img" src={client} alt={`Client ${index + 1}`} sx={{ margin: '0 10px', height: '60px', width: 'auto' }} />
            ))}
          </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
    );
  };
  
  export default ClientsCarousel;
