import React from "react";

const About = () =>{
  return(
    <>
    <div  className="mt-32">
    <img src="https://gitlab.com/rrs301/personal-portfolio/-/raw/main/src/assets/wave.svg?ref_type=heads"
    alt="wave"
    class="w-screen absolute"/>
    <img src="https://ouch-cdn2.icons8.com/SaA2mPHCnnMuPfAaLtPt7s-AFaV8S9zJzIfT3DJPpA4/rs:fit:256:290/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTE3/L2NiOTE0NTFkLTI4/NjMtNGVhMy04MDNj/LWE2ZTJmNDJlMDJk/OS5wbmc.png"
    alt="friend"
    className="absolute mt-[-80px] ml-16 md:mt-[-180px] w-40 md:w-[300px]"/>
    <div class="h-80  bg-blue-600   ">
    <h2 className="text-5xl font-bold text-white text-center mt-4 p-12  "> About  <span className="text-black"> Me </span></h2>
    <p className=" w-full px-10 md:px-48 lg:px-80 mt-[50px] text-white text-xl">I am graduated student in Electronic and Communication Engineering Branch. But interested in web development</p>
    </div>

    {/* about section images*/}
    <div className="md:flex-row flex flex-col items-center justify-around mt-[-40px]  md:ml-16    ">

    <div className="group md:hover:bg-blue-600 px-5 mb-5  rounded-3xl">
    <img
    src="https://static.vecteezy.com/system/resources/thumbnails/002/189/778/small/a-man-celebrating-the-graduation-holding-certificate-free-vector.jpg"
    alt="student"
    className="w-[320px] h-[200px] rounded-lg"
    />
    <div class="w-[280px] pb-[20px]">
    <h2 className="font-bold text-center md:group-hover:text-white"> Student</h2>
    <h3 class="text-[12px] text-gray-500 text-center md:group-hover:text-gray-200"> Graduated from sreyas institue of engineering and technology</h3>
    </div>
    </div>

    <div className="group md:hover:bg-blue-600 px-5  mb-5 rounded-3xl">
    <img
    src="https://static.vecteezy.com/system/resources/thumbnails/002/189/778/small/a-man-celebrating-the-graduation-holding-certificate-free-vector.jpg"
    alt="student"
    className=" w-[320px] h-[200px] rounded-lg"
    />
    <div class="w-[280px] pb-[20px]">
    <h2 className="font-bold text-center md:group-hover:text-white "> Student</h2>
    <h3 class="text-[12px] text-gray-500 text-center md:group-hover:text-gray-200 "> Graduated from sreyas institue of engineering and technology</h3>
    </div>
    </div>

    <div className="mb-10 group md:hover:bg-blue-600 px-6 py-8 rounded-3xl ">
    <img
    src="https://media.istockphoto.com/id/1304570729/vector/front-end-development-concept-vector-flat-graphic-design-illustration.jpg?s=612x612&w=0&k=20&c=0lpu0j-4FbuoA7xpGzt9apKZeI5F9KlNNe0qRYxjUYs="
    alt="student"
    className="w-[320px] h-[200px]  rounded-lg"
    />
    <h2 className="font-bold text-center md:group-hover:text-white">Web development</h2>
    <h3 class="text-[12px] text-gray-500 text-center md:group-hover:text-gray-200">Completed course in devtown</h3>
    </div>

    </div>

    </div>
    </>
  )
}

export default About;
