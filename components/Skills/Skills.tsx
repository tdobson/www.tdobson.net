import { Card, SimpleGrid, Text, Title, Space, Container } from '@mantine/core';
import { IconBrandJavascript, IconBrandPhp, IconBrandHtml5, IconBrandCss3, IconBrandReact, IconBrandMantine, IconBrandNextjs, IconBrandGithub, IconBrandWordpress, IconBrandUbuntu, IconBrandGoogle, IconBrandTypescript, IconBrandDebian, IconTerminal2 } from '@tabler/icons-react';
import styles from './Skills.module.css';

const skills = [
    { icon: IconBrandJavascript, title: 'JavaScript' },
    { icon: IconBrandReact, title: 'React.js' },
    { icon: IconBrandWordpress, title: 'WordPress' },
    { icon: IconBrandGoogle, title: 'Apps Script' },
];

export function Skills() {
    return (
        <Container size="lg" className={styles.skillsSection} ta="center">
            <Title order={2}>Technologies</Title>
            <Space h="md" />
            <SimpleGrid
                cols={{ base: 2, md: 4, }}
                spacing={{ base: 'sm',  }}
            ta="center"

                verticalSpacing={{ base: 'sm'  }}
            >
                {skills.map((skill, index) => (
                    <Card key={index} shadow="sm" padding="sm" radius="md" withBorder className={styles.skillCard} ta="center">
                        <div className={styles.skillContent}>
                            <skill.icon size={30} />
                            <Text size="sm" fw={500} mt="xs">{skill.title}</Text>
                        </div>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    );
}
