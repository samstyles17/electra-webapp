import React, { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Link, useLocation } from "react-router-dom";
import { styled } from '@mui/system';
import Slider from 'react-slick';
import useMediaQuery from '@mui/material/useMediaQuery';
import { HashLink } from 'react-router-hash-link';

// Importing icons
import DesignIcon from '../assets/img/service_icon1.svg';
import InstallationIcon from '../assets/img/service_icon2.svg';
import PanelIcon from '../assets/img/service_icon3.svg';
import ComplianceIcon from '../assets/img/service_icon4.svg';
import MaintenanceIcon from '../assets/img/service_icon5.svg';
import ValueAddedIcon from '../assets/img/service_icon6.svg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CustomButton = styled(Button)(({ theme, isMobile }) => ({
  width: isMobile ? '220px' : '250px',
  height: '45px',
  borderRadius: '24px',
  margin: isMobile ? '8px 4px' : '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: isMobile ? '10px' : '12px',
  border: '1px solid lightgrey',
  padding: '0 8px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  '& .MuiButton-startIcon': {
    marginRight: '4px',
    width: '16px',
    height: '16px',
  },
}));

const ResponsiveButtonGroup = () => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:909px)');
  const isTablet = useMediaQuery('(min-width:910px) and (max-width:1440px)');
  const [activeIndex, setActiveIndex] = React.useState(0);
  const sliderRef = React.useRef(null);

  const buttons = [
    { icon: DesignIcon, text: 'Design And Consulting', link: '/designconsultingservice' },
    { icon: InstallationIcon, text: 'Installation & Commissioning', link: '/installationcommisioningservice' },
    { icon: PanelIcon, text: 'Panel Board & Control Systems', link: '/panelboardcontrolservice' },
    { icon: ComplianceIcon, text: 'Statutory Approvals & Compliance', link: '/approvalcomplianceservice' },
    { icon: MaintenanceIcon, text: 'Maintenance & Repair', link: '/maintenacerepairservice' },
    { icon: ValueAddedIcon, text: 'Value-Added Services', link: "/valueaddedservice" },
  ];

  useEffect(() => {
    const index = buttons.findIndex(button => button.link === location.pathname);
    setActiveIndex(index !== -1 ? index : 0);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index !== -1 ? index : 0);
    }
  }, [location.pathname]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    centerPadding: '0px',
    initialSlide: activeIndex,
  };

  return (
    <Box
      sx={{
          display: 'flex',
          flexDirection: { xs: 'row', md: 'row' },
          alignItems: isTablet ? 'left' : 'center',
          justifyContent: isTablet ? 'left' : 'center',
          flexWrap: { xs: 'nowrap', md: 'wrap' },
          width: { 
            xs: '100%', 
            sm: '100%',  // Added for tablet
            md: '100%',  // Changed to 100% for consistency
            lg: '1200px' // For larger screens
          },
          height: { xs: 'auto', md: 'auto' },
          margin: '20px auto',
          overflow: 'hidden',        
      }}
    >
      {isMobile ? (
        <Slider ref={sliderRef} {...settings}>
        {buttons.map((button, index) => (
          <Box key={index} sx={{ padding: '0 4px' }}>
            <HashLink smooth to={`${button.link}#services`}>
              <CustomButton
                isMobile={isMobile}
                startIcon={<img src={button.icon} alt={button.text} />}
                sx={{
                  backgroundColor: location.pathname === button.link ? theme.palette.primary.main : 'transparent',
                  color: location.pathname === button.link ? theme.palette.common.white : theme.palette.text.primary,
                  '& img': {
                    marginRight: '4px',
                    width: '16px',
                    height: '16px',
                  },
                }}
              >
                {button.text}
              </CustomButton>
            </HashLink>
          </Box>
        ))}
      </Slider>
      ) : isTablet ? (
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gridTemplateRows: 'repeat(2, 1fr)',
              gap: '16px',
              width: '100%',
              maxWidth: '900px',
              justifyContent: 'start', // Change this
              alignItems: 'start',     // Add this
              marginLeft: '0px',      //
            }}>
              {buttons.map((button, index) => (
                <HashLink smooth to={`${button.link}#services`} key={index}>
                  <CustomButton
                    startIcon={<img src={button.icon} alt={button.text} />}
                    sx={{
                      width: '100%',
                      height: '48px',
                      whiteSpace: 'nowrap',
                      backgroundColor: location.pathname === button.link ? theme.palette.primary.main : 'transparent',
                      color: location.pathname === button.link ? theme.palette.common.white : theme.palette.text.primary,
                    }}
                  >
                    {button.text}
                  </CustomButton>
                </HashLink>
              ))}
            </Box>
      ): (
        buttons.map((button, index) => (
          <HashLink smooth to={`${button.link}#services`} key={index}>
          <CustomButton
     
            startIcon={<img src={button.icon} alt={button.text} />}
        
            sx={{
              width: { xs: '250px', md: '256px' },
              height: { xs: '45px', md: '48px' },
              whiteSpace: 'nowrap',
              backgroundColor: location.pathname === button.link ? theme.palette.primary.main : 'transparent',
              color: location.pathname === button.link ? theme.palette.common.white : theme.palette.text.primary,
            }}
          >
            {button.text}
          </CustomButton>
          </HashLink>
        ))
      )}
    </Box>
  );
};

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    text: {
      primary: '#000',
    },
  },
});

const ServicePageButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveButtonGroup />
    </ThemeProvider>
  );
};

export default ServicePageButton;