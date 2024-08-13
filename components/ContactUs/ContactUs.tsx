import { Text, Title, SimpleGrid, Container, Image, Button } from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import classes from "./ContactUs.module.css";

export function ContactUs() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Title className={classes.title}>Arrange a call?</Title>
        <Text className={classes.description} mt="sm" mb={30}>
          Let's have a chat and see if we can help each other?
        </Text>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
          <div>
            <ContactIconsList />
          </div>

          <div className={classes.imageContainer}>
            <Image
              src="tim.jpg"
              alt="Tim Dobson"
              radius="md"
              className={classes.image}
            />
          </div>
        </SimpleGrid>

        <Button
          variant="gradient"
          gradient={{ from: "blue", to: "green" }}
          size="xl"
          className={classes.control}
          mt={40}
          component="a"
          href="mailto:work@tdobson.net"
        >
          Send me a message
        </Button>
      </Container>
    </div>
  );
}
