import { Card, SimpleGrid, Text, Title, Space, Container } from "@mantine/core";
import {
  IconBrandJavascript,
  IconBrandPhp,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandReact,
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandGithub,
  IconBrandWordpress,
  IconBrandUbuntu,
  IconBrandGoogle,
  IconBrandTypescript,
  IconBrandDebian,
  IconTerminal2,
} from "@tabler/icons-react";
import styles from "./Skills.module.css";

const skills = [
  { icon: IconBrandGoogle, title: "Apps Script" },
  { icon: IconBrandWordpress, title: "WordPress" },
  { icon: IconBrandJavascript, title: "JavaScript" },
  { icon: IconBrandReact, title: "React.js" },
];

export function Skills() {
  return (
    <Container size="lg" className={styles.skillsSection}>
      <Title order={2} ta="center">
        I often work with
      </Title>
      <Space h="md" />
      <SimpleGrid
        cols={{ base: 2, sm: 4 }}
        spacing={{ base: "sm", sm: "md" }}
        verticalSpacing={{ base: "sm", sm: "md" }}
        className={styles.skillsGrid}
      >
        {skills.map((skill, index) => (
          <Card
            key={index}
            shadow="sm"
            padding="sm"
            radius="md"
            withBorder
            className={styles.skillCard}
          >
            <div className={styles.skillContent}>
              <skill.icon size={30} />
              <Text size="sm" fw={500} mt="xs">
                {skill.title}
              </Text>
            </div>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
