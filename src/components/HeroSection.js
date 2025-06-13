import React from 'react';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import SalesLineChart from './SalesLineChart';
import { motion } from 'framer-motion'; // Import motion

const HeroSection = () => {
  const theme = useTheme();

  // Define variants for the staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child animates with a 0.2s delay after the previous one
        delayChildren: 0.3,   // Overall delay before children start animating
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start 50px below and invisible
    visible: {
      opacity: 1,
      y: 0, // Animate to original position
      transition: {
        type: 'spring', // Use a spring animation for a natural bounce
        damping: 10,   // Reduces oscillation
        stiffness: 100, // Makes it snappier
      },
    },
  };

  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: theme.palette.background.heroLight,
        padding: { xs: theme.spacing(5, 2), md: theme.spacing(10, 5) },
        textAlign: 'center',
        color: theme.palette.text.primary,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4.5rem' },
                fontWeight: theme.typography.h1.fontWeight,
                lineHeight: theme.typography.h1.lineHeight,
                marginBottom: { xs: theme.spacing(2), md: theme.spacing(3) },
              }}
            >
              AI-powered demand forecasting & replenishment for fresh grocery
            </Typography>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              component="p"
              sx={{
                marginBottom: { xs: theme.spacing(4), md: theme.spacing(6) },
                color: theme.palette.text.secondary,
                fontSize: { xs: '1.1rem', sm: '1.35rem', md: '1.5rem' },
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              Less food waste. More availability. Designed specifically for fresh.
            </Typography>
          </motion.div>

          {/* Button Group */}
          <motion.div variants={itemVariants}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: theme.spacing(2), md: theme.spacing(4) },
              marginBottom: { xs: theme.spacing(6), md: theme.spacing(10) },
              flexDirection: { xs: 'column', sm: 'row' },
              width: { xs: '100%', sm: 'auto' },
              maxWidth: { xs: '300px', sm: 'none' },
              mx: 'auto',
            }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.callToAction.main,
                  color: theme.palette.callToAction.contrastText,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                  width: { xs: '100%', sm: 'auto' },
                }}
                href="/request-demo"
              >
                Request a demo
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: theme.palette.text.secondary,
                  color: theme.palette.text.secondary,
                  marginTop: { xs: theme.spacing(2), sm: 0 },
                  '&:hover': {
                    backgroundColor: theme.palette.background.default, // Example hover for outlined
                  },
                  width: { xs: '100%', sm: 'auto' },
                }}
                href="/how-it-works"
              >
                How it works
              </Button>
            </Box>
          </motion.div>

          {/* Dynamic Sales Chart */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                padding: { xs: theme.spacing(3), md: theme.spacing(4) },
                width: '100%',
                maxWidth: '960px',
                margin: '0 auto',
                borderRadius: theme.shape.borderRadius || 2,
                boxShadow: theme.shadows[3],
                height: { xs: '300px', sm: '350px', md: '450px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SalesLineChart />
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;