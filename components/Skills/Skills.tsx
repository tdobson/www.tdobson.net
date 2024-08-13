import { Card, Text, Title, Space, Container, Grid } from "@mantine/core";
import { IconBrandGoogle, IconBrandWordpress, IconBrandJavascript, IconBrandReact } from "@tabler/icons-react";
import { useMediaQuery } from '@mantine/hooks';
import styles from "./Skills.module.css";

const skills = [
  { icon: IconBrandGoogle, title: "Apps Script" },
  { icon: IconBrandWordpress, title: "WordPress" },
  { icon: IconBrandJavascript, title: "JavaScript" },
  { icon: IconBrandReact, title: "React.js" },
];

export function Skills() {
  const isMobile = useMediaQuery('(max-width: 48em)');

  return (
    <Container size="lg" className={styles.skillsSection}>
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
