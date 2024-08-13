import { Container, Title, Text, Button } from "@mantine/core";
import classes from "./HeroImageRight.module.css";

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Meet{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "blue", to: "green" }}
              >
                James!
              </Text>
            </Title>

            <Text className={classes.description} mt={30}>
              James is a small child who lives near Manchester with his mum and
              dad. His favourite things are spoons!
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: "blue", to: "green" }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
