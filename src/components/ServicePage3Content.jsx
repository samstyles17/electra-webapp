import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from '../components/ServicePage3dCarousel';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles.css';

// Importing all the images
import titleDivider from "../assets/img/service_text_divider.png";
import img1 from "../assets/img/service3/service3_carousel1_img1.png";
import img2 from "../assets/img/service3/service3_carousel1_img2.png";
import img3 from  "../assets/img/service3/service3_carousel2_img1.png";
import img4 from  "../assets/img/service3/service3_carousel2_img2.png";
import img5 from  "../assets/img/service3/service3_carousel3_img1.png";
import img6 from  "../assets/img/service3/service3_carousel3_img2.png";
import img7 from  "../assets/img/service3/service3_carousel3_img3.png";
import img8 from  "../assets/img/service3/service3_carousel4_img1.png";
import img9 from  "../assets/img/service3/service3_carousel4_img2.png";
import img10 from  "../assets/img/service3/service3_carousel4_img3.png";
import img11 from  "../assets/img/service3/service3_carousel4_img4.png";

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

const sections = [
  {
    heading: "Design and Engineering",
    description: "Our experienced engineers design custom panel boards and control systems tailored to your specific needs. We incorporate the latest automation and control technologies, ensuring efficient and reliable operation of your electrical systems.",
    images: [img1, img2]
  },
  {
    heading: "Fabrication and Assembly",
    description: "We fabricate high-quality panel boards using premium materials and components. Our skilled technicians meticulously assemble and test each panel to ensure it meets stringent quality standards.",
    images: [img3, img4]
  },
  {
    heading: "Installation and Commissioning",
    description: "We provide professional installation and commissioning services for panel boards and control systems, ensuring seamless integration with your existing infrastructure and minimising disruptions to your operations.",
    images: [img5, img6, img7]
  },
  {
    heading: "Specialized Panels",
    description: "We engineer and manufacture a wide range of custom-designed specialised panels to meet your unique industrial, commercial, and infrastructure needs. Our experienced team of engineers and technicians ensures that every panel is designed and built to the highest standards of quality, safety, and performance. We use only top-grade components and materials to guarantee long-lasting reliability.",
    images: [img8, img9, img10, img11]
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
