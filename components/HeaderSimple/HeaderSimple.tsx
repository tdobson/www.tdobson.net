
import React from 'react';
import { AppShell, Burger, Group, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link as ScrollLink } from 'react-scroll';
import classes from './HeaderSimple.module.css';
import sections from '../../config/sections.json';
import * as Icons from '@tabler/icons-react';

export function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure();

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
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Tim Dobson</div>
                        <Group ml="xl" gap={0} visibleFrom="sm">
                            {items}
                        </Group>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
                {items}
            </AppShell.Navbar>

            <AppShell.Main>
                {/* Your main content goes here */}
            </AppShell.Main>
        </AppShell>
    );
}
