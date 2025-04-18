import "./OrderOnline.css";
import DeliverooLogo from "/Deliveroo.jpg"
import JustEatLogo from "/JustEat.jpg"
import UberEatsLogo from "/UberEats.png"
import OrderDelivery from "../assets/OrderDelivery.gif"

const OrderOnline = () => {

  return (
    <>
      <div className="order-online-container">
        <div className="order-online-container-transp">
          <div className="order-online-container-box-left">
            <h1 className="order-h1">ORDER ONLINE</h1>
              <div className="order-online-inner-container">
                <a href="https://deliveroo.co.uk/menu/london/raynes-park/tongdak-and-sushi-bar-new-malden?srsltid=AfmBOors4O60902nxHpr0E-b1YE3qq-7rWN0XgEr1gQ1D8yz7hArjuyH"><img className="order-online-icon" src={DeliverooLogo} alt="Deliveroo icon"/></a>
                <a href="https://www.just-eat.co.uk/restaurants-tongdak-korean-spiced-chicken-new-malden/menu"><img className="order-online-icon" src={JustEatLogo} alt="JustEat icon"/></a>
                <a href="https://www.ubereats.com/gb/store/tongdakwimbledon/47eHbiV1Vr-xUs6I2x6ZUg?srsltid=AfmBOoq-S01Lw4oGX4yiFCfLwJWaOD1Udaj20J0cqSr3r9s75WAimDQD"><img className="order-online-icon" src={UberEatsLogo} alt="UberEats icon"/></a>
            </div>
          </div>
        </div>
        <div className="order-online-container-transp">
          <div className="order-online-container-box-right">
            <img src={OrderDelivery} className="order-online-gif"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
