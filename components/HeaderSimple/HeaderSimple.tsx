import { Container, Group, Burger } from '@mantine/core';
import Link from 'next/link';
import classes from './HeaderSimple.module.css';

const links = [
    { link: '/#about', label: 'About' },
    { link: '/#experience', label: 'Experience' },
    { link: '/#projects', label: 'Projects' },
    { link: '/#contact', label: 'Contact' },
];

export function HeaderSimple() {
    const items = links.map((link) => (
        <Link legacyBehavior key={link.label} href={link.link}>
            <a>{link.label}</a>
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
