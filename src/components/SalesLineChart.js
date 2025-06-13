import React from 'react';
import { Line } from 'react-chartjs-2'; // Import the Line chart component
import {
  Chart as ChartJS, // Renamed Chart to ChartJS to avoid conflicts
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTheme } from '@mui/material'; // To access theme colors

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesLineChart = () => {
  const theme = useTheme(); // Access the Material-UI theme

  // --- Chart Data ---
  // This is example data. In a real application, you would fetch this from an API.
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const actualSales = [65, 59, 80, 81, 56, 55, 40, 50, 70, 60, 85, 90];
  const predictedSales = [50, 60, 75, 70, 65, 60, 50, 60, 75, 70, 80, 95];

  const data = {
    labels,
    datasets: [
      {
        label: 'Actual Sales',
        data: actualSales,
        borderColor: theme.palette.primary.main, // Use primary color from theme
        backgroundColor: theme.palette.primary.light,
        tension: 0.3, // Smooth the line
        fill: false, // Don't fill area under the line
        pointBorderColor: theme.palette.primary.dark,
        pointBackgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Predicted Sales',
        data: predictedSales,
        borderColor: theme.palette.secondary.main, // Use secondary color from theme
        backgroundColor: theme.palette.secondary.light,
        tension: 0.3,
        borderDash: [5, 5], // Make it a dashed line
        fill: false,
        pointBorderColor: theme.palette.secondary.dark,
        pointBackgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // --- Chart Options ---
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to take the container's height
    plugins: {
      legend: {
        position: 'top',
        labels: {
            color: theme.palette.text.primary, // Legend labels color
        }
      },
      title: {
        display: true,
        text: 'Actual vs. Predicted Sales',
        color: theme.palette.text.primary, // Title color
        font: {
            size: 20,
            weight: 'bold',
        }
      },
      tooltip: {
        backgroundColor: theme.palette.grey[800], // Tooltip background color
        titleColor: theme.palette.text.light,
        bodyColor: theme.palette.text.light,
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme.palette.text.secondary, // X-axis labels color
        },
        grid: {
          color: theme.palette.divider, // Grid lines color
        },
      },
      y: {
        ticks: {
          color: theme.palette.text.secondary, // Y-axis labels color
          callback: function(value) {
            return value + 'K'; // Example: Add 'K' for thousands
          }
        },
        grid: {
          color: theme.palette.divider, // Grid lines color
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative', height: '400px', width: '100%' }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default SalesLineChart;