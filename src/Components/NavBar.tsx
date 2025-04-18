import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

  return (
    <>
      <nav className={`navbar ${location.pathname === "/home" ? "collapsed" : ""}`}>
        <ul>
          <li>
            <Link to="/home">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/menu">
              MENU
            </Link>
          </li>
          <li>
            <Link to="/order">
              ORDER
            </Link>
          </li>
          <li>
            <Link to="/shops">
              SHOPS
            </Link>
          </li>
          <li>
            <Link to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
