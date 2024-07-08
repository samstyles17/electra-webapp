import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

// Import your images
import backgroundImage from '../assets/img/portfolio_bg.png';
import kiaShowroom from '../assets/img/portfolio_card1.png';
import hardwareTrading from '../assets/img/portfolio_card2.png';
import luxuryLiving from '../assets/img/portfolio_card3.png';
import healthcareCenter from '../assets/img/portfolio_card4.png';
import transformingMobility from '../assets/img/portfolio_card5.png';

// Import your divider and separator images
import textDivider from '../assets/img/portfolio_text_divider.png';
import textSeparator from '../assets/img/portfolio_text_separator.png';
import { color } from 'framer-motion';


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
const cards = [
  { image: kiaShowroom, description: "Kia showroom and Incheon Motors featuring EV charging station" },
  { image: hardwareTrading, description: "Revolutionising hardware trading with scalable electrical solutions for HHYS Inframart" },
  { image: luxuryLiving, description: "Luxury living redefined through reliable electrical innovations with RDS Legacy Apartments" },
  { image: healthcareCenter, description: "Empowering healthcare with cutting-edge electrical infrastructure for Kerala's First Nuclear Medicine Center" },
  { image: transformingMobility, description: " Transforming mobility with advanced electrical solutions for Travancore electric vehicle charging station" },
];

const headlines = [
  "Proven Track Record of Success", "24/7 Support and Emergency Services", "Cutting-Edge Technology Integration",
  "Commitment to Safety and Sustainability", "Proactive Maintenance for Reliability", "Unmatched Technical Expertise",
  "Seamless Project Execution","Innovative Solutions", "Customer-Centric Approach", "Comprehensive Compliance and Certification"
];

const PortfolioSection = () => {
    const [cardIndex, setCardIndex] = useState(2);
    const isSmallScreen = useMediaQuery('(max-width:960px)');
    const isMediumScreen = useMediaQuery('(max-width:1280px)');
  
    const visibleCards = isSmallScreen ? 1 : (isMediumScreen ? 2 : 3);

    const cardWidth = 330; // Increased card width
    const cardHeight = 413;
    const imageHeight = 315;fix
    const textHeight = 98;
    const cardSpacing = 20; // Increased spacing between cards
    const partialCardWidth = 50; // Width of partially visible cards on each side
    const borderRadius = '15px'; 

    const handleCardNav = (direction) => {
      if (direction === 'next') {
        setCardIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 3));
      } else {
        setCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    };
    
    const carouselWidth = cardWidth * visibleCards + cardSpacing * (visibleCards - 1) + partialCardWidth * 2;
    
    const [headlineIndex, setHeadlineIndex] = useState(0);
  
    useEffect(() => {
      const headlineInterval = setInterval(() => {
        setHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
      }, 5000);
  
      return () => clearInterval(headlineInterval);
    }, []);
  
    
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box className="portfolio-container" sx={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        padding: '40px',
        color: 'white',
        marginTop: '50px'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src={textDivider} alt="divider" style={{ marginRight: '10px' }} />
        <Typography variant="h4" className="portfolio-heading">
          A PORTFOLIO OF <span style={{color: 'orange'}}>EXCELLENCE IN ACTION!</span>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{ flex: 1, marginRight: '20px' }}>
          We deliver comprehensive electrical solutions that encompass innovative design, seamless installation, robust liaisoning, and proactive maintenance. Our projects highlight our technical excellence, reliability, and adherence to the highest industry standards, ensuring safety and sustainability. Trust us to empower your industry with tailored, cutting-edge electrical solutions that surpass expectations.
        </Typography>
        <Box sx={{marginLeft: '120px'}}>
          <IconButton onClick={() => handleCardNav('prev')} sx={{ color: 'white' }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={() => handleCardNav('next')} sx={{ color: 'white' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
  
      <Box className="portfolio-card-carousel" sx={{ 
          position: 'relative',
          width: '100%',
          maxWidth: `${carouselWidth}px`,
          margin: '20px auto',
          overflow: 'hidden',
        }}>
          <Box sx={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(${-cardIndex * (cardWidth + cardSpacing) + partialCardWidth}px)`
          }}>
            {cards.map((card, index) => (
              <Box key={index} sx={{
                width: cardWidth,
                height: cardHeight,
                flexShrink: 0,
                marginRight: `${cardSpacing}px`,
                border: '1px solid white',
                borderRadius: borderRadius,
                overflow: 'hidden',
                display: 'grid',
                gridTemplateRows: `${imageHeight}px ${textHeight}px`,
              }}>
                <img 
                  src={card.image} 
                  alt={card.description}
                  style={{
                    width: '100%',
                    height: `${imageHeight}px`,
                    objectFit: 'cover',
                  }}
                />
                <Box sx={{ 
                  padding: '16px', 
                  height: `${textHeight}px`, 
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  color: 'black',
                }}>
                  <Typography variant="body2">{card.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        
        
        
        
        
        <Box className="portfolio-headline-carousel" sx={{ 
          position: 'relative', 
          marginTop: '100px',
          overflow: 'hidden',
          height: '50px',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            height: '1px',
            borderTop: '1px dashed white'
          },
          '&::before': { top: 0 },
          '&::after': { bottom: 0 }
        }}>
          <Box sx={{ 
            marginTop: '5px',
            marginBottom:'-5px',
            display: 'flex', 
            alignItems: 'center',
            animation: 'moveLeft 30s linear infinite',
            whiteSpace: 'nowrap'
          }}>
            {headlines.map((headline, index) => (
              <React.Fragment key={index}>
                <Typography sx={{ padding: '0 20px' }}>{headline}</Typography>
                <img src={textSeparator} alt="separator" style={{ width: '10px', height: '10px' }} />
              </React.Fragment>
            ))}
          </Box>
        </Box>
  
        <style jsx global>{`
          @keyframes moveLeft {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </Box>
    </ThemeProvider>
  );
};

export default PortfolioSection;