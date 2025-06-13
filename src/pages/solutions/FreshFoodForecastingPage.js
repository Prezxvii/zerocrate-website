// src/pages/solutions/FreshFoodForecastingPage.js
import React from 'react';
import { Box, Container, Typography, useTheme, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Icon for list items

const FreshFoodForecastingPage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 8, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom align="center"
            sx={{ fontWeight: 700, color: theme.palette.primary.dark, mb: 4 }}>
            Precision Fresh Food Forecasting
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
            In the fast-paced world of fresh grocery, accurate demand forecasting is not just an advantage—it's a necessity. ZeroCrate’s AI-powered forecasting solution provides unprecedented accuracy, helping you anticipate customer needs, minimize spoilage, and maximize sales.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            Why Accurate Forecasting Matters
          </Typography>
          <Typography variant="body1" paragraph>
            Traditional forecasting methods often fall short in accounting for the complexities of fresh produce, baked goods, and prepared foods. Factors like seasonality, local events, promotions, and even weather can significantly impact demand. Inaccurate forecasts lead to either overstocking (resulting in waste and lost profits) or understocking (resulting in missed sales opportunities and customer dissatisfaction).
          </Typography>
          <Typography variant="body1" paragraph>
            ZeroCrate's solution leverages advanced machine learning algorithms that analyze vast datasets, including historical sales, promotional data, weather patterns, local demographics, and even social trends. This holistic approach ensures predictions are highly precise and adaptable to real-world dynamics.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            Key Features
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Granular Predictions: Forecast demand at the SKU, store, and even hour level." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Dynamic Adaptability: Models continuously learn and adjust to new data and changing market conditions." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Event & Promotion Integration: Seamlessly incorporate planned events and promotions for accurate impact assessment." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Weather & Seasonal Adjustments: Automatically account for external factors affecting demand." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Scenario Planning: Test the impact of various strategies on demand before implementation." />
            </ListItem>
          </List>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            Benefits
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Reduce Spoilage: Order just what you need, when you need it." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Increase Availability: Ensure popular items are always in stock, boosting customer satisfaction." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Optimize Labor: More predictable demand leads to better staff scheduling." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Boost Profitability: Turn waste into sales with data-driven decisions." />
            </ListItem>
          </List>
          <Typography variant="body1" align="center" paragraph sx={{ mt: 6, mb: 4, fontStyle: 'italic' }}>
            Ready to transform your fresh grocery operations with intelligent forecasting?
          </Typography>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default FreshFoodForecastingPage;