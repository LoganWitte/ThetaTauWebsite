export default function Rush() {
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
          <h2 className="text-3xl text-[#DCA543]">Recruitment Schedule</h2>
        </div>
        <div className="flex justify-between gap-3 mt-5">
          {/* Monday */}
          <div className="flex flex-col items-center w-1/6">
            <span className="text-center font-semibold text-sm sm:text-base md:text-lg">
              Monday
            </span>
            <div className="border-2 border-[#DCA543] h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-32 lg:w-32 flex justify-center items-center">
              {/* Add event details here */}
            </div>
          </div>

          {/* Tuesday */}
          <div className="flex flex-col items-center w-1/6">
            <span className="text-center font-semibold text-sm sm:text-base md:text-lg">
              Tuesday
            </span>
            <div className="border-2 border-[#DCA543] h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-32 lg:w-32 flex justify-center items-center">
              {/* Add event details here */}
            </div>
          </div>

          {/* Wednesday */}
          <div className="flex flex-col items-center w-1/6">
            <span className="text-center font-semibold text-sm sm:text-base md:text-lg">
              Wednesday
            </span>
            <div className="border-2 border-[#DCA543] h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-32 lg:w-32 flex justify-center items-center">
              {/* Add event details here */}
            </div>
          </div>

          {/* Thursday */}
          <div className="flex flex-col items-center w-1/6">
            <span className="text-center font-semibold text-sm sm:text-base md:text-lg">
              Thursday
            </span>
            <div className="border-2 border-[#DCA543] h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-32 lg:w-32 flex justify-center items-center">
              {/* Add event details here */}
            </div>
          </div>

          {/* Friday */}
          <div className="flex flex-col items-center w-1/6">
            <span className="text-center font-semibold text-sm sm:text-base md:text-lg">
              Friday
            </span>
            <div className="border-2 border-[#DCA543] h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-32 lg:w-32 flex justify-center items-center">
              {/* Add event details here */}
            </div>
          </div>

          {/* Saturday */}
          <div className="flex flex-col items-center w-1/6">
            <span className="text-center font-semibold text-sm sm:text-base md:text-lg">
              Saturday
            </span>
            <div className="border-2 border-[#DCA543] h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-32 lg:w-32 flex justify-center items-center">
              {/* Add event details here */}
            </div>
          </div>

          {/* Sunday */}
          <div className="flex flex-col items-center w-1/6">
            <span className="text-center font-semibold text-sm sm:text-base md:text-lg">
              Sunday
            </span>
            <div className="border-2 border-[#DCA543] h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-32 lg:w-32 flex justify-center items-center">
              {/* Add event details here */}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="bg-[#DCA543] p-5 shadow-lg">
        <h2 className="text-xl text-center font-bold">
          Recruitment & Potential New Member (PNM) Eligibility Requirements
        </h2>
        <h2 className="text-center">
          Any students of the UCF College of Engineering is eligible to be a
          member of Theta Tau. Mostly, the prime qualification is possessing
          good character. We do have a few particular qualifications that must
          be met at the time of initiation (after pledging, at the end of the
          semester.)
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
