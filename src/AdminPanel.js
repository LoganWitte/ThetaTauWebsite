import { useState, useEffect } from 'react';

import { addBrother, addShopItem, updateRushText, updateDayInfo, adminLogin } from './API'

const AdminPanel = () => {

    /*Stores admin JWT for accessing restricted endpoints*/
    const [adminJWT, setAdminJWT] = useState(null);

    /*Admin Login*/
    const [adminUsername, setAdminUsername] = useState(null);
    const [adminPassword, setAdminPassword] = useState(null);

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
    
    useEffect(() => {
        if(adminJWT) {
            console.log(`Storing adminJWT in localStorage "${adminJWT}"`);
            localStorage.setItem("adminJWT", adminJWT);
        }
        else {
            console.log(`Removing adminJWT from localStorage "${adminJWT}"`);
            localStorage.removeItem("adminJWT");

        }
    }, [adminJWT])

    useEffect(() => {
        const localAdminJWT = localStorage.getItem("adminJWT")
        if(localAdminJWT) {
            setAdminJWT(localAdminJWT);
            console.log(`Loading stored adminJWT "${localAdminJWT}"`)
        }
        else {
            console.log("No stored adminJWT found");
        }
    }, [])

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

    const handleLoginSubmit = () => {
        let required = [adminUsername, adminPassword];
        required.forEach(requiredVar => {
            if(!requiredVar || requiredVar === '') {
                console.log(`Invalid requiredVar ${requiredVar}`);
                return
            }
        })
        setAdminJWT(adminLogin(adminUsername, adminPassword));
    }

    const handleLogoutSubmit = () => {
        setAdminJWT(null);
    }

    const handleAddBrotherSubmit = () => {
        let required = [brotherName, brotherPledgeClass, brotherImage, adminJWT];
        required.forEach(requiredVar => {
            if(!requiredVar || requiredVar === '') {
                console.log(`Invalid requiredVar ${requiredVar}`);
                return
            }
        })
        addBrother(brotherName, brotherPledgeClass, brotherImage, adminJWT);
    }

    const handleAddShopItemSubmit = () => {
        let required = [shopItemName, shopItemDescription, shopItemSizes, shopItemImage, adminJWT];
        required.forEach(requiredVar => {
            if(!requiredVar || requiredVar === '') {
                console.log(`Invalid requiredVar ${requiredVar}`);
                return
            }
        })
        addShopItem(shopItemName, shopItemDescription, shopItemSizes, shopItemImage, adminJWT);
    }

    const handleUpdateRushTextSubmit = () => {
        let required = [newRushText, adminJWT];
        required.forEach(requiredVar => {
            if(!requiredVar || requiredVar === '') {
                console.log(`Invalid requiredVar ${requiredVar}`);
                return
            }
        })
        updateRushText(newRushText, adminJWT);
    }

    const handleUpdateDayInfoSubmit = () => {
        let required = [day, newDate, newText, adminJWT];
        required.forEach(requiredVar => {
            if(!requiredVar || requiredVar === '') {
                console.log(`Invalid requiredVar ${requiredVar}`);
                return
            }
        })
        updateDayInfo(day, newDate, newText, adminJWT);
    }

    return(
        <div className="flex items-center justify-center flex-col">
            <div className="text-4xl font-bold m-2 text-white">Admin Panel</div>
            <div className="flex flex-wrap justify-center">
                {/*Login*/}
                {!adminJWT &&
                <div className="bg-white flex flex-col justify-center w-fit border border-black p-2 m-2">
                    <div className="text-lg font-bold">Admin Login:</div>
                    <div className="p-2">
                        Username:
                        <input type="text"  onChange={(e) => setAdminUsername(e.target.value)} className="border border-black ml-2"/>
                    </div>
                    <div className="p-2">
                        Password:
                        <input type="text" onChange={(e) => setAdminPassword(e.target.value)} className="border border-black ml-2"/>
                    </div>
                    <button className="bg-white border border-black mt-2 hover:bg-gray-200" onClick={handleLoginSubmit}>Submit</button>
                </div>}

                {/*Logout*/}
                {adminJWT &&
                    <div className="bg-white flex flex-col justify-center w-fit border border-black p-2 m-2">
                    <div className="text-lg font-bold">Logout:</div>
                    <button className="bg-white border border-black mt-2 hover:bg-gray-200" onClick={handleLogoutSubmit}>Submit</button>
                </div>}

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
        </div>
    )
}

export default AdminPanel;