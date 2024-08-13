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
              I help you make technology work for your business.
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
              I love reviving old, abandoned apps and spreadsheets
            </List.Item>
              <List.Item className={classes.listItem}>
                Keen to help you get things done.
              </List.Item>
              <List.Item className={classes.listItem}>
                Focused, no jargon, no bullshit approach
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
