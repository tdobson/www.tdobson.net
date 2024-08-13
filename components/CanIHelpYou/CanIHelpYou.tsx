import React from 'react';
import { Text, Title, Container, List, ThemeIcon, Stack } from '@mantine/core';
import { IconCode, IconBriefcase, IconTools, IconBusinessplan } from '@tabler/icons-react';
import styles from './CanIHelpYou.module.css';

export function CanIHelpYou() {
  return (
    <div className={styles.wrapper}>
      <Container size="lg">
        <Stack spacing="xl">
          <Title className={styles.title} order={2}>How Can I Help You?</Title>
          <Text className={styles.description}>
            I offer a range of services to help your business succeed:
          </Text>

          <List
            spacing="xl"
            size="md"
            center
            className={styles.list}
          >
          <List.Item>
            <Text fw={700}>Make Spreadsheets work for you</Text>
            <Text>
              If you have a complex Spreadsheets doing important, business critical things for your organisation and perhaps it feels like there's more going on than you can keep track of - then I can help.
            </Text>
          </List.Item>

          <List.Item
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconBriefcase size="1rem" />
              </ThemeIcon>
            }
          >
            <Text fw={700}>Technical Consulting</Text>
            <Text>
              Need expert advice on your tech stack or architecture? I can provide insights and recommendations to optimize your technical solutions.
            </Text>
          </List.Item>

          <List.Item
            icon={
              <ThemeIcon color="violet" size={24} radius="xl">
                <IconTools size="1rem" />
              </ThemeIcon>
            }
          >
            <Text fw={700}>Project Management</Text>
            <Text>
              I can help streamline your development process, manage teams, and ensure your projects are delivered on time and within budget.
            </Text>
          </List.Item>

          <List.Item
            icon={
              <ThemeIcon color="orange" size={24} radius="xl">
                <IconBusinessplan size="1rem" />
              </ThemeIcon>
            }
          >
            <Text fw={700}>Business Development</Text>
            <Text>
              From market analysis to growth strategies, I can help you identify opportunities and develop plans to scale your business effectively.
            </Text>
          </List.Item>
        </List>

          <Text className={styles.description} mt="xl">
            My approach is tailored to your specific needs, ensuring that you get the most value out of our collaboration. Whether you're a startup looking to establish your online presence or an established company aiming to optimize your digital strategy, I'm here to help you succeed.
          </Text>
        </Stack>
      </Container>
    </div>
  );
}
