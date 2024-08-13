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
                <ThemeIcon color="violet" size={24} radius="xl">
                  <IconBriefcase size="1rem" />
                </ThemeIcon>
              }
            >
              <Text fw={700}>Unruly Complex Spreadsheets</Text>
              <Text>
                If you have a complicated Spreadsheets doing business critical
                operations for your organisation, it may feels like there's more
                going on than you can keep track of.
              </Text>
            </List.Item>

            <List.Item
              icon={
                <ThemeIcon color="violet" size={24} radius="xl">
                  <IconBriefcase size="1rem" />
                </ThemeIcon>
              }
            >
              <Text fw={700}>Older Business Software</Text>
              <Text>
                If you have an older piece of software that's important to your
                business, but not doing all it could be doing now - let's chat.
              </Text>
            </List.Item>

            <List.Item
              icon={
                <ThemeIcon color="violet" size={24} radius="xl">
                  <IconTools size="1rem" />
                </ThemeIcon>
              }
            >
              <Text fw={700}>Helping you business with tech</Text>
              <Text>
                If you're keen for a pair of technical hands to help you make
                good decisions for your business that will support you in the
                long and short term, let's chat.
              </Text>
            </List.Item>

            <List.Item
              icon={
                <ThemeIcon color="violet" size={24} radius="xl">
                  <IconBusinessplan size="1rem" />
                </ThemeIcon>
              }
            >
              <Text fw={700}>Something else?</Text>
              <Text>
                If you're thinking about Solar Installations, Linux
                Administration, Software development, How to get customers,
                Public Relations or something else - please get in touch.
              </Text>
            </List.Item>
          </List>

          <Text className={styles.description} mt="xl">
            The first step is always a no pressure, no jargon chat, to help me
            understand more about what you're working with.
          </Text>
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
        </Stack>
      </Container>
    </div>
  );
}
