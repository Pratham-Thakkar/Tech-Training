import "../css/About.css";
import { IAbout } from "../interface/IAbout";

function About(props: IAbout): JSX.Element {
  return (
    <div className="about">
      <h2 className="title">About</h2>
      <h6 className="detail">{props.detail}</h6>
    </div>
  );
}

export default About;
