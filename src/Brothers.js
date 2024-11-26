import gear from './images/gear.png'
import Brother from './Brother'
import { useState, useEffect } from "react"

import member from './images/member.jpg'

import { getBrothers } from './API'


export default function Brothers() {

    const [brotherData, setBrotherData] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        console.log(`brotherData=${brotherData}`);
    }, [brotherData])
    

    /*Handles data fetching*/
    useEffect(() => {
        const fetchBrothers = async () => {
            const newBrotherData = await getBrothers();
            setBrotherData(newBrotherData);
        }
        fetchBrothers();
    }, [])
    
    /*Handles Scroll Behavior*/
    useEffect(() => {

        function handleScroll(container) {
            setScrollPosition(container.scrollTop / (container.scrollHeight - container.clientHeight));
        }

        const outerContainer = document.getElementById("outerContainer");
        outerContainer.addEventListener("scroll", () => handleScroll(outerContainer));

        return () => {
            outerContainer.removeEventListener("scroll", handleScroll);
        }

    }, [])

    return(
        <div>

            <div >
                <header className="gearContainer">
                    <img  style={{ transform: `rotate(${scrollPosition * 360}deg)` }} src={gear}  alt="gear" class="overlay-image"></img>
                    <h1>Meet the Brothers</h1>
                </header>
            </div>

            <div className = "brotherGrid">
                {brotherData.map(brother => 
                    <Brother name={brother.name} image={brother.image} class={brother.class} />
                )}
            </div>
            

        </div>
    )
}

