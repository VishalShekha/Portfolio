import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Button, Hidden, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import personalData from '../data';
import DarkModeIcon from '@mui/icons-material/DarkMode'; // Moon icon
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = ({ toggleTheme, isDarkTheme, setLoading }) => {
  useEffect(() => {
    setLoading(false); // Stop loading when the component mounts
  }, [setLoading]);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {personalData.name}'s Portfolio
        </Typography>
        
         {/* Buttons for larger screens */}
         <Hidden smDown>
          {menuItems.map((item) => (
            <Button component={Link} to={item.path} color="inherit" key={item.text}>
              {item.text}
            </Button>
          ))}
          <IconButton onClick={toggleTheme} color="inherit">
            {isDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Hidden>
        
        {/* Menu icon for mobile */}
      <Hidden mdUp>
        <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Hidden>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
            backdropFilter: 'blur(10px)', // Optional blur for fluid effect
            width: 250, // Adjust the width
            transition: 'all 0.3s ease', // Smooth transition effect
          },
        }}
        ModalProps={{
          BackdropProps: {
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent overlay behind drawer
            },
          },
        }}
      >
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' , width: '75%', margin: 'auto'}} />
            <ListItem
        button
        component={Link}
        to={item.path}
        onClick={toggleDrawer(false)}
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Hover effect
          },
          justifyContent: 'center', // Center the entire list item
        }}
      >
        <ListItemText
          primary={item.text}
          sx={{ 
            color: 'white',
            textAlign: 'center', // Center the text of each menu item
          }} 
        />
      </ListItem>
            {/* Add Divider below each ListItem */}
          </React.Fragment>
        ))}

<Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' , width: '75%', margin: 'auto'}} />
<br></br>
        {/* Dark theme toggle */}
        <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} /> {/*Divider for the last item*/}
        <ListItem>
          <ListItemText primary="Change Theme" sx={{ color: 'white' }} />
          <IconButton onClick={toggleTheme} color="inherit">
            {isDarkTheme ? <LightModeIcon sx={{ color: 'white' }} /> : <DarkModeIcon sx={{ color: 'white' }} />}
          </IconButton>
        </ListItem>
      </List>
      </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
