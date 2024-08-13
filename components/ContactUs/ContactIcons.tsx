import { Text, Box, Stack, rem } from "@mantine/core";
import {
  IconSun,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandMessenger,
  IconAt,
} from "@tabler/icons-react";
import classes from "./ContactIcons.module.css";

const CONTACT_INFO = [
  {
    title: "Email",
    description: "work@tdobson.net",
    icon: IconAt,
    link: "mailto:work@tdobson.net",
  },
  {
    title: "Phone",
    description: "01457 597007",
    icon: IconPhone,
    link: "tel:+441457597007",
  },
  {
    title: "LinkedIn",
    description: "Connect on LinkedIn",
    icon: IconBrandLinkedin,
    link: "https://www.linkedin.com/in/timdobson/",
  },
  {
    title: "Facebook",
    description: "Message on Facebook",
    icon: IconBrandMessenger,
    link: "https://m.me/timdobsonuk",
  },
  { title: "Contact Hours", description: "10 a.m. – 6 p.m.", icon: IconSun },
  {
    title: "Location",
    description: "Stockport, Greater Manchester",
    icon: IconMapPin,
  },
];

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
  link?: string;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  link,
  ...others
}: ContactIconProps) {
  const content = (
    <>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.wrapper}
        {...(others as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={classes.wrapper} {...others}>
      {content}
    </div>
  );
}

export function ContactIconsList() {
  const items = CONTACT_INFO.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
