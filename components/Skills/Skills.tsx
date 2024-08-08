import { Card, Group, Text, Title, Space } from '@mantine/core';
import { IconBrandJavascript, IconBrandPhp, IconBrandHtml5, IconBrandCss3, IconBrandReact, IconBrandMantine, IconBrandNextjs, IconBrandGithub, IconBrandWordpress, IconBrandUbuntu, IconBrandGoogle } from '@tabler/icons-react';
import styles from './Skills.module.css';

const skills = [
    { icon: IconBrandJavascript, title: 'JavaScript', description: 'Proficient' },
    { icon: IconBrandPhp, title: 'PHP', description: 'Proficient' },
    { icon: IconBrandHtml5, title: 'HTML', description: 'Proficient' },
    { icon: IconBrandCss3, title: 'CSS', description: 'Proficient' },
    { icon: IconBrandReact, title: 'React.js', description: 'Proficient' },
    { icon: IconBrandMantine, title: 'Mantine', description: 'Proficient' },
    { icon: IconBrandNextjs, title: 'Next.js', description: 'Proficient' },
    { icon: IconGit, title: 'Git', description: 'Proficient' },
    { icon: IconBrandWordpress, title: 'WordPress', description: 'Proficient' },
    { icon: IconBrandLinux, title: 'Linux', description: 'Proficient' },
    { icon: IconBrandGoogle, title: 'Google Apps Script', description: 'Proficient' },
    { icon: IconBrandGoogle, title: 'English', description: 'Native' },
    { icon: IconBrandGoogle, title: 'Russian', description: 'GSCE/not conversational' },
    { icon: IconBrandGoogle, title: 'French', description: 'A Level/clumsy conversational' },
];

export function Skills() {
    return (
        <div className={styles.skillsSection}>
            <Title order={2}>Skills and Technologies</Title>
            <Space h="md" />
            <Group >
                {skills.map((skill, index) => (
                    <Card key={index} shadow="sm" padding="lg" className={styles.skillCard}>
                        <skill.icon size={40} />
                        <Text fw={500} mt="md">{skill.title}</Text>
                        <Text size="sm" color="dimmed">{skill.description}</Text>
                    </Card>
                ))}
            </Group>
        </div>
    );
}
