import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from '../components/ServicePage3dCarousel';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles.css';

// Importing all the images
import titleDivider from "../assets/img/service_text_divider.png";
import img1 from "../assets/img/service1/service1_carousel1_img1.png";
import img2 from "../assets/img/service1/service1_carousel1_img2.png";
import img3 from "../assets/img/service1/service1_carousel1_img3.png";
import img4 from "../assets/img/service1/service1_carousel2_img1.png";
import img5 from "../assets/img/service1/service1_carousel2_img2.png";
import img6 from "../assets/img/service1/service1_carousel2_img3.png";
import img7 from "../assets/img/service1/service1_carousel3_img1.png";
import img8 from "../assets/img/service1/service1_carousel3_img2.png";
import img9 from "../assets/img/service1/service1_carousel3_img3.png";
import img10 from "../assets/img/service1/service1_carousel4_img1.png";
import img11 from "../assets/img/service1/service1_carousel4_img2.png";
import img12 from "../assets/img/service1/service1_carousel4_img2.png";

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

const sections = [
  {
    heading: "Electrical System Design",
    description: "Electra Power Engineering provides expert electrical system design services for residential, commercial, industrial, and infrastructure projects. Our experienced engineers leverage the latest technologies and industry best practices to create tailored designs that optimise safety, efficiency, and cost-effectiveness.",
    bullets: [
      "Conceptual Design and Load Calculations",
      "Detailed Engineering Design (Schematic Drawings, Cable Schedules, Equipment Layouts)",
      "Design for specific applications"
    ],
    images: [img1, img2, img3]
  },
  {
    heading: "Energy Audits And Analysis",
    description: "Our comprehensive energy audits identify opportunities to reduce energy consumption and lower costs. We analyse your existing electrical systems, identify inefficiencies, and recommend tailored solutions that align with your budget and sustainability goals.",
    images: [img4, img5, img6]
  },
  {
    heading: "Value Engineering",
    description: "We specialise in value engineering, optimising your electrical designs to minimise costs without compromising quality or safety. Our team of experts identifies cost-effective alternatives and innovative solutions to maximise the value of your investment.",
    images: [img7, img8, img9]
  },
  {
    heading: "Technical Consulting",
    description: "Need expert advice on electrical codes, standards, or regulations? Electra Power Engineering offers comprehensive technical consulting services. We provide feasibility studies, technical due diligence, and expert recommendations to ensure your electrical projects are compliant, safe, and efficient.",
    images: [img10, img11, img12]
  }
];

const MainComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='section-1'>
      <Box sx={{ padding: '20px' }} class="gg">
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
                margin:'40px',
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
      </div>
      
    </ThemeProvider>
  );
};

export default MainComponent;
