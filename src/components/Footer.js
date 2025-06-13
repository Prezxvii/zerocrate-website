// src/components/Footer.js
import React from 'react';
import { Box, Typography, Container, Grid, Link, List, ListItem, ListItemText, useTheme, IconButton } from '@mui/material';

// Import Material-UI Social Media Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const socialMediaLinks = [
  { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/company/zerocrate' },
  { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/zerocrate' },
  { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/zerocrate' },
  { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/zerocrate' },
];

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.dark,
        color: theme.palette.text.light,
        padding: { xs: '40px 20px', md: '50px' },
        textAlign: 'left',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} justifyContent="space-around">
          {/* Logo and Tagline Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
              {theme.siteInfo.name} {/* Displays "ZeroCrate" */}
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.grey[400], marginBottom: 2 }}>
              AI-powered forecasting & replenishment for fresh groceries.
            </Typography>
            {/* SOC 2 Logo */}
            <Box
              component="img"
              src="/images/soc2-logo.png" // Placeholder image: place your SOC 2 compliance logo here
              alt="SOC 2 Compliant"
              sx={{
                height: 50, // Adjust height as needed
                width: 'auto',
                display: 'block',
                my: 2,
              }}
            />
          </Grid>

          {/* Navigation Links Sections */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.text.light }}>
              Solutions
            </Typography>
            <List disablePadding>
              <ListItem disablePadding><ListItemText><Link href="#solutions" color="inherit" underline="none">Overview</Link></ListItemText></ListItem>
              <ListItem disablePadding><ListItemText><Link href="/solutions/forecasting" color="inherit" underline="none">Forecasting</Link></ListItemText></ListItem>
              <ListItem disablePadding><ListItemText><Link href="/solutions/replenishment" color="inherit" underline="none">Replenishment</Link></ListItemText></ListItem>
            </List>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.text.light }}>
              Products
            </Typography>
            <List disablePadding>
              <ListItem disablePadding><ListItemText><Link href="/products/fresh-ordering" color="inherit" underline="none">Fresh ordering</Link></ListItemText></ListItem>
              <ListItem disablePadding><ListItemText><Link href="/products/production-planning" color="inherit" underline="none">Production planning</Link></ListItemText></ListItem>
              <ListItem disablePadding><ListItemText><Link href="/products/head-office-dashboard" color="inherit" underline="none">Head office dashboard</Link></ListItemText></ListItem>
            </List>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.text.light }}>
              Company
            </Typography>
            <List disablePadding>
              <ListItem disablePadding><ListItemText><Link href="#about-us" color="inherit" underline="none">About us</Link></ListItemText></ListItem>
              <ListItem disablePadding><ListItemText><Link href="#blog" color="inherit" underline="none">Blog</Link></ListItemText></ListItem>
              <ListItem disablePadding><ListItemText><Link href="/careers" color="inherit" underline="none">Careers</Link></ListItemText></ListItem>
            </List>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.text.light }}>
              Connect
            </Typography>
            <List disablePadding>
              <ListItem disablePadding><ListItemText><Link href="/request-demo" color="inherit" underline="none">Request a demo</Link></ListItemText></ListItem>
              <ListItem disablePadding><ListItemText><Link href="/contact" color="inherit" underline="none">Contact Us</Link></ListItemText></ListItem>
              <ListItem disablePadding><ListItemText><Link href="/login" color="inherit" underline="none">Login</Link></ListItemText></ListItem>
            </List>
            {/* Social Media Icons */}
            <Box sx={{ mt: 3, display: 'flex', gap: 1 }}>
              {socialMediaLinks.map((social) => (
                <IconButton
                  key={social.name}
                  component={Link}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}
                >
                  <social.icon />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ borderTop: `1px solid ${theme.palette.grey[700]}`, paddingTop: 3, marginTop: 5, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: theme.palette.grey[500] }}>
            &copy; {new Date().getFullYear()} {theme.siteInfo.name}, Inc. All rights reserved. <Link href="/privacy-policy" sx={{ color: theme.palette.primary.main }} underline="hover">Privacy Policy</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;