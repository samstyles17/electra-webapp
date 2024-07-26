// LandingPage.js
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Grid, Box, Button, Typography, TextField } from '@mui/material';
import { useTheme } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import mobileImage from '../assets/img/connect_mobile_image.png';
import backgroundImage from '../assets/img/connect_bg.png';
import rightImage from '../assets/img/connect_image.png'; // Ensure you have the additional image in the img folder
import vectorImage from '../assets/img/connect_vector.png'; // Ensure you have the vector image in the img folder
import arrowIcon from '../assets/img/connect_button_arrow.png';
import '../styles.css';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});


const LandingPage = () => {
  // const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '16px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1131px',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '8px',
          position: 'relative',
          padding: '16px',
        }}
      >
        <Grid container spacing={2} alignItems="center">
        {isMobile && (
            <Grid item xs={12}>
              <img src={mobileImage} alt="Mobile view" style={{ width: '100%', borderRadius: '8px', marginBottom:'20px'}} />
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <Box position="relative">
              <img src={vectorImage} alt="Vector" style={{ position: 'absolute', top: '-10px', left: '0' }} />
              {!isMobile && (
                <Typography variant="h4" sx={{ fontSize: '43px' }}>
                Let’s <span style={{ color: '#FF7F45' }}>connect and</span> <br /><span style={{ color: '#337AB7' }}>power up</span>
              </Typography>
              )}
              {isMobile && (
                <Typography variant="h4" className="montserrat-regular" sx={{ fontSize: '43px' }}>
                Let’s <span style={{ color: '#FF7F45' }}>connect <br />and</span> <span style={{ color: '#337AB7' }}>power up</span>
              </Typography>
              )}
              {!isMobile && (
                <Typography variant="body1" className="montserrat-regular" sx={{ fontSize: '15px', mt: 2 }}>
                  Connect with us to transform your ideas into reality and give <br /> your projects the vibrant power they deserve
                </Typography>
              )}

              {isMobile && (
                <Typography variant="body1" className="montserrat-regular" sx={{ fontSize: '15px', mt: 2 }}>
                  Connect with us to transform your ideas into reality and give your projects the vibrant power they deserve
                </Typography>
              )}
              
              <Link to="/enquire#contactInfo">
              {!isMobile && (
                <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FF7F45',
                  borderRadius: '50px',
                  padding: '12px 32px',
                  mt: 2,
                  textTransform: 'none',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: '#FF7F45',
                  },
                }}
              >
                CONTACT US
                <img src={arrowIcon} alt="Arrow" style={{ marginLeft: '8px' }} />
              </Button>
              )}
              </Link>
              
              
              <Link to="/enquire#contactInfo">
              {isMobile && (
                <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FF7F45',
                  borderRadius: '50px',
                  padding: '12px 32px',
                  mt: 4,
                  textTransform: 'none',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: '#FF7F45',
                  },
                }}
              >
                CONTACT US
                <img src={arrowIcon} alt="Arrow" style={{ marginLeft: '8px' }} />
              </Button>
              )}
              </Link>
                            
            </Box>
          </Grid>
          {!isMobile && (
            <Grid item xs={12} md={6} order={2}>
              <img src={rightImage} alt="Team working" style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
