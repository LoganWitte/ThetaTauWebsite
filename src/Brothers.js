import gear from './images/gear.png'
import Brother from './Brother'
import { useState, useEffect } from "react"


export default function Brothers() {

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


            <div style={{ padding: '20px'}}>
                <Brother/>
                <Brother/>
                <Brother/>


            </div>
            

        </div>
    )
}

