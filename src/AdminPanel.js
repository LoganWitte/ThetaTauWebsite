import { useState } from 'react';

import { addBrother, addShopItem, updateRushText, updateDayInfo } from './API'

const AdminPanel = () => {

    /*Add Brother*/
    const [brotherName, setBrotherName] = useState(null);
    const [brotherPledgeClass, setBrotherPledgeClass] = useState(null);
    const [brotherImage, setBrotherImage] = useState(null);
    const [brotherImagePreview, setBrotherImagePreview] = useState(null);

    /*Add Shop Item*/
    const [shopItemName, setShopItemName] = useState(null);
    const [shopItemDescription, setShopItemDescription] = useState(null);
    const [shopItemSizes, setShopItemSizes] = useState(null);
    const [shopItemImage, setShopItemImage] = useState(null);
    const [shopItemImagePreview, setShopItemImagePreview] = useState(null);

    /*Update Rush Text*/
    const [newRushText, setNewRushText] = useState(null);

    /*Update Day*/
    const [day, setDay] = useState("Monday");
    const [newDate, setNewDate] = useState(null);
    const [newText, setNewText] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            const source = e.target.name;
            const previewUrl = URL.createObjectURL(file);
            if(source === "brotherImage") {
                setBrotherImage(file);
                setBrotherImagePreview(previewUrl);
            }
            else if(source === "shopItemImage") {
                setShopItemImage(file);
                setShopItemImagePreview(previewUrl);
            }
        }
    }

    const handleDropdownChange = (e) => {
        setDay(e.target.value);
    }

    const handleAddBrotherSubmit = () => {
        let required = [brotherName, brotherPledgeClass, brotherImage];
        required.forEach(requiredVar => {
            if(!requiredVar || requiredVar === '') {
                console.log(`Invalid requiredVar ${requiredVar}`);
                return
            }
        })
        console.log(addBrother(brotherName, brotherPledgeClass, brotherImage));
    }

    const handleAddShopItemSubmit = () => {
        let required = [shopItemName, shopItemDescription, shopItemSizes, shopItemImage];
        required.forEach(requiredVar => {
            if(!requiredVar || requiredVar === '') {
                console.log(`Invalid requiredVar ${requiredVar}`);
                return
            }
        })
        console.log(addShopItem(shopItemName, shopItemDescription, shopItemSizes, shopItemImage));
    }

    const handleUpdateRushTextSubmit = () => {
        let required = [newRushText];
        required.forEach(requiredVar => {
            if(!requiredVar || requiredVar === '') {
                console.log(`Invalid requiredVar ${requiredVar}`);
                return
            }
        })
        console.log(updateRushText(newRushText));
    }

    const handleUpdateDayInfoSubmit = () => {
        let required = [day, newDate, newText];
        required.forEach(requiredVar => {
            if(!requiredVar || requiredVar === '') {
                console.log(`Invalid requiredVar ${requiredVar}`);
                return
            }
        })
        console.log(updateDayInfo(day, newDate, newText));
    }

    return(
        <div>
            <div className="text-4xl font-bold m-2">Admin Panel</div>

            {/*Add Brother*/}
            <div className="bg-white flex flex-col justify-center w-fit border border-black p-2 m-2">
                <div className="text-lg font-bold">Add Brother:</div>
                <div className="p-2">
                    Name:
                    <input type="text"  onChange={(e) => setBrotherName(e.target.value)} className="border border-black ml-2"/>
                </div>
                <div className="p-2">
                    Pledge Class:
                    <input type="text" onChange={(e) => setBrotherPledgeClass(e.target.value)} className="border border-black ml-2"/>
                </div>
                <div className="p-2">
                    Image:
                    <input type="file" name="brotherImage" onChange={handleImageChange} className="ml-2"/>
                </div>
                {brotherImagePreview && 
                    <img src={brotherImagePreview} alt="Preview" />
                }
                <button className="bg-white border border-black mt-2 hover:bg-gray-200" onClick={handleAddBrotherSubmit}>Submit</button>
            </div>

            {/*Add Shop Item*/}
            <div className="bg-white flex flex-col justify-center w-fit border border-black p-2 m-2">
                <div className="text-lg font-bold">Add Shop Item:</div>
                <div className="p-2">
                    Name:
                    <input type="text" onChange={(e) => setShopItemName(e.target.value)} className="border border-black ml-2"/>
                </div>
                <div className="p-2">
                    Description:
                    <input type="text" onChange={(e) => setShopItemDescription(e.target.value)} className="border border-black ml-2"/>
                </div>
                <div className="p-2">
                    Sizes:
                    <input type="text" onChange={(e) => setShopItemSizes(e.target.value)} className="border border-black ml-2"/>
                </div>
                <div className="p-2">
                    Image:
                    <input type="file" name="shopItemImage" onChange={handleImageChange} className="ml-2"/>
                </div>
                {shopItemImagePreview && 
                    <img src={shopItemImagePreview} alt="Preview" />
                }
                <button className="bg-white border border-black mt-2 hover:bg-gray-200" onClick={handleAddShopItemSubmit}>Submit</button>
            </div>

            {/*Update Rush Text*/}
            <div className="bg-white flex flex-col justify-center w-fit border border-black p-2 m-2">
                <div className="text-lg font-bold">Update Rush Text:</div>
                <div className="p-2">
                    New Rush Text:
                    <input type="text" onChange={(e) => setNewRushText(e.target.value)} className="border border-black ml-2"/>
                </div>
                <button className="bg-white border border-black mt-2 hover:bg-gray-200" onClick={handleUpdateRushTextSubmit}>Submit</button>
            </div>

            {/*Update Day Info*/}
            <div className="bg-white flex flex-col justify-center w-fit border border-black p-2 m-2">
                <div className="text-lg font-bold">Update Day Info:</div>
                <div className="p-2">
                    New Day Info:
                    <select id="day" value={day} onChange={handleDropdownChange} className="border border-black ml-2">
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                </div>
                <div className="p-2">
                    New Date:
                    <input type="text" onChange={(e) => setNewDate(e.target.value)} className="border border-black ml-2"/>
                </div>
                <div className="p-2">
                    New Day Text:
                    <input type="text" onChange={(e) => setNewText(e.target.value)} className="border border-black ml-2"/>
                </div>
                <button className="bg-white border border-black mt-2 hover:bg-gray-200" onClick={handleUpdateDayInfoSubmit}>Submit</button>
            </div>

        </div>
    )
}

export default AdminPanel;