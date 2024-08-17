import React from 'react';
import { Box, Typography, Grid, Button, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import PhoneIcon from '../assets/img/footer_phone_logo.png';
import MailIcon from '../assets/img/footer_mail_logo.png';
import LocationIcon from '../assets/img/footer_map_logo.png';
import TwitterIcon from '../assets/img/a.svg';
import FacebookIcon from '../assets/img/b.svg';
import InstagramIcon from '../assets/img/c.svg';
import LinkedInIcon from '../assets/img/d.svg';
import SmallDivider from '../assets/img/footer_small_vertical_divider.png';
import LargeDivider from '../assets/img/footer_large_vertical_divider.png';
import HorizontalDivider from '../assets/img/footer_horizontal_divider.png';
import MapIcon from '../assets/img/footer_button_logo.png';
import electrapowerLogo from '../assets/img/logo_b.png';

const StyledTypography = styled(Typography)({
  '&.MuiTypography-root': {
    fontFamily: 'inherit',
    lineHeight: '1.5',
    marginBottom: '8px',
  },
});

const OrangeTypography = styled(StyledTypography)(({ theme }) => ({
  color: '#FF6B2B',
  fontSize: '0.875rem',
}));

const ContactInfoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '16px',
});

const IconColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: '16px',
  justifyContent: 'space-between',
  height: '144px', // Adjust the height to match the total height of the text
});

const TextColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Ensure spacing between elements
  height: '100px', // Adjust the height to match the total height of the text
});

const IconWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
});

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', py: 4, width: '100%', boxSizing: 'border-box' }} className="montserrat-regular">
      <Container maxWidth="lg" sx={{ 
        px: { 
          xs: 1, 
          '@media (min-width: 910px) and (max-width: 1440px)': {
            px: 6, // 32px padding for screens between 910px and 1440px
          },
          lg: 0.5 
        } 
      }}>
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
            Electra Power Engineering founded in 2013 is the brainchild of a group of skilled and experienced engineers who are proven game changers in the electrical engineering Industry.
            </StyledTypography>
          </Grid>

          <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
            <img src={LargeDivider} style={{ margin: '0 8px', height: '100%' }} alt="Divider" />
          </Grid>

          <Box sx={{ my: 4, display: { xs: 'inline', md: 'none' } }}>
            <img src={HorizontalDivider} style={{ width: '100%' }} alt="Horizontal Divider" />
          </Box>

          <Grid item xs={12} md={3}>
            <ContactInfoContainer>
              <IconColumn>
                <IconWrapper>
                  <img src={PhoneIcon} alt="Phone Icon" />
                </IconWrapper>
                <IconWrapper>
                  <img src={MailIcon} alt="Mail Icon" />
                </IconWrapper>
              </IconColumn>
              <TextColumn>
                <Box>
                  <OrangeTypography variant="subtitle1" className="montserrat-medium">
                    Phone number
                  </OrangeTypography>
                  <StyledTypography variant="body2">+91 940 098 9363</StyledTypography>
                  <StyledTypography variant="body2">+91 920 738 9111</StyledTypography>
                </Box>
                
                <Box mt={4}>
                  <OrangeTypography variant="subtitle1" className="montserrat-medium">
                    For Enquiries
                  </OrangeTypography>
                  <StyledTypography variant="body2">office@electrapower.in</StyledTypography>
                </Box>
              </TextColumn>
            </ContactInfoContainer>
          </Grid>

          <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
            <img src={LargeDivider} style={{ margin: '0 8px', height: '178px' }} alt="Divider" />
          </Grid>

          <Grid item xs={12} md={3} sx={{ textAlign: 'left' , mt:{xs:4, md:0}}} >
            <ContactInfoContainer>
              <IconWrapper sx={{ mr: 2 }}>
                <img src={LocationIcon} alt="Location Icon" />
              </IconWrapper>
              <Box>
                <OrangeTypography variant="subtitle1" className="montserrat-medium">
                  Address
                </OrangeTypography>
                <StyledTypography variant="body2">Electra Power Engineering</StyledTypography>
                <StyledTypography variant="body2">'A' grade Electrical Engineers & Contractors </StyledTypography>
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
                  startIcon={<Box component="img" src={MapIcon} sx={{ color: '#FF6B2B', height: '24px' }} />}
                >
                  Locate in map
                </Button>
              </Box>
            </ContactInfoContainer>
          </Grid>
        </Grid>

        <Box sx={{ my: 4, display: { xs: 'inline', md: 'none' } }}>
          <img src={HorizontalDivider} style={{ width: '100%' }} alt="Horizontal Divider" />
        </Box>

        <Grid item sx={{ display: { xs: 'block', md: 'none' }, paddingTop:2, paddingLeft:1 }}>
            <StyledTypography variant="body2" component="span" sx={{ mr: 2, display: { xs: 'inline', md: 'none' } }}>
              Connect with us
            </StyledTypography>
            {[
            { icon: LinkedInIcon, link: 'https://www.linkedin.com/company/electrapower-engineering', alt: 'LinkedIn' },
            { icon: FacebookIcon, link: 'https://www.facebook.com/ElectrapowerEngineering/', alt: 'Facebook' },
            { icon: InstagramIcon, link: 'https://www.instagram.com/electrapowerengineering/', alt: 'Instagram' },
            { icon: TwitterIcon, link: 'https://twitter.com/electrapowereng', alt: 'Twitter' }
          ].map((item, index) => (
            <IconButton key={index} size="small" sx={{ color: 'white' }}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Box component="img" src={item.icon} alt={`${item.alt} Icon`} />
              </a>
            </IconButton>
          ))}
          </Grid>

        <Box sx={{mb:4, mt:2 }}>
          <img src={HorizontalDivider} style={{ width: '100%' }} alt="Horizontal Divider" />
        </Box>

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Box component="nav" sx={{ display: 'flex', alignItems: 'center' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: "/aboutus" },
                { name: 'Services', path: "/designconsultingservice" },
                { name: 'Blogs', path: '/' }
              ].map((item, index) => (
                <React.Fragment key={item.name}>
                  <Button 
                    component={Link}
                    to={item.path}
                    sx={{ 
                      color: 'white', 
                      textTransform: 'none',
                      fontFamily: 'inherit',
                    }} 
                    className="montserrat-regular"
                  >
                    {item.name}
                  </Button>
                  {index < 3 && (
                    <img src={SmallDivider} style={{ margin: '0 8px' }} alt="Small Divider" />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Grid>
          <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
            <StyledTypography variant="body2" component="span" sx={{ mr: 2, display: { xs: 'none', md: 'inline' } }}>
              Connect with us
            </StyledTypography>
            {/* LinkedIn */}
            <IconButton size="small" sx={{ color: 'white' }}>
              <a href="https://www.linkedin.com/company/electrapower-engineering" target="_blank" rel="noopener noreferrer">
                <Box component="img" src={LinkedInIcon} alt="LinkedIn Icon" />
              </a>
            </IconButton>

            {/* Facebook */}
            <IconButton size="small" sx={{ color: 'white' }}>
              <a href="https://www.facebook.com/ElectrapowerEngineering/" target="_blank" rel="noopener noreferrer">
                <Box component="img" src={FacebookIcon} alt="Facebook Icon" />
              </a>
            </IconButton>

            {/* Instagram */}
            <IconButton size="small" sx={{ color: 'white' }}>
              <a href="https://www.instagram.com/electrapowerengineering/" target="_blank" rel="noopener noreferrer">
                <Box component="img" src={InstagramIcon} alt="Instagram Icon" />
              </a>
            </IconButton>

            {/* Twitter */}
            <IconButton size="small" sx={{ color: 'white' }}>
              <a href="https://twitter.com/electrapowereng" target="_blank" rel="noopener noreferrer">
                <Box component="img" src={TwitterIcon} alt="Twitter Icon" />
              </a>
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;