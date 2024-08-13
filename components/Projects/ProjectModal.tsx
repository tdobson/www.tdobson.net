import React from "react";
import { Modal, Text, Image } from "@mantine/core";

interface ProjectModalProps {
  opened: boolean;
  onClose: () => void;
  project: {
    title: string;
    shortScreencast: string;
    problem: string;
    approach: string;
    solution: string;
    longDescription: string;
    projectLink: string;
    githubLink: string;
  };
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  opened,
  onClose,
  project,
}) => {
  return (
    <Modal opened={opened} onClose={onClose} title={project.title}>
      <Image
        src={project.shortScreencast}
        alt={`${project.title} Screencast`}
        mb="md"
      />
      <Text size="sm" mb="md">
        <strong>Problem:</strong> {project.problem}
      </Text>
      <Text size="sm" mb="md">
        <strong>Approach:</strong> {project.approach}
      </Text>
      <Text size="sm" mb="md">
        <strong>Solution:</strong> {project.solution}
      </Text>
      <Text size="sm" mb="md">
        {project.longDescription}
      </Text>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
        {project.projectLink && (
          <Button
            component="a"
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            See this in action
          </Button>
        )}
        {project.githubLink && (
          <Button
            component="a"
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="gradient"
            gradient={{ from: 'indigo', to: 'grape' }}
          >
            Show me the GitHub
          </Button>
        )}
      </div>
    </Modal>
  );
};
