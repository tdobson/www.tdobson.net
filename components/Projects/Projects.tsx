import React, { useState } from 'react';
import { Modal, SimpleGrid, Card, Image, Text, Button } from '@mantine/core';
import styles from './Projects.module.css';
import projectsData from '../../config/projects.json';
import { ProjectModal } from './ProjectModal';

interface Project {
  title: string;
  shortDescription: string;
  screenshot: string;
  shortScreencast: string;
  problem: string;
  approach: string;
  solution: string;
  longDescription: string;
  projectLink: string;
  githubLink: string;
}

export const Projects = () => {
  const [opened, setOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setOpened(true);
  };

  return (
    <div className={styles.projectsContainer}>
      <Text ta="center" size="xl" fw={700} mb="md">Projects</Text>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 'sm', sm: 'lg' }}
        verticalSpacing={{ base: 'sm', sm: 'lg' }}
      >
        {projectsData.map((project, index) => (
            <Card shadow="sm" p="lg" onClick={() => openModal(project)} className={styles.projectCard}>
              <Card.Section>
                <Image src={project.screenshot} alt={project.title} className={styles.projectImage} />
              </Card.Section>
              <Text className={styles.projectTitle}>{project.title}</Text>
              <Text className={styles.projectDescription}>{project.shortDescription}</Text>
            </Card>
        ))}
      </SimpleGrid>
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
