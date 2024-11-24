import defaultShopItem from './images/defaultShopItem.png'
const ShopItem = (props) => {
    return(
        <div className="border border-black flex items-center justify-center flex-col p-2 bg-[#DCA543]">
            <img 
                src={props.image ? props.image : defaultShopItem} 
                className="m-2"
                alt={props.description ? props.description : "Default Product Description"
            }/>
            <div>{props.name ? props.name : "(Product Name)"}</div>
            <div>Size: {props.sizes ? props.sizes : "(Product Sizes)"}</div>
        </div>
    )
}

export default ShopItem;