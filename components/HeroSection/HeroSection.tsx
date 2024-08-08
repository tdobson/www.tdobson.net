import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroSection.module.css';

export function HeroSection() {
  return (
    <div className={classes.hero}>
      <Container size="lg">
        <Title className={classes.title}>
          Hi there 👋 I'm Tim Dobson
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
      </Container>
    </div>
  );
}
