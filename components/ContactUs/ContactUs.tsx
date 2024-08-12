import { Text, Title, SimpleGrid, Button, Group, Container } from '@mantine/core';
import { IconBrandLinkedin, IconBrandFacebookMessenger } from '@tabler/icons-react';
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
          
          <div className={classes.form}>
            <Group grow>
              <Button
                leftIcon={<IconBrandLinkedin size={16} />}
                variant="filled"
                component="a"
                href="https://www.linkedin.com/in/timdobson/"
                target="_blank"
              >
                Connect on LinkedIn
              </Button>
              
              <Button
                leftIcon={<IconBrandFacebookMessenger size={16} />}
                variant="filled"
                component="a"
                href="https://m.me/timdobsonuk"
                target="_blank"
              >
                Message on Facebook
              </Button>
            </Group>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}
