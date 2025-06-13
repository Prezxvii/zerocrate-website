// src/pages/BlogPage.js
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Use RouterLink for internal navigation
import Header from '../components/Header';
import Footer from '../components/Footer';

// Dummy data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Fresh: AI in Grocery Forecasting',
    excerpt: 'Explore how artificial intelligence is revolutionizing demand forecasting for perishable goods, significantly reducing waste and improving profitability...',
    date: 'June 10, 2025',
    imageUrl: '/images/blog-ai-forecasting.jpg', // <--- UPDATED: Local path
    link: '/blog/the-future-of-fresh-ai-forecasting',
  },
  {
    id: 2,
    title: 'Cutting Down on Food Waste: A Retailer\'s Guide',
    excerpt: 'Learn practical strategies and how technology like ZeroCrate can help grocery stores combat the pressing issue of food waste...',
    date: 'May 28, 2025',
    imageUrl: '/images/blog-waste-reduction.jpg', // <--- UPDATED: Local path
    link: '/blog/cutting-down-food-waste-guide',
  },
  {
    id: 3,
    title: 'Optimizing Your Supply Chain for Perishables',
    excerpt: 'Discover the critical steps to streamline your fresh food supply chain, ensuring faster delivery, reduced spoilage, and enhanced customer satisfaction...',
    date: 'May 15, 2025',
    imageUrl: '/images/blog-supply-chain.jpg', // <--- UPDATED: Local path (assuming this is the one you downloaded)
    link: '/blog/optimizing-perishable-supply-chain',
  },
  {
    id: 4,
    title: 'The Power of Analytics: Insights from Your Dashboard',
    excerpt: 'Unpack the value of a comprehensive analytics dashboard in fresh grocery retail, transforming raw data into actionable business intelligence...',
    date: 'April 22, 2025',
    imageUrl: '/images/blog-analytics-dashboard.jpg', // <--- UPDATED: Local path
    link: '/blog/power-of-analytics-dashboard',
  },
];

const BlogPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 8, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom align="center"
            sx={{ fontWeight: 700, color: theme.palette.primary.dark, mb: 6 }}>
            Our Latest Insights & Articles
          </Typography>

          <Grid container spacing={4}>
            {blogPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: theme.shadows[3] }}>
                  {post.imageUrl && (
                    <Box
                      component="img"
                      src={post.imageUrl}
                      alt={post.title}
                      sx={{
                        width: '100%',
                        height: 200, // Fixed height for images
                        objectFit: 'cover',
                        borderBottom: `1px solid ${theme.palette.divider}`
                      }}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {post.date}
                    </Typography>
                    <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'flex-end', pr: 2, pb: 2 }}>
                    <Button
                      size="small"
                      color="primary"
                      component={RouterLink}
                      to={post.link} // Link to a placeholder blog post page
                      sx={{ textTransform: 'none', fontWeight: 600 }}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default BlogPage;