import { Card, Text, Title, Space, Container, Grid } from "@mantine/core";
import {
  IconBrandGoogle,
  IconBrandWordpress,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandReactNative,
  IconDeviceMobile,
  IconGitBranch,
  IconBuildingStore,
  IconSun,
  IconServer,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./Skills.module.css";

const skills = [
  { icon: IconBrandReact, title: "React" },
  { icon: IconBrandReactNative, title: "React Native" },
  { icon: IconBuildingStore, title: "Shopify" },
  { icon: IconBrandWordpress, title: "WordPress" },
  { icon: IconBrandJavascript, title: "TypeScript" },
  { icon: IconDeviceMobile, title: "Mobile Apps" },
  { icon: IconSun, title: "Energy & Solar" },
  { icon: IconGitBranch, title: "Git" },
  { icon: IconServer, title: "Debian Linux" },
];

export function Skills() {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Container size="lg" className={styles.skillsSection}>
      <Space h="md" />
      <Title order={2} ta="center">
        I often work with
      </Title>
      <Space h="md" />
      <Grid gutter="md" justify="center">
        {skills.map((skill, index) => (
          <Grid.Col key={index} span={isMobile ? 6 : 3}>
            <Card
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
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
