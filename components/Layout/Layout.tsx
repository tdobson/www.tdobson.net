import { HeaderSimple } from '../HeaderSimple/HeaderSimple'
import { FooterSimple } from "../FooterSimple/FooterSimple";

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <HeaderSimple />
            <main>{children}</main>
            <FooterSimple />
        </>
    );
}
