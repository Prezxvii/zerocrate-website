// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme'; // Your custom theme

import HomePage from './pages/HomePage';
import RequestDemoPage from './pages/RequestDemoPage';
import HowItWorksPage from './pages/HowItWorksPage';
import BlogPage from './pages/BlogPage'; // Import the new BlogPage

// Import Solution Pages
import FreshFoodForecastingPage from './pages/solutions/FreshFoodForecastingPage';
import WasteReductionPage from './pages/solutions/WasteReductionPage';
import SupplyChainOptimizationPage from './pages/solutions/SupplyChainOptimizationPage';

// Import Product Pages
import CoreProductPage from './pages/products/CoreProductPage';
import AnalyticsDashboardProductPage from './pages/products/AnalyticsDashboardProductPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/request-demo" element={<RequestDemoPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/blog" element={<BlogPage />} /> {/* Use the new BlogPage component */}

          {/* Solution Routes */}
          <Route path="/solutions/fresh-food-forecasting" element={<FreshFoodForecastingPage />} />
          <Route path="/solutions/waste-reduction" element={<WasteReductionPage />} />
          <Route path="/solutions/supply-chain-optimization" element={<SupplyChainOptimizationPage />} />

          {/* Product Routes */}
          <Route path="/products/core" element={<CoreProductPage />} />
          <Route path="/products/analytics-dashboard" element={<AnalyticsDashboardProductPage />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
