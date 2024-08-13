import React from 'react';
import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeaderSimple } from '../HeaderSimple/HeaderSimple';
import { FooterSimple } from '../FooterSimple/FooterSimple';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <div>
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <HeaderSimple />
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
                <HeaderSimple />
            </AppShell.Navbar>

            <AppShell.Main>
                {children}
            </AppShell.Main>

        </AppShell>
    <FooterSimple />
        </div>
);
}
