import { useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';

import logo from './images/logo.png';
import hamburger from './images/hamburger.png';


export default function Navbar() {

    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);

        // Listen to both resize and orientationchange events
        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);

        // Initial check on mount to ensure proper behavior
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, []);

    const navigate = useNavigate();
    const handleNavigation = (url) => {
        navigate(url);
    };

    function handleLogoClick() {
        window.open('https://www.thetataupg.org/', '_blank');
    }

    return(
        <div className="navBar">
            <div className="logoContainer link" onClick={handleLogoClick}>
                <img className="navLogo" src={logo} onClick={() => handleNavigation('/')} alt="Theta Tau Logo"/>
                <div style={{fontSize: isMobile ? "0.8em" : "auto"}}>
                    <div style={{fontWeight: "bolder", fontSize: "1.35em"}}>Theta Tau</div>
                    <div style={{whiteSpace: "nowrap"}}>Professional Engineering Fraternity </div>
                </div>
            </div>
            {!isMobile ?
            <div className="navElements">
                <div className="navButton" onClick={() => handleNavigation('/')}>Home</div>
                <div className="navButton" onClick={() => handleNavigation('/shop')}>Shop</div>
                <div className="navButton" onClick={() => handleNavigation('/brothers')}>Brothers</div>
                <div className="navButton" onClick={() => handleNavigation('/rush')}>Rush</div>
                <div className="navButton" onClick={() => handleNavigation('/events')}>Events</div>
                <div className="navButton" onClick={() => handleNavigation('/account')}>Account</div>
            </div>
            :
            <div className="navHamburger">
                <img src={hamburger}  alt="hamburger menu"/>
            </div>
            }
        </div>
    )
}