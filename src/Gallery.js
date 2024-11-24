import { useState, useEffect } from "react"

const Gallery = (props) => {

    const images = props.images;
    const numImages = props.numImages;
    const backgroundColor = props.backgroundColor;
    const borderColor = props.borderColor;
    const maxId = images[images.length-1].id;

    const [shownIds, setshownIds] = useState(Array.from({ length: numImages }, (_, i) => i));
    const [shownImages, setShownImages] = useState(images);

    useEffect(() => {
        let newShownImages = [];
        shownIds.forEach(id => {
            newShownImages.push(images[id]);
        });
        setShownImages(newShownImages);
    }, [shownIds, images])

    const handleLeftClick = () => {
        const newShownIds = [...shownIds];
        newShownIds.forEach((_, index) =>  {
            newShownIds[index] === 0 ? newShownIds[index] = maxId : newShownIds[index] -= 1;
        })
        setshownIds(newShownIds);
    }

    const handleRightClick = () => {
        const newShownIds = [...shownIds];
        newShownIds.forEach((_, index) =>  {
            newShownIds[index] === maxId ? newShownIds[index] = 0 : newShownIds[index] += 1;
        })
        setshownIds(newShownIds);
    }    

    return(
        <div className="flex w-screen items-center justify-between p-2 h-64" style={{backgroundColor: `${backgroundColor}`}}>
            <div className="overflow-hidden ml-[10%] text-4xl font-bold aspect-square w-12 flex items-center justify-center border border-black rounded-full select-none hover:cursor-pointer bg-[#DCA453] hover:bg-opacity-75 mx-2" onClick={handleLeftClick}>{"<"}</div>
            <div className="flex items-center justify-center w-fit max-w-[70%]">
                {shownImages
                .map(image => 
                    <img className="mx-2 max-h-56 border rounded-lg" style={{borderColor: `${borderColor}`}} key={image.id} alt={image.description} src={image.src} />
                )}
            </div>
            
            <div className="overflow-hidden mr-[10%] text-4xl font-bold aspect-square w-12 flex items-center justify-center border border-black rounded-full select-none hover:cursor-pointer bg-[#DCA453] hover:bg-opacity-75 mx-2" onClick={handleRightClick}>{">"}</div>
        </div>
    )
}

export default Gallery;