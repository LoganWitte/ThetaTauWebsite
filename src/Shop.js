import { useEffect, useState } from "react";
import gear from './images/gear.png'
import ShopItem from "./ShopItem";

import { getShopItems } from "./API";

export default function Shop() {

    const [shopItems, setShopItems] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);

    function handleScroll(container) {
        setScrollPosition(container.scrollTop / (container.scrollHeight - container.clientHeight));
    }

    /*Handles data fetching*/
    useEffect(() => {
        const fetchShopItems = async () => {
            const newShopItems = await getShopItems();
            if(newShopItems) {
                setShopItems(newShopItems);
            }
        }
        fetchShopItems();
    }, [])
    

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
                {shopItems.map(item => <ShopItem image={item.image} name={item.product_name} description={item.description} sizes={item.size} price={item.price}/>)}
            </div>
            
        </div>
    )
}