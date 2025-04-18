import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    setShowMenu(false);
  };

  return (
    <>
      <nav className={`navbar ${location.pathname === "/home" ? "collapsed" : ""}`}>
        <ul>
          <li>
            <Link to="/home" onClick={closeMenuOnMobile}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={closeMenuOnMobile}>
              MENU
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={closeMenuOnMobile}>
              ORDER
            </Link>
          </li>
          <li>
            <Link to="/shops" onClick={closeMenuOnMobile}>
              SHOPS
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenuOnMobile}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
