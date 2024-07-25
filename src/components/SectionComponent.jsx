import React from 'react';
import { Grid, Box, Typography, Divider, useMediaQuery, useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
// import '@fontsource/montserrat';

const customTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

const fadeInFromTopLeft = keyframes`
  from {
    opacity: 0;
    transform: translate(-10px, -10px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;


function SectionComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', marginBottom: '100px', backgroundColor: '#fff', color: '#333' }}>
        <Grid container spacing={isMobile ? 2 : 3} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Box sx={{ marginRight: isMobile ? 0 : '40px', textAlign: 'left', marginBottom: '40px', marginLeft: isMobile ? 0 : '60px' }}>
              <Typography variant="h3" sx={{ color: '#3a3a3a', transition: 'color 0.3s ease-in-out' }}>
                Driving Change,
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: '#3a3a3a',
                  marginTop: '0px',
                  marginBottom: '40px',
                  animation: `${fadeInFromTopLeft} 5s ease-in-out 1s forwards`
                }}
              >
                Powering Possibilities
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
                We are catalysts for change. By pushing the boundaries of what's possible and harnessing the power of imagination, we not only drive change but also empower endless possibilities for our clients and partners.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: isMobile ? '-10px' : '35px', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
              <Box sx={{ textAlign: 'left', margin: isMobile ? '0 10px 10px' : '0 25px', flex: isMobile ? '1 0 45%' : 'none', padding: isMobile ? '10px' : '0', backgroundColor: isMobile ? '#f5f5f5' : 'transparent', borderRadius: isMobile ? '10px' : '0' }}>
                <Typography variant="h5" sx={{ color: '#007bff', margin: 0, fontWeight: 500 }}>
                  12+
                </Typography>
                <Typography variant="body2" sx={{ fontSize: isMobile ? '12px' : '16px', margin: 0, color: '#333' }}>
                  Years of Experience
                </Typography>
              </Box>
              {!isMobile && <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />}
              <Box sx={{ textAlign: 'left', margin: isMobile ? '0 -4px 10px' : '0 25px', flex: isMobile ? '1 0 45%' : 'none', padding: isMobile ? '10px' : '0', backgroundColor: isMobile ? '#f5f5f5' : 'transparent', borderRadius: isMobile ? '10px' : '0' }}>
                <Typography variant="h5" sx={{ color: '#ff6600', margin: 0, fontWeight: 500 }}>
                  300+
                </Typography>
                <Typography variant="body2" sx={{ fontSize: isMobile ? '12px' : '16px', margin: 0, color: '#333' }}>
                  Projects Delivered
                </Typography>
              </Box>
              {!isMobile && <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />}
              <Box sx={{ textAlign: 'left', margin: isMobile ? '0 5px 10px' : '0 25px', flex: isMobile ? '1 0 100%' : 'none', padding: isMobile ? '10px' : '0', backgroundColor: isMobile ? '#f5f5f5' : 'transparent', borderRadius: isMobile ? '10px' : '0' }}>
                <Typography variant="h5" sx={{ color: '#007bff', margin: 0, fontWeight: 500 }}>
                  250+
                </Typography>
                <Typography variant="body2" sx={{ fontSize: isMobile ? '12px' : '16px', margin: 0, color: '#333' }}>
                  Happy Clients
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ marginBottom: '50px', marginLeft: isMobile ? '0' : '60px', marginRight: isMobile ? '0' : '10px', maxWidth: '600px' }}>
              <Box sx={{ backgroundColor: isMobile ? '#f5f5f5' : '#ffffff', padding: '30px', borderRadius: '15px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', width: '100%', textAlign: 'left' }}>
                <Typography variant="h6" sx={{ color: '#ff6600', marginBottom: '10px', marginTop: '10px' }}>
                  <Box component="span" sx={{ backgroundColor: '#ff5733', width: '10px', height: '10px', borderRadius: '15px', display: 'inline-block', marginRight: '10px' }} />
                  OUR VISION
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.9rem', lineHeight: 2.5, color: '#3a3a3a' }}>
                  We envision leading the electrical industry with innovation and excellence. Rooted in trust and transparency, we aim to deliver tailored solutions that surpass expectations, empowering industries and communities with safe, reliable, and sustainable electrical solutions.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginLeft: isMobile ? '0' : '60px', marginTop: '10px', marginRight: isMobile ? '0' : '10px', maxWidth: '600px' }}>
              <Box sx={{ backgroundColor: isMobile ? '#f5f5f5' : '#ffffff', padding: '30px', borderRadius: '15px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', width: '100%', textAlign: 'left' }}>
                <Typography variant="h6" sx={{ color: '#007bff', marginBottom: '10px', marginTop: '10px' }}>
                  <Box component="span" sx={{ backgroundColor: '#007bff', width: '10px', height: '10px', borderRadius: '15px', display: 'inline-block', marginRight: '10px' }} />
                  OUR MISSION
                </Typography>
                <Box variant="body2" sx={{ 
                  fontSize: '1rem', 
                  lineHeight: 2.2, 
                  color: '#333',
                  margin: 0,
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                }}>
                  <ul>
                    <li className='mission-bullet-point'>Delivering exceptional high-tension electrical contracting services.</li>
                    <li className='mission-bullet-point'>Ensuring safety and sustainability with clear communication in all projects.</li>
                    <li className='mission-bullet-point'>Exceeding customer expectations through continuous improvement.</li>
                    <li className='mission-bullet-point'>Powering progress and enhancing community life with reliable electrical solutions.</li>
                    <li className='mission-bullet-point'>Pioneering cutting-edge technologies and methodologies.</li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default SectionComponent;
