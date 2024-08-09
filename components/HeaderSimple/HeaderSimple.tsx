
import React, { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { Link as ScrollLink } from 'react-scroll';
import classes from './HeaderSimple.module.css';
import sections from '../../config/sections.json';
import * as Icons from '@tabler/icons-react';

export function HeaderSimple() {
    const [opened, setOpened] = useState(false);
    const items = sections.sections.map((section) => (
        <ScrollLink
            key={section.name}
            to={section.link.substring(1)}
            smooth={true}
            duration={500}
            className={classes.link}
            onClick={() => setOpened(false)}
        >
            {Icons[section.icon as keyof typeof Icons] ? React.createElement(Icons[section.icon as keyof typeof Icons] as React.ElementType) : null}
            {section.name}
        </ScrollLink>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Tim Dobson</div>
                <Group gap={5} className={`${classes.links} ${opened ? 'opened' : ''}`}>
                    {items}
                </Group>
                <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" className={classes.burger} />
            </Container>
        </header>
    );
}
