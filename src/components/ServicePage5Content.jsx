import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from '../components/ServicePage3dCarousel';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles.css';

// Importing all the images
import titleDivider from "../assets/img/service_text_divider.png";
import img1 from "../assets/img/service4/service4_carousel1_img1.png";
import img2 from "../assets/img/service4/service4_carousel1_img2.png";
import img3 from "../assets/img/service4/service4_carousel1_img3.png";
import img4 from "../assets/img/service4/service4_carousel1_img4.png";
import img5 from "../assets/img/service4/service4_carousel1_img5.png";
import img6 from "../assets/img/service4/service4_carousel1_img6.png";
import img7 from "../assets/img/service4/service4_carousel2_img1.png";
import img8 from "../assets/img/service4/service4_carousel2_img2.png";
import img9 from "../assets/img/service4/service4_carousel2_img3.png";
import img10 from "../assets/img/service4/service4_carousel2_img4.png";
import img11 from "../assets/img/service4/service4_carousel2_img5.png";
import img12 from "../assets/img/service4/service4_carousel2_img6.png";
import img13 from "../assets/img/service4/service4_carousel3_img1.png";
import img14 from "../assets/img/service4/service4_carousel3_img2.png";


const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

const sections = [
  {
    heading: "Preventive Maintenance",
    description: "We offer proactive maintenance programs to keep your electrical systems and panel boards running smoothly. Our services include regular inspections, cleaning, testing, and calibration of equipment to prevent breakdowns and extend the lifespan of your electrical infrastructure.",
    images: [img1, img2, img3, img4, img5, img6]
  },
  {
    heading: "Corrective Maintenance",
    description: "Our team of experts is available 24/7 to respond to electrical emergencies and provide prompt repair services. We diagnose and resolve issues quickly, minimising downtime and ensuring the safety of your premises.",
    images: [img7, img8, img9, img10, img11, img12]
  },
  
  {
    heading: "Annual Maintenance Contracts (AMCs)",
    description: "Our comprehensive AMCs provide peace of mind by covering all your electrical maintenance needs. With regular inspections, preventive maintenance, and priority emergency response, we keep your electrical systems operating at peak performance.",
    images: [img13, img14]
  }
];

const MainComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: '20px' }}>
        {sections.map((section, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: index % 2 === 0 ? 'row-reverse' : 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '80px',
            }}
          >
            <Box
              sx={{
                flex: 1,
                margin: '40px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                maxWidth: '40%',
                minWidth: '300px',
                textAlign: 'left',
              }}
            >
              <Typography variant="h6" gutterBottom sx={{  }}>
                {section.heading}
              </Typography>
              <Box component="img" src={titleDivider} alt="Divider" sx={{ width: '15%', height: '2px', marginBottom: '20px' }} />
              <Typography variant="string" gutterBottom>
                {section.description}
              </Typography>
              {section.bullets && (
                <List sx={{ listStyleType: 'disc', pl: 2 }}>
                  {section.bullets.map((bullet, i) => (
                    <ListItem key={i} disablePadding sx={{ display: 'list-item' }}>
                      <ListItemText primary={bullet} />
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '50%' }}>
              <Carousel images={section.images} />
            </Box>
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default MainComponent;
