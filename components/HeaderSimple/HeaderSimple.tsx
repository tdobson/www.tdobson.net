
import React, { useState, useEffect } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { Link as ScrollLink, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import classes from './HeaderSimple.module.css';
import sections from '../../config/sections.json';
import * as Icons from '@tabler/icons-react';

export function HeaderSimple() {
    const [opened, setOpened] = useState(false);
    useEffect(() => {
        Events.scrollEvent.register('begin', (to, element) => {
            console.log('begin', to, element);
        });

        Events.scrollEvent.register('end', (to, element) => {
            console.log('end', to, element);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const handleSetActive = (to) => {
        console.log(to);
    };

const items = sections.sections.map((section) => (
    <ScrollLink
        activeClass="active"
        to={section.link}
        key={section.name}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={classes.link}
        onSetActive={handleSetActive}
    >
        {Icons[section.icon as keyof typeof Icons] ? React.createElement(Icons[section.icon as keyof typeof Icons] as React.ElementType) : null}
        {section.name}
    </ScrollLink>
));

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

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
