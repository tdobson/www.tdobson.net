import { Container, Title, Text, Button, List, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "./AboutMe.module.css";

export function AboutMe() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Hi 👋 I'm Tim</Title>
            <Text className={classes.description} mt={30}>
              I help
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
                Experienced in full-stack development
              </List.Item>
              <List.Item className={classes.listItem}>
                Proficient in JavaScript, React, and Node.js
              </List.Item>
              <List.Item className={classes.listItem}>
                Strong background in Linux and open source technology
              </List.Item>
              <List.Item className={classes.listItem}>
                Passionate about open-source contributions
              </List.Item>
            </List>
            <Button
              variant="gradient"
              gradient={{ from: "blue", to: "green" }}
              size="xl"
              className={classes.control}
              mt={40}
              component="a"
              href="#projects"
            >
              Explore My Work
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
