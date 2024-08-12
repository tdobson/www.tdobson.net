import { Text, Title, SimpleGrid, Container, Image } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from './ContactUs.module.css';

export function ContactUs() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Title className={classes.title}>Contact Me</Title>
        <Text className={classes.description} mt="sm" mb={30}>
          Feel free to reach out to me through any of the following methods:
        </Text>

        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <div>
            <ContactIconsList />
          </div>
          
          <div className={classes.imageContainer}>
            <Image
              src="/tim.jpg"
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
