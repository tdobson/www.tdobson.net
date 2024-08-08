import { Layout } from '../components/Layout/Layout';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { TimDobsonTimeline } from '../components/Timeline/Timeline';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel/TestimonialsCarousel';

export default function Index() {
    return (
        <Layout>
            <HeroSection />

            <TimDobsonTimeline />
            <TestimonialsCarousel />
            </Layout>
    );
}
