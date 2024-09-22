import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Button, Switch, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import personalData from '../data';


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
          <Switch checked={isDarkTheme} onChange={toggleTheme} />
        </Hidden>
        
        {/* IconButton for small screens */}
        <Hidden mdUp>
          <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Hidden>

        {/* Drawer for mobile menu */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem button component={Link} to={item.path} key={item.text} onClick={toggleDrawer(false)}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            {/* Dark theme toggle */}
            <ListItem>
              <ListItemText primary="Dark Theme" />
              <Switch checked={isDarkTheme} onChange={toggleTheme} />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
