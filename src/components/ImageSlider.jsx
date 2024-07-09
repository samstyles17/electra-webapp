import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, IconButton, Divider } from '@mui/material';
import { ChevronLeft, ChevronRight} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
// Import your images
import designImage from '../assets/img/sliding_image1.png';
import installationImage from '../assets/img/sliding_image2.png';
import panelImage from '../assets/img/sliding_image3.png';
import auditImage from '../assets/img/sliding_image4.png';
import testingImage from '../assets/img/sliding_image5.png';
import maintenanceImage from '../assets/img/sliding_image6.png';
import dividerImage from "../assets/img/slider_divider.png";

const cards = [
  { id: 1, title: 'Design & Consulting', image: designImage, description: 'More About' },
  { id: 2, title: 'Installation And Commissioning', image: installationImage, description: 'More About' },
  { id: 3, title: 'Panel Board And Control Systems', image: panelImage, description: 'More About' },
  { id: 4, title: 'Audit And Compliance', image: auditImage, description: 'More About' },
  { id: 5, title: 'Testing And Inspection', image: testingImage, description: 'More About' },
  { id: 6, title: 'Maintenance And Support', image: maintenanceImage, description: 'More About' },
];


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

const CarouselCard = ({ card, isFullyVisible, isPartiallyVisible}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      sx={{ 
        width: 327,
        height: 369,
        position: 'relative',
        overflow: 'hidden',
        opacity: isFullyVisible ? 1 : 0.5,
        transition: 'all 0.3s',
        borderRadius: '16px',
        '&:hover': isFullyVisible ? {
          '& .MuiCardMedia-root': {
            transform: 'scale(1.1)',
          },
          '& .MuiCardContent-root': {
            height: '50%',
            background: 'rgba(0,0,0,0.7)',
          }
        } : {}
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        component="img"
        height="369"
        image={card.image}
        alt={card.title}
        sx={{
          transition: 'transform 0.3s',
        }}
      />
      <CardContent
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: isHovered && isFullyVisible ? '50%%' : '80px',
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          transition: 'all 0.3s',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '16px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: '1px solid grey',
              bgcolor: 'grey',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            {card.id}
          </Box>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>{card.title}</Typography>
        </Box>
        {isHovered && isFullyVisible && (
          <>
            <Divider sx={{ bgcolor: 'white',width:'80%', ml:5 }} />
            <Box sx={{ display: 'flex', alignItems: 'center',ml:5, mb:6, paddingTop:2 }}>
              <Typography variant="body1">{card.description}</Typography>
              <ChevronRight fontSize="small" sx={{ ml: 1 }} />
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 327; // Width of each card
  const cardSpacing = 18; // Spacing between cards
  const visibleCards = 3; // Number of fully visible cards

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - visibleCards));
  };

  const showLeftArrow = currentIndex > 0;
  const showRightArrow = currentIndex < cards.length - visibleCards;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto',
        overflow: 'hidden'
      }}>
        <Box sx={{ 
          display: 'flex', 
          transition: 'transform 0.3s ease-in-out',
          transform: `translateX(-${currentIndex * (cardWidth + cardSpacing)}px)`,
          gap: `${cardSpacing}px`
        }}>
          {cards.map((card, index) => (
            <Box key={card.id} sx={{ flexShrink: 0, width: cardWidth }}>
              <CarouselCard 
                card={card} 
                isFullyVisible={index >= currentIndex && index < currentIndex + visibleCards}
                isPartiallyVisible={index === currentIndex + visibleCards}
              />
            </Box>
          ))}
        </Box>
        {showLeftArrow && (
          <IconButton 
            onClick={handlePrev}
            sx={{ 
              position: 'absolute', 
              left: 10, 
              top: '50%', 
              transform: 'translateY(-50%)',
              zIndex: 1,
              bgcolor: 'black',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.8)' },
              width: 40,
              height: 40,
            }}
          >
            <ChevronLeft />
          </IconButton>
        )}
        {showRightArrow && (
          <IconButton 
            onClick={handleNext}
            sx={{ 
              position: 'absolute', 
              right: 10, 
              top: '50%', 
              transform: 'translateY(-50%)',
              zIndex: 1,
              bgcolor: 'black',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.8)' },
              width: 40,
              height: 40,
            }}
          >
            <ChevronRight />
          </IconButton>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Carousel;