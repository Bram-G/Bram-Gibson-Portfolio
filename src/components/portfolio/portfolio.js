import React from "react";
import VS from "./assets/VS.png";
import BGP from "./assets/BGP.png";
import RMG from "./assets/RMG.png";
import SNAPI from "./assets/SNAPI.png";
import EBE from "./assets/EBE.png";
import BGB from "./assets/BGB.png";
import PortCard from "./portCard";
import "./style.css"

const Portfolio = () => {
    const portfolioArr = [
        {
            id: 1,
            title: "Board Game Butler",
            alt: "Board Game Butler",
            link:"http://www.github.com/Bram-G/BGB",
            src: BGB,
            desc: "FullStack application that allows users to search for board games and save them to their imported collection.",
            languages:"JavaScript, React, SQL"
        },
        {
            id: 2,
            title: "Video Share",
            alt: "Video Share",
            link:"http://www.github.com/Bram-G/Video-Share",
            src: VS,
            desc: "video conferencing app with text chat and screen sharing functionality.",
            languages:"JavaScript, Handlebars, CSS3, Socket.io"
        },
        {
            id: 3,
            title: "ReadMe Generator",
            alt: "ReadMe Generator",
            link:"http://www.github.com/Bram-G/README_Generator",
            src: RMG,
            desc: "A markdown generator app that helps format application ReadMe's for use on GitHub.",
            languages:"JavaScript, JQuery, Node.js"
        },        
        {
            id: 4,
            title: "Board Game Party",
            alt: "Board Game Party",
            link:"http://www.github.com/Bram-G/Board-Game-Party",
            src: BGP,
            desc: "Front end application that searches for board games based on user input.",
            languages:"JavaScript, HTML, CSS3"
        },
        {
            id: 5,
            title: "Social Network API",
            alt: "Social Network API",
            link:"http://www.github.com/Bram-G/NoSQL-SocialNetworkAPI",
            src: SNAPI,
            desc: "API for a social network we application where users can create, and react to thoughts.",
            languages:"JavaScript, MongoDB"
        },
        {
            id: 6,
            title: "Ecommerce Back End",
            alt: "Ecommerce Back End",
            link:"http://www.github.com/Bram-G/ORM-Ecommerce-Back-Ende",
            src: EBE,
            desc: "An ORM backend database with full CRUD functionality.",
            languages:"JavaScript, MySQL, Express.js"
        },

    ]
  return (
    <div className="portPage" id="portfolio">
    <div id="portDiv" className="row">
        {portfolioArr.map((project) =>(
          <PortCard
          key={project.id}
          src={project.src}
          alt={project.alt}
          link={project.link}
          title={project.title}
          desc={project.desc}
          languages={project.languages}
          />  
        ))}
      
        
      
    </div>
    </div>
  );
};

export default Portfolio;
