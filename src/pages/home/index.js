import React from "react";
import "./style.css";
import Portfolio from "../../components/portfolio/portfolio";
import AboutMe from "../../components/aboutMe/aboutMe";
import Contact from "../../components/contact/contact";
import Resume from "../../components/resume/resume";
import BreakerOne from "../../components/breakerOne/breakerOne";

function Home() {
return (
    <div>

    <AboutMe/>
    <BreakerOne/>
    <Portfolio/>
    <Contact/>
    <Resume/>
    
    </div>
)
}
export default Home;