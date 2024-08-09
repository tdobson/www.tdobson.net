import React, { useState } from 'react';
import { Modal, Grid, Card, Image, Text, Button } from '@mantine/core';
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
    <div>
      <Text align="center" size="xl" weight={700} mb="md">Projects</Text>
      <Grid>
        {projectsData.map((project, index) => (
          <Grid.Col key={index} span={4}>
            <Card shadow="sm" p="lg" onClick={() => openModal(project)}>
              <Card.Section>
                <Image src={project.screenshot} height={160} alt={project.title} />
              </Card.Section>
              <Text weight={500} size="lg" mt="md">{project.title}</Text>
              <Text size="sm" color="dimmed">{project.shortDescription}</Text>
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
