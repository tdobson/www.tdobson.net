import { Title, Container, Accordion, ThemeIcon, rem } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import classes from "./FaqWithBg.module.css";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export function FaqWithBg() {
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title ta="center" className={classes.title}>
          Q&A
        </Title>

        <Accordion
          chevronPosition="right"
          defaultValue="reset-password"
          chevronSize={26}
          variant="separated"
          disableChevronRotation
          styles={{
            label: { color: "var(--mantine-color-black)" },
            item: { border: 0 },
          }}
          chevron={
            <ThemeIcon radius="xl" className={classes.gradient} size={26}>
              <IconPlus
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ThemeIcon>
          }
        >
          <Accordion.Item value="privacy">
            <Accordion.Control>
              Why is there limited information on this site?
            </Accordion.Control>
            <Accordion.Panel>
              We've chosen to limit the information shared on this site to
              protect James's privacy as he grows up. We believe it's important
              to give him control over his digital footprint as he gets older.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="updates">
            <Accordion.Control>
              How can I get updates about James?
            </Accordion.Control>
            <Accordion.Panel>
              For family and close friends, we prefer to share updates and
              photos through more private channels. If you're part of this group
              and haven't been receiving updates, please reach out to us
              directly.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="contact">
            <Accordion.Control>
              How can I contact James's family?
            </Accordion.Control>
            <Accordion.Panel>
              If you're a family member or close friend and need to get in
              touch, please use the contact information you already have. For
              privacy reasons, we don't share personal contact details on this
              public website.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
