import { useEffect, useState } from "react";
import gear from './images/gear.png'
import ShopItem from "./ShopItem";

import defaultShopItem from './images/defaultShopItem.png'

export default function Shop() {

    /*Edit this to alter items on shop page CHECKHERE*/
    const shopItems = [
        {id: 0, image: defaultShopItem, name: "Default Product 1", description: "Man wearing basic black Theta Tau t-shirt", sizes: "S/M/L"},
        {id: 1, image: defaultShopItem, name: "Default Product 2", description: "Man wearing basic black Theta Tau t-shirt", sizes: "S/M/L"},
        {id: 2, image: defaultShopItem, name: "Default Product 3", description: "Man wearing basic black Theta Tau t-shirt", sizes: "S/M/L"},
        {id: 3, image: defaultShopItem, name: "Default Product 4", description: "Man wearing basic black Theta Tau t-shirt", sizes: "S/M/L"},
        {id: 4, image: defaultShopItem, name: "Default Product 5", description: "Man wearing basic black Theta Tau t-shirt", sizes: "S/M/L"},
        {id: 5, image: defaultShopItem, name: "Default Product 6", description: "Man wearing basic black Theta Tau t-shirt", sizes: "S/M/L"},
        {id: 6, image: defaultShopItem, name: "Default Product 7", description: "Man wearing basic black Theta Tau t-shirt", sizes: "S/M/L"},
        {id: 7, image: defaultShopItem, name: "Default Product 8", description: "Man wearing basic black Theta Tau t-shirt", sizes: "S/M/L"},
        {id: 8, image: defaultShopItem, name: "Default Product 9", description: "Man wearing basic black Theta Tau t-shirt", sizes: "S/M/L"}
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
        <div className="flex flex-col items-center">

            <div className="flex flex-col items-center justify-center mt-8">
                <img src={gear} className="overlay-image mb-2" style={{ transform: `rotate(${scrollPosition * 360}deg)` }} alt="gear" />
                <div className="text-[#DCA543] text-4xl overflow-hidden">Merch</div>
            </div>
            
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 my-8">
                {shopItems.map(item => <ShopItem image={item.image} name={item.name} description={item.description} sizes={item.sizes}/>)}
            </div>
            
        </div>
    )
}