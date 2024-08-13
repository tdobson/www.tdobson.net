import { Text, Title, SimpleGrid, Container, Image, Button, Paper } from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import classes from "./ContactUs.module.css";

export function ContactUs() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Title className={classes.title}>Arrange a call?</Title>
        <Text className={classes.description} mt="sm" mb={30}>
          Let's have a chat and see if we can help each other
        </Text>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
          <div style={{ height: '100%' }}>
            <ContactIconsList />
          </div>

          <div className={classes.imageContainer}>
            <Paper shadow="md" radius="md" className={classes.imagePaper}>
              <Image
                src="tim.jpg"
                alt="Tim Dobson"
                className={classes.image}
              />
            </Paper>
          </div>
        </SimpleGrid>

        <Button
          variant="gradient"
          gradient={{ from: "blue", to: "green" }}
          size="xl"
          className={classes.control}
          mt={40}
          component="a"
          href="mailto:work@tdobson.net?subject=About%20for%20a%20chat%3F&body=Hi%20Tim%2C%20I'm%20keen%20for%20a%20chat%20about%20XXX%20-%20are%20you%20free%20for%20a%20chat%20on%20X%20at%20Y%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          Send me an email
        </Button>
      </Container>
    </div>
  );
}
