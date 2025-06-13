// src/pages/HowItWorksPage.js
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '@mui/material/styles';

// Import Material-UI Icons
import StorageIcon from '@mui/icons-material/Storage';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import LoopIcon from '@mui/icons-material/Loop';

const HowItWorksPage = () => {
  const theme = useTheme();

  // Define your steps here
  const steps = [
    {
      id: 1,
      title: 'Data Ingestion & Integration',
      description: 'We connect seamlessly with your existing POS, ERP, and inventory management systems to gather comprehensive sales, inventory, and operational data.',
      IconComponent: StorageIcon, // Using IconComponent to render the MUI Icon
    },
    {
      id: 2,
      title: 'AI-Powered Forecasting',
      description: 'Our proprietary AI models analyze historical data, market trends, seasonal patterns, and external factors (like weather or holidays) to predict demand for fresh products with high accuracy.',
      IconComponent: LightbulbIcon,
    },
    {
      id: 3,
      title: 'Automated Replenishment Recommendations',
      description: 'Based on forecasts and your operational constraints, ZeroCrate generates precise, real-time recommendations for optimal order quantities for each store and product.',
      IconComponent: LocalShippingIcon,
    },
    {
      id: 4,
      title: 'Actionable Insights & Reporting',
      description: 'Gain clear visibility into performance metrics, waste reduction, sales opportunities, and inventory health through intuitive dashboards and customizable reports.',
      IconComponent: BarChartIcon,
    },
    {
      id: 5,
      title: 'Continuous Optimization',
      description: 'Our system learns and adapts continuously, refining forecasts and recommendations as new data becomes available, ensuring ongoing improvement in your fresh grocery operations.',
      IconComponent: LoopIcon,
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 6, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom align="center"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.dark,
              mb: 4,
              [theme.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
              },
            }}
          >
            How ZeroCrate Works
          </Typography>

          <Typography variant="h6" align="center" color="text.secondary" paragraph
            sx={{
              mb: 6,
              maxWidth: '800px',
              margin: '0 auto 48px auto',
            }}
          >
            ZeroCrate leverages cutting-edge AI to transform your fresh grocery operations, minimizing waste and maximizing availability. Here’s a simplified breakdown of our process:
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {steps.map((step) => (
              <Grid item xs={12} sm={6} md={4} key={step.id}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: theme.shape.borderRadius,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  {/* Render the Material-UI Icon Component */}
                  <step.IconComponent sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                    {step.id}. {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default HowItWorksPage;