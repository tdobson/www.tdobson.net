import React from 'react';
import { Modal, Text, Image } from '@mantine/core';

export const ProjectModal = ({ opened, onClose, project }) => {
  return (
    <Modal opened={opened} onClose={onClose} title={project.title}>
      <Image src={project.screenshot} alt={project.title} mb="md" />
      <Text size="sm" color="dimmed" mb="md">{project.shortDescription}</Text>
      <Text size="sm" mb="md">{project.longDescription}</Text>
      <Text size="sm" mb="md"><strong>Problem:</strong> {project.problem}</Text>
      <Text size="sm" mb="md"><strong>Approach:</strong> {project.approach}</Text>
      <Text size="sm" mb="md"><strong>Solution:</strong> {project.solution}</Text>
      <Text size="sm" mb="md"><strong>Problem:</strong> {project.problem}</Text>
      <Text size="sm" mb="md"><strong>Approach:</strong> {project.approach}</Text>
      <Text size="sm" mb="md"><strong>Solution:</strong> {project.solution}</Text>
      <Text size="sm" mb="md"><a href={project.projectLink} target="_blank" rel="noopener noreferrer">View Project</a></Text>
      <Text size="sm" mb="md"><a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a></Text>
      <Text size="sm" mb="md"><a href={project.shortScreencast} target="_blank" rel="noopener noreferrer">Watch Screencast</a></Text>
    </Modal>
  );
};
