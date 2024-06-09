import { Container, Text, Title, List, ThemeIcon, Box, useMantineTheme } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import { Layout } from '../components/Layout/Layout';
import { HeroImageRight } from '../components/HeroImageRight/HeroImageRight';
import { ContactUs } from '../components/ContactUs/ContactUs';
import { Fragment } from "react";
import { FaqWithBg } from '../components/FaqWithBg/FaqWithBg';

export default function JamesDayPage() {
    const theme = useMantineTheme();
    return (
        <Layout>
            <HeroImageRight />

            <Container>
                <div id="details" style={{ backgroundColor: theme.colors.gray[0], padding: theme.spacing.xl }}>
                    <Box>
                        <Text size="xl" mb={theme.spacing.xl}>
                            On Sunday 21st July, from 13:00 til 16:00, we're hosting James Day!
                        </Text>
                        <Text mb={theme.spacing.xl}>
                            This is a part birthday party, part get together, part weird humanist christening.
                        </Text>

                        <Title order={2} mb={theme.spacing.xl}>Details</Title>
                        <Text size="lg" color={theme.colors.gray[7]} mb={theme.spacing.xl}>
                            When: Sunday 21st July, 13:00 - 16:00
                        </Text>
                        <Text size="lg" color={theme.colors.gray[7]} mb={theme.spacing.xl}>
                            Where: <a href="https://maps.apple.com/?address=53.3773238,-2.041604" target="_blank">Strines
                            pavilion and recreational centre</a>, Pavilion Ln, Strines, Marple, Stockport, SK6 7GP
                        </Text>

                        <Text size="lg" style={{ fontWeight: 700 }} color={theme.colors.gray[8]} mb={theme.spacing.xl}>Expect:</Text>
                        <List
                            spacing="xs"
                            size="md"
                            center
                            icon={
                                <ThemeIcon color="teal" size={24} radius="xl">
                                    <IconCircleCheck size={16} />
                                </ThemeIcon>
                            }
                            mb={theme.spacing.xl}
                        >
                            <List.Item>Speeches</List.Item>
                            <List.Item>Toasts</List.Item>
                            <List.Item>Food</List.Item>
                            <List.Item>Chat</List.Item>
                            <List.Item>Readings/songs/poems/raps</List.Item>
                        </List>
                        <Text size="md" color={theme.colors.gray[7]} mb={theme.spacing.xl}>
                            Precisely what order or when is TBC.
                            There will be an opportunity (if you would like) to give a short speech, give a reading,
                            perform a song, etc. If this is something that you'd be keen to do, we'd love to know in
                            advance.
                        </Text>
                        <Text size="md" color={theme.colors.gray[7]}>
                            Afterwards, there will be a low key afterparty at 272 Strines Road, SK6 7GB.
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
