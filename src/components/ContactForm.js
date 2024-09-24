import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Formik } from 'formik';

const ContactForm = () => (
  <Formik
    initialValues={{ name: '', email: '', message: '' }}
    onSubmit={(values) => {
      window.location.href = `mailto:your.email@example.com?subject=Contact from ${values.name}&body=${values.message}`;
    }}
  >
    {({ handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField label="Name" name="name" onChange={handleChange} fullWidth />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField label="Email" name="email" type="email" onChange={handleChange} fullWidth />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField label="Message" name="message" multiline rows={4} onChange={handleChange} fullWidth />
        </Box>
        
        {/* Align Button to the right */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained">Send</Button>
        </Box>
      </form>
    )}
  </Formik>
);

export default ContactForm;
