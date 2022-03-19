import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navHome">
        <NavLink to="/">Home</NavLink>
      </div>

      <div className="navSignLog">
        <NavLink to="/signup">Signup</NavLink>

        <NavLink to="/login">Login</NavLink>
      </div>

      <div className="navLogout">
        <NavLink to="/">Logout</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
