import { useNavigate } from 'react-router-dom';

export default function LandingPage() {

    const navigate = useNavigate();
    const handleNavigation = (url) => {
        navigate(url);
    };

    return(
        <div style={{display: "flex", flexDirection: "column", width: "fit-content"}}>
            Landing Page
            <button onClick={() => handleNavigation('/brothers')}>Brothers Page</button>
            <button onClick={() => handleNavigation('/rush')}>Rush Page</button>
            <button onClick={() => handleNavigation('/loginSignup')}>Login/Signup Page</button>
            <button onClick={() => handleNavigation('/storefront')}>Merch Page</button>
            <button onClick={() => handleNavigation('/questions')}>FAQ</button>
        </div>
    )
}