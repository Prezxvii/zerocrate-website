// src/pages/products/CoreProductPage.js
import React from 'react';
import { Box, Container, Typography, useTheme, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Icon for list items


const CoreProductPage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 8, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom align="center"
            sx={{ fontWeight: 700, color: theme.palette.primary.dark, mb: 4 }}>
            ZeroCrate Core: The Foundation of Freshness
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
            The ZeroCrate Core product is the robust, AI-powered engine that drives all of our specialized solutions. It’s built to integrate seamlessly with your existing systems, providing the foundational intelligence necessary for unparalleled fresh grocery management.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            What ZeroCrate Core Does
          </Typography>
          <Typography variant="body1" paragraph>
            At its heart, ZeroCrate Core ingests and harmonizes vast amounts of data from various sources—your POS, ERP, inventory systems, and even external factors like weather and local events. This rich dataset fuels our proprietary machine learning models, which then generate highly accurate forecasts and actionable insights. It’s designed to be the single source of truth for your fresh operations.
          </Typography>
          <Typography variant="body1" paragraph>
            Its modular architecture ensures scalability and flexibility, allowing you to deploy specific ZeroCrate solutions (like forecasting or replenishment) on top of this powerful core, tailoring the platform to your unique business needs without disrupting current workflows.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            Core Capabilities
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Universal Data Ingestion: Connects to diverse data sources (POS, ERP, inventory, IoT, etc.)." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Advanced AI/ML Engine: Proprietary algorithms for deep analysis and predictive modeling." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Scalable & Secure Infrastructure: Built on robust, enterprise-grade cloud architecture." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="API-First Design: Enables easy integration with existing and future systems." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Real-time Processing: Processes data continuously for up-to-the-minute insights." />
            </ListItem>
          </List>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            Benefits of ZeroCrate Core
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Unified Data View: Break down data silos for a comprehensive operational picture." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Future-Proof Scalability: Grows with your business, handling increasing data volumes and complexities." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Enhanced Decision Making: Provides the foundational data for all other ZeroCrate solutions." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Reduced IT Burden: Managed cloud service reduces internal infrastructure needs." />
            </ListItem>
          </List>
          <Typography variant="body1" align="center" paragraph sx={{ mt: 6, mb: 4, fontStyle: 'italic' }}>
            ZeroCrate Core: The intelligent backbone for your fresh grocery retail.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default CoreProductPage;