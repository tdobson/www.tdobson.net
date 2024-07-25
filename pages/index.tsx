import { Container, Text, Title, List, ThemeIcon, Box, useMantineTheme } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import { Layout } from '../components/Layout/Layout';
import { HeroImageRight } from '../components/HeroImageRight/HeroImageRight';
import { ContactUs } from '../components/ContactUs/ContactUs';
import { Fragment } from "react";
import { FaqWithBg } from '../components/FaqWithBg/FaqWithBg';

export default function HomePage() {
    const theme = useMantineTheme();
    return (
        <Layout>
            <HeroImageRight />

            <Container>
                <div id="about-james" style={{ backgroundColor: theme.colors.gray[0], padding: theme.spacing.xl }}>
                    <Box>
                        <Title order={2} mb={theme.spacing.xl}>About James</Title>
                        <Text size="lg" mb={theme.spacing.xl}>
                            James is a small child who lives near Manchester with his mum and dad. He's full of energy and curiosity about the world around him.
                        </Text>
                        <Text size="lg" mb={theme.spacing.xl}>
                            His absolute favorite things in the world are spoons. Whether it's for eating, playing, or just holding, James can't get enough of them!
                        </Text>
                        <Text size="lg" mb={theme.spacing.xl}>
                            We've created this page to share a little bit about James with family and friends, while respecting his privacy as he grows up.
                        </Text>
                    </Box>
                </div>
                <FaqWithBg />

                <div id="rsvp">
                    <ContactUs />
                </div>
            </Container>
        </Layout>
    );
}
