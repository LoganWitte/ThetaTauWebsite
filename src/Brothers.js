import gear from './images/gear.png'
import Brother from './Brother'
import { useState, useEffect } from "react"

import member from './images/member.jpg'


export default function Brothers() {

    /*Edit this to alter brothers on brothers page CHECKHERE*/
    const brothers = [
        {id: 0, name: "Name 1", image: member, class: "2023"},
        {id: 1, name: "Name 2", image: member, class: "2023"},
        {id: 2, name: "Name 3", image: member, class: "2023"},
        {id: 3, name: "Name 4", image: member, class: "2023"},
        {id: 4, name: "Name 5", image: member, class: "2023"},
        {id: 5, name: "Name 6", image: member, class: "2023"},
        {id: 6, name: "Name 7", image: member, class: "2023"},
        {id: 7, name: "Name 8", image: member, class: "2023"},
        {id: 8, name: "Name 9", image: member, class: "2023"},
        {id: 9, name: "Name 10", image: member, class: "2023"},
        {id: 10, name: "Name 11", image: member, class: "2023"},
        {id: 11, name: "Name 12", image: member, class: "2023"},
        {id: 12, name: "Name 13", image: member, class: "2023"},
        {id: 13, name: "Name 14", image: member, class: "2023"},
        {id: 14, name: "Name 15", image: member, class: "2023"},
    ]

    const [scrollPosition, setScrollPosition] = useState(0);

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
        <div>

            <div >
                <header className="gearContainer">
                    <img  style={{ transform: `rotate(${scrollPosition * 360}deg)` }} src={gear}  alt="gear" class="overlay-image"></img>
                    <h1>Meet the Brothers</h1>
                </header>
            </div>

            <div className = "brotherGrid">
                {brothers.map(brother => 
                    <Brother />
                )}
            </div>
            

        </div>
    )
}

