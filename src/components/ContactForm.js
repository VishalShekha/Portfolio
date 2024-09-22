import React from 'react';
import { TextField, Button } from '@mui/material';
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
        <TextField label="Name" name="name" onChange={handleChange} fullWidth />
        <TextField label="Email" name="email" type="email" onChange={handleChange} fullWidth />
        <TextField label="Message" name="message" multiline rows={4} onChange={handleChange} fullWidth />
        <Button type="submit" variant="contained">Send</Button>
      </form>
    )}
  </Formik>
);

export default ContactForm;
