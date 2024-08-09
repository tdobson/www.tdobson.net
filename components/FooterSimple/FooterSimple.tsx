import { Container, Group } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './FooterSimple.module.css';
import sections from '../../config/sections.json';
import * as Icons from '@tabler/icons-react';

interface FooterSimpleProps {
    children: React.ReactNode;
}

export function FooterSimple({ children }: FooterSimpleProps) {
    const items = sections.sections.map((section) => (
        <a key={section.name} href={section.link} className={classes.link}>
            {React.createElement(Icons[section.icon])}
            {section.name}
        </a>
    ));

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <MantineLogo size={28} />
                <Group className={classes.links}>{items}</Group>
            </Container>
        </div>
    );
}
