import React, { useRef, useEffect } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { keyframes } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DividerImage from '../assets/img/client_divider.png';

// Import all client images
import Eastern_Condiments from '../assets/img/cl1.png';
import HHYS_Inframart from '../assets/img/cl2.png';
import Nippon_Toyota from '../assets/img/cl3.png';
import Kia_Motors from '../assets/img/cl4.png';
import Chungath_Jewellery from '../assets/img/cl5.png';
import Luxon_Tata from '../assets/img/cl6.png';
import VKL_seasoning from '../assets/img/cl7.png';
import Catholic_Syrian_Bank from '../assets/img/cl8.png';
import Codepoint_Softwares  from '../assets/img/cl9.png';
import Assisi_Hospital from '../assets/img/cl10.png';
import PS_mission_hospital from '../assets/img/cl11.png';
import RDS_realties from '../assets/img/cl12.png';
import Travancore_Cocotuft from '../assets/img/cl14.png';
import Revolt from '../assets/img/cl16.png';
import Marymatha_Infrastructure from '../assets/img/cl17.png';
import Ejyothi_services from '../assets/img/cl18.png';
import Nirmala_College from '../assets/img/cl19.png';
import Puc_Bank from '../assets/img/cl20.png';
import Accity from '../assets/img/cl211.png';
import Imaging_Lily from '../assets/img/cl222.png';
import Kinder_Hospital from '../assets/img/cl233.png';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 470,
      md: 900,
      lg: 1440,
      xl: 1920,
    }
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
  },
});

// Create an array of client image objects
const clients = [
  { src: Eastern_Condiments, alt: 'Eastern Condiments Logo' },
  { src: HHYS_Inframart, alt: 'HHYS Inframart Logo' },
  { src: Nippon_Toyota, alt: 'Nippon Toyota Logo' },
  { src: Kia_Motors, alt: 'Kia Motors logo' },
  { src: Chungath_Jewellery, alt: 'Chungath Jewellery logo' },
  { src: Luxon_Tata, alt: 'Luxon Tata Logo' },
  { src: VKL_seasoning, alt: 'VKL seasoning logo' },
  { src: Catholic_Syrian_Bank, alt: 'Catholic Syrian Bank logo' },
  { src: Codepoint_Softwares, alt: 'Codepoint Softwares Pvt. Ltd Logo' },
  { src: Assisi_Hospital, alt: 'Assisi Hospital logo' },
  { src: PS_mission_hospital, alt: 'PS mission hospital logo' },
  { src: RDS_realties, alt: 'RDS rds realties logo' },
  { src: Travancore_Cocotuft, alt: 'Travancore Cocotuft logo' },
  { src: Revolt, alt: 'Revolt logo' },
  { src: Marymatha_Infrastructure, alt: 'Marymatha Infrastructure Private Limited logo' },
  { src: Ejyothi_services, alt: 'Ejyothi services logo' },
  { src: Nirmala_College, alt: 'Nirmala College Muvattupuzha logo' },
  { src: Puc_Bank, alt: 'PUCBANK logo' },
  { src: Accity, alt: 'Accity Logo' },
  { src: Imaging_Lily, alt: 'Imaging Lily Logo' },
  { src: Kinder_Hospital, alt: 'Kinder Hospital Logo' },
];

const animationDuration = clients.length * 2;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-200%); }
`;


const ClientsCarousel = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const scrollerRef = useRef(null);
  const scrollerInnerRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return;

    const scrollerContent = Array.from(scrollerInnerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInnerRef.current.appendChild(duplicatedItem);
    });

    const scrollSpeed = isMobile ? 50 : 30; // Adjust these values to change speed

    const scroll = () => {
      if (scrollerRef.current.scrollLeft >= scrollerInnerRef.current.scrollWidth / 2) {
        scrollerRef.current.scrollLeft = 0;
      } else {
        scrollerRef.current.scrollLeft += 1;
      }
    };

    const scrollInterval = setInterval(scroll, scrollSpeed);

    return () => clearInterval(scrollInterval);
  }, [isMobile]);

  const carouselContent = (
    <Box
      ref={scrollerRef}
      sx={{
        width: '100%',
        overflow: 'hidden',
        '&::-webkit-scrollbar': { display: 'none' },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <Box
        ref={scrollerInnerRef}
        sx={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        {clients.map((client, index) => (
          <Box 
            key={index} 
            component="img" 
            src={client.src} 
            alt={client.alt} 
            sx={{ 
              margin: '0 10px', 
              height: isMobile ? '40px' : isTablet ? '40px' : '60px', 
              width: 'auto', 
              flexShrink: 0,
              maxWidth: '100%', 
            }} 
          />
        ))}
      </Box>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: isMobile ? '0px' : isTablet ? '0px' : '90px', 
          flexDirection: isMobile || isTablet ? 'column' : 'row',
          borderRadius: isMobile ? '0' : '25px',
          border: isMobile || isTablet ? 'none' : '0.1px solid grey',
          padding: isMobile ? '0' : isTablet ? '20px' : '30px 40px',
          backgroundColor: isMobile ? 'transparent' : '#fff',
          width: isMobile || isTablet ? '100%' : 'auto',
          maxWidth: '100%',
          overflow: 'hidden',
        }}
      >
        {isMobile || isTablet ? (
          <>
            <Box 
              component="img" 
              src={DividerImage} 
              alt="Divider" 
              sx={{ 
                marginBottom: '20px', 
                height: 'auto', 
                alignSelf: 'center' ,
                maxWidth: '100%'
              }} 
            />
            <Typography 
              variant="h6" 
              sx={{ 
                textAlign: 'center', 
                marginBottom: '20px', 
                fontSize: isTablet ? '20px' : '18px'
              }}
            >
              OUR CLIENTS
            </Typography>
            {carouselContent}
            <Box 
              sx={{ 
                width: '100%', 
                borderTop: '1px dashed grey', 
                marginTop: '20px', 
                marginRight: isTablet ? '0' : '40px'
              }} 
            />
          </>
        ) : (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', color: '#000', marginRight: '20px', flexShrink: 0 }}>
              <Box component="img" src={DividerImage} alt="Divider" sx={{ marginRight: '10px', height: 'auto', maxWidth: '100%' }} />
              <Typography variant="h6">OUR CLIENTS</Typography>
            </Box>
            {carouselContent}
          </>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default ClientsCarousel;