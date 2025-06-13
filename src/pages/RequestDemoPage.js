// src/pages/RequestDemoPage.js
import React from 'react';
import { Box, Container, useTheme } from '@mui/material';
import RequestDemoForm from '../components/RequestDemoForm'; // Import the form component
import Header from '../components/Header'; // Assuming you want the header on this page
import Footer from '../components/Footer'; // Assuming you want the footer on this page

const RequestDemoPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header /> {/* Render the header */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.default, // Or any other background you prefer for pages
          padding: theme.spacing(8, 2), // Generous padding for the page content
          flexGrow: 1, // Allows this section to grow and push footer down
        }}
      >
        <Container maxWidth="md">
          <RequestDemoForm />
        </Container>
      </Box>
      <Footer /> {/* Render the footer */}
    </Box>
  );
};

export default RequestDemoPage;