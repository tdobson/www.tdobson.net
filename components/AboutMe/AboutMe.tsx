import { Container, Title, Text, Button, List, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { Link as ScrollLink } from "react-scroll";
import classes from "./AboutMe.module.css";

export function AboutMe() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Hi 👋 I'm Tim</Title>
            <Text className={classes.description} mt={30}>
              I help make technology work for your business. Whether that's
              rescuing a broken Shopify store, turning a sprawling spreadsheet
              into a proper app, or building mobile software for field teams.
            </Text>
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconCheck size={16} />
                </ThemeIcon>
              }
              mt={20}
            >
              <List.Item className={classes.listItem}>
                I specialise in reviving legacy apps and taking over from
                agencies
              </List.Item>
              <List.Item className={classes.listItem}>
                React, React Native, Shopify, WordPress, TypeScript, Debian,
                Git
              </List.Item>
              <List.Item className={classes.listItem}>
                Focused, no jargon, no bullshit. I tell you what I can and
                can't do
              </List.Item>
            </List>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button
                variant="gradient"
                gradient={{ from: "blue", to: "green" }}
                size="xl"
                className={classes.control}
                mt={40}
              >
                Explore My Work
              </Button>
            </ScrollLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
