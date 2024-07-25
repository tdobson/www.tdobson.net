import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { ContactIconsList } from './ContactIcons';
import classes from './ContactUs.module.css';

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];


export function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
        <div>
          <Title className={classes.title}></Title>
          <Text className={classes.description} mt="sm" mb={30}>
          </Text>


        </div>
        <div className={classes.form}>
          <Title className={classes.title} >
            Contact James's parents
          </Title>

          <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'green' }}
              size="xl"
              className={classes.control}
              mt={40}
              component="a"
              href="https://m.me/timdobsonuk"
          >
            Tap here to navigate
          </Button>
        </div>
    </div>
  );
}
