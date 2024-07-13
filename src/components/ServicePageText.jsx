import React from 'react';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#ffffff',
  margin: '20px auto', // Add margin to prevent overlapping
  [theme.breakpoints.up('md')]: {
    width: '941px',
    minHeight: '215px', // Changed to minHeight for flexibility
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    minHeight: '256px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: theme.spacing(2), // Reduce padding on mobile
  },
}));

const ServiceComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <StyledBox>
      <Typography
        variant="subtitle1"
        component="h2"
        sx={{
          textTransform: 'uppercase',
          mb: 2,
          fontFamily: 'Montserrat, sans-serif',
          textAlign: isMobile ? 'left' : 'center',
          color: '#666', // Make "OUR SERVICES" visible
          fontSize: isMobile ? '0.8rem' : '1rem', // Reduce font size on mobile
        }}
      >
        Our Services
      </Typography>
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        component="h1"
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          mb: 2,
          textAlign: isMobile ? 'left' : 'center',
          fontSize: isMobile ? '1.5rem' : '2.5rem', // Reduce font size on mobile
        }}
      >
        <span style={{ color: '#FF6B00' }}>Shaping</span>{' '}
        <span style={{ color: '#0080FF' }}>the world with</span>
      </Typography>
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        component="h1"
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          mb: 2,
          textAlign: isMobile ? 'left' : 'center',
          fontSize: isMobile ? '1.5rem' : '2.5rem', // Reduce font size on mobile
        }}
      >
        electrical expertise
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          textAlign: isMobile ? 'left' : 'center',
          fontSize: isMobile ? '0.9rem' : '1rem', // Reduce font size on mobile
        }}
      >
        We provide comprehensive electrical solutions, from custom turnkey projects to complex control systems. Our services
        include seamless installation, proactive maintenance, and efficient regulatory approvals, ensuring full compliance.
        We are your one-stop point for all electrical needs, delivering end-to-end excellence.
      </Typography>
    </StyledBox>
  );
};

export default ServiceComponent;