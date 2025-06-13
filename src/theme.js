import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    // Primary color: Reverting to a strong, professional blue
    primary: {
      main: '#007BFF', // The vibrant blue that was previously used for primary actions
      light: '#62B0FF', // Lighter shade of this blue
      dark: '#0056B3',  // Darker shade of this blue
      contrastText: '#fff',
    },
    // Secondary color: Keeping the neutral grey as a complementary
    secondary: {
      main: '#6C757D', // A professional medium grey
      light: '#ADB5BD',
      dark: '#495057',
      contrastText: '#fff',
    },
    // Call to Action color: Now explicitly set to match the primary blue
    callToAction: {
      main: '#007BFF', // Set to match the primary blue for main calls to action
      contrastText: '#ffffff',
    },
    // Status colors - keeping standard or slightly adjusted for consistency
    error: {
      main: '#dc3545',
    },
    warning: {
      main: '#ffc107',
    },
    info: {
      main: '#17a2b8',
    },
    success: {
      main: '#28A745', // Keeping this green for success/positive indicators (e.g., chart lines if applicable)
    },
    // Text colors: These remain as previously refined for readability
    text: {
      primary: '#343A40', // Dark charcoal for main text
      secondary: '#6C757D', // Matches secondary for subtle text
      light: '#ffffff',    // White text for dark backgrounds
    },
    // Background colors: These remain as previously refined, including the light teal-blue
    background: {
      default: '#F8F9FA',   // Very light grey for general content areas
      paper: '#ffffff',     // Pure white for cards, modals, etc.
      heroLight: '#E0F7FA', // The light teal-blue background from your screenshots (retained)
      dark: '#212529',      // Reverting footer to a standard dark grey/charcoal to avoid conflicting green if not desired
    },
    // Divider color
    divider: '#E9ECEF', // A very light, subtle divider
  },
  typography: {
    // Typography settings (font family, sizes, weights) remain as last updated
    fontFamily: [
      'Inter',
      'Roboto',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.15,
    },
    h2: {
      fontSize: '2.8rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2.2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.15rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  spacing: 8, // Material-UI's default base spacing unit in px

  components: {
    // Component overrides (Button, Card, AppBar) remain as last updated
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 25px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          color: '#495057',
        },
      },
    },
  },

  siteInfo: {
    name: 'ZeroCrate',
    tagline: 'AI-powered demand forecasting & replenishment for fresh grocery.',
  },
});

theme = responsiveFontSizes(theme);

export default theme;