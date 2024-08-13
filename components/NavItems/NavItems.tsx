import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import classes from '../HeaderSimple/HeaderSimple.module.css';
import sections from '../../config/sections.json';
import * as Icons from '@tabler/icons-react';

interface NavItemsProps {
    onItemClick?: () => void;
}

export function NavItems({ onItemClick }: NavItemsProps) {
    return sections.sections.map((section) => (
        <ScrollLink
            activeClass="active"
            to={section.link}
            key={section.name}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={classes.control}
            onClick={onItemClick}
        >
            {Icons[section.icon as keyof typeof Icons] ? React.createElement(Icons[section.icon as keyof typeof Icons] as React.ElementType) : null}
            {section.name}
        </ScrollLink>
    ));
}
