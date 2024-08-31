import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import UserProfile from '../assets/userprofile.png';
import axiosInstance from '../axiosConfig';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const toggleNavbar = () => {
        setIsOpen((prev) => !prev);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleSignOut = async () => {
        setLoading(true);
        try {
            await axiosInstance.post(
                '/api/user/sign-out',
                {},
                { withCredentials: true }
            );
            navigate('/sign-in');
        } catch (error) {
            console.error('Error during logout:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center">
                            <img src={Logo} className="h-8 w-auto" alt="Logo" />
                            <span className="ml-2 text-2xl font-semibold text-gray-800 dark:text-white">
                                JobConnect
                            </span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                        >
                            Services
                        </Link>
                        <Link
                            to="/pricing"
                            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* User Menu and Mobile Toggle */}
                    <div className="flex items-center">
                        {/* User Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500"
                                id="user-menu-button"
                                aria-expanded={isDropdownOpen}
                                aria-haspopup="true"
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src={UserProfile}
                                    alt="User"
                                />
                            </button>

                            {/* Dropdown Panel */}
                            {isDropdownOpen && (
                                <div
                                    className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-20"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                >
                                    <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                                        <p className="text-sm text-gray-700 dark:text-gray-300">
                                            Bonnie Green
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            name@flowbite.com
                                        </p>
                                    </div>
                                    <Link
                                        to="/profile"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                        role="menuitem"
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        to="/settings"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                        role="menuitem"
                                    >
                                        Settings
                                    </Link>
                                    <Link
                                        to="/earnings"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                        role="menuitem"
                                    >
                                        Earnings
                                    </Link>
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                        role="menuitem"
                                        disabled={loading}
                                    >
                                        {loading
                                            ? 'Signing Out...'
                                            : 'Sign Out'}
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden ml-2">
                            <button
                                onClick={toggleNavbar}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                                aria-controls="mobile-menu"
                                aria-expanded={isOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <AiOutlineClose className="h-6 w-6" />
                                ) : (
                                    <HiMenuAlt3 className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-500 dark:hover:bg-gray-700"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-500 dark:hover:bg-gray-700"
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-500 dark:hover:bg-gray-700"
                        >
                            Services
                        </Link>
                        <Link
                            to="/pricing"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-500 dark:hover:bg-gray-700"
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/contact"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-500 dark:hover:bg-gray-700"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
