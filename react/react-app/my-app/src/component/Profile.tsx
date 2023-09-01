import Info from "./Info";
import { IAbout } from "../interface/IAbout";
import About from "./About";
import "../css/Profile.css";

function Profile(props: IAbout): JSX.Element {
  return (
    <div className="profile" key={props.id}>
      <Info {...props} />
      <About {...props} />
    </div>
  );
}

export default Profile;
