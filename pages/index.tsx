import { Layout } from '../components/Layout/Layout';
import { Container, Text, Title, Box, useMantineTheme } from '@mantine/core';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { TimDobsonTimeline } from '../components/Timeline/Timeline';

export default function Index() {
    return (
        <Layout>
            <HeroSection />

            <TimDobsonTimeline />
            </Layout>
    );
}
