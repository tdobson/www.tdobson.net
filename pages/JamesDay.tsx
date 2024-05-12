import { Container, Text, Title, List, Accordion } from '@mantine/core';
import { Layout } from '../components/Layout/Layout';
import { HeroImageRight } from '../components/HeroImageRight/HeroImageRight';
import { ContactUs } from '../components/ContactUs/ContactUs';
import { Fragment } from "react";

export default function JamesDayPage() {
    return (
        <Layout>
            <HeroImageRight
                title="Welcome to James Day!"
                description="Join us in celebrating James's first birthday and a special family gathering."
                image="/path/to/james-photo.jpg"
                ctaText="RSVP Now"
                ctaLink="#rsvp"
            />

            <Container>
                <Text size="xl" weight={500} mt="xl">
                    On Sunday 21st July, from 13:00 til 15:00, we're hosting James Day!
                </Text>
                <Text mt="md">
                    This is a part birthday party, part get together, part weird humanist christening.
                </Text>

                <Title order={2} mt="xl" id="details">Details</Title>
                <Text>
                    When: Sunday 21st July, 13:00 - 15:00
                </Text>
                <Text>
                    Where: <a href="https://maps.apple.com/?address=53.3773238,-2.041604" target="_blank">Strines pavilion and recreational centre</a>, Pavilion Ln, Strines, Marple, Stockport, SK6 7GP
                </Text>

                <Title order={3} mt="md">What's the format?</Title>
                <Text>Expect:</Text>
                <List>
                    <List.Item>Speeches</List.Item>
                    <List.Item>Toasts</List.Item>
                    <List.Item>Food</List.Item>
                    <List.Item>Chat</List.Item>
                    <List.Item>Readings/songs/poems/raps</List.Item>
                </List>
                <Text>
                    Precisely what order or when is TBC.
                    There will be an opportunity (if you would like) to give a short speech, give a reading, perform a song, etc. If this is something that you'd be keen to do, please drop us a message in advance.
                </Text>

                <Title order={2} mt="xl" id="faq">FAQs</Title>
                <Accordion>
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
                            Ideally clothes. We want you to be comfortable - so whether you feel most comfortable in vans, doc martens, stilettos, hiking boots or wellies - we want you to feel welcome. Some people will probably dress formalish as if it was a christening, but it's not so other people may wear casualish clothes like they were going to a child's birthday.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="bring-gift">
                        <Accordion.Control>Should I bring James a birthday present?</Accordion.Control>
                        <Accordion.Panel>
                            If you'd like to. There's certainly no pressure to, and at this age, it's almost certain that he'll find something. He explores everything with his mouth at the moment, but we'd prefer if you didn't give him sweets.
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

                    <Accordion.Item value="parking">
                        <Accordion.Control>Is there parking?</Accordion.Control>
                        <Accordion.Panel>
                            Yes. There are 30 parking spaces in a fairly cramped carpark here. If you prefer easy parking and a 3 minute walk, there's plenty of on-road parking here on Station Road.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="baby">
                        <Accordion.Control>Will James be there the entire time in a super good mood?</Accordion.Control>
                        <Accordion.Panel>
                            I mean, no. He's a 1 year old baby. He needs his naps, and shouts furiously when one is approaching as he gets big FOMO. We'll make things work despite this. This should not be a huge surprise.
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
                    <Accordion.Control>Will there be an afterparty?</Accordion.Control>
                    <Accordion.Panel>
                        Afterwards, everyone is invited over to our house (5 min walk away) for chilling, chilli and super fun tidying up games. The house may be cramped with many people in it - so that's an extra element to enjoy.
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>

            <Title order={2} mt="xl" id="rsvp">RSVP</Title>
            <ContactUs />
        </Container>
</Layout>
);
}
