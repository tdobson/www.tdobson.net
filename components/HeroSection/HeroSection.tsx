import { Container, Title, Text, List, ThemeIcon, Paper } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroSection.module.css';

export function HeroSection() {
  return (
    <div className={classes.hero}>
      <Container size="lg">
        <Title className={classes.title}>
          About Me
        </Title>

        <Text className={classes.description} mt={30}>
          Tim Dobson, developer, and founder of The Climbing Clan and The Caving Crew.
        </Text>

        <Paper className={classes.descriptionBox}>
          <List
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
            mt={30}
          >
            <List.Item className={classes.listItem}>
              <Text>
                🔭 I’m currently the chair of The Climbing Clan and The Caving Crew, BMC and BCA affiliated climbing and caving clubs that I founded. Through my work with these clubs, I've developed several software products to assist with club operations. Most notably, I've created neoClan, a second-generation membership check-in system.
              </Text>
            </List.Item>
            <List.Item className={classes.listItem}>
              <Text>
                🌱 I’m currently teaching myself React with the Mantine framework and Next.js, as well as exploring react-query and advanced git workflows.
              </Text>
            </List.Item>
            <List.Item className={classes.listItem}>
              <Text>
                👯 I’m keen on opportunities for freelance work and development. If you have an exciting project, I'd love to collaborate!
              </Text>
            </List.Item>
            <List.Item className={classes.listItem}>
              <Text>
                💬 Ask me about Linux administration, rock climbing, and caving.
              </Text>
            </List.Item>
            <List.Item className={classes.listItem}>
              <Text>
                ⚡ Fun fact: I have a wonderful son named James.
              </Text>
            </List.Item>
          </List>
        </Paper>
      </Container>
    </div>
  );
}
