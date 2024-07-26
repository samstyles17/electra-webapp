import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ArrowForward } from '@mui/icons-material';
import { keyframes } from '@mui/system';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import dividerImage from '../assets/img/service_footer_vector.png';

// Import your carousel images
import img1 from '../assets/img/portfolio_card1.png';
import img2 from '../assets/img/portfolio_card2.png';
import img3 from '../assets/img/portfolio_card3.png';
import img4 from '../assets/img/portfolio_card4.png';
import img5 from '../assets/img/portfolio_card5.png';
import img6 from '../assets/img/portfolio_card6.png';
import img7 from '../assets/img/portfolio_card7.png';
import img8 from '../assets/img/portfolio_card8.png';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;


const carouselImages = [img1, img2, img3, img4, img5, img6, img7, img8];

const PortfolioComponent = () => {
  // console.log("Carousel Images:", carouselImages); // Log the images
  const scrollRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const animationDuration = scrollWidth / 50; // Adjust speed here
      scrollContainer.style.animationDuration = `${animationDuration}s`;
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: '40px 0', // Top and bottom margin
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '1155px',
            height: '359px',
            backgroundColor: '#333',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          {/* Carousel Section */}
          <Box
        sx={{
          width: '570px',
          height: '328px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          overflow: 'hidden',
          margin: '16px',
          backgroundColor: '#fff',
          borderRadius: '15px',
        }}
      >
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            animation: `${scroll} linear infinite`,
            '&:hover': {
              animationPlayState: 'paused',
            },
          }}
        >
          {[...carouselImages, ...carouselImages].map((image, index) => (
            <Box 
              key={index} 
              sx={{ 
                flexShrink: 0,
                width: '242px',
                height: '328px',
                marginRight: '10px',
              }}
            >
              <img
                src={image}
                alt={`Carousel ${index}`}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '15px',
                  objectFit: 'cover',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

          {/* Text Section */}
          <Box
            sx={{
              flex: 1,
              padding: '40px 30px',
              color: '#fff',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box component="img" src={dividerImage} alt="Divider" sx={{ width: '15%', height: '2px', marginBottom: '20px' }} />
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              HAVE A LOOK AT
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#FF6B00' }}>
              OUR PORTFOLIO
            </Typography>
            <Typography variant="body1" gutterBottom>
              Explore our diverse portfolio of high-tension electrical contracting projects, showcasing innovation, safety, and sustainability. Our dedicated team delivers tailored solutions that exceed client expectations, driving progress and fostering sustainable development.
            </Typography>
            <Link to="/projectsectorial">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FF6B00',
                  width: '275px',
                  height: '44px',
                  marginTop: '20px',
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '30px',
                }}
              >
                EXPLORE PORTFOLIO <ArrowForward sx={{ marginLeft: '10px' }} />
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PortfolioComponent;
