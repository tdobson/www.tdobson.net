import React from "react";
import { Button, Modal, Text, Image, Space, MantineTheme, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

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
  const isMobile = useMediaQuery("(max-width: 500px)");

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={project.title}
      size="100%"
      styles={{
        content: (theme: MantineTheme) => ({
          padding: theme.spacing.xl,
        }),
        title: {
          fontSize: "1.5rem",
          fontWeight: 600,
        },
      }}
    >
      <Image
        src={project.shortScreencast}
        alt={`${project.title} Screencast`}
        mb="md"
      />

      <Space />
      <Text size="md" mb="md" style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
        <strong>Problem:</strong> {project.problem}
      </Text>
      <Text size="md" mb="md" style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
        <strong>Approach:</strong> {project.approach}
      </Text>
      <Text size="md" mb="md" style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
        <strong>Solution:</strong> {project.solution}
      </Text>
      <Text size="md" mb="md" style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
        {project.longDescription}
      </Text>
      <Space h="md" />
      {isMobile ? (
        <Stack spacing="md" align="stretch">
          {project.projectLink && (
            <Button
              component="a"
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              fullWidth
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
              gradient={{ from: "indigo", to: "grape" }}
              fullWidth
            >
              Show me the GitHub
            </Button>
          )}
        </Stack>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {project.projectLink && (
            <Button
              component="a"
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
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
              gradient={{ from: "indigo", to: "grape" }}
            >
              Show me the GitHub
            </Button>
          )}
        </div>
      )}
    </Modal>
  );
};
