import React from 'react';
import { Text, Container, Anchor, Title, Button, Group } from '@mantine/core';
import { IconCode, IconBriefcase, IconProject, IconBusinessplan } from '@tabler/icons';
import socialMedia from '../../config/socialmedia.json';
import styles from './CanIHelpYou.module.css';

const CanIHelpYou = () => {
  const linkedin = socialMedia.socialMedia.find((item) => item.name === 'LinkedIn');
  const messenger = socialMedia.socialMedia.find((item) => item.name === 'Messenger');

  return (
    <div className={styles.wrapper} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Group position="center" spacing="xl">
        <Title className={styles.title}>Can I help you?</Title>
        <Text className={styles.description} mt="sm" mb={30}>
          Here are some of the things I might be able to help with:
        </Text>
        <div className={styles.box}>
          <ul className={styles.list}>
            <li><IconCode size={20} /> Web Development</li>
            <li><IconBriefcase size={20} /> Technical Consulting</li>
            <li><IconProject size={20} /> Project Management</li>
            <li><IconBusinessplan size={20} /> Business Development</li>
          </ul>
        <Text className={styles.description} mt="sm" mb={30}>
          My usual rate is £300/day for remote work, and £400/day for onsite work within 20 miles of Stockport.
        </Text>
        <Text className={styles.description} mt="sm" mb={30}>
          My usual working hours are 10-6pm, Mon-Fri, UK time.
        </Text>
      </Group>
      <Group position="center" spacing="xl" mt="xl">
        <div className={styles.form}>
          <Text align="left" size="md" mb="md">
            Email me at <Anchor href="mailto:work@tdobson.net">work@tdobson.net</Anchor>
          </Text>
          <Text align="left" size="md" mb="md">
            Phone: 01457 597007
          </Text>
          <Text align="left" size="md" mb="md">
            Message me on <Anchor href={linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</Anchor> or <Anchor href={messenger.url} target="_blank" rel="noopener noreferrer">Messenger</Anchor>
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
      </Group>
    </div>
  );
};

export default CanIHelpYou;
