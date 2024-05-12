import { Container, Text, Title, List, Accordion } from '@mantine/core';
import { Layout } from '../components/Layout/Layout';
import { HeroImageRight } from '../components/HeroImageRight/HeroImageRight';
import { ContactUs } from '../components/ContactUs/ContactUs';
import { Fragment } from "react";
import { FaqWithBg } from '../components/FaqWithBg/FaqWithBg';


export default function JamesDayPage() {
    return (
        <Layout>
            <HeroImageRight
             />

            <Container>
                <div id="details">
                <Text size="xl" mt="xl">
                    On Sunday 21st July, from 13:00 til 16:00, we're hosting James Day!
                </Text>
                <Text mt="md">
                    This is a part birthday party, part get together, part weird humanist christening.
                </Text>

                <Title order={2} mt="xl" id="details">Details</Title>
                <Text>
                    When: Sunday 21st July, 13:00 - 16:00
                </Text>
                <Text>
                    Where: <a href="https://maps.apple.com/?address=53.3773238,-2.041604" target="_blank">Strines pavilion and recreational centre</a>, Pavilion Ln, Strines, Marple, Stockport, SK6 7GP
                </Text>

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
                    There will be an opportunity (if you would like) to give a short speech, give a reading, perform a song, etc. If this is something that you'd be keen to do, we'd love to know in advance.
                </Text>
                <Text>
                    Afterwards, there will be a low key afterparty at 272 Strines Road, SK6 7GB.
                </Text>
                </div>
                <FaqWithBg />

            <div id="rsvp">
            <ContactUs />
            </div>
        </Container>
</Layout>
);
}
