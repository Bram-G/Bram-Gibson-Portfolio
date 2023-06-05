import React from "react";
import "./style.css";
import Portfolio from "../../components/portfolio/portfolio";
import AboutMe from "../../components/aboutMe/aboutMe";
import Contact from "../../components/contact/contact";
import BreakerOne from "../../components/breakerOne/breakerOne";
import BreakerTwo from "../../components/breakerTwo/breakerTwo";


function Home() {
return (
    <div>

    <AboutMe/>
    <BreakerOne/>
    <Portfolio/>
    <BreakerTwo/>
    <Contact/>
    
    </div>
)
}
export default Home;