import { Text, Title, SimpleGrid, Container, Image } from "@mantine/core";
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

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
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
      </Container>
    </div>
  );
}
