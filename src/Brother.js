import member from './images/member.jpg'


export default function Brother() {
    return(

        
        <div className = "div3">
            <div class = "brother">
                <div className="flex flex-col items-center">
                    <img src={member} alt="Avatar" className = "photoGallery" />
                </div>
                <p id = "name" className = "brotherName"> George Harrison</p>
                <p id = "major" className = "brotherYear"> 2023</p>
                
            </div>


        </div>
    )
}

