import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              It's almost {' '}
              <Text component="span" inherit variant="gradient" gradient={{ from: 'blue', to: 'green' }}>
                James Day!
              </Text>
            </Title>

            <Text className={classes.description} mt={30}>
            We're looking forward to seeing you for James's first birthday gathering for friends and family.
            </Text>

            <Button
                variant="gradient"
                gradient={{ from: 'blue', to: 'green' }}
                size="xl"
                className={classes.control}
                mt={40}
                component="a"
                href="https://maps.apple.com/?address=53.3773238,-2.041604"
            >
              Click here for the Parking Pin
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
