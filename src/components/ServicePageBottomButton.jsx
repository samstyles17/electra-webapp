import React from 'react';
import { Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ButtonComponent from '../components/ServicePageButton'; // Assuming you have a button component
import dashedDivider from '../assets/img/service_dashed_divider.png'; 

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

const ExploreServicesComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '40px 20px',
        }}
      >
        <img src={dashedDivider} alt="Dashed Divider" style={{ width: '100%', marginBottom: '20px' }} />
        
        <Typography variant="h5" component="div" sx={{  marginBottom: '20px' }}>
          <span style={{ color: 'orange' }}>Explore our</span> all services
        </Typography>

         <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <ButtonComponent/>
        </Box>

        <img src={dashedDivider} alt="Dashed Divider" style={{ width: '100%', marginBottom: '40px' , marginTop:'20px'}} />
        
       
      </Box>
    </ThemeProvider>
  );
};

export default ExploreServicesComponent;
