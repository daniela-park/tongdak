import "./Menu.css";
import { Tongdak } from "../Data/Tongdak"
import { Sushi } from "../Data/Sushi"
import { RamenSoup } from "../Data/RamenSoup"
import { Noodle } from "../Data/Noodle"
import { RiceDish } from "../Data/RiceDish"
import { Sides } from "../Data/Sides"
import { Drinks } from "../Data/Drinks"
import MenuPdf from "../assets/TongdakMenu_v6.pdf"

export function Menu() {

  return (
    <div className="menu-container">
      <div className="menu-title-container">
        <p>MOST ORDERED</p>
      </div>
      <div className="menu-dishes-container">
        {Tongdak.map((MenuItems) => (
          <div className="menu-dishes-tile">
            <img src={MenuItems.image} className="menu-food-image"></img>
            <h2 className="menu-food-details">{MenuItems.name}</h2>
          </div>
        ))}
      </div>
      <div className="menu-title-container">
        <p>OTHER DISHES</p>
      </div>
      <div className="menu-dishes-names-container">
        <div className="menu-dishes-names-tile">
          <h5 className="menu-dishes-names-container">SUSHI</h5>
            {Sushi.map((MenuItems) => (
              <p>{MenuItems.name}</p>
          ))}
        </div>
        <div className="menu-dishes-names-tile">
          <h5 className="menu-dishes-names-container">RAMEN SOUP</h5>
            {RamenSoup.map((MenuItems) => (
              <p>{MenuItems.name}</p>
          ))}
        </div>
        <div className="menu-dishes-names-tile">
          <h5 className="menu-dishes-names-container">NOODLE</h5>
            {Noodle.map((MenuItems) => (
              <p>{MenuItems.name}</p>
          ))}
        </div>
        <div className="menu-dishes-names-tile">
          <h5 className="menu-dishes-names-container">RICE</h5>
            {RiceDish.map((MenuItems) => (
              <p>{MenuItems.name}</p>
          ))}
        </div>
      </div>
      <div className="menu-title-container">
        <p>SIDES</p>
      </div>
      <div className="menu-sides-drinks-container">
        <div className="menu-sides-drinks-tile">
          {Sides.map((MenuItems) => (
            <p>- {MenuItems.name} -</p>
          ))}
        </div>
      </div>
      <div className="menu-title-container">
        <p>DRINKS</p>
      </div>
      <div className="menu-sides-drinks-container">
        <div className="menu-sides-drinks-tile">
            {Drinks.map((MenuItems) => (
              <p>- {MenuItems.name} -</p>
          ))}
        </div>
      </div>
      <div className="download-menu-button-container">
        <button className="download-menu-button">
          <a href={MenuPdf} download>Download the menu!</a>
        </button>
      </div>
    </div>
  );
}

export default Menu;
