import React from 'react';
import { Text, Container, Anchor, Title, Button } from '@mantine/core';
import socialMedia from '../../config/socialmedia.json';
import styles from './ContactMe.module.css';

export const ContactMe = () => {
  const linkedin = socialMedia.socialMedia.find((item) => item.name === 'LinkedIn');
  const messenger = socialMedia.socialMedia.find((item) => item.name === 'Messenger');

  return (
    <div className={styles.wrapper}>
      <div>
        <Title className={styles.title}>Contact Me</Title>
        <Text className={styles.description} mt="sm" mb={30}>
          Keen to chat? I offer a FREE 1 hour consultation call to see if we can help each other.
        </Text>
      </div>
      <div className={styles.form}>
        <Text align="left" size="md" mb="md">
          Email me at <Anchor href="mailto:work@tdobson.net">work@tdobson.net</Anchor>
        </Text>
        <Text align="left" size="md" mb="md">
          My usual rate is £300/day for remote work, and £400/day for onsite work within 20 miles of Stockport.
        </Text>
        <Text align="left" size="md" mb="md">
          Phone: 01457 597007
        </Text>
        <Text align="left" size="md" mb="md">
          Message me on <Anchor href={linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</Anchor> or <Anchor href={messenger.url} target="_blank" rel="noopener noreferrer">Messenger</Anchor>
        </Text>
        <Text align="left" size="md" mb="md">
          My usual working hours are 10-6pm, Mon-Fri, UK time.
        </Text>
        <Button
          variant="gradient"
          gradient={{ from: 'blue', to: 'green' }}
          size="xl"
          className={styles.control}
          mt={40}
          component="a"
          href="https://m.me/timdobsonuk"
        >
          Message me here
        </Button>
      </div>
    </div>
  );
};
