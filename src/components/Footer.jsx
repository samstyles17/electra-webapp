import React from 'react';
import { Box, Typography, Grid, Button, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import PhoneIcon from '../assets/img/footer_phone_logo.png';
import MailIcon from '../assets/img/footer_mail_logo.png';
import LocationIcon from '../assets/img/footer_map_logo.png';
import LinkedInIcon from '../assets/img/footer_linkedin_logo.png';
import InstagramIcon from '../assets/img/footer_ig_logo.png';
import FacebookIcon from '../assets/img/footer_fb_logo.png';
import TwitterIcon from '../assets/img/footer_x_logo.png';
import SmallDivider from '../assets/img/footer_small_vertical_divider.png';
import LargeDivider from '../assets/img/footer_large_vertical_divider.png';
import HorizontalDivider from '../assets/img/footer_horizontal_divider.png';
import MapIcon from '../assets/img/footer_button_logo.png';
import electrapowerLogo from '../assets/img/footer_logo.png'; // Adjust path as needed

const StyledTypography = styled(Typography)({
  '&.MuiTypography-root': {
    fontFamily: 'inherit',
    lineHeight: '1.5',
    marginBottom: '8px',
  },
});

const OrangeTypography = styled(StyledTypography)(({ theme }) => ({
  color: '#FF6B2B',
}));

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', py: 4, width: '100%', boxSizing: 'border-box' }} className="montserrat-regular">
      <Container maxWidth="lg" sx={{ px: { xs: 1, md: 1 } }}>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={12} md={4} sx={{ width: '100%', boxSizing: 'border-box' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: { xs: 'center', md: 'flex-start' }, width: '100%', boxSizing: 'border-box' }}>
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

          <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
            <img src={LargeDivider} style={{ margin: '0 8px', height: '100%' }} />
          </Grid>

          <Box sx={{ my: 4, display: { xs: 'inline', md: 'none' } }}>
            <img src={HorizontalDivider} style={{ width: '100%' }} />
          </Box>

          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box component="img" src={PhoneIcon} sx={{ color: '#FF6B2B', mr: 1 }} />
              <OrangeTypography variant="subtitle1" className="montserrat-medium">
                Phone number
              </OrangeTypography>
            </Box>
            <StyledTypography variant="body2">+91 940 098 9363</StyledTypography>
            <StyledTypography variant="body2" gutterBottom>+91 920 738 9111</StyledTypography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 2 }}>
              <Box component="img" src={MailIcon} sx={{ color: '#FF6B2B', mr: 1 }} />
              <OrangeTypography variant="subtitle1" className="montserrat-medium">
                For Enquiries
              </OrangeTypography>
            </Box>
            <StyledTypography variant="body2">office@electrapower.in</StyledTypography>
          </Grid>

          <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
            <img src={LargeDivider} style={{ margin: '0 8px', height: '100%' }} />
          </Grid>

          <Grid item xs={12} md={3} sx={{ textAlign: 'left' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: { xs: 'flex-start', md: 'flex-start' } }}>
              <Box component="img" src={LocationIcon} sx={{ color: '#FF6B2B', mr: 1 }} />
              <OrangeTypography variant="subtitle1" className="montserrat-medium">
                Address
              </OrangeTypography>
            </Box>
            <StyledTypography variant="body2">Electra Power Engineering</StyledTypography>
            <StyledTypography variant="body2">'A' grade Electrical Contractors & Engineers</StyledTypography>
            <StyledTypography variant="body2">33/1305-A1, Chalikkavattom, Vennala P.O,</StyledTypography>
            <StyledTypography variant="body2" gutterBottom>Kochi, Kerala, INDIA - 682028</StyledTypography>
            <Button 
              variant="outlined" 
              sx={{ 
                borderColor: '#FF6B2B',
                color: '#FF6B2B',
                '&:hover': { backgroundColor: 'rgba(255, 107, 43, 0.1)' },
                borderRadius: '50px', 
                fontFamily: 'inherit',
              }} 
              className="montserrat-medium"
              startIcon={<Box component="img" src={MapIcon} sx={{ color: '#FF6B2B' }} />}
            >
              Locate in map
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ my: 4 }}>
          <img src={HorizontalDivider} style={{ width: '100%' }} />
        </Box>

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Box component="nav" sx={{ display: 'flex', alignItems: 'center' }}>
              {['Home', 'About', 'Services', 'Blogs'].map((item, index) => (
                <React.Fragment key={item}>
                  <Button sx={{ 
                    color: 'white', 
                    textTransform: 'none',
                    fontFamily: 'inherit',
                  }} className="montserrat-regular">
                    {item}
                  </Button>
                  {index < 3 && (
                    <img src={SmallDivider} style={{ margin: '0 8px' }} />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Grid>
          <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
            <StyledTypography variant="body2" component="span" sx={{ mr: 2, display: { xs: 'none', md: 'inline' } }}>
              Connect with us
            </StyledTypography>
            {[LinkedInIcon, InstagramIcon, FacebookIcon, TwitterIcon].map((Icon, index) => (
              <IconButton key={index} size="small" sx={{ color: 'white' }}>
                <Box component="img" src={Icon} />
              </IconButton>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
