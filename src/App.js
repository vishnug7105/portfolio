import React from "react";
import{BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Nav from "./Components/Nav";

import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/Skills"
import HireMe from "./Components/HireMe"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
function App() {
  return (
    <div className="">

    {/*Navbar*/}
    <Nav/>
    {/*Intro*/}
    <Home/>
    {/*About Me*/}
    <About/>
    {/*Skills*/}
    <div className="p-[24px]">
    <Skills/>
    </div>
    {/*Hire*/}
    <HireMe/>
    {/*Contact*/}
    <Contact/>
    {/*footer*/}
    <Footer/>

    </div>
  );
}

export default App;
