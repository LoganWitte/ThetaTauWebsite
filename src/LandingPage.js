import { useNavigate } from 'react-router-dom';
import cathedral from './images/cathedral.png';
import brotherhood from './images/brotherhood.png'
import professionalism from './images/professionalism.png'
import service from './images/service.png'
import gear from './images/gear.png'


export default function LandingPage() {

    const navigate = useNavigate();
    const handleNavigation = (url) => {
        navigate(url);
    };

    return(
        <div>
            <div style={{color: "white", fontSize: "5em", paddingBottom: "10em"}}>Landing Page</div>
        </div>
    )
}