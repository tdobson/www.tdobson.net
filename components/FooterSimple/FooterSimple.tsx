import { Container, Group } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './FooterSimple.module.css';
import sections from '../../config/sections.json';
import socialMedia from '../../config/socialmedia.json';
import * as Icons from '@tabler/icons-react';
import React from 'react';



export function FooterSimple() {
    const items = sections.sections.map((section) => (
        <a key={section.name} href={section.link} className={classes.link}>
            {Icons[section.icon as keyof typeof Icons] ? React.createElement(Icons[section.icon as keyof typeof Icons] as React.ElementType) : null}
            {section.name}
        </a>
    ));

    const socialItems = socialMedia.socialMedia.map((media) => (
        <a key={media.name} href={media.url} className={classes.link} target="_blank" rel="noopener noreferrer">
            {Icons[media.icon as keyof typeof Icons] ? React.createElement(Icons[media.icon as keyof typeof Icons] as React.ElementType) : null}
            {media.name}
        </a>
    ));

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Tim Dobson</div>
                <Group className={classes.links}>{items}</Group>
                <Group className={classes.links}>{socialItems}</Group>
            </Container>
        </div>
    );
}
