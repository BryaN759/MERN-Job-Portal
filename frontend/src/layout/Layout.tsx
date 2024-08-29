import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import SearchBar from '../components/SearchBar';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-white dark:bg-gray-600 pb-1">
            <Navbar />
            <Carousel />
            <SearchBar />
            <div className="max-w-screen-xl mx-auto">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
