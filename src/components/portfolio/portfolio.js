import React from "react";
import VS from "./assets/VS.png";
import EAT from "./assets/EAT.png";
import BGB from "./assets/BGB.png";
import Berxy from "./assets/Berxy.png";
import PortCard from "./portCard";
import "./style.css"

const Portfolio = () => {
    const portfolioArr = [
        {
            id: 1,
            title: "Berxy Ecommerce",
            alt: "Berxy Ecommerce",
            webLink:"https://berxy.netlify.app/",
            gitLink:"https://github.com/Bram-G/BerXy-ECommerce",
            src: Berxy,
            desc: "FullStack Ecommerce application centered around luxury wrist watches made with React and MongoDB.",
            languages:"JavaScript, React, MongoDB"
        },
        {
            id: 2,
            title: "Board Game Butler",
            alt: "Board Game Butler",
            webLink:"https://boardgamebutler.netlify.app",
            gitLink:"http://www.github.com/Bram-G/BGB",
            src: BGB,
            desc: "FullStack application centered around board games and an AI assitant. Import your collection from Board Game Geek, and find new games to play with your friends. Login with username: TestUser password: password",
            languages:"JavaScript, React, AI, MongoDB, "

        }, 
        {
            id: 3,
            title: "Video Share",
            alt: "Video Share",
            webLink:"https://video-share.herokuapp.com/",
            gitLink:"http://www.github.com/Bram-G/Video-Share",
            src: VS,
            desc: "video conferencing app with text chat and screen sharing functionality. Login with email: bram@bram.com password: password",
            languages:"JavaScript, Handlebars, CSS3, Socket.io"
        },
        {
            id: 4,
            title: "Eatsy",
            alt: "Video Share",
            webLink:"https://eatsyfoods.netlify.app/",
            gitLink:"https://github.com/binh-ngo/eatsy-front-end",
            src: EAT,
            desc: "Full stack social media platform for home cooks, foodies, and chefs, where you can discover new recipes, connect with other home cooks, and share your culinary creations with the world.",
            languages:"React, JavaScript, MongoDB, Multer,"
        },
       
        // {
        //     id: 4,
        //     title: "Board Game Party",
        //     alt: "Board Game Party",
        //     webLink:"",
        //     gitLink:"http://www.github.com/Bram-G/Board-Game-Party",
        //     src: BGP,
        //     desc: "Front end application that searches for board games based on user input.",
        //     languages:"JavaScript, HTML, CSS3"
        // },
        // {
        //     id: 5,
        //     title: "Social Network API",
        //     alt: "Social Network API",
        //     webLink:"",
        //     gitLink:"http://www.github.com/Bram-G/NoSQL-SocialNetworkAPI",
        //     src: SNAPI,
        //     desc: "API for a social network we application where users can create, and react to thoughts.",
        //     languages:"JavaScript, MongoDB"
        // },
        // {
        //     id: 4,
        //     title: "Ecommerce Back End",
        //     alt: "Ecommerce Back End",
        //     webLink:"",
        //     gitLink:"http://www.github.com/Bram-G/ORM-Ecommerce-Back-Ende",
        //     src: EBE,
        //     desc: "An ORM backend database with full CRUD functionality.",
        //     languages:"JavaScript, MySQL, Express.js"
        // },

    ]
  return (
    <div className="portPage" id="portfolio">
    <div id="portDiv" className="row">
        {portfolioArr.map((project) =>(
          <PortCard
          key={project.id}
          src={project.src}
          alt={project.alt}
          gitLink={project.gitLink}
          webLink={project.webLink}
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
