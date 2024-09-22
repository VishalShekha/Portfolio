import React from 'react';
import { Typography } from '@mui/material';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: '2rem' }}>
        If you have any questions or just want to say hello, feel free to reach out!
      </Typography>
      <ContactForm />
    </div>
  );
}

export default Contact;
