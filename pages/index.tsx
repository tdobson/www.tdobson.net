import { Container, Text, Title, List, ThemeIcon, Box, useMantineTheme } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import { Layout } from '../components/Layout/Layout';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { Fragment } from "react";

export default function HomePage() {
    const theme = useMantineTheme();
    return (
        <Layout>
            <HeroSection />

            <Container>
                <div id="about" style={{ backgroundColor: theme.colors.gray[0], padding: theme.spacing.xl }}>
                    <Box>
                        <Title order={2} mb={theme.spacing.xl}>About Me</Title>
                        <Text size="lg" mb={theme.spacing.xl}>
                            Tim Dobson, developer, and founder of The Climbing Clan and The Caving Crew.
                        </Text>
                        <List
                            spacing="sm"
                            size="lg"
                            center
                            icon={
                                <ThemeIcon color="blue" size={24} radius="xl">
                                    <IconCircleCheck size={16} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>I’m currently the chair of The Climbing Clan and The Caving Crew, BMC and BCA affiliated climbing and caving clubs that I founded.</List.Item>
                            <List.Item>Through my work with these clubs, I've developed several software products to assist with club operations. Most notably, I've created neoClan, a second-generation membership check-in system.</List.Item>
                            <List.Item>I’m currently teaching myself React with the Mantine framework and Next.js, as well as exploring react-query and advanced git workflows.</List.Item>
                            <List.Item>I’m keen on opportunities for freelance work and development. If you have an exciting project, I'd love to collaborate!</List.Item>
                            <List.Item>Ask me about Linux administration, rock climbing, and caving.</List.Item>
                            <List.Item>Fun fact: I have a wonderful son named James.</List.Item>
                        </List>
                    </Box>
                </div>
            </Container>
        </Layout>
    );
}
