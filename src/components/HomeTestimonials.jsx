import React, { useState } from 'react';
import { Box, Typography, Avatar, Card, CardContent, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import images
import mapWithAvatars from '../assets/img/home_testimonial_map.png';
import mrShaji from '../assets/img/home_testimonial_profile_pic_1.png';
import mrReji from '../assets/img/home_testimonial_profile_pic_2.png';
import mrYaseem from '../assets/img/home_testimonial_profile_pic_3.png';
import cardDivider from  '../assets/img/home_testimonial_card_divider.png'

// Import CSS
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

const PowerfulInsights = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Mr. Shaji",
      position: "Project Manager, Luxon Motos Pvt. Ltd.",
      image: mrShaji,
      text: "\"Electra Power Engineering's team displayed remarkable professionalism, technical expertise, and a deep understanding of our vision for the EV showroom. Their commitment to delivering a world-class electrical solution within an ambitious timeline was truly impressive. We are extremely satisfied with their work and highly recommend their services.\""
    },
    {
      name: "Mr. Reji",
      position: "VP Operations, Incheon Motors Pvt. Ltd",
      image: mrReji,
      text: "\"Electra Power Engineering's team surpassed our expectations in every aspect of this project. Their expertise, dedication to quality, and ability to meet challenging timelines were truly remarkable. The charging station they installed has become a major attraction for our customers, and we are confident that it will play a key role in driving EV adoption in Kerala.\""
    },
    {
        name: "Mr. Yaseem",
        position: "GM, HHYS Inframart.",
        image: mrYaseem,
        text: "\"Electra Power Engineering proved to be a reliable and efficient partner throughout the entire project. Their expertise in electrical engineering, coupled with their commitment to quality and timely delivery, exceeded our expectations. We are highly satisfied with the results and confident that our upgraded electrical infrastructure will support our growth for years to come.\""
    }
  ];

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{ marginLeft: '95px', display: 'flex', padding: 4, alignItems: 'center' }}>
      <Box sx={{ 
        position: 'relative', 
        flex: 1, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <img 
          src={mapWithAvatars} 
          alt="World Map with Avatars" 
          style={{ 
            width: '80%', // Adjust this value to make the image smaller
            height: 'auto',
            maxHeight: '100%',
            objectFit: 'contain'
          }} 
        />
      </Box>
      
      <Box sx={{ flex: 1 }}>
      <Box 
          sx={{ 
            display: 'inline-block', 
            backgroundColor: '#E6F0FF', // Very light shade of blue
            borderRadius: '20px', 
            padding: '4px 12px',
            marginBottom: 1
          }}
        >
          <Typography 
            variant="subtitle2" 
            sx={{ color: '#0000FF' }} 
          >
            ELECTRA POWER ENGINEERING COMMUNITY
          </Typography>
        </Box>
        <Typography variant="h2" component="h1" sx={{ marginTop: '30px'}} >
          Powerful <span style={{ color: '#FF6B00' }}>Insights</span>
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 3, color: '#555', marginTop: '20px'}} className="montserrat-regular">
          Get an insight into the valuable and impactful thoughts direct from our clients.
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography  className="montserrat-regular">REVIEWS & TESTIMONIALS</Typography>
          <Box>
            <IconButton size="small" onClick={handlePrev}><ArrowBackIosNewIcon /></IconButton>
            <IconButton size="small" onClick={handleNext}><ArrowForwardIosIcon /></IconButton>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', overflow: 'hidden' }}>
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              elevation={3} 
              sx={{ 
                borderRadius: 2, 
                minWidth: '75%', 
                marginRight: 2,
                transform: `translateX(${-100 * currentTestimonial}%)`,
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <CardContent sx={{ display: 'flex', gap: 2 }}>
                <Avatar src={testimonial.image} sx={{ width: 34, height: 34 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography  className="montserrat-regular">{testimonial.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#555', }} className="montserrat-regular">{testimonial.position}</Typography>
                  <img src={cardDivider} alt="Divider" style={{ width: '100%', height: 'auto', margin: '8px 0' }} />
                  <Typography variant="body2" className="montserrat-regular">{testimonial.text}</Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default PowerfulInsights;