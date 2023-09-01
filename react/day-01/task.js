const NavBar = () => {
  return (
    <div className="nav-bar">
      <img
        className="logo"
        src="https://i.etsystatic.com/27043408/r/il/74bda1/3449896728/il_fullxfull.3449896728_mwly.jpg"
      ></img>
      <ul className="nav-items">
        <a href="">
          <li>Home </li>
        </a>
        <a href="">
          <li>Project</li>
        </a>
        <a href="">
          <li>Contanct</li>
        </a>
        <a href="">
          <li>About Us</li>
        </a>
      </ul>
    </div>
  );
};

ReactDOM.render(<NavBar />, document.querySelector("#root"));
