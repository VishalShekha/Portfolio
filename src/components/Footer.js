// src/components/Footer.js
import React from 'react';
import {
  Box,
  Typography,
  Link,
  Grid,
  Container,
  IconButton,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import personalData from '../data';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        p: 1,
        mt: 'auto', // Push footer to the bottom
        width: '100%',
        position: 'relative', // Ensure it is positioned relative to the rest of the content
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Footer Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              {personalData.name}
            </Typography>
            <Typography variant="body1">
              {personalData.tagline}
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" component="h3" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link href="/projects" color="inherit">My Projects</Link>
              </li>
              <li>
                <Link href="/contact" color="inherit">Contact Me</Link>
              </li>
            </ul>
          </Grid>

          {/* Contact Info Icons */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" component="h3" gutterBottom>
              Contact
            </Typography>
            <Box>
              <IconButton
                component={Link}
                href={`mailto:${personalData.email}`}
                color="inherit"
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                component={Link}
                href={personalData.socialLinks.github}
                color="inherit"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component={Link}
                href={personalData.socialLinks.linkedin}
                color="inherit"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box textAlign="center" sx={{ bgcolor: 'rgba(0, 0, 0, 0.2)', p: 2, mt: 4 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
