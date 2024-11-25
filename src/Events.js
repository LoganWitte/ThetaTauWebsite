export default function Events() {
    return(
    <div className="flex items-center flex-col">
        <button className="p-2 m-2 border border-black rounded-full bg-white hover:bg-gray-400" onClick={testFunc}>Click Me!</button>
        <div className="m-5 flex flex-col items-center">
            <div className="text-[#DCA543] text-2xl p-1 font-bold">Upcoming Events</div>
            <iframe
                className="border-4 border-[#DCA543] w-[90vw] max-w-[800px] h-[60vh] max-h-[600px] mx-auto"
                title="Events Calendar"
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=MWQ3ZWU5ODc3YjM3ZDc2NTU1YTJkMjQwMTczZGZlNmI4NmIyNjFmOTM0ZjFiMTFlNzg3OTUwOWViYTI5ZWYyOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237B1A1A&showCalendars=0"
            />            
        </div>
    </div>
    )
}