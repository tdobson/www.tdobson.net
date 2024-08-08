import { HeaderSimple } from '../HeaderSimple/HeaderSimple';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <HeaderSimple />
            <main>{children}</main>
        </>
    );
}
