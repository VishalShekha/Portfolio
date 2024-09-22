// src/components/ProjectCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const ProjectCard = ({ title, description, githubLink, liveLink }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body2" paragraph>
        {description}
      </Typography>
      <Button variant="outlined" href={githubLink} target="_blank" rel="noopener noreferrer">
        View Code
      </Button>
      <Button variant="outlined" href={liveLink} target="_blank" rel="noopener noreferrer" sx={{ marginLeft: '1rem' }}>
        Live Demo
      </Button>
    </CardContent>
  </Card>
);

export default ProjectCard;
