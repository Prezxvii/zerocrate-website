import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion'; // Import motion

const CallToAction = () => {
  const theme = useTheme();

  // Variants for staggered children animation within the CTA section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child animating
      },
    },
  };

  // Variants for individual items (heading, tagline, button)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Start invisible and slightly below
    visible: {
      opacity: 1,
      y: 0, // Slide up to original position
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <Box
      id="call-to-action"
      sx={{
        backgroundColor: theme.palette.background.heroLight, // Consistent light blue/teal background
        padding: { xs: theme.spacing(8, 2), md: theme.spacing(15, 5) }, // Generous padding
        textAlign: 'center',
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="md"
        component={motion.div} // Make Container a motion component
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Animate when container enters viewport
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of container is in view, only once
      >
        {/* Call to Action Heading */}
        <motion.div variants={itemVariants}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              marginBottom: theme.spacing(3),
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: theme.typography.h2.fontWeight,
            }}
          >
            Ready to Revolutionize Your Fresh Grocery Operations?
          </Typography>
        </motion.div>

        {/* Call to Action Tagline */}
        <motion.div variants={itemVariants}>
          <Typography
            variant="h5"
            component="p"
            sx={{
              marginBottom: theme.spacing(5),
              color: theme.palette.text.secondary,
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.35rem' },
              maxWidth: '700px', // Constrain width for readability
              margin: '0 auto', // Center the tagline
            }}
          >
            Connect with our experts today to see how ZeroCrate can transform your business, reduce waste, and boost profitability.
          </Typography>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div variants={itemVariants}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: theme.palette.callToAction.main,
              color: theme.palette.callToAction.contrastText,
              padding: { xs: '12px 25px', md: '15px 40px' }, // Larger padding for prominence
              fontSize: { xs: '1rem', md: '1.2rem' },
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
            href="/request-demo"
          >
            Request a Free Demo
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CallToAction;