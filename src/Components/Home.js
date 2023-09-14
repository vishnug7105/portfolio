import React from "react";


const Home = () =>{
  return(
    <>
    <div className="m-6 p-4 flex flex-col items-center  md:px-24 md:flex-row">
     <div>
        <h1 className="text-[40px] text-bold">Hello, </h1>
        <h1 className="text-[40px] text-bold">I am <span className="text-blue-600">Godi Vishnu Vardhan Reddy</span> </h1>
        <h3 className="text-gray-400 mt-4 ">I am graduated student in Electronic and Communication Engineering Branch. But interested in web development</h3>
        <button className="bg-blue-600 mt-4 p-2 px-2 rounded-md transistion-all ease-in-out hover:scale-110 text-white">Resume</button>
     </div>
     <img src="https://gitlab.com/rrs301/personal-portfolio/-/raw/main/src/assets/homeImage.png?ref_type=heads"
        alt="heropic"
        className=" w-[300px] md:w-[400px]"
        />
  </div>
    </>
  )
}

export default Home;
