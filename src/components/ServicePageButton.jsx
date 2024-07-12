import React from 'react';
import { Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Link, useLocation } from "react-router-dom";
import { styled } from '@mui/system';
import Slider from 'react-slick';
import useMediaQuery from '@mui/material/useMediaQuery';

// Importing icons
import DesignIcon from '../assets/img/service_button_icon1.png';
import InstallationIcon from '../assets/img/service_button_icon2.png';
import PanelIcon from '../assets/img/service_button_icon3.png';
import ComplianceIcon from '../assets/img/service_button_icon4.png';
import MaintenanceIcon from '../assets/img/service_button_icon5.png';
import ValueAddedIcon from '../assets/img/service_button_icon6.png';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CustomButton = styled(Button)(({ theme }) => ({
  width: '250px',
  height: '45px',
  borderRadius: '24px',
  margin: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '12px',
  border: '1px solid lightgrey',
  padding: '0 16px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  '& .MuiButton-startIcon': {
    marginRight: '8px',
    width: '18px', // Adjusted icon size
    height: '18px', // Adjusted icon size
  },
}));

const ResponsiveButtonGroup = () => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:980px)');

  const buttons = [
    { icon: DesignIcon, text: 'Design And Consulting', link: '/designconsultingservice' },
    { icon: InstallationIcon, text: 'Installation & Commissioning', link: '/installationcommisioningservice' },
    { icon: PanelIcon, text: 'Panel Board & Control Systems', link: '/panelboardcontrolservice' },
    { icon: ComplianceIcon, text: 'Statutory Approvals & Compliance', link: '/approvalcomplianceservice' },
    { icon: MaintenanceIcon, text: 'Maintenance & Repair', link: '/maintenacerepairservice' },
    { icon: ValueAddedIcon, text: 'Value-Added Services', link: "/valueaddedservice" },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: { xs: 'nowrap', md: 'wrap' },
        width: { xs: '100%', md: '1200px' },
        height: { xs: 'auto', md: '130px' },
        margin: '20px auto',
      }}
    >
      {isMobile ? (
        <Slider {...settings}>
          {buttons.map((button, index) => (
            <Box key={index} sx={{ padding: '0 16px' }}> {/* Adjusted spacing */}
              <CustomButton
                startIcon={<img src={button.icon} alt={button.text} />}
                component={Link}
                to={button.link}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: location.pathname === button.link ? theme.palette.primary.main : 'transparent',
                  color: location.pathname === button.link ? theme.palette.common.white : theme.palette.text.primary,
                  '& img': {
                    marginRight: '8px',
                  },
                  '& .MuiButton-startIcon': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
                }}
              >
                {button.text}
              </CustomButton>
            </Box>
          ))}
        </Slider>
      ) : (
        buttons.map((button, index) => (
          <CustomButton
            key={index}
            startIcon={<img src={button.icon} alt={button.text} />}
            component={Link}
            to={button.link}
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
