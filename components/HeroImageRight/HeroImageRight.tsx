import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              You're invited to{' '}
              <Text component="span" inherit variant="gradient" gradient={{ from: 'blue', to: 'green' }}>
                James Day!
              </Text>
            </Title>

            <Text className={classes.description} mt={30}>
              Join us in celebrating James's first birthday for a special gathering for friends and family.
            </Text>

            <Button
                variant="gradient"
                gradient={{ from: 'blue', to: 'green' }}
                size="xl"
                className={classes.control}
                mt={40}
                component="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLScvqw8tJOMI53Q-Gu-fSNHdN5qefyMosfBuoUEj5R_ZNDp14g/viewform"
            >
              RSVP Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
