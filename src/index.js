import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your custom theme
import CssBaseline from '@mui/material/CssBaseline'; // Provides a consistent baseline for styling across browsers

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply global CSS resets and baseline styles */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);