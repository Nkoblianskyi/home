import { ReactNode } from 'react';
import { Header } from "../components/header";
import { Footer } from "../components/footer";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};