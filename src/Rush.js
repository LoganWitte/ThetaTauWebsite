import React, { useState, useEffect } from "react";

export default function Rush() {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
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
            contentEditable
            className="text-3xl text-[#DCA543] h-auto p-1 focus:outline-none"
          >
            Recruitment Schedule - January 2025
          </div>
        </div>
        {isMobileView ? (
          // Single square with horizontal scrolling
          <div className="overflow-x-auto flex gap-4 p-4">
            {daysOfWeek.map((day, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[200px] space-y-2"
              >
                <div className="text-center font-bold text-[#DCA543]">
                  {day}
                </div>
                <div className="relative w-32 h-32 border-2 border-[#DCA543]">
                  <div className="absolute top-0 right-0 w-10 h-10 border-2 border-[#DCA543] z-10">
                    <div
                      contentEditable
                      className="absolute inset-0 flex justify-center items-center text-[#DCA543] text-center text-xs p-1 focus:outline-none z-20"
                    >
                      ??/??
                    </div>
                  </div>
                  <div className="relative w-full h-full text-[#DCA543] text-center p-1 pt-12 overflow-hidden flex flex-col">
                    <div
                      contentEditable
                      className="overflow-y-auto flex-grow focus:outline-none"
                    >
                      More events or content here
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Grid view for larger screens
          <div className="grid grid-cols-7 gap-4 p-4">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="text-center font-bold text-[#DCA543]">
                  {day}
                </div>
                <div className="relative w-32 h-32 border-2 border-[#DCA543]">
                  <div className="absolute top-0 right-0 w-10 h-10 border-2 border-[#DCA543] z-10">
                    <div
                      contentEditable
                      className="absolute inset-0 flex justify-center items-center text-[#DCA543] text-center text-xs p-1 focus:outline-none z-20"
                    >
                      ??/??
                    </div>
                  </div>
                  <div className="relative w-full h-full text-[#DCA543] text-center p-1 pt-12 overflow-hidden flex flex-col">
                    <div
                      contentEditable
                      className="overflow-y-auto flex-grow focus:outline-none"
                    >
                      Events
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
      <section className="bg-transparent text-white p-5">
        <h2 className="text-2xl">Interactive Photo Gallery Here....</h2>
      </section>
    </>
  );
}
