import { NavLink } from "react-router-dom";
import User from "./User";


const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? "active" : "")}>Leaderboard</NavLink>
        </li>
        <li>
          <NavLink to="/add" className={({ isActive }) => (isActive ? "active" : "")}>New</NavLink>
        </li>
        <li className="nav-right">
          <User />
        </li>
        <li>
          <NavLink to="/logout" className={({ isActive }) => (isActive ? "active" : "")}>Logout</NavLink>
        </li>
      </ul >
    </nav >
  );
};

export default Nav;