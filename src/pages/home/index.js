import React from "react";
import "./style.css";
import Portfolio from "../../components/portfolio/portfolio";
import AboutMe from "../../components/aboutMe/aboutMe";
import Contact from "../../components/contact/contact";
import BreakerOne from "../../components/breakerOne/breakerOne";

function Home() {
return (
    <div className="background">

    <AboutMe/>
    <BreakerOne/>
    <Portfolio/>
    <Contact/>
    
    </div>
)
}
export default Home;