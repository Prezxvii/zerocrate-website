// src/components/FeaturesSection.js
import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

// Import Material-UI Icons for features
import AssessmentIcon from '@mui/icons-material/Assessment'; // For Precision Demand Forecasting
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // For Automated Replenishment
import BakeryDiningIcon from '@mui/icons-material/BakeryDining'; // For Production Planning Optimization
import DashboardIcon from '@mui/icons-material/Dashboard'; // For Head Office Dashboard
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'; // For Waste Reduction & Profit Growth
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'; // For Intuitive User Experience

const features = [
  {
    title: 'Precision Demand Forecasting',
    description: 'Leverage AI to predict fresh produce demand with unparalleled accuracy, minimizing waste and ensuring availability.',
    IconComponent: AssessmentIcon, // Material-UI Icon
  },
  {
    title: 'Automated Replenishment',
    description: 'Seamlessly automate ordering processes based on AI forecasts, reducing manual effort and human error.',
    IconComponent: ShoppingCartIcon, // Material-UI Icon
  },
  {
    title: 'Production Planning Optimization',
    description: 'Optimize in-store production schedules for baked goods and prepared foods to match real-time demand.',
    IconComponent: BakeryDiningIcon, // Material-UI Icon
  },
  {
    title: 'Head Office Dashboard',
    description: 'Gain holistic insights into store performance and supply chain metrics across all locations from a single view.',
    IconComponent: DashboardIcon, // Material-UI Icon
  },
  {
    title: 'Waste Reduction & Profit Growth',
    description: 'Directly translate accurate forecasts into significant reductions in food waste and tangible profit increases.',
    IconComponent: MonetizationOnIcon, // Material-UI Icon
  },
  {
    title: 'Intuitive User Experience',
    description: 'Easy-to-use interface designed for busy grocery professionals, requiring minimal training and maximizing adoption.',
    IconComponent: AutoAwesomeIcon, // Material-UI Icon
  },
];

const FeaturesSection = () => {
  const theme = useTheme();

  // Variants for the container to orchestrate staggered child animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child animating
      },
    },
  };

  // Variants for individual feature cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start invisible and slightly below
    visible: {
      opacity: 1,
      y: 0, // Slide up to original position
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Box
      id="features"
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: { xs: theme.spacing(6, 2), md: theme.spacing(12, 5) },
        textAlign: 'center',
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography
          variant="h2"
          component={motion.h2}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          gutterBottom
          sx={{
            marginBottom: theme.spacing(8),
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: theme.typography.h2.fontWeight,
          }}
        >
          Why Our Forecasts Win
        </Typography>

        {/* Features Grid */}
        <Grid
          container
          spacing={theme.spacing(4)}
          justifyContent="center"
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={cardVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: theme.spacing(4),
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    borderRadius: theme.components?.MuiCard?.styleOverrides?.root?.borderRadius || '8px',
                  }}
                >
                  {/* Render the Material-UI Icon Component */}
                  <feature.IconComponent sx={{ fontSize: '3rem', marginBottom: theme.spacing(2), color: theme.palette.primary.main }} />
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;