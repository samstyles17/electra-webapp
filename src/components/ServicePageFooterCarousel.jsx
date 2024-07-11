import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ArrowForward } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel'; // Use a carousel library or implement your own
import dividerImage from '../assets/img/service_footer_vector.png'; // Path to the divider image

// Import your carousel images
import img1 from '../assets/img/service_footer_img1.png';
import img2 from '../assets/img/service_footer_img2.png';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

const carouselImages = [img1, img2];

const PortfolioComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          width: '1155px',
          height: '359px',
          backgroundColor: '#333',
          borderRadius: '20px',
          overflow: 'hidden',
          justifyContent: 'center'
        }}
      >
        {/* Carousel Section */}
        <Box
          sx={{
            width: '570px',
            height: '328px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            margin: '16px',
          }}
        >
          <Carousel
            indicators={false}
            interval={3000}
            navButtonsAlwaysInvisible={true}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {carouselImages.map((image, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={image}
                  alt={`Carousel ${index}`}
                  style={{
                    width: '242px',
                    height: '328px',
                    margin: '0 10px', // Adjust spacing between images
                    borderRadius: '15px',
                  }}
                />
              </Box>
            ))}
          </Carousel>
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            padding: '40px 30px',
            color: '#fff',
            textAlign: 'left',
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            HAVE A LOOK AT
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'orange' }}>
            OUR PORTFOLIO
          </Typography>
          <img src={dividerImage} alt="Divider" style={{ width: '50%', marginBottom: '20px' }} />
          <Typography variant="body1" gutterBottom>
            Explore our diverse portfolio of high-tension electrical contracting projects, showcasing innovation, safety, and sustainability. Our dedicated team delivers tailored solutions that exceed client expectations, driving progress and fostering sustainable development.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'orange',
              width: '275px',
              height: '44px',
              marginTop: '20px',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            EXPLORE PORTFOLIO <ArrowForward sx={{ marginLeft: '10px' }} />
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PortfolioComponent;
