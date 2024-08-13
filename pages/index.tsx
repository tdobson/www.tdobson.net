import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { TimDobsonTimeline } from "../components/Timeline/Timeline";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel/TestimonialsCarousel";
import { Skills } from "../components/Skills/Skills";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { Space } from "@mantine/core";
import { Projects } from "../components/Projects/Projects";
import { FooterSimple } from "../components/FooterSimple/FooterSimple";
import { CanIHelpYou } from "../components/CanIHelpYou/CanIHelpYou";
import { ContactUs } from "../components/ContactUs/ContactUs";
import { Rates } from "../components/Rates/Rates";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Tim Dobson - Web Developer</title>
        <meta
          name="description"
          content="Tim Dobson offers professional services in web, tech, IT and business development. Read testimonials from satisfied clients."
        />
        <meta
          property="og:title"
          content="Tim Dobson - Professional Services"
        />
        <meta
          property="og:description"
          content="Tim Dobson offers professional services in web, tech, IT and business development. Read testimonials from satisfied clients."
        />
        <meta property="og:image" content="/tim.jpg" />
        <meta property="og:url" content="https://www.tdobson.net" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <Space h="xl" />
      <div id="can-i-help">
        <CanIHelpYou />
      </div>

      <Space h="xl" />
      <div id="projects">
        <Projects />
      </div>
      <Space h="xl" />
      <div id="testimonials">
        <TestimonialsCarousel />
      </div>
      <Space h="xl" />

      <Space h="xl" />
      <div id="rates">
        <Rates />
      </div>
      <Space h="xl" />
      <div id="contact">
        <ContactUs />
      </div>
    </Layout>
  );
}
