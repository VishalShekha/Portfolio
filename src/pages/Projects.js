// src/pages/Projects.js
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import personalData from '../data'; // Import personal data

const Projects = ({ setLoading }) => {
  React.useEffect(() => {
    setLoading(false); // Stop loading when the component mounts
  }, [setLoading]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {/* Map through projects array to display ProjectCard */}
        {personalData.projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
