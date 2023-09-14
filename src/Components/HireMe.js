import React from "react";

const HireMe = () =>{
  return(
    <>
    <section id="hireme" className="py-10 px-3 text-white">
     <div className="text-center">
        <h3 className="text-4xl font-semibold text-black">
           Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
     </div>
     <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
           <h2 className="text-2xl font-semibold">
              Do you want any work from me?
           </h2>
           <p className="lg:text-left text-justify  text-sm mt-4 text-gray-200 leading-6">
              I should be hired, because of my relevant skills, experience, and passion for the industry.
              I've researched the company and can add value to its growth.
              My positive attitude, work ethics,and long-term goals align with the job requirements,
              making me a committed and valuable asset to the company.
           </p>
           <button className="px-2 py-2 rounded-xl bg-blue-600 mt-5 ">Say Hello</button>
        </div>
     </div>
  </section>
    </>
  )
}

export default HireMe;
