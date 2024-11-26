import member from './images/member.jpg'

export default function Brother(props) {
    return(

        
        <div className = "div3">
            <div className = "brother">
                <div className="flex flex-col items-center">
                    <img src={props.image ? props.image : member} alt={`Theta Tau Member${props.name ? props.name : ""}`} className = "photoGallery" />
                </div>
                <p id = "name" className = "brotherName">{props.name ? props.name : "Default Name"}</p>
                <p id = "major" className = "brotherYear">{props.class ? props.class : "2000"}</p>
            </div>
        </div>
    )
}

