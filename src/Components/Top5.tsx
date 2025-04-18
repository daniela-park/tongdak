import { useState } from "react";
import { Link } from "react-router-dom";
import "./Top5.css";
import FriedOriginalImg from "../assets/FriedOriginal.png"
import YangnyeomImg from "../assets/Yangnyeom.png"
import WhiteSpicesImg from "../assets/WhiteSpices.png"
import GarlicSoyaImg from "../assets/GarlicSoya.png"
import CheeseSpicesImg from "../assets/CheeseSpices.png"

const Top5 = () => {

  const [showMenu, setShowMenu] = useState(false);

  const closeMenuOnMobile = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div className="container-top5">
        <h1 className="top5-h1-red">DISCOVER OUR</h1>
        <h1 className="top5-h1-yellow">TOP 5 DISHES</h1>
          <div className="top5-dishes-container">
            
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={FriedOriginalImg} className="food-image"></img>
                  <h4>Fried Original</h4>
                </div>
                <div className="flip-card-back">
                  <p>Delicately hand battered for the perfect crunch</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={YangnyeomImg} className="food-image"></img>
                  <h4>Yangnyeom</h4>
                </div>
                <div className="flip-card-back">
                  <p>Marinated in Tongdak's spicy sauce</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={WhiteSpicesImg} className="food-image"></img>
                  <h4>White Chilli</h4>
                </div>
                <div className="flip-card-back">
                  <p>Tongdak's special White Spices for a creamy flavour</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={GarlicSoyaImg} className="food-image"></img>
                  <h4>Garlic Soya</h4>
                </div>
                <div className="flip-card-back">
                  <p>Garlic soya sauce for a bold flavour</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={CheeseSpicesImg} className="food-image"></img>
                  <h4>Cheese Spices</h4>
                </div>
                <div className="flip-card-back">
                  <p>Mascarpone and cheddar cheese for a rich flavour</p>
                </div>
              </div>
            </div>
          </div>
          <div className="top5-button-container">
            { /*
            <Link className="top5-button" to="/menu" onClick={closeMenuOnMobile}>
              See full menu!
            </Link>
            */ }    
            <button className="top5-button">
              <a href={"Menu"}>See full menu!</a>
            </button>
          </div>
      </div>
    </>
  );
};

export default Top5;
