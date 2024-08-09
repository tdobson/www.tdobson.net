
import { Container, Group, Burger } from '@mantine/core';
import { Link as ScrollLink, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import classes from './FooterSimple.module.css';
import sections from '../../config/sections.json';
import socialMedia from '../../config/socialmedia.json';
import * as Icons from '@tabler/icons-react';
import React, { useState, useEffect } from 'react';

export function FooterSimple() {
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        Events.scrollEvent.register('begin', (to, element) => {
            console.log('begin', to, element);
        });

        Events.scrollEvent.register('end', (to, element) => {
            console.log('end', to, element);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const handleSetActive = (to) => {
        console.log(to);
    };

const items = sections.sections.map((section) => (
    <ScrollLink
        activeClass="active"
        to={section.link}
        key={section.name}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={classes.link}
        onSetActive={handleSetActive}
    >
        {Icons[section.icon as keyof typeof Icons] ? React.createElement(Icons[section.icon as keyof typeof Icons] as React.ElementType) : null}
        {section.name}
    </ScrollLink>
));

    const socialItems = socialMedia.socialMedia.map((media) => (
        <a key={media.name} href={media.url} className={classes.link} target="_blank" rel="noopener noreferrer">
            {Icons[media.icon as keyof typeof Icons] ? React.createElement(Icons[media.icon as keyof typeof Icons] as React.ElementType) : null}
            {media.name}
        </a>
    ));

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    console.log(items)

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Group gap={5} className={`${classes.links} ${opened ? 'opened' : ''}`}>
                    {items}
                </Group>
                <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" className={classes.burger} />
            </Container>
            <Container className={classes.inner}>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>My Social Links</div>
                <Group className={classes.socialLinks}>
                    {socialItems}
                </Group>
            </Container>
            <Container className={classes.inner}>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>My Social Links</div>
                <Group className={classes.socialLinks}>
                    {socialItems}
                </Group>
            </Container>
            <Container className={classes.inner}>
                <div className={classes.copyright}>
                    © Tim Dobson {new Date().getFullYear()}
                </div>
            </Container>
    );
}
