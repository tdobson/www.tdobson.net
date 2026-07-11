import React from "react";
import {
  Text,
  Title,
  Container,
  List,
  ThemeIcon,
  Stack,
  Button,
} from "@mantine/core";
import {
  IconCode,
  IconBriefcase,
  IconTools,
  IconBusinessplan,
  IconRocket,
  IconBuildingStore,
  IconDeviceMobile,
  IconSun,
} from "@tabler/icons-react";
import { Link } from "react-scroll";
import styles from "./CanIHelpYou.module.css";
import classes from "../ContactUs/ContactUs.module.css";

export function CanIHelpYou() {
  return (
    <div className={styles.wrapper}>
      <Container size="lg">
        <Stack gap="xl">
          <Title className={styles.title} order={2}>
            How Can I Help You?
          </Title>

          <List spacing="xl" size="md" center className={styles.list}>
            <List.Item
              icon={
                <ThemeIcon color="violet" size={48} radius="xl">
                  <IconRocket size="1.5rem" />
                </ThemeIcon>
              }
            >
              <Text fw={700}>Legacy Applications &amp; Agency Rescue</Text>
              <Text>
                Inherited a piece of software with no documentation? Agency
                relationship broken down and you need someone to take over the
                code? I specialise in picking up the pieces: understanding
                what you've got, securing it, and getting it moving forward
                again.
              </Text>
            </List.Item>

            <List.Item
              icon={
                <ThemeIcon color="violet" size={48} radius="xl">
                  <IconBuildingStore size="1.5rem" />
                </ThemeIcon>
              }
            >
              <Text fw={700}>Shopify &amp; WordPress</Text>
              <Text>
                Whether it's a headless Shopify Hydrogen storefront, a
                WooCommerce membership system, or a WordPress site that needs
                to be faster. I've built and rescued e-commerce platforms
                that actually earn.
              </Text>
            </List.Item>

            <List.Item
              icon={
                <ThemeIcon color="violet" size={48} radius="xl">
                  <IconDeviceMobile size="1.5rem" />
                </ThemeIcon>
              }
            >
              <Text fw={700}>Mobile Apps &amp; React Native</Text>
              <Text>
                From iOS and Android apps for field teams working offline
                to migrating legacy Xamarin apps to modern frameworks. If it
                needs to work on a phone, I can build it.
              </Text>
            </List.Item>

            <List.Item
              icon={
                <ThemeIcon color="violet" size={48} radius="xl">
                  <IconSun size="1.5rem" />
                </ThemeIcon>
              }
            >
              <Text fw={700}>Energy &amp; Solar PV Software</Text>
              <Text>
                I've spent 5+ years building software for the solar
                installation industry: job management, compliance,
                materials calculators, and certification workflows. If
                you're in solar, I already speak your language.
              </Text>
            </List.Item>

            <List.Item
              icon={
                <ThemeIcon color="violet" size={48} radius="xl">
                  <IconBriefcase size="1.5rem" />
                </ThemeIcon>
              }
            >
              <Text fw={700}>Complex Spreadsheets → Proper Apps</Text>
              <Text>
                If your business runs on a spreadsheet that's grown beyond
                its limits. Slow, fragile, impossible to share. I can turn
                it into a fast, mobile-friendly web app while keeping the
                interface your team already knows.
              </Text>
            </List.Item>

            <List.Item
              icon={
                <ThemeIcon color="violet" size={48} radius="xl">
                  <IconTools size="1.5rem" />
                </ThemeIcon>
              }
            >
              <Text fw={700}>Something Else?</Text>
              <Text>
                Linux administration, Git repository surgery, security
                audits, public relations, or just a second opinion on a
                tech decision, get in touch and we'll figure out if I can
                help.
              </Text>
            </List.Item>
          </List>

          <Text className={styles.description} mt="xl">
            The first step is always a no pressure, no jargon chat, to help me
            understand more about what you're working with.
          </Text>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="contact" smooth={true} duration={500}>
              <Button
                variant="gradient"
                gradient={{ from: "blue", to: "green" }}
                size="xl"
                className={classes.control}
                mt={40}
              >
                Arrange a Call?
              </Button>
            </Link>
          </div>
        </Stack>
      </Container>
    </div>
  );
}
