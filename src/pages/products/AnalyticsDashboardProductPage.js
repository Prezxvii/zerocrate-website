// src/pages/products/AnalyticsDashboardProductPage.js
import React from 'react';
import { Box, Container, Typography, useTheme, List, ListItem, ListItemIcon, ListItemText, Grid, Paper } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Import Chart.js components
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

// Register Chart.js components (important!)
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const AnalyticsDashboardProductPage = () => {
  const theme = useTheme();

  // --- Chart Data & Options ---

  // 1. Daily Demand Forecast vs. Actual Sales (Line Chart)
  const demandSalesData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Demand Forecast (Units)',
        data: [120, 115, 130, 125, 140, 135, 150],
        borderColor: theme.palette.primary.main, // Using theme color
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        tension: 0.4,
        pointBackgroundColor: theme.palette.primary.dark,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: theme.palette.primary.dark,
      },
      {
        label: 'Actual Sales (Units)',
        data: [110, 118, 125, 128, 135, 140, 145],
        borderColor: theme.palette.secondary.main, // Using theme color
        backgroundColor: 'rgba(153, 102, 255, 0.4)',
        tension: 0.4,
        pointBackgroundColor: theme.palette.secondary.dark,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: theme.palette.secondary.dark,
      },
    ],
  };

  const demandSalesOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: theme.palette.text.primary,
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: theme.palette.text.secondary },
        grid: { color: theme.palette.divider },
      },
      y: {
        ticks: { color: theme.palette.text.secondary },
        grid: { color: theme.palette.divider },
      },
    },
  };

  // 2. Waste Reduction Over Time (Bar Chart)
  const wasteReductionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Waste Percentage (%)',
        data: [5.2, 4.8, 4.5, 4.0, 3.7, 3.5, 3.2],
        backgroundColor: [
          theme.palette.error.light,
          theme.palette.error.light,
          theme.palette.warning.light,
          theme.palette.warning.light,
          theme.palette.success.light,
          theme.palette.success.light,
          theme.palette.success.main,
        ],
        borderColor: [
          theme.palette.error.dark,
          theme.palette.error.dark,
          theme.palette.warning.dark,
          theme.palette.warning.dark,
          theme.palette.success.dark,
          theme.palette.success.dark,
          theme.palette.success.dark,
        ],
        borderWidth: 1,
      },
    ],
  };

  const wasteReductionOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: theme.palette.text.primary,
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: theme.palette.text.secondary },
        grid: { color: theme.palette.divider },
      },
      y: {
        beginAtZero: true,
        max: 6, // Max percentage for y-axis
        ticks: { color: theme.palette.text.secondary },
        grid: { color: theme.palette.divider },
      },
    },
  };

  // 3. Top Performing Product Categories (Pie Chart)
  const topCategoriesData = {
    labels: ['Produce', 'Bakery', 'Prepared Meals', 'Meat & Seafood', 'Dairy & Deli'],
    datasets: [
      {
        label: 'Sales Contribution',
        data: [35, 25, 20, 10, 10], // Percentages
        backgroundColor: [
          theme.palette.info.light,
          theme.palette.success.light,
          theme.palette.warning.light,
          theme.palette.primary.light,
          theme.palette.secondary.light,
        ],
        borderColor: theme.palette.background.paper, // Border for slices
        borderWidth: 2,
      },
    ],
  };

  const topCategoriesOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right', // Place legend on the right for pie chart
        labels: {
          color: theme.palette.text.primary,
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed + '%'; // Show as percentage
            }
            return label;
          }
        },
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
      },
    },
  };

  // --- Component JSX ---
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 8, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg"> {/* Changed to lg for more chart space */}
          <Typography variant="h3" component="h1" gutterBottom align="center"
            sx={{ fontWeight: 700, color: theme.palette.primary.dark, mb: 4 }}>
            ZeroCrate Analytics Dashboard: Your Command Center
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
            Transform raw data into clear, actionable insights with the ZeroCrate Analytics Dashboard. Designed for grocery executives and store managers alike, this intuitive dashboard provides a holistic view of your fresh operations, empowering faster, smarter decisions.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            Gain Unprecedented Visibility
          </Typography>
          <Typography variant="body1" paragraph>
            Moving beyond traditional reports, our dashboard provides real-time visibility into key performance indicators (KPIs) related to demand, inventory, waste, and profitability. Identify trends, spot anomalies, and understand the true impact of your operational strategies across single stores or your entire chain. Customizable views ensure that each user sees the data most relevant to their role.
          </Typography>

          {/* Actual Chart.js Charts */}
          <Typography variant="h4" component="h2" gutterBottom align="center"
            sx={{ fontWeight: 700, color: theme.palette.primary.dark, mt: 8, mb: 5 }}>
            Key Visualizations
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
            {/* Chart 1: Daily Demand Forecast vs. Actual Sales */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: '350px', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                  Daily Demand vs. Actual Sales
                </Typography>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Line data={demandSalesData} options={demandSalesOptions} />
                </Box>
              </Paper>
            </Grid>

            {/* Chart 2: Waste Reduction Over Time */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: '350px', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                  Waste Reduction Trends
                </Typography>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bar data={wasteReductionData} options={wasteReductionOptions} />
                </Box>
              </Paper>
            </Grid>

            {/* Chart 3: Top Performing Categories/Products (Pie Chart) */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: '350px', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                  Top Performing Product Categories
                </Typography>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Pie data={topCategoriesData} options={topCategoriesOptions} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
          {/* End Chart.js Charts */}


          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            Dashboard Features
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Customizable Dashboards: Tailor views to suit specific roles or analysis needs." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Real-time Performance Metrics: Monitor sales, waste, inventory levels, and order accuracy live." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Trend Analysis & Reporting: Identify long-term patterns and generate detailed reports." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Alerts & Notifications: Receive automated alerts for critical events or deviations from targets." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Drill-down Capabilities: Explore data from a high-level overview down to individual product performance." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Comparative Analytics: Benchmark performance across different stores or periods." />
            </ListItem>
          </List>

          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary, mt: 6, mb: 3 }}>
            Benefits of the Analytics Dashboard
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Faster Decision Making: Access critical insights instantly." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Improved Operational Efficiency: Pinpoint inefficiencies and areas for improvement." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Proactive Problem Solving: Address issues before they impact the bottom line." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40, color: theme.palette.primary.main }}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Strategic Planning: Leverage data to inform long-term business strategies." />
            </ListItem>
          </List>
          <Typography variant="body1" align="center" paragraph sx={{ mt: 6, mb: 4, fontStyle: 'italic' }}>
            Empower your team with the data-driven insights they need to succeed.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default AnalyticsDashboardProductPage;