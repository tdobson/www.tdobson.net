import React from 'react';
import { Text, Container, Anchor } from '@mantine/core';
import socialMedia from '../../config/socialmedia.json';
import styles from './ContactMe.module.css';

export const ContactMe = () => {
  const linkedin = socialMedia.socialMedia.find((item) => item.name === 'LinkedIn');
  const messenger = socialMedia.socialMedia.find((item) => item.name === 'Messenger');

  return (
    <Container className={styles.contactMeContainer}>
      <Text align="center" size="xl" weight={700} mb="md">Contact Me</Text>
      <Text align="center" size="md" mb="md">
        Email me at <Anchor href="mailto:work@tdobson.net">work@tdobson.net</Anchor>
      </Text>
      <Text align="center" size="md" mb="md">
        My usual rate is £300/day for remote work, and £400/day for onsite work within 20 miles of Stockport.
      </Text>
      <Text align="center" size="md" mb="md">
        Phone: 01457 597007
      </Text>
      <Text align="center" size="md" mb="md">
        Message me on <Anchor href={linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</Anchor> or <Anchor href={messenger.url} target="_blank" rel="noopener noreferrer">Messenger</Anchor>
      </Text>
    </Container>
  );
};
