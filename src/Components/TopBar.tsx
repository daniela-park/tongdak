import "./TopBar.css";
import Logo from "/LogoRect.png"
import Tongdak from "/Tongdak.png"

const TopBar = () => {

  return (
    <>
      <div className="topbar">
        <img className="topbar-name" src={Tongdak} alt="Tongdak"/>
        <img className="topbar-logo" src={Logo} alt="Tongdak logo"/>
      </div>
    </>
  );
};

export default TopBar;
