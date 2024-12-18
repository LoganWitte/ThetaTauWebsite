import React, { useState, useEffect } from "react";
import Gallery from './Gallery'

import gallery_1 from './images/gallery_1.jpg'
import gallery_2 from './images/gallery_2.jpg'
import gallery_3 from './images/gallery_3.PNG'
import gallery_4 from './images/gallery_4.jpg'
import gallery_5 from './images/gallery_5.jpeg'
import gallery_6 from './images/gallery_6.JPG'

import { getRushText, getDayInfo } from "./API";

export default function Rush() {

  const [rushText, setRushText] = useState("");
  const [dayInfo, setDayInfo] = useState([]);

  /*Handles data fetching*/
  useEffect(() => {
    const fetchRushText = async () => {
        const newRushText = await getRushText();
        if(newRushText) {
            setRushText(newRushText);
        }
    }
    const fetchDayInfo = async () => {
      const newDayInfo = await getDayInfo();
      if(newDayInfo) {
          setDayInfo(newDayInfo);
      }
    }
    fetchRushText();
    fetchDayInfo();
}, [])

  /*Edit this to alter photo gallery*/
  const images = [
    { id: 0, src: gallery_1, description: "Gallery Image 1" },
    { id: 1, src: gallery_2, description: "Gallery Image 2" },
    { id: 2, src: gallery_3, description: "Gallery Image 3" },
    { id: 3, src: gallery_4, description: "Gallery Image 4" },
    { id: 4, src: gallery_5, description: "Gallery Image 5" },
    { id: 5, src: gallery_6, description: "Gallery Image 6" }
  ];

  const [isMobileView, setIsMobileView] = useState(false);

  // Detect screen width to switch layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1268); // Adjust breakpoint as needed
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="text-center text-[#DCA543] p-5 shadow-lg">
        <h1 className="text-3xl">Let's Rush!</h1>
      </header>

      {/* What is Rush Section */}
      <section className="bg-[#DCA543] text-black p-5 shadow-lg">
        <h2 className="text-2xl">What is Rush?</h2>
        <p className="mt-3">
          Rush happens in the first few weeks at the beginning of the fall and 
          spring semesters when Theta Tau invites new members to join. It’s an 
          opportunity for students in engineering and technology majors to connect 
          with the fraternity and learn more about what it stands for.
        </p>
      </section>

      {/* Recruitment Schedule Section */}
      <section className="bg-transparent text-[#DCA543] p-5 shadow-lg">
        <div className="border-2 border-[#DCA543] p-3 mb-5 text-center">
          <div
            className="text-3xl text-[#DCA543] h-auto p-1 focus:outline-none"
          >
            {rushText.text}
          </div>
        </div>
        {isMobileView ? (
          // Single square with horizontal scrolling
          <div className="overflow-x-auto flex gap-4 p-4">
            {dayInfo.map((day, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[200px] space-y-2"
              >
                <div className="text-center font-bold text-[#DCA543]">
                  {day.day}
                </div>
                <div className="relative w-32 h-32 border-2 border-[#DCA543]">
                  <div className="absolute top-0 right-0 w-10 h-10 border-2 border-[#DCA543] border-t-0 border-r-0 z-10">
                    <div
                      className="absolute inset-0 flex justify-center items-center text-[#DCA543] text-center text-xs p-1 focus:outline-none z-20"
                    >
                      {day.date}
                    </div>
                  </div>
                  <div className="relative w-full h-full text-[#DCA543] text-center p-1 pt-12 overflow-hidden flex flex-col">
                    <div
                      className="overflow-y-auto flex-grow focus:outline-none"
                    >
                      {day.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Grid view for larger screens
          <div className="grid grid-cols-7 gap-4 p-4">
            {dayInfo.map((day, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="text-center font-bold text-[#DCA543]">
                  {day.day}
                </div>
                <div className="relative w-32 h-32 border-2 border-[#DCA543]">
                  <div className="absolute top-0 right-0 w-10 h-10 border-2 border-[#DCA543] border-t-0 border-r-0 z-10">
                    <div
                      className="absolute inset-0 flex justify-center items-center text-[#DCA543] text-center text-xs p-1 focus:outline-none z-20"
                    >
                      {day.date}
                    </div>
                  </div>
                  <div className="relative w-full h-full text-[#DCA543] text-center p-1 pt-12 overflow-hidden flex flex-col">
                    <div
                      className="overflow-y-auto flex-grow focus:outline-none"
                    >
                      {day.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Eligibility Section */}
      <section className="bg-[#DCA543] p-5 shadow-lg">
        <h2 className="text-xl text-center font-bold">
          Recruitment & Potential New Member (PNM) Eligibility Requirements
        </h2>
        <ul className="list-disc p-2 pl-6 mt-3 space-y-2 text-center text-black">
          <li>A member must meet the following qualifications:</li>
          <li>• Be at least 18 years of age</li>
          <li>
            • Must be enrolled in a program leading to an Engineering degree
          </li>
          <li>• Not a member of a competing engineering fraternity/sorority</li>
          <li>• Must not be within 6 months of graduation</li>
          <li>• Have a UCF GPA of at least 2.0 or be a transfer student</li>
        </ul>
      </section>

      {/* Photo Gallery Section */}
      <Gallery images={images} numImages={3} backgroundColor={"#7B1A1A"} borderColor={"#000000"} />
    </>
  );
}
