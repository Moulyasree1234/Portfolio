import { useState } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className="fixed left-0 right-0 z-50 top-0 lg:top-4">
                {/* Desktop Navbar */}
                <div className="mx-auto hidden max-w-4xl px-4 py-2 lg:flex items-center justify-between rounded-full border border-white/30 backdrop-blur-lg">
                    <div>
                        <a href="/" className="text-lg font-semibold uppercase tracking-wide text-white">
                           About Me
                        </a>
                    </div>
                    <div>
                        <ul className="flex items-center space-x-6">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a className="text-sm text-white hover:text-gray-300 transition duration-200"
                                        href={item.href}
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="py-3 px-4 lg:hidden bg-black/50 backdrop-blur-md flex items-center justify-between">
                    <div>
                        <a href="/" className="text-lg font-semibold uppercase tracking-wide text-white">
                            Moulyasree Madamanchi
                        </a>
                    </div>
                    <div>
                        <button
                            className="focus:outline-none lg:hidden text-white"
                            onClick={toggleMobileMenu}
                            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isMobileMenuOpen ? (
                                <RiCloseLine className="h-7 w-7" />
                            ) : (
                                <RiMenu3Line className="h-7 w-7" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-12 left-0 right-0 bg-black/80 text-white py-6 px-6 rounded-md">
                        <ul className="flex flex-col space-y-4 text-center">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a className="text-lg hover:text-gray-300 transition duration-200"
                                        href={item.href}
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
