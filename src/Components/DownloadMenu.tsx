import "./DownloadMenu.css";
import Menu from "../assets/Menu.gif"
import MenuNewMalden from "../assets/TongdakNewMalden.pdf"
import MenuWimbledon from "../assets/TongdakWimbledon.pdf"

const Contact = () => {

  return (
    <>
      <div className="dl-container">
        <div className="dl-container-transp">
          <h1 className="order-h1">SEE OUR MENU</h1>
          <div className="dl-container-box-left">
            <div className="dl-menu-button-container">
              <button className="dl-menu-button">
                <a href={MenuNewMalden} download>New Malden</a>
              </button>
            </div>
            <div className="dl-menu-button-container">
              <button className="dl-menu-button">
                <a href={MenuWimbledon} download>Wimbledon</a>
              </button>
            </div>
          </div>
        </div>
        <div className="dl-container-transp">
          <div className="dl-container-box-right">
            <img src={Menu} className="menu-gif"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
