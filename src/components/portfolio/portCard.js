import { UilGithub, UilGlobe } from "@iconscout/react-unicons";

export default function PortCard(props) {
  return (
    <div className="card d-flex col-6 mx-auto fullCard border-0">
      <div className="allTogether">
        <div id="portCard">
          <a href={props.webLink} target="_blank" rel="noreferrer">
            <img id="portImg" src={props.src} alt={props.alt}></img>
          </a>
        </div>
        <div id="textBox">
          <div id="titleBox">
            <h1 id="title">{props.title}</h1>
            <div id="linkBox">
              <a target="_blank" rel="noreferrer" href={props.gitLink} className="icons">
                <UilGithub size={30} color="#464646" />
              </a>
              <a target="_blank" rel="noreferrer" href={props.webLink} className="icons">
                <UilGlobe size={30} color="#464646" />
              </a>
            </div>
          </div>
          <p id="desc">{props.desc}</p>
          <p id="lang">{props.languages}</p>
        </div>
      </div>
    </div>
  );
}
