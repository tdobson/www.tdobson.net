import { Container, Group } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './FooterSimple.module.css';

interface FooterSimpleProps {
    children: React.ReactNode;
}

export function FooterSimple({ children }: FooterSimpleProps) {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <MantineLogo size={28} />
                <Group className={classes.links}>{children}</Group>
            </Container>
        </div>
    );
}
