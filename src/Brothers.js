import gear from './images/gear.png'


export default function Brothers() {
    return(
        <div>

            <div >
                <header className="headerContainer">
                    <span class="dot"></span>
                    <img  src={gear}  alt="gear" class="overlay-image"></img>
                    <h1>Meet the Brothers</h1>
                </header>
            </div>

            <div className = "bigWhiteText">
                <h2 className = "bigWhiteText">(Rush Class) 20xx </h2>
            </div>


        </div>
    )
}

