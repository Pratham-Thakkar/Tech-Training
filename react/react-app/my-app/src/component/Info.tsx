import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import profile from "../pratham.png";
import { IAbout } from "../interface/IAbout";
import "../css/Info.css";

function Info(props: IAbout): JSX.Element {
  return (
    <div className="info">
      <img className="profile" src={profile} alt="Pratham" />
      <h1 className="name">{props.firstName}</h1>
      <h5 className="designation">{props.designation}</h5>
      <p className="detail">Know more</p>
      <a href="mailto:pratham.thakkar@talentsystems.com">
        <button id="email">
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "9px" }} />
          Email
        </button>
      </a>
      <a href="/">
        <button id="linkedIn">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            style={{ color: "#ffffff", marginRight: "8px" }}
          />
          LinkedIn
        </button>
      </a>
    </div>
  );
}

export default Info;
