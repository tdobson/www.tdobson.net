import { HeroImageRight } from '../components/HeroImageRight/HeroImageRight';
import { Layout } from '../components/Layout/Layout';
import { Container, Card, Grid, Text } from '@mantine/core';

export default function HomePage() {
    return (
        <Layout>
        <>
            <HeroImageRight
                title="Welcome to James Day!"
                description="Join us in celebrating James's first birthday and a special family gathering."
                image="/path/to/james-photo.jpg"
                ctaText="RSVP Now"
                ctaLink="/rsvp"
            />
            <Container>
                <Grid gutter="md">
                    <Grid.Col span={4}>
                        <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Text weight={500} size="lg" mt="md">
                                Date
                            </Text>
                            <Text size="sm" color="dimmed">
                                Sunday, July 21st, 2024
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Text weight={500} size="lg" mt="md">
                                Time
                            </Text>
                            <Text size="sm" color="dimmed">
                                1:00 PM - 3:00 PM
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Text weight={500} size="lg" mt="md">
                                Location
                            </Text>
                            <Text size="sm" color="dimmed">
                                Strines pavilion and recreational centre, Pavilion Ln, Strines, Marple, Stockport SK6 7GP
                            </Text>
                        </Card>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
        </Layout>
    );
}
