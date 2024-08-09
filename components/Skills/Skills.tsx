import { Card, Group, Text, Title, Space } from '@mantine/core';
import { IconBrandJavascript, IconBrandPhp, IconBrandHtml5, IconBrandCss3, IconBrandReact, IconBrandMantine, IconBrandNextjs, IconBrandGithub, IconBrandWordpress, IconBrandUbuntu, IconBrandGoogle, IconBrandTypescript, IconBrandDebian, IconTerminal2 } from '@tabler/icons-react';
import styles from './Skills.module.css';

const skills = [
    { icon: IconBrandJavascript, title: 'JavaScript', description: 'Proficient' },
    { icon: IconBrandPhp, title: 'PHP', description: 'Proficient' },
    { icon: IconBrandHtml5, title: 'HTML', description: 'Proficient' },
    { icon: IconBrandCss3, title: 'CSS', description: 'Proficient' },
    { icon: IconBrandReact, title: 'React.js', description: 'Proficient' },
    { icon: IconBrandMantine, title: 'Mantine', description: 'Proficient' },
    { icon: IconBrandNextjs, title: 'Next.js', description: 'Proficient' },
    { icon: IconBrandGithub, title: 'Git', description: 'Proficient' },
    { icon: IconBrandWordpress, title: 'WordPress', description: 'Proficient' },
    { icon: IconBrandTypescript, title: 'TypeScript', description: 'Proficient' },
    { icon: IconBrandDebian, title: 'GNU/Linux', description: 'Proficient' },
    { icon: IconTerminal2, title: 'Bash', description: 'Proficient' },
    { icon: IconBrandGoogle, title: 'Apps Script', description: 'Proficient' },
    { icon: IconBrandGoogle, title: 'English', description: 'Native' },
    { icon: IconBrandGoogle, title: 'Russian', description: 'Fuzzy' },
    { icon: IconBrandGoogle, title: 'French', description: 'Clumsy' },
];

export function Skills() {
    return (
        <div className={styles.skillsSection}>
            <Title order={2}>Skills and Technologies</Title>
            <Space h="md" />
            <Group align="center" justify="center" gap="md">
                {skills.map((skill, index) => (
                    <Card key={index} shadow="sm" padding="lg" className={styles.skillCard}>
                        <div className={styles.skillContent}>
                            <skill.icon size={40} />
                            <Text fw={500} mt="md">{skill.title}</Text>
                            <Text size="sm" color="dimmed">{skill.description}</Text>
                        </div>

                    </Card>
                ))}
            </Group>
        </div>
    );
}
