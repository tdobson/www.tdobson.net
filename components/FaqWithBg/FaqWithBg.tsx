import { Title, Container, Accordion, ThemeIcon, rem } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import classes from './FaqWithBg.module.css';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

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
          styles={{ label: { color: 'var(--mantine-color-black)' }, item: { border: 0 } }}
          chevron={
            <ThemeIcon radius="xl" className={classes.gradient} size={26}>
              <IconPlus style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ThemeIcon>
          }
        >
            <Accordion.Item value="food">
              <Accordion.Control>Will there be food?</Accordion.Control>
              <Accordion.Panel>
                Yep. Gluten-free people and vegetarians will be catered for. If you have dietary requirements beyond those, drop us a message and we'll see we have you covered.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="drinks">
              <Accordion.Control>Will there be drinks?</Accordion.Control>
              <Accordion.Panel>
                Yep - there should be sparking wine. Drivers, teetotals, children and weird people like Tim will all be sufficiently liquidated with soft drinks.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="what-to-wear">
              <Accordion.Control>What shall I wear?</Accordion.Control>
              <Accordion.Panel>
                Ideally clothes. We want you to be comfortable - so whether you feel most comfortable in vans, doc martens, stilettos, hiking boots or wellies - we want you to feel welcome. Some people will probably dress formalish as if it was a christening, but it's not - so other people may wear casualish clothes like they were going to a child's birthday.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="bring-gift">
              <Accordion.Control>Should I bring James a birthday present?</Accordion.Control>
              <Accordion.Panel>
                If you'd like to. There's certainly no pressure to. He explores everything with his mouth at the moment, but we'd prefer if you didn't give him sweets.
                If you want to bring his parents a present, gluten free chocolates and gluten-heavy pasta (or alcohol free beer tend to go down well). There's certainly no need or expectation. Without meaning to induce too much nausea, your presence is the only present we're hoping for.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="what-gift">
              <Accordion.Control>I want to bring James a present but am not sure what to get him?</Accordion.Control>
              <Accordion.Panel>
                We've no clue either. Other than not sweets, loud things or silly-expensive things, we've no clue or preferences.
                His current favourite toys are: a spoon, a xylophone stick, a small plastic ball.
                He likes this he can hold, and put in his mouth.
                We like things that don't hurt him.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="rsvp">
              <Accordion.Control>When do I need to RSVP by?</Accordion.Control>
              <Accordion.Panel>
                As soon as you can would be helpful, but we understand your life is as unpredictable as it is.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="parking">
              <Accordion.Control>Is there parking?</Accordion.Control>
              <Accordion.Panel>
                  Yes. There are 30 parking spaces in a fairly cramped carpark at the venue. If you prefer easy parking and a 3 minute walk, there's plenty of on-road parking <a href="https://maps.apple.com/?address=53.374722, -2.039139"> on Station Road.</a>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="baby">
              <Accordion.Control>Will James be there the entire time in a super good mood?</Accordion.Control>
              <Accordion.Panel>
                I mean, no. He's a 1 year old baby. He needs his naps, and shouts furiously when one is approaching as he gets big FOMO. We'll make things work despite this. This should not be a huge surprise.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="tent">
                <Accordion.Control>Is there anywhere I can stay?</Accordion.Control>
                <Accordion.Panel>
                    There's various <a href="https://www.airbnb.co.uk/s/Strines-Road--Strines--Marple--Stockport-SK6-7GB--UK/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-06-01&monthly_length=3&monthly_end_date=2024-09-01&price_filter_input_type=2&channel=EXPLORE&query=Strines%20Road%2C%20Strines%2C%20Marple%2C%20Stockport%20SK6%207GB&place_id=ChIJS6_t4qrKe0gRYnLMiVwmAHk&date_picker_type=calendar&checkin=2024-07-20&checkout=2024-07-22&adults=1&source=structured_search_input_header&search_type=autocomplete_click">BnB options</a> or <a href="https://uk.hotels.com/Hotel-Search?destination=sk6%207gb&flexibility=0_DAY&d1=2024-07-20&startDate=2024-07-20&d2=2024-07-22&endDate=2024-07-22&adults=1&rooms=1">Hotels options</a>. If you'd like to camp in our garden, there's camping space available. Bring your own tent etc.
                </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="dogs">
                <Accordion.Control>Can I bring my dog?</Accordion.Control>
                <Accordion.Panel>
                    James loves dogs. We like dogs. Dogs are welcome at our house (if they stay downstairs and off the furniture). The venue has multiple dog walking fields right next to it. We're not 100% sure if dogs are allowed inside the venue, and are working to find out.
                </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="babychange">
                <Accordion.Control>Are there baby change facilities?</Accordion.Control>
                <Accordion.Panel>
                    James is a baby. James will need changing. We're not quite sure right now if the venue has its own baby change facilities, but regardless of whether it does or doesn't, there will be a baby change area. Baby carers and babys are welcome (encouraged!) to use it.
                </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="weather">
              <Accordion.Control>Have you ordered nice weather?</Accordion.Control>
              <Accordion.Panel>
                Yep. Order number #12345-1337. 23C, Sunny, Dry. Confirmed.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="kids">
              <Accordion.Control>I have a child/baby/youth/teenager/man-child, can they bring their football, Space Hopper, remote control aeroplane, diesel scooter, life size toy crane or live wooly mamoth?</Accordion.Control>
              <Accordion.Panel>
                If you're comfortable with them bringing it to a babies birthday party (eg, in your eyes, it's not super expensive and fragile), and it'll help them enjoy themselves - please do! There's plenty of field space, a good size football pitch, tennis courts (with basket ball net) and a small play area all in close proximity to the venue.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="afterparty">
              <Accordion.Control>What's this about an afterparty?</Accordion.Control>
              <Accordion.Panel>
                Afterwards, everyone is invited over to our house (5 min walk away) for chilling, chilli and super fun tidying up games. The house may be cramped with many people in it - so that's an extra element to enjoy.
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="photos">
                <Accordion.Control>Can I take photos?</Accordion.Control>
                <Accordion.Panel>
                    Yes, but be mindful to share and capture photos that are complimentary to the people involved (of all ages). Eg. Baby howling = not ideal. Baby smiling = go for it. Person pulling awkward face = not idea. Person looking great = go for it.
                </Accordion.Panel>
            </Accordion.Item>

        </Accordion>
      </Container>
    </div>
  );
}
