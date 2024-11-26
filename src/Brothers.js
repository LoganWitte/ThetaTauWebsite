import gear from './images/gear.png'
import Brother from './Brother'
import { useState, useEffect } from "react"

import { getBrothers } from './API'


export default function Brothers() {

    const [brotherData, setBrotherData] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        brotherData.forEach((brother, i) => {
            console.log(`brotherData[${i}]=${brother}`);
        })
    }, [brotherData])

    /*Handles data fetching*/
    useEffect(() => {
        const fetchBrothers = async () => {
            const newBrotherData = await getBrothers();
            if(newBrotherData) {
                setBrotherData(newBrotherData);
            }
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
            
            <img src={"/var/www/html/ThetaTauWebsite/backend/static/brothers/97.png"} alt="Alt text" />

            <div className = "brotherGrid">
                {brotherData.map(brother => 
                    <Brother name={brother.name} image={brother.image} class={brother.pledge_class} />
                )}
            </div>
            

        </div>
    )
}

