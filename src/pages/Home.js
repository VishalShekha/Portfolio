import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useEffect } from 'react';
import personalData from '../data';

const Home = ({ setLoading }) => {
  useEffect(() => {
    setLoading(false); // Stop loading when the component mounts
  }, [setLoading]);

  return (
  
  <Container>
    <Typography variant="h2">{personalData.name}</Typography>
    <Typography variant="h5">{personalData.tagline}</Typography>
    <Button variant="contained" onClick={() => setLoading(false)}>Get Started</Button>
  </Container>
  );
};

export default Home;
