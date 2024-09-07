import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import { HashLink } from 'react-router-hash-link';

// Import your images
import backgroundImage from '../assets/img/portfolio_bg.png';
import kiaShowroom from '../assets/img/kia1_webimage.webp';
import hardwareTrading from '../assets/img/hhys_webimage1.webp';
import luxuryLiving from '../assets/img/apartment_webimage1.webp';
import healthcareCenter from '../assets/img/hospital/hos1.png';
import transformingMobility from '../assets/img/ip5_webimage.webp';
import spicingProduction from "../assets/img/ip3_webimage.webp";
import preservingHeritage from "../assets/img/apartment_webimage2.webp";
import evTata from "../assets/img/tata1_webimage.webp";

// Import your divider and separator images
import textDivider from '../assets/img/portfolio_text_divider.png';
import textSeparator from '../assets/img/portfolio_text_separator.png';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1920,
    },
  },
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
  { image: kiaShowroom, description: "Kerala's largest Kia showroom and workshop by Incheon Motors, featuring India's largest EV charging station." },
  
  { image: hardwareTrading, description: "Revolutionising hardware trading with scalable electrical solutions for HHYS Inframart."},
  
  { image: luxuryLiving, description: "Luxury living redefined through reliable electrical innovations with RDS Legacy Apartments." },
  
  { image: healthcareCenter, description:"Empowering healthcare with cutting-edge electrical infrastructure for Kerala's First Nuclear Medicine Center." },
  
  { image: transformingMobility, description: "Transforming mat manufacturing with advanced electrical upgrades for Travancore Cocotuft." },
  
  { image: spicingProduction, description: " Spicing up production with enhanced electrical infrastructure for Eastern Condiments" },
  
  { image: preservingHeritage, description: "Preserving heritage with electrifying solutions at Chungath Group's luxury resort, Napier Heritage." },
  
  { image: evTata, description: " Driving Kerala forward with TATA Motors' first exclusive EV showroom with Luxon Motors pvt Ltd" },
];

const headlines = [
  "Proven Track Record of Success", "24/7 Support and Emergency Services", "Cutting-Edge Technology Integration",
  "Commitment to Safety and Sustainability", "Proactive Maintenance for Reliability", "Unmatched Technical Expertise",
  "Seamless Project Execution","Innovative Solutions", "Customer-Centric Approach", "Comprehensive Compliance and Certification"
];

const CircularIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  width: '40px',
  height: '40px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  margin: '0 10px', // Add margin to create space between buttons
}));

const PortfolioSection = () => {
  const [cardIndex, setCardIndex] = useState(2);
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const isMediumScreen = useMediaQuery('(max-width:1280px)');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const visibleCards = isSmallScreen ? 1 : (isMediumScreen ? 2 : 3);

  const cardWidth = 330;
  const cardHeight = 413;
  const imageHeight = 315;
  const textHeight = 98;
  const cardSpacing = 20;
  const partialCardWidth = 50;
  const borderRadius = '15px'; 

  const handleCardNav = (direction) => {
    if (direction === 'next') {
      setCardIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
    } else {
      setCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      handleCardNav('next');
    } else if (isRightSwipe) {
      handleCardNav('prev');
    }
  };

  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const headlineInterval = setInterval(() => {
      setHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 5000);

    return () => clearInterval(headlineInterval);
  }, []);

  useEffect(() => {
    const carousel = document.querySelector('.portfolio-card-carousel');
    if (carousel) {
      carousel.addEventListener('touchstart', handleTouchStart);
      carousel.addEventListener('touchmove', handleTouchMove);
      carousel.addEventListener('touchend', handleTouchEnd);

      return () => {
        carousel.removeEventListener('touchstart', handleTouchStart);
        carousel.removeEventListener('touchmove', handleTouchMove);
        carousel.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="portfolio-container" sx={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        padding: '40px',
        color: 'white',
        marginTop: '90px'
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
          {!isSmallScreen && (
            <Box sx={{marginLeft: '120px', display: 'flex'}}> {/* Added display: 'flex' */}
              <CircularIconButton onClick={() => handleCardNav('prev')}>
                <ArrowBackIosNewIcon />
              </CircularIconButton>
              <CircularIconButton onClick={() => handleCardNav('next')}>
                <ArrowForwardIosIcon />
              </CircularIconButton>
            </Box>
          )}
        </Box>

        <Box className="portfolio-card-carousel" sx={{ 
          position: 'relative',
          width: '99vw',
          margin: '65px 0',
          overflow: 'hidden',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        >
          <Box sx={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(calc(${-cardIndex * (cardWidth + cardSpacing)}px + ${(window.innerWidth - cardWidth) / 2}px))`,
          }}>
            {cards.map((card, index) => (
              <HashLink key={index} smooth to={`/project-sectorial#${index}`} >
              <Box sx={{
                width: cardWidth,
                height: cardHeight,
                flexShrink: 0,
                marginRight: `${cardSpacing}px`,
              }}>
                <Box sx={{
                  border: '1px solid white',
                  borderRadius: borderRadius,
                  overflow: 'hidden',
                  height: '100%',
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
              </Box>
              </HashLink>
            ))}
          </Box>
        </Box> 

        {isSmallScreen && (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <CircularIconButton onClick={() => handleCardNav('prev')}>
              <ArrowBackIosNewIcon />
            </CircularIconButton>
            <CircularIconButton onClick={() => handleCardNav('next')}>
              <ArrowForwardIosIcon />
            </CircularIconButton>
          </Box>
        )}   
   
        <Box className="portfolio-headline-carousel" sx={{ 
          position: 'relative', 
          marginTop: '50px',
          overflow: 'hidden',
          height: '50px',
          width: '99vw',
          left: '50%',
          transform: 'translateX(-50%)',
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
            display: 'flex', 
            alignItems: 'center',
            height: '100%',
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
            
        <style jsx="true" global="true">{`
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