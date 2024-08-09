
import { Container, Group, Burger } from '@mantine/core';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import classes from './FooterSimple.module.css';
import sections from '../../config/sections.json';
import socialMedia from '../../config/socialmedia.json';
import * as Icons from '@tabler/icons-react';
import React, { useState } from 'react';

export function FooterSimple() {
    const [opened, setOpened] = useState(false);

    const items = sections.sections.map((section) => (
        <ScrollLink
            key={section.name}
            to={section.link.substring(1)}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={classes.link}
            onClick={() => setOpened(false)}
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

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Tim Dobson</div>
                <Group gap={5} className={`${classes.links} ${opened ? 'opened' : ''}`}>
                    {items}
                </Group>
                <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" className={classes.burger} />
            </Container>
            <Container className={classes.inner}>
                <Group className={classes.socialLinks}>{socialItems}</Group>
            </Container>
        </div>
    );
}
