import React from 'react';
import { Container, Typography } from '@mui/material';
import { useEffect } from 'react';
const About = ({ setLoading }) => {
  useEffect(() => {
    setLoading(false); // Stop loading when the component mounts
  }, [setLoading]);
return(
<Container>
    <Typography variant="h4">About Me</Typography>
    <Typography variant="body1">Your background, skills, and career goals...</Typography>
  </Container>
);
};

export default About;
