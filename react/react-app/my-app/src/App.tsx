import Profile from "./component/Profile";
import { useState } from "react";
import { IAbout } from "./interface/IAbout";
import "./App.css";

const profileDetails = [
  {
    id: 1,
    firstName: "Pratham Thakkar",
    designation: "Frontend Developer",
    email: "pratham.thakkar@talentsystems.com",
    detail:
      "I am a front-end developer with a particular interest in making things simple and usable. I try to keep up with best practices and am always looking for new things to learn.",
  },
  {
    id: 2,
    firstName: "Raj Dave",
    designation: "Backend Developer",
    email: "raj.dave@talentsystems.com",
    detail:
      "Just a normal guy from surat, learning cool stuffs like React Js and Node Js With TypeScript.",
  },
  {
    id: 3,
    firstName: "Raj Dave",
    designation: "Backend Developer",
    email: "raj.dave@talentsystems.com",
    detail:
      "Just a normal guy from surat, learning cool stuffs like React Js and Node Js With TypeScript.",
  },
  {
    id: 4,
    firstName: "Raj Dave",
    designation: "Backend Developer",
    email: "raj.dave@talentsystems.com",
    detail:
      "Just a normal guy from surat, learning cool stuffs like React Js and Node Js With TypeScript.",
  },
  {
    id: 5,
    firstName: "Raj Dave",
    designation: "Backend Developer",
    email: "raj.dave@talentsystems.com",
    detail:
      "Just a normal guy from surat, learning cool stuffs like React Js and Node Js With TypeScript.",
  },
];

function App(): JSX.Element {
  // const [toggleProfile, setToggleProfile] = useState(0);
  // function changeProfile() {
  //   toggleProfile === 0 ? setToggleProfile(1) : setToggleProfile(0);
  // }
  return (
    <div className="App">
      {/* <button onClick={changeProfile}>Toggle Profile</button> */}
      {/* {toggleProfile ? (
        <Profile {...profileDetails1} />
      ) : (
        <Profile {...profileDetails2} />
      )} */}

      {profileDetails.map((profile) => {
        return <Profile {...profile} />;
      })}
    </div>
  );
}

export default App;

//create a digital buisness card 4-5 properties static
