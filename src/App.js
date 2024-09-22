// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Loading from './components/Loading';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout setLoading={setLoading} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}>
          {loading && <Loading />}
          <Routes>
            <Route path="/" element={<Home setLoading={setLoading} />} />
            <Route path="/about" element={<About setLoading={setLoading} />} />
            <Route path="/projects" element={<Projects setLoading={setLoading} />} />
            <Route path="/contact" element={<Contact setLoading={setLoading} />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
