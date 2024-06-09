import Link from 'next/link';
import { HeaderSimple } from '../HeaderSimple/HeaderSimple';
import { FooterSimple } from '../FooterSimple/FooterSimple';
import { Group } from '@mantine/core';

interface LayoutProps {
    children: React.ReactNode;
}

const links = [
    { link: '/#details', label: 'Details' },
    { link: '/#faq', label: 'FAQs' },
    { link: '/#rsvp', label: 'RSVP' },
];

export function Layout({ children }: LayoutProps) {
    const items = links.map((link) => (
        <Link legacyBehavior key={link.label} href={link.link}>
            <a>{link.label}</a>
        </Link>
    ));

    return (
        <>
            {/*  <HeaderSimple>
                <Group>{items}</Group>
            </HeaderSimple> */ }
            <main>{children}</main>
            { /*   <FooterSimple>
                <Group>{items}</Group>
            </FooterSimple>*/ }
        </>
    );
}
