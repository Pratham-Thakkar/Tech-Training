import "./NavBar.css";
export const NavBar = ({ children }: any) => {
  return (
    <>
      <div className="navBar">
        <img className="brand-logo" src="/blog-logo.png" alt="brand-logo" />

        <ul className="nav-links">{children}</ul>
        {/* <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            auth?.setToken(null);
          }}
        >
          Logout
        </button> */}
      </div>
    </>
  );
};
