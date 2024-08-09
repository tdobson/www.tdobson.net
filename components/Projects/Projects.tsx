import React, { useState } from 'react';
import { Modal, Grid, Card, Image, Text, Button } from '@mantine/core';
import styles from './Projects.module.css';
import projectsData from '../../config/projects.json';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [opened, setOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setOpened(true);
  };

  return (
    <div className={styles.projectsContainer}>
      <Text align="center" size="xl" weight={700} mb="md">Projects</Text>
      <Grid>
        {projectsData.map((project, index) => (
          <Grid.Col key={index} span={4}>
            <Card shadow="sm" p="lg" onClick={() => openModal(project)} className={styles.projectCard}>
              <Card.Section>
                <Image src={project.screenshot} alt={project.title} className={styles.projectImage} />
              </Card.Section>
              <Text className={styles.projectTitle}>{project.title}</Text>
              <Text className={styles.projectDescription}>{project.shortDescription}</Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
      {selectedProject && (
        <ProjectModal
          opened={opened}
          onClose={() => setOpened(false)}
          project={selectedProject}
        />
      )}
    </div>
  );
};
