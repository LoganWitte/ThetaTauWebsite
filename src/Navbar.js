import { Link } from "react-router-dom";
import logo from './images/logo.png';

const Navbar = () => {

    const handleScrollToTop = () => {
        // Scroll to the top of page (makes gear look cool :D)
        const element = document.getElementById('top');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#DCA543] w-full flex items-center justify-between border-b border-black">
            {/*Logo/Title Section*/}
            <Link to="/#top" onClick={handleScrollToTop} className="flex ml-2 h-full hover:underline">
                <img src={logo} className="h-full aspect-[50/77] p-2" alt="Theta Tau Logo" />
                <div className="p-2 flex flex-col justify-center">
                    <div className="font-bold text-xl">Theta Tau</div>
                    <div>Professional Engineering Fraternity</div>
                </div>
            </Link>
            
            {/*Navigation Section*/}
            <div className="flex text-[#473F3F] text-xl mr-2">
                <Link to="/#top" onClick={handleScrollToTop} className="px-2 hover:underline">Home</Link>
                <Link to="/shop" className="px-2 hover:underline">Shop</Link>
                <Link to="/brothers" className="px-2 hover:underline">Brothers</Link>
                <Link to="/rush" className="px-2 hover:underline">Rush</Link>
                <Link to="/events" className="px-2 hover:underline">Events</Link>
                <Link to="/admin" className="px-2 hover:underline">Admin Panel</Link>
            </div>
        </div>
    );
};

export default Navbar;
