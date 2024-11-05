import { useNavigate } from 'react-router-dom';
import cathedral from './images/cathedral.png';
import brotherhood from './images/brotherhood.png'
import professionalism from './images/professionalism.png'
import service from './images/service.png'
import gear from './images/gear.png'
import groupPhoto from './images/groupPhoto.png'
import interestedSword from './images/interestedSword.png'


export default function LandingPage() {

    const navigate = useNavigate();
    const handleNavigation = (url) => {
        navigate(url);
    };

    return(
        <div>
            <div className="flex justify-center">
                <div className="relative w-[60%] h-[87.5vh] mt-[5vh]">
                    <img className="absolute w-full top-0 left-0" src={cathedral} alt="cathedral" />
                    <img className="absolute w-[10.2vw] top-[2vh] left-[25vw]" src={gear} alt="spinning gear" />
                    <img className="absolute w-[4.5vw] top-[34vh] left-[9.5vw]" src={brotherhood} alt="brotherhood" />
                    <img className="absolute w-[4.5vw] top-[34vh] left-[27.75vw]" src={professionalism} alt="professionalism" />
                    <img className="absolute w-[4.5vw] top-[34vh] left-[46.5vw]" src={service} alt="service" />
                </div>
            </div>
            <div className="flex align-center justify-center bg-[#DCA543]">
                <div className="w-[25%] flex flex-col align-center justify-center text-center m-5">
                    <div className="font-bold text-2xl">Who We Are</div>
                    <div className="">
                        Theta Tau is a co-ed professional engineering fraternity at the University of Central Florida. We are a close knit brotherhood that encourages our members to excel professionally and give back to the surrounding community.
                    </div>
                </div>
                <img src={groupPhoto} className="border border-black mx-5" alt="group of Theta Tau members" />
            </div>
            <div className="flex justify-center relative">
                <img className="w-[50vw] p-5 mt-10" src={interestedSword} alt="sword" />
            </div>
        </div>
        
        
    )
}