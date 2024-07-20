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

                        <Text size="lg" style={{ fontWeight: 700 }} color={theme.colors.gray[8]} mb={theme.spacing.xl}>
                            Schedule:
                        </Text>
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
                            <List.Item>13:00 - Event starts, welcome drinks (alcoholic and non-alcoholic)</List.Item>
                            <List.Item>13:30 - Food will be served (meaty and veggie options available)</List.Item>
                            <List.Item>14:00 - Welcome Speech from Tim</List.Item>
                            <List.Item>
                                Promise Ceremony with Laura, Joe, Ellie, and Craig
                            </List.Item>
                            <List.Item>
                                Speeches by Clare, Joe, Judith, Sarah, Adrian, and Tony
                            </List.Item>
                            <List.Item>Toasts with alcoholic and non-alcoholic drinks</List.Item>
                            <List.Item>Happy Birthday Song with Candles</List.Item>
                            <List.Item>Cake (made by Clare)</List.Item>
                            <List.Item>16:00 - Event ends</List.Item>
                            <List.Item>
                                Afterparty at 272 Strines Road with meaty and veggie chilli, more drinks, and everyone is welcome
                            </List.Item>
                        </List>
                        <Text size="md" color={theme.colors.gray[7]} mb={theme.spacing.xl}>
                            Please don't feel the need to bring gifts, booze, or dinosaurs - but all are welcome if you'd like.
                        </Text>
                        <Text size="md" color={theme.colors.gray[7]}>
                            If you're struggling to find the venue and need to reach someone, please call 01457597007, and this will alert Jen and Tim simultaneously.
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
