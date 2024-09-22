// src/layouts/MainLayout.js
import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children, setLoading, toggleTheme, isDarkTheme }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header setLoading={setLoading} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backgroundColor: 'background.default',
        color: 'text.primary',
        minHeight: '100vh',
      }}
    >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
