

export default function PortCard(props) {
  return (
    
    <div  className="card d-flex col-4 mx-auto border-0">
      <div id="portCard" >
        <a href={props.link} target="_blank" rel="noreferrer">
          <img id="portImg" src={props.src} alt={props.alt}></img>
        </a>
      </div>
      <div id="textBox">
        <h1 id="title">{props.title}</h1>
        <p id="desc">{props.desc}</p>
        <p id="lang">{props.languages}</p>
      </div>
    </div>
  );
}