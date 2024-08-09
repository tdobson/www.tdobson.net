import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { TimDobsonTimeline } from '../components/Timeline/Timeline';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel/TestimonialsCarousel';
import { Skills } from '../components/Skills/Skills';
import { AboutMe } from '../components/AboutMe/AboutMe';
import { Space } from '@mantine/core';

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Tim Dobson - Web Developer</title>
                <meta name="description" content="Tim Dobson offers professional services in web, tech, IT and business development. Read testimonials from satisfied clients." />
                <meta property="og:title" content="Tim Dobson - Professional Services" />
                <meta property="og:description" content="Tim Dobson offers professional services in web, tech, IT and business development. Read testimonials from satisfied clients." />
                <meta property="og:image" content="/tim.jpg" />
                <meta property="og:url" content="https://www.tdobson.net" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <AboutMe />
            <HeroSection />
            <Space h="xl" />
            <TimDobsonTimeline />
            <Space h="xl" />
            <Skills />
            <Space h="xl" />
            <TestimonialsCarousel />
        </Layout>
    );
}
