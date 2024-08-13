
import React from 'react';
import { Group } from '@mantine/core';
import { Link as ScrollLink } from 'react-scroll';
import classes from './HeaderSimple.module.css';
import sections from '../../config/sections.json';
import * as Icons from '@tabler/icons-react';

export function HeaderSimple() {
    const items = sections.sections.map((section) => (
        <ScrollLink
            activeClass="active"
            to={section.link}
            key={section.name}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={classes.control}
        >
            {Icons[section.icon as keyof typeof Icons] ? React.createElement(Icons[section.icon as keyof typeof Icons] as React.ElementType) : null}
            {section.name}
        </ScrollLink>
    ));

    return (
        <Group justify="space-between" style={{ flex: 1 }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Tim Dobson</div>
            <Group ml="xl" gap={0} visibleFrom="sm">
                {items}
            </Group>
        </Group>
    );
}
