import { Link } from 'react-router-dom';
import { useState } from 'react';

import logo from './images/logo.png';
import hamburger from './images/hamburger.png';

const Navbar = () => {
    
    const [hamburgerExpanded, setHamburgerExpanded] = useState(false);

    function handleHamburgerClick() {
        setHamburgerExpanded(!hamburgerExpanded);
    }

    function handleLogoClick() {
        window.open('https://www.thetataupg.org/', '_blank');
    }

    return(
        <div className="navBar relative overflow-visible">
            <div className="logoContainer link" onClick={handleLogoClick}>
                <img className="navLogo" src={logo} alt="Theta Tau Logo"/>
                <div className="sm:text-sm lg:text-base">
                    <div style={{fontWeight: "bolder", fontSize: "1.35em"}}>Theta Tau</div>
                    <div style={{whiteSpace: "nowrap"}}>Professional Engineering Fraternity </div>
                </div>
            </div>

            {/*Desktop Navbar*/}
            <div className="hidden lg:block">
                <div className="flex flex-row align-center">
                    <Link to="/"><div className="navButton">Home</div></Link>
                    <Link to="/shop"><div className="navButton">Shop</div></Link>
                    <Link to="/brothers"><div className="navButton">Brothers</div></Link>
                    <Link to="/rush"><div className="navButton">Rush</div></Link>
                    <Link to="/events"><div className="navButton">Events</div></Link>
                </div>
            </div>

            {/*Mobile Navbar (Hamburger Menu)*/}
            <div className="lg:hidden">
                <div className="sm:block lg:hidden">
                    <img className="bg-white/50 border border-black p-1 rounded-md h-10 aspect-square mr-2" src={hamburger} onClick={handleHamburgerClick}  alt="hamburger menu"/>
                    {hamburgerExpanded &&
                    <div className="flex flex-col align-center justify-center absolute right-1 top-14 p-1 border border-black text-black bg-[#DCA543] bg-white/50 rounded-md">
                        <Link to="/"><div className="border-b border-black">Home</div></Link>
                        <Link to="/shop"><div className="border-b border-black">Shop</div></Link>
                        <Link to="/brothers"><div className="border-b border-black">Brothers</div></Link>
                        <Link to="/rush"><div className="border-b border-black">Rush</div></Link>
                        <Link to="/events"><div className="border-b border-black">Events</div></Link>
                    </div>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;