/* import { Link } from "react-router-dom"; */
import "./MostOrdered.css";
import { Tongdak } from "../Data/Tongdak"


const MostOrdered = () => {

  return (
    <>
      <div className="most-ordered-container">
        <h1 className="top5-h1-red">DISCOVER OUR</h1>
        <h1 className="top5-h1-yellow">MOST ORDERED DISHES</h1>
          <div className="most-ordered-dishes-container">
            <div className="most-ordered-dishes-container">
          
              {Tongdak.map((MenuItems) => (
                <div className="mySlides fade">
                  <img src={MenuItems.image} className="food-image"></img>
                  <div className="food-details">
                    <h2>{MenuItems.name}</h2>
                    <p>{MenuItems.description}</p>
                  </div>
                </div>
              ))}

              <div>
                <span className="dot"></span> 
                <span className="dot"></span> 
                <span className="dot"></span> 
              </div>
         
              { /*
              {Tongdak.map((MenuItems) => (
                <a href={MenuItems.name} className="top-dishes-tile">
                  <img src={MenuItems.image} className="food-image"></img>
                  <div className="food-details">
                    <h2>{MenuItems.name}</h2>
                    <p>{MenuItems.description}</p>
                    <p>{MenuItems.price}</p>
                  </div>
                </a>
              ))}
              */ }
            </div>           
            </div>
          <div className="top5-button-container">
        </div>
      </div>
    </>
  );
};

export default MostOrdered;
