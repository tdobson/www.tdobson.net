import { Card, SimpleGrid, Text, Title, Space } from '@mantine/core';
import { IconBrandJavascript, IconBrandPhp, IconBrandHtml5, IconBrandCss3, IconBrandReact, IconBrandMantine, IconBrandNextjs, IconBrandGithub, IconBrandWordpress, IconBrandUbuntu, IconBrandGoogle, IconBrandTypescript, IconBrandDebian, IconTerminal2 } from '@tabler/icons-react';
import styles from './Skills.module.css';
import { useState, useEffect } from 'react';

const skills = [
    { icon: IconBrandJavascript, title: 'JavaScript' },
    { icon: IconBrandReact, title: 'React.js' },
    { icon: IconBrandWordpress, title: 'WordPress' },
    { icon: IconBrandGoogle, title: 'Apps Script' },
/*    { icon: IconBrandMantine, title: 'Mantine' },
    { icon: IconBrandPhp, title: 'PHP' },
    { icon: IconBrandHtml5, title: 'HTML' },
    { icon: IconBrandCss3, title: 'CSS' },
    { icon: IconBrandNextjs, title: 'Next.js' },
    { icon: IconBrandGithub, title: 'Git' },
    { icon: IconBrandTypescript, title: 'TypeScript' },
    { icon: IconBrandDebian, title: 'GNU/Linux' },
    { icon: IconTerminal2, title: 'Bash' },
    { icon: IconBrandGoogle, title: 'English' },
    { icon: IconBrandGoogle, title: 'Russian' },
    { icon: IconBrandGoogle, title: 'French' }, */
];

export function Skills() {
    const [skillsToShow, setSkillsToShow] = useState(skills.length);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSkillsToShow(4);
            } else {
                setSkillsToShow(skills.length);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.skillsSection}>
            <Title order={2}>Technologies</Title>
            <Space h="md" />
            <SimpleGrid
                cols={{ base: 2, sm: 3, md: 4, lg: 6 }}
                spacing={{ base: 'sm', sm: 'md' }}
                verticalSpacing={{ base: 'sm', sm: 'md' }}
            >
                {skills.slice(0, skillsToShow).map((skill, index) => (
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
