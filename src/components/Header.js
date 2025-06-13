// src/components/Header.js
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Use RouterLink to avoid conflicts with MUI Link
import {
  AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List,
  ListItem, ListItemButton, ListItemText, Menu, MenuItem, useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Icon for dropdown arrow

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // State for mobile drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  // States for dropdown menus
  const [solutionsAnchorEl, setSolutionsAnchorEl] = useState(null);
  const [productsAnchorEl, setProductsAnchorEl] = useState(null);

  const isSolutionsMenuOpen = Boolean(solutionsAnchorEl);
  const isProductsMenuOpen = Boolean(productsAnchorEl);

  // Handlers for Solutions dropdown
  const handleSolutionsMenuOpen = (event) => {
    setSolutionsAnchorEl(event.currentTarget);
  };
  const handleSolutionsMenuClose = () => {
    setSolutionsAnchorEl(null);
  };

  // Handlers for Products dropdown
  const handleProductsMenuOpen = (event) => {
    setProductsAnchorEl(event.currentTarget);
  };
  const handleProductsMenuClose = () => {
    setProductsAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Blog', path: '/blog' },
    {
      name: 'Solutions',
      isDropdown: true,
      handleOpen: handleSolutionsMenuOpen,
      handleClose: handleSolutionsMenuClose,
      anchorEl: solutionsAnchorEl,
      isOpen: isSolutionsMenuOpen,
      menuId: 'solutions-menu',
      items: [
        { name: 'Fresh Food Forecasting', path: '/solutions/fresh-food-forecasting' },
        { name: 'Waste Reduction', path: '/solutions/waste-reduction' },
        { name: 'Supply Chain Optimization', path: '/solutions/supply-chain-optimization' },
      ],
    },
    {
      name: 'Products',
      isDropdown: true,
      handleOpen: handleProductsMenuOpen,
      handleClose: handleProductsMenuClose,
      anchorEl: productsAnchorEl,
      isOpen: isProductsMenuOpen,
      menuId: 'products-menu',
      items: [
        { name: 'Core', path: '/products/core' },
        { name: 'Analytics Dashboard', path: '/products/analytics-dashboard' },
      ],
    },
  ];

  const drawer = (
    <Box
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: 250 }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        {navItems.map((item) => (
          !item.isDropdown ? (
            <ListItem disablePadding key={item.name}>
              <ListItemButton component={RouterLink} to={item.path}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ) : (
            // For dropdowns in mobile drawer, we just list all sub-items directly
            <React.Fragment key={item.name}>
              <ListItem>
                <ListItemText primary={item.name} sx={{ fontWeight: 'bold', px: 2, pt: 1 }} />
              </ListItem>
              {item.items.map((subItem) => (
                <ListItem disablePadding key={subItem.name} sx={{ pl: 2 }}>
                  <ListItemButton component={RouterLink} to={subItem.path}>
                    <ListItemText primary={subItem.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </React.Fragment>
          )
        ))}
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/request-demo">
            <ListItemText primary="Request a Demo" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: theme.palette.background.paper, borderBottom: `1px solid ${theme.palette.divider}` }}>
      <Toolbar sx={{ justifyContent: 'space-between', paddingX: { xs: 2, sm: 3, md: 4 } }}>
        {/* Logo/Site Name */}
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 0,
            textDecoration: 'none',
            color: theme.palette.primary.main,
            fontWeight: 700,
            fontSize: { xs: '1.2rem', sm: '1.5rem' }
          }}
        >
          {theme.siteInfo.name} {/* ZeroCrate */}
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {navItems.map((item) => (
              !item.isDropdown ? (
                <Button
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  sx={{ color: theme.palette.text.primary, mx: 1, textTransform: 'none', fontWeight: 600 }}
                >
                  {item.name}
                </Button>
              ) : (
                <React.Fragment key={item.name}>
                  <Button
                    aria-controls={item.isOpen ? item.menuId : undefined}
                    aria-haspopup="true"
                    aria-expanded={item.isOpen ? 'true' : undefined}
                    onClick={item.handleOpen}
                    endIcon={<ExpandMoreIcon />}
                    sx={{ color: theme.palette.text.primary, mx: 1, textTransform: 'none', fontWeight: 600 }}
                  >
                    {item.name}
                  </Button>
                  <Menu
                    id={item.menuId}
                    anchorEl={item.anchorEl}
                    open={item.isOpen}
                    onClose={item.handleClose}
                    MenuListProps={{
                      'aria-labelledby': `${item.name.toLowerCase()}-button`,
                    }}
                    sx={{ '& .MuiPaper-root': { boxShadow: theme.shadows[3], mt: 1 } }} // Custom shadow for menu
                  >
                    {item.items.map((subItem) => (
                      <MenuItem
                        key={subItem.name}
                        onClick={item.handleClose}
                        component={RouterLink}
                        to={subItem.path}
                        sx={{ color: theme.palette.text.primary }}
                      >
                        {subItem.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              )
            ))}
            <Button
              component={RouterLink}
              to="/request-demo"
              variant="contained"
              color="primary"
              sx={{ ml: 2, textTransform: 'none', borderRadius: theme.shape.borderRadius }}
            >
              Request a Demo
            </Button>
          </Box>
        )}

        {/* Mobile Navigation (Hamburger Icon) */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ ml: 'auto', color: theme.palette.text.primary }} // Push to right
          >
            <MenuIcon />
          </IconButton>
        )}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;