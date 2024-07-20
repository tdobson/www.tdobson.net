import { Container, Group, Burger } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderSimple.module.css';


interface HeaderSimpleProps {
    children: React.ReactNode;
}

export function HeaderSimple({ children }: HeaderSimpleProps) {
    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <MantineLogo size={28} />
                {children}
                <Burger opened={false} size="sm" />
            </Container>
        </header>
    );
}
