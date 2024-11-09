import {useState, useEffect} from "react"

import cathedral from './images/cathedral.png';
import brotherhood from './images/brotherhood.png'
import professionalism from './images/professionalism.png'
import service from './images/service.png'
import gear from './images/gear.png'
import triangle from './images/triangle.png'
import bortherhoodPicture from './images/brotherhoodPicture.png'

import groupPhoto from './images/groupPhoto.png'
import interestedSword from './images/interestedSword.png'



export default function LandingPage() {

    const [brotherhoodOpen, setBrotherhoodOpen] = useState(false);
    const [professionalismOpen, setProfessionalismOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    function handleSectionClick(section) {
        setBrotherhoodOpen(section === "brotherhood" && !brotherhoodOpen);
        setProfessionalismOpen(section === "professionalism" && !professionalismOpen);
        setServiceOpen(section === "service" && !serviceOpen);
    }

    function handleScroll(container) {
        setScrollPosition(container.scrollTop / (container.scrollHeight - container.clientHeight));
    }

    useEffect(() => {

        const outerContainer = document.getElementById("outerContainer");
        outerContainer.addEventListener("scroll", () => handleScroll(outerContainer));

        return () => {
            outerContainer.removeEventListener("scroll", handleScroll);
        }

    }, [])

    return(
        <div className="flex flex-col items-center">

            {/*Cathedral section*/}
            <div className="relative mt-16 mb-32 overflow-visible">

                <img src={cathedral} className="max-w-[80vw]" alt="cathedral" />

                <div className="absolute top-[4.2%] left-[40.8%] w-[18.26%] h-[27.14%] overflow-hidden">
                    <img src={gear} style={{transform: `rotate(${scrollPosition * 360}deg)`}} alt="gear" />
                </div>

                <button onClick={() => handleSectionClick("brotherhood")} className="absolute top-[48.5%] left-[9.24%] w-[8.59%] h-[13.1%] border border-black rounded-full">
                    <img src={brotherhood} alt="brotherhood" />
                    <div className="absolute top-0 left-0 rounded-full w-full h-full hover:bg-black opacity-15" />
                </button>

                <button onClick={() => handleSectionClick("professionalism")} className="absolute top-[48.5%] left-[45.4%] w-[8.59%] h-[13.1%] border border-black rounded-full">
                    <img src={professionalism} alt="professionalism" />
                    <div className="absolute top-0 left-0 rounded-full w-full h-full hover:bg-black opacity-15" />
                </button>
                
                <button onClick={() => handleSectionClick("service")} className="absolute top-[48.5%] left-[82.3%] w-[8.59%] h-[13.1%] border border-black rounded-full">
                    <img src={service} alt="service" />
                    <div className="absolute top-0 left-0 rounded-full w-full h-full hover:bg-black opacity-15" />
                </button>

                {brotherhoodOpen &&
                    <div className="absolute top-[65%] left-[5%] w-[90%] h-fit bg-[#DCA543] overflow-visible">
                        <img className="absolute top-[-11.5%] left-[7.15%] w-[4.83%] h-[12.3%]" src={triangle} alt="triangle" />
                        <div className="w-full h-full flex flex-row items-center justify-between ">
                            <div className="flex flex-col flex-1 h-full items-center justify-center text-center m-[2%]
                                            text-[13px] lg:text-[16px]
                                            ">
                                <div className="font-bold text-[2em]">Brotherhood</div>
                                <div className="">We forge lifelong bonds of fraternal friendship, a journey that develops and delivers a network of lasting personal and professional relationships. We foster an inviting, safe, and social environment.</div>
                            </div>
                            <img src={bortherhoodPicture} className="w-[44.5%] m-[0.5%] border border-black" alt="Members of Theta Tau standing together on hike" />
                        </div>
                    </div>
                }

                {professionalismOpen && 
                    <div className="absolute top-[65%] left-[5%] w-[90%] h-fit bg-[#DCA543] overflow-visible">
                        <img className="absolute top-[-11.5%] left-[47.225%] w-[4.83%] h-[12.3%]" src={triangle} alt="triangle" />
                        <div className="w-full h-full flex flex-row items-center justify-between ">
                            <div className="flex flex-col flex-1 h-full items-center justify-center text-center m-[2%]
                                            lg:text-[16px] text-[11px]
                                            ">
                                <div className="font-bold text-[2em]">Professionalism</div>
                                <div className="">INSER PROFESSIONALISM PARAGRAPH</div>
                            </div>
                            <img src={bortherhoodPicture} className="w-[44.5%] m-[0.5%] border border-black" alt="Members of Theta Tau standing together on hike" />
                        </div>
                    </div>
                }

                {serviceOpen &&
                    <div className="absolute top-[65%] left-[5%] w-[90%] h-fit bg-[#DCA543] overflow-visible">
                        <img className="absolute top-[-11.5%] left-[88.5%] w-[4.83%] h-[12.3%]" src={triangle} alt="triangle" />
                        <div className="w-full h-full flex items-center justify-between ">
                            <div className="flex flex-col flex-1 h-full items-center justify-center text-center m-[2%]
                                            lg:text-[16px] text-[11px]
                                            ">
                                <div className="font-bold text-[2em]">Service</div>
                                <div className="">INSERT SERVICE PARAGRAPH</div>
                            </div>
                            <img src={bortherhoodPicture} className="w-[44.5%] m-[0.5%] border border-black" alt="Members of Theta Tau standing together on hike" />
                        </div>
                    </div>
                }

            </div>

            {/*Who We Are section*/}
            <div className="bg-[#DCA543] w-full flex flex-col lg:flex-row items-center justify-center border-y border-black">
                <div className="text-center max-w-[30em] p-4">
                    <div className="text-3xl font-bold">Who We Are</div>
                    <div>Theta Tau is a co-ed professional engineering fraternity at the University of Central Florida. We are a close knit brotherhood that encourages our members to excel professionally and give back to the surrounding community.</div>
                </div>
                <img src={groupPhoto} className="border border-black m-4" alt="Group of Theta Tau members" />
            </div>

            {/*Interested section*/}
            <div>
                <img src={interestedSword} className="my-16" alt="Interested in the brotherhood?" />
            </div>

        </div>
    )
}