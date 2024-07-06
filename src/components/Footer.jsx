import React from 'react';
import { Box, Typography, Grid, Button, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import electrapowerLogo from '../assets/img/footer_logo.png'; // Adjust path as needed

const StyledTypography = styled(Typography)({
  '&.MuiTypography-root': {
    fontFamily: 'inherit',
  }
});

const OrangeTypography = styled(StyledTypography)(({ theme }) => ({
  color: '#FF6B2B',
}));

const Divider = ({ orientation = 'vertical' }) => (
  <Box
    sx={{
      width: orientation === 'vertical' ? '1px' : '100%',
      height: orientation === 'vertical' ? '100%' : '1px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Adjust color as needed
      margin: orientation === 'vertical' ? '0 16px' : '24px 0', // Adjust margins as needed
    }}
  />
);

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', py: 4 }} className="montserrat-regular">
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <img 
                src={electrapowerLogo} 
                alt="Electrapower Engineering Logo" 
                style={{ width: '150px', height: 'auto', marginRight: '16px' }}
              />
            </Box>
            <StyledTypography variant="body2">
              Electra Power Engineering founded in 2013 is the brainchild of a group of skilled and experienced engineers who are proven game changers in the electrical engineering industry.
            </StyledTypography>
          </Grid>

          <Divider orientation="vertical" />

          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ color: '#FF6B2B', mr: 1 }} />
              <OrangeTypography variant="subtitle1" className="montserrat-medium">
                Phone number
              </OrangeTypography>
            </Box>
            <StyledTypography variant="body2">+91 940 098 9363</StyledTypography>
            <StyledTypography variant="body2" gutterBottom>+91 920 738 9111</StyledTypography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 2 }}>
              <MailOutlineIcon sx={{ color: '#FF6B2B', mr: 1 }} />
              <OrangeTypography variant="subtitle1" className="montserrat-medium">
                For Enquiries
              </OrangeTypography>
            </Box>
            <StyledTypography variant="body2">office@electrapower.in</StyledTypography>
          </Grid>

          <Divider orientation="vertical" />

          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnOutlinedIcon sx={{ color: '#FF6B2B', mr: 1 }} />
              <OrangeTypography variant="subtitle1" className="montserrat-medium">
                Address
              </OrangeTypography>
            </Box>
            <StyledTypography variant="body2">Electra Power Engineering</StyledTypography>
            <StyledTypography variant="body2">'A' grade Electrical Contractors & Engineers</StyledTypography>
            <StyledTypography variant="body2">33/1305-A1,Chalikkavattom, Vennala P.O,</StyledTypography>
            <StyledTypography variant="body2" gutterBottom>Kochi, Kerala, INDIA - 682028</StyledTypography>
            <Button variant="contained" sx={{ 
              backgroundColor: '#FF6B2B', 
              '&:hover': { backgroundColor: '#FF8C5A' },
              fontFamily: 'inherit',
            }} className="montserrat-medium">
              Locate in map
            </Button>
          </Grid>
        </Grid>

        <Divider orientation="horizontal" />

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Box component="nav">
              {['Home', 'About', 'Services', 'Blogs'].map((item) => (
                <Button key={item} sx={{ 
                  color: 'white', 
                  textTransform: 'none',
                  fontFamily: 'inherit',
                }} className="montserrat-regular">
                  {item}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item>
            <StyledTypography variant="body2" component="span" sx={{ mr: 2 }}>
              Connect with us
            </StyledTypography>
            {[LinkedInIcon, InstagramIcon, FacebookIcon, TwitterIcon].map((Icon, index) => (
              <IconButton key={index} size="small" sx={{ color: 'white' }}>
                <Icon />
              </IconButton>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;