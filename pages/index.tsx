import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { TimDobsonTimeline } from '../components/Timeline/Timeline';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel/TestimonialsCarousel';

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Tim Dobson - Professional Services</title>
                <meta name="description" content="Tim Dobson offers professional services in IT and business development. Read testimonials from satisfied clients." />
                <meta property="og:title" content="Tim Dobson - Professional Services" />
                <meta property="og:description" content="Tim Dobson offers professional services in IT and business development. Read testimonials from satisfied clients." />
                <meta property="og:image" content="/favicon.png" />
                <meta property="og:url" content="https://www.tdobson.net" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <HeroSection />
            <TimDobsonTimeline />
            <Space h="xl" />
            <TestimonialsCarousel />
        </Layout>
    );
}
