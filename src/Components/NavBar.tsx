import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

  const location = useLocation();

  return (
    <>
      <nav className={`navbar ${location.pathname === "/tongdak" ? "collapsed" : ""}`}>
        <ul>
          <li>
            <Link to="/tongdak">
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
