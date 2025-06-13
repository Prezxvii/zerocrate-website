// src/pages/solutions/SupplyChainOptimizationPage.js
import React from 'react';
import { Box, Container, Typography, useTheme, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Icon for list items


const SupplyChainOptimizationPage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 8, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom align="center"
            sx={{ fontWeight: 700, color: theme.palette.primary.dark, mb: 4 }}>
            End-to-End Supply Chain Optimization
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
            A truly efficient fresh grocery operation extends beyond just in-store management. ZeroCrate provides solutions that optimize your entire supply chain, from sourcing and distribution to shelf, ensuring seamless flow, reduced costs, and maximum product freshness.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            The Challenges of Perishable Supply Chains
          </Typography>
          <Typography variant="body1" paragraph>
            Managing a supply chain for perishable goods is inherently complex due to short shelf lives, fluctuating demand, and numerous touchpoints. Bottlenecks, inefficiencies, and lack of visibility can lead to significant waste, increased operational costs, and diminished product quality. ZeroCrate addresses these complexities with intelligent, data-driven approaches.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            How ZeroCrate Optimizes Your Supply Chain
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Integrated Demand Signals: Connects real-time demand with your suppliers and distribution centers." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Automated Order Generation: Streamlines procurement based on predicted needs and current inventory." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Logistics Integration: Provides data to optimize routing and delivery schedules, reducing transit times and costs." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Supplier Collaboration: Facilitates better communication and planning with your partners." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Real-time Performance Monitoring: Track key metrics across your supply chain for continuous improvement." />
            </ListItem>
          </List>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            Benefits of an Optimized Supply Chain
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Reduced Operating Costs: Streamline processes and minimize inefficiencies." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Improved Freshness & Quality: Faster, more efficient movement of goods." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Enhanced Agility: Respond quickly to demand shifts or supply disruptions." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Stronger Supplier Relationships: Better data leads to more effective partnerships." />
            </ListItem>
          </List>
          <Typography variant="body1" align="center" paragraph sx={{ mt: 6, mb: 4, fontStyle: 'italic' }}>
            Unlock the full potential of your fresh grocery supply chain with ZeroCrate.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default SupplyChainOptimizationPage;