import React from 'react';
import { Text, Title, Container, List, ThemeIcon, Stack, Button } from '@mantine/core';
import { IconCode, IconBriefcase, IconTools, IconBusinessplan } from '@tabler/icons-react';
import styles from './CanIHelpYou.module.css';

export function CanIHelpYou() {
  return (
    <div className={styles.wrapper}>
      <Container size="lg">
        <Stack spacing="xl">
          <Title className={styles.title} order={2}>How Can I Help You?</Title>
          <Text className={styles.description}>
            Things that might indicate it's worth us chatting:
          </Text>

          <List
            spacing="xl"
            size="md"
            center
            className={styles.list}
          >
          <List.Item             icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconBriefcase size="1rem" />
            </ThemeIcon>
          }
          >
            <Text fw={700}>Unruly Complex Spreadsheets</Text>
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
            <Text fw={700}>Lack of knowledge about tech</Text>
            <Text>
              If you're keen for a pair of technical hands to help you make good decisions for your business that will support you in the long and short term, let's chat.
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
            The first step is always a no pressure, no jargon chat, to help me understand more about what you're up against.
          </Text>
          <Button
            component="a"
            href="#contact"
            size="lg"
            variant="filled"
            color="gray"
            className={styles.ctaButton}
            mt="xl"
          >
            Contact Me
          </Button>
          <Text size="sm" color="dimmed" mt="md" className={styles.footnote}>
            I'll try to tell you quickly, and point you in the direction of people who can.
          </Text>
        </Stack>
      </Container>
    </div>
  );
}
