import groupPhoto from './images/groupPhoto.png'

export default function Events() {
    return(
    <div className="flex items-center flex-col">
        <div className="mt-5 flex flex-col items-center">
            <div className="text-[#DCA543] text-2xl p-1 font-bold">Upcoming Events</div>
            <iframe
                className="border-4 border-[#DCA543] w-[90vw] max-w-[800px] h-[60vh] max-h-[600px] mx-auto"
                title="Events Calendar"
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=MWQ3ZWU5ODc3YjM3ZDc2NTU1YTJkMjQwMTczZGZlNmI4NmIyNjFmOTM0ZjFiMTFlNzg3OTUwOWViYTI5ZWYyOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237B1A1A&showCalendars=0"
            />            
        </div>
        
        <div className="mt-5 flex flex-col items-center">
            <div className="text-[#DCA543] text-2xl p-1 font-bold">Event Announcements</div>
            <div className="bg-[#DCA543] flex justify-center items-center w-screen"> 
                <div className="m-6">
                    <div className="text-2xl font-bold">Brother Pictures 11/13</div>
                    <ul className="list-inside list-disc pl-1">
                        <li>Make sure to dress Business Professional</li>
                        <li>Reserve your spot for individual head-shots</li>
                        <li>Group pictures are happening at 5:00 pm</li>
                    </ul>                    
                </div>
                <img src={groupPhoto} className="m-6 border border-black" alt="Group of Theta Tau members" />
            </div>
        </div>
    </div>
    )
}