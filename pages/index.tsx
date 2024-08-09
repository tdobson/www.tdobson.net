import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { TimDobsonTimeline } from '../components/Timeline/Timeline';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel/TestimonialsCarousel';
import { Skills } from '../components/Skills/Skills';
import { AboutMe } from '../components/AboutMe/AboutMe';
import { Space } from '@mantine/core';
import { FooterSimple } from '../components/FooterSimple/FooterSimple';

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
            <div id="about-me">
                <HeroSection />
            </div>
            <Space h="xl" />
            <div id="timeline">
                <TimDobsonTimeline />
            </div>
            <Space h="xl" />
            <div id="skills">
                <Skills />
            </div>
            <Space h="xl" />
            <div id="testimonials">
                <TestimonialsCarousel />
            </div>
            <Space h="xl" />
            <div id="contact">
                {/* Contact form component goes here */}
            </div>

        </Layout>
    );
}
