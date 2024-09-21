import { useNavigate } from 'react-router-dom';
import logo from './images/logo.png'

export default function Navbar() {

    const navigate = useNavigate();
    const handleNavigation = (url) => {
        navigate(url);
    };

    function handleLogoClick() {
        window.open('https://www.thetataupg.org/', '_blank');
    }

    return(
        <div className="navBar">
            <div className="logoContainer" onClick={handleLogoClick}>
                <img src={logo} onClick={() => handleNavigation('/')} alt="Theta Tau Logo"/>
                <div>
                    <div style={{fontWeight: "bolder", fontSize: "1.35em"}}>Theta Tau</div>
                    Professional Engineering Fraternity
                </div>
                
            </div>
            <div className="navElements">
                <div className="navButton" onClick={() => handleNavigation('/')}>Home</div>
                <div className="navButton" onClick={() => handleNavigation('/shop')}>Shop</div>
                <div className="navButton" onClick={() => handleNavigation('/brothers')}>Brothers</div>
                <div className="navButton" onClick={() => handleNavigation('/rush')}>Rush</div>
                <div className="navButton" onClick={() => handleNavigation('/events')}>Events</div>
                <div className="navButton" onClick={() => handleNavigation('/account')}>Account</div>
            </div>
        </div>
    )
}