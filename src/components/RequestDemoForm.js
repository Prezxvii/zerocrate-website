// src/components/RequestDemoForm.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, useTheme } from '@mui/material';

const RequestDemoForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '', // Optional
    message: '', // Optional
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error for the field as user types
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.company) tempErrors.company = "Company name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // In a real application, you would send this data to your backend
      // using an API call (e.g., fetch or axios).
      console.log('Form data submitted:', formData);

      // Simulate API call success
      setIsSubmitted(true);
      // Optionally reset form after submission
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({}); // Clear any lingering errors
    } else {
      console.log('Form has validation errors.');
    }
  };

  if (isSubmitted) {
    return (
      <Box sx={{
        textAlign: 'center',
        padding: theme.spacing(5),
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.components?.MuiCard?.styleOverrides?.root?.borderRadius || '12px',
        boxShadow: theme.shadows[3],
        maxWidth: '600px',
        margin: '0 auto',
      }}>
        <Typography variant="h4" component="h2" sx={{ color: theme.palette.primary.main, marginBottom: theme.spacing(2) }}>
          Thank You for Your Request!
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.secondary, marginBottom: theme.spacing(3) }}>
          We have received your demo request and will be in touch shortly.
        </Typography>
        <Button
          variant="contained"
          onClick={() => setIsSubmitted(false)}
          sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
        >
          Submit Another Request
        </Button>
      </Box>
    );
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        padding: theme.spacing(5),
        maxWidth: '700px',
        margin: '0 auto',
        borderRadius: theme.components?.MuiCard?.styleOverrides?.root?.borderRadius || '12px',
        boxShadow: theme.shadows[3],
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3), // Space between form fields
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', marginBottom: theme.spacing(4) }}>
        Request a Demo
      </Typography>

      <TextField
        label="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        label="Company Name"
        name="company"
        value={formData.company}
        onChange={handleChange}
        fullWidth
        required
        error={!!errors.company}
        helperText={errors.company}
      />
      <TextField
        label="Work Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        label="Phone Number (Optional)"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Message (Optional)"
        name="message"
        value={formData.message}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{
          marginTop: theme.spacing(4),
          backgroundColor: theme.palette.callToAction.main,
          color: theme.palette.callToAction.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        }}
      >
        Submit Request
      </Button>
    </Paper>
  );
};

export default RequestDemoForm;