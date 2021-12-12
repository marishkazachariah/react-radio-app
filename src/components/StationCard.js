import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faMinusCircle, faPlusCircle);

export default function StationCard(props) {
  const cssClasses = [
    "Controls",
    props.showControls ? "ControlsOpen" : "ControlsClose"
  ];

  return (
    <div className="Station" onClick={props.clicked}>
      <div className={cssClasses.join(" ")}>
        <FontAwesomeIcon icon={faMinusCircle} size="2x" />
        <div className="ImageBox">
          <img src={props.image} alt={props.title} />
        </div>
        <FontAwesomeIcon icon={faPlusCircle} size="2x" />
      </div>
      <div className="StationInfo">
        <p>{props.title}</p>
        <p>
          <b>{props.frequency}</b>
        </p>
      </div>
    </div>
  );
}
