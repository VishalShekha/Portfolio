import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
    <CircularProgress />
  </Box>
);

export default Loading;
