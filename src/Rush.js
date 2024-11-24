import React, { useState, useEffect } from "react";
import Gallery from './Gallery'
import brotherhood from './images/brotherhoodPicture.png'
import professionalism from './images/professionalismPicture.png'
import service from './images/servicePicture.png'

export default function Rush() {

    /*Edit this to alter rush title on rush page CHECKHERE*/
    const recruitmentText = "Recruitment Schedule - January 2025"

    /*Edit this to alter dates & event text on rush page CHECKHERE*/
    const dailyInfo = [
      {day: "Monday", date: "1/2", text: "Events Monday"},
      {day: "Tuesday", date: "3/4", text: "Events Tuesday"},
      {day: "Wednesday", date: "5/6", text: "Events Wednesday"},
      {day: "Thursday", date: "7/8", text: "Events Thursday"},
      {day: "Friday", date: "9/10", text: "Events Friday"},
      {day: "Saturday", date: "11/12", text: "Events Saturday"},
      {day: "Sunday", date: "13/14", text: "Events Sunday"},
    ]

    /*Edit this to alter photo gallery CHECKHERE*/
    const images = [
        { id: 0, src: brotherhood, description: "brotherhood" },
        { id: 1, src: professionalism, description: "professionalism" },
        { id: 2, src: service, description: "service" },
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
          Rush is a recruitment process where students get to know more about
          Theta Tau, its values, and its activities. It's an opportunity to see
          if Theta Tau is the right fit for you, and to meet potential new
          members!
        </p>
      </section>

      {/* Recruitment Schedule Section */}
      <section className="bg-transparent text-[#DCA543] p-5 shadow-lg">
        <div className="border-2 border-[#DCA543] p-3 mb-5 text-center">
          <div
            className="text-3xl text-[#DCA543] h-auto p-1 focus:outline-none"
          >
            {recruitmentText}
          </div>
        </div>
        {isMobileView ? (
          // Single square with horizontal scrolling
          <div className="overflow-x-auto flex gap-4 p-4">
            {dailyInfo.map((day, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[200px] space-y-2"
              >
                <div className="text-center font-bold text-[#DCA543]">
                  {day.day}
                </div>
                <div className="relative w-32 h-32 border-2 border-[#DCA543]">
                  <div className="absolute top-0 right-0 w-10 h-10 border-2 border-[#DCA543] z-10">
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
            {dailyInfo.map((day, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="text-center font-bold text-[#DCA543]">
                  {day.day}
                </div>
                <div className="relative w-32 h-32 border-2 border-[#DCA543]">
                  <div className="absolute top-0 right-0 w-10 h-10 border-2 border-[#DCA543] z-10">
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
          <li>
            • Attend at least one info session and three other events during
            recruitment
          </li>
          <li>• Not a member of a competing engineering fraternity/sorority</li>
          <li>• Must not be within 6 months of graduation</li>
          <li>• Have a UCF GPA of at least 2.0 or be a transfer student</li>
        </ul>
      </section>

      {/* Photo Gallery Section */}
      <Gallery images={images} numImages={3} backgroundColor={"#7B1A1A"} borderColor={"#000000"}/>
    </>
  );
}
