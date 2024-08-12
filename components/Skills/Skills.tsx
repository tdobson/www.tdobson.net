import { Card, SimpleGrid, Text, Title, Space } from '@mantine/core';
import { IconBrandJavascript, IconBrandPhp, IconBrandHtml5, IconBrandCss3, IconBrandReact, IconBrandMantine, IconBrandNextjs, IconBrandGithub, IconBrandWordpress, IconBrandUbuntu, IconBrandGoogle, IconBrandTypescript, IconBrandDebian, IconTerminal2 } from '@tabler/icons-react';
import styles from './Skills.module.css';

const skills = [
    { icon: IconBrandJavascript, title: 'JavaScript' },
    { icon: IconBrandPhp, title: 'PHP' },
    { icon: IconBrandHtml5, title: 'HTML' },
    { icon: IconBrandCss3, title: 'CSS' },
    { icon: IconBrandReact, title: 'React.js' },
    { icon: IconBrandMantine, title: 'Mantine' },
    { icon: IconBrandNextjs, title: 'Next.js' },
    { icon: IconBrandGithub, title: 'Git' },
    { icon: IconBrandWordpress, title: 'WordPress' },
    { icon: IconBrandTypescript, title: 'TypeScript' },
    { icon: IconBrandDebian, title: 'GNU/Linux' },
    { icon: IconTerminal2, title: 'Bash' },
    { icon: IconBrandGoogle, title: 'Apps Script' },
    { icon: IconBrandGoogle, title: 'English' },
    { icon: IconBrandGoogle, title: 'Russian' },
    { icon: IconBrandGoogle, title: 'French' },
];

export function Skills() {
    return (
        <div className={styles.skillsSection}>
            <Title order={2}>Skills and Technologies</Title>
            <Space h="md" />
            <SimpleGrid
                cols={{ base: 2, sm: 3, md: 4, lg: 6 }}
                spacing={{ base: 'sm', sm: 'md' }}
                verticalSpacing={{ base: 'sm', sm: 'md' }}
            >
                {skills.map((skill, index) => (
                    <Card key={index} shadow="sm" padding="sm" radius="md" withBorder className={styles.skillCard}>
                        <div className={styles.skillContent}>
                            <skill.icon size={30} />
                            <Text size="sm" fw={500} mt="xs">{skill.title}</Text>
                        </div>
                    </Card>
                ))}
            </SimpleGrid>
        </div>
    );
}
