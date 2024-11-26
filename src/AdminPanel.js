import { useEffect, useState } from 'react';

import { addBrother } from './API'

const AdminPanel = () => {

    const [name, setName] = useState(null);
    const [pledgeClass, setPledgeClass] = useState(null);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleTyping = (e) => {
        const { name, value } = e.target;
        if(name === "name") {
            setName(value);
        }
        else if(name === "pledgeClass") {
            setPledgeClass(value);
        }
        else if(name === "image") {
            setImage(image);
        }
        else {
            console.log("handleTyping invalid call name");
        }

    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            setImage(file);
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    }

    const handleSubmit = () => {
        if(!name) {
            console.log("Name invalid")
            return;
        }
        if(!pledgeClass) {
            console.log("Plege Class invalid")
            return;
        }
        if(!image) {
            console.log("Image invalid")
            return;
        }
        console.log(addBrother(name, pledgeClass, image));
    }

    return(
        <div>
            <div className="text-4xl font-bold">Admin Panel</div>
            {/*Add Brother*/}
            <div className="bg-white flex flex-col justify-center w-fit border border-black p-2">
                <div className="text-lg font-bold">Add Brother:</div>
                <div className="p-2">
                    Name:
                    <input type="text" name="name" onChange={handleTyping} className="border border-black ml-2"/>
                </div>
                <div className="p-2">
                    Pledge Class:
                    <input type="text" name="pledgeClass" onChange={handleTyping} className="border border-black ml-2"/>
                </div>
                <div className="p-2">
                    Image:
                    <input type="file" name="image" onChange={handleImageChange} className="ml-2"/>
                </div>
                {image && 
                    <img src={imagePreview} alt="Preview" />
                }
                <button className="bg-white border border-black" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
    )
}

export default AdminPanel;