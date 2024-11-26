import { Link } from "react-router-dom";
import logo from './images/logo.png';
import { useState } from "react";
import hamburger from './images/hamburgerMenu.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScrollToTop = () => {
        // Scroll to the top of page (makes gear look cool :D)
        const element = document.getElementById('top');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLinkClick = () => {
        // Close the mobile menu when a link is clicked
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="relative">
            {/* Navbar */}
            <div className="bg-[#DCA543] w-full flex items-center justify-between border-b border-black p-2">
                <Link to="/#top" onClick={() => { handleScrollToTop(); handleLinkClick(); }} className="flex ml-2 h-full hover:underline">
                    <img src={logo} className="h-full aspect-[50/77] p-2" alt="Theta Tau Logo" />
                    <div className="p-2 flex flex-col justify-center">
                        <div className="font-bold text-xl">Theta Tau</div>
                        <div>Professional Engineering Fraternity</div>
                    </div>
                </Link>

                {/* Hamburger menu icon */}
                <div className="lg:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <img src={hamburger} className="w-6 h-6" alt="Hamburger Menu" />
                </div>

                {/* Normal links (hidden on small screens) */}
                <div className="hidden lg:flex space-x-8 ml-auto">
                    <Link to="/#top" onClick={() => { handleScrollToTop(); handleLinkClick(); }} className="hover:underline">Home</Link>
                    <Link to="/shop" onClick={handleLinkClick} className="hover:underline">Shop</Link>
                    <Link to="/brothers" onClick={handleLinkClick} className="hover:underline">Brothers</Link>
                    <Link to="/rush" onClick={handleLinkClick} className="hover:underline">Rush</Link>
                    <Link to="/events" onClick={handleLinkClick} className="hover:underline">Events</Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden w-full bg-[#DCA543]/90 text-[#473F3F] text-xl p-4">
                    <Link to="/#top" onClick={() => { handleScrollToTop(); handleLinkClick(); }} className="block px-2 py-1 hover:underline">Home</Link>
                    <Link to="/shop" onClick={handleLinkClick} className="block px-2 py-1 hover:underline">Shop</Link>
                    <Link to="/brothers" onClick={handleLinkClick} className="block px-2 py-1 hover:underline">Brothers</Link>
                    <Link to="/rush" onClick={handleLinkClick} className="block px-2 py-1 hover:underline">Rush</Link>
                    <Link to="/events" onClick={handleLinkClick} className="block px-2 py-1 hover:underline">Events</Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
