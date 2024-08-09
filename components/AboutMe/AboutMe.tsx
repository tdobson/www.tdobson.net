import { Container, Title, Text, Button } from '@mantine/core';
import classes from './AboutMe.module.css';

export function AboutMe() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Hi there 👋 I'm Tim
            </Title>
            <Text className={classes.description} mt={30}>
              Self-taught developer and lifelong learner passionate about new technologies and building useful products.
            </Text>
            <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'green' }}
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
