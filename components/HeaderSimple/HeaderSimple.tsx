import React from 'react';
import { Container, Group, Burger } from '@mantine/core';
import Link from 'next/link';
import classes from './HeaderSimple.module.css';
import sections from '../../config/sections.json';
import * as Icons from '@tabler/icons-react';


export function HeaderSimple() {
    const items = sections.sections.map((section) => (
        <Link legacyBehavior key={section.name} href={section.link}>
            <a>
                {React.createElement(Icons[section.icon as keyof typeof Icons])}
                {section.name}
            </a>
        </Link>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Tim Dobson</div>
                <Group gap={5}>
                    {items}
                </Group>
                <Burger opened={false} size="sm" />
            </Container>
        </header>
    );
}
