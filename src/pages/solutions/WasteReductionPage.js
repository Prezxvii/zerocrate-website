// src/pages/solutions/WasteReductionPage.js
import React from 'react';
import { Box, Container, Typography, useTheme, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Icon for list items


const WasteReductionPage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 8, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom align="center"
            sx={{ fontWeight: 700, color: theme.palette.primary.dark, mb: 4 }}>
            Driving Waste Reduction in Fresh Grocery
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
            Food waste is a significant challenge for grocery retailers, impacting profitability, sustainability, and brand reputation. ZeroCrate offers a powerful solution specifically designed to pinpoint and eliminate sources of fresh food waste throughout your operations.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            The Cost of Waste
          </Typography>
          <Typography variant="body1" paragraph>
            Every discarded perishable item represents not only a direct financial loss but also wasted resources in production, transportation, and labor. Beyond the immediate economic impact, unchecked food waste contributes to environmental concerns and detracts from efforts towards sustainable retail. ZeroCrate tackles this head-on by providing actionable insights that minimize over-ordering and improve inventory turnover.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            How ZeroCrate Reduces Waste
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Optimized Ordering: Precise demand forecasts prevent overstocking." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Dynamic Pricing & Promotions: Identify products nearing expiry for strategic pricing to move inventory." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Production Planning: Align in-store production of baked goods and prepared meals exactly with anticipated demand." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Inventory Visibility: Real-time insights into stock levels and shelf life help manage inventory proactively." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Performance Tracking: Monitor waste metrics across stores to identify problem areas and track improvements." />
            </ListItem>
          </List>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            Benefits of ZeroCrate's Waste Reduction Solution
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Significant Cost Savings: Directly impacts your bottom line by cutting spoilage." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Enhanced Sustainability: Contribute to a greener planet by reducing food waste." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Improved Brand Image: Position your brand as a leader in responsible retail." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Better Inventory Control: Gain unprecedented control over your fresh product inventory." />
            </ListItem>
          </List>
          <Typography variant="body1" align="center" paragraph sx={{ mt: 6, mb: 4, fontStyle: 'italic' }}>
            Transform your waste problem into a profit opportunity.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default WasteReductionPage;