import React from 'react';
import { Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom";
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
  width: '256px',
  height: '48px',
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
    width: '20px', // Adjusted icon size
    height: '20px', // Adjusted icon size
  },
}));

const ResponsiveButtonGroup = () => {
  const isMobile = useMediaQuery('(max-width:980px)');
  
  const buttons = [
    { icon: DesignIcon, text: 'Design And Consulting', link: '/designconsultingservice' },
    { icon: InstallationIcon, text: 'Installation & Commissioning', link: '/installation-commissioning' },
    { icon: PanelIcon, text: 'Panel Board & Control Systems', link: '/panel-board-control' },
    { icon: ComplianceIcon, text: 'Statutory Approvals & Compliance', link: '/approvals-compliance' },
    { icon: MaintenanceIcon, text: 'Maintenance & Repair', link: '/maintenance-repair' },
    { icon: ValueAddedIcon, text: 'Value-Added Services', link: '/value-added-services' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: { xs: 'nowrap', md: 'wrap' },
        width: { xs: 'calc(100vw - 20px)', md: '1200px' },
        height: { xs: '36px', md: '130px' },
        margin: '20px auto',
        overflowX: { xs: 'scroll', md: 'hidden' },
      }}
    >
      {isMobile ? (
        <Slider {...settings}>
          {buttons.map((button, index) => (
            <CustomButton
              key={index}
              startIcon={<img src={button.icon} alt={button.text} />}
              component={Link}
              to={button.link}
              sx={{
                width: '382px', // Ensure the button is wide enough
                height: '36px', // Button height for mobile
                whiteSpace: 'nowrap', // Ensures text stays on one line
              }}
            >
              {button.text}
            </CustomButton>
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
              width: { xs: '382px', md: '256px' },
              height: { xs: '36px', md: '48px' },
              whiteSpace: 'nowrap', // Ensures text stays on one line
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
      main: '#1976d2', // Adjust the color as per your design
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
