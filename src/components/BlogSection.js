// src/components/BlogSection.js
import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme, Button } from '@mui/material';
import { motion } from 'framer-motion';

// Import Material-UI Icons
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // For the date
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // For the "Read More" button

// Placeholder blog posts data
const blogPosts = [
  {
    id: 1,
    title: '5 Ways AI is Revolutionizing Fresh Grocery',
    date: 'June 10, 2025',
    excerpt: 'Discover how artificial intelligence is transforming demand forecasting, reducing waste, and boosting profitability in fresh grocery.',
    image: '/images/blog-section-ai-grocery.jpg', // <--- UPDATED: Local path
  },
  {
    id: 2,
    title: 'The Future of Supply Chain in Perishables',
    date: 'May 28, 2025',
    excerpt: 'Explore the innovations and challenges facing the perishable goods supply chain, and how technology is paving the way.',
    image: '/images/blog-section-supply-chain.jpg', // <--- UPDATED: Local path
  },
  {
    id: 3,
    title: 'Reducing Food Waste: A Retailer\'s Guide',
    date: 'May 15, 2025',
    excerpt: 'Practical strategies for grocery retailers to minimize food waste, improve inventory management, and enhance sustainability.',
    image: '/images/blog-section-waste-reduction.jpg', // <--- UPDATED: Local path
  },
];

const BlogSection = () => {
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

  // Variants for individual blog cards
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
      id="blog"
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
          Latest Articles
        </Typography>

        {/* Blog Posts Grid */}
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
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <motion.div variants={cardVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: theme.components?.MuiCard?.styleOverrides?.root?.borderRadius || '12px',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.shadows[6],
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    },
                  }}
                >
                  <Box sx={{ height: '200px', overflow: 'hidden' }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                  <Box sx={{ padding: theme.spacing(3), flexGrow: 1 }}>
                    <Typography variant="caption" color="text.secondary"
                      sx={{ display: 'flex', alignItems: 'center', marginBottom: theme.spacing(1) }}
                    >
                      <CalendarTodayIcon sx={{ fontSize: 16, mr: 0.5 }} /> {/* Calendar Icon */}
                      {post.date}
                    </Typography>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: theme.spacing(2) }}>
                      {post.excerpt}
                    </Typography>
                    <Button
                      variant="text"
                      sx={{ textTransform: 'none', color: theme.palette.primary.main }}
                      endIcon={<ArrowForwardIcon />} // Arrow icon at the end of the button
                    >
                      Read More
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogSection;