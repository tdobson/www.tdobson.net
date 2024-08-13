import React, { useState } from "react";
import {
  Modal,
  SimpleGrid,
  Card,
  Image,
  Text,
  Button,
  Title,
  Space,
  Group,
} from "@mantine/core";
import styles from "./Projects.module.css";
import projectsData from "../../config/projects.json";
import { ProjectModal } from "./ProjectModal";
import { useMediaQuery } from "@mantine/hooks";

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
  const isMobile = useMediaQuery("(max-width: 768px)");

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setOpened(true);
  };

  return (
    <div className={styles.projectsContainer}>
      <Title order={2}>Projects</Title>
      <Space h="md" />
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: "sm", sm: "lg" }}
        verticalSpacing={{ base: "sm", sm: "lg" }}
      >
        {projectsData.map((project, index) => (
          <Card
            key={index}
            shadow="sm"
            p="lg"
            className={styles.projectCard}
            onClick={() => openModal(project)}
          >
            <Card.Section>
              <Image
                src={project.screenshot}
                alt={project.title}
                className={styles.projectImage}
              />
            </Card.Section>
            <Text className={styles.projectTitle}>{project.title}</Text>
            <Text className={styles.projectDescription}>
              {project.shortDescription}
            </Text>
            {isMobile && (
              <Group justify="center" mt="md">
                <Button variant="light" color="blue">
                  View Project
                </Button>
              </Group>
            )}
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
