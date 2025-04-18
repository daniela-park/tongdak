import "./Order.css";
import DeliverooLogo from "/Deliveroo.jpg"
import JustEatLogo from "/JustEat.jpg"
import UberEatsLogo from "/UberEats.png"

const Order = () => {

  return (
    <>
      <div className="order-container">
        <div className="order-container-boxes">
          <div className="order-container-box-left">
            <h1 className="order-h1">VISIT US</h1>
              <div className="google-maps-container">
                <iframe className="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.154300634255!2d-0.2659335873158673!3d51.400219471671406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487609eb0b7ffc59%3A0x8a48a79519f995b5!2sTongdak%20(Korean%20Chicken)!5e0!3m2!1sen!2suk!4v1742951122413!5m2!1sen!2suk"></iframe>
                <iframe className="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.147766664105!2d-0.19582548731498878!3d51.41871217167556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760900258b0e65%3A0xd19ec0caed8e7be6!2sTongdak!5e0!3m2!1sen!2suk!4v1742950874492!5m2!1sen!2suk"></iframe>
              </div>
              <div className="google-maps-caption-container">
                <p className="order-h5">New Malden</p>
                <p className="order-h5">Wimbledon</p>
              </div>
          </div>
      </div>
      <div className="order-container-boxes">
        <div className="order-container-box-mid">
          <h1 className="order-h1">ORDER ONLINE</h1>
            <div className="order-delivery-container">
              <a href="https://deliveroo.co.uk/menu/london/raynes-park/tongdak-and-sushi-bar-new-malden?srsltid=AfmBOors4O60902nxHpr0E-b1YE3qq-7rWN0XgEr1gQ1D8yz7hArjuyH"><img className="order-icon" src={DeliverooLogo} alt="Deliveroo icon"/></a>
              <a href="https://www.just-eat.co.uk/restaurants-tongdak-korean-spiced-chicken-new-malden/menu"><img className="order-icon" src={JustEatLogo} alt="JustEat icon"/></a>
              <a href="https://www.ubereats.com/gb/store/tongdakwimbledon/47eHbiV1Vr-xUs6I2x6ZUg?srsltid=AfmBOoq-S01Lw4oGX4yiFCfLwJWaOD1Udaj20J0cqSr3r9s75WAimDQD"><img className="order-icon" src={UberEatsLogo} alt="UberEats icon"/></a>
            </div>
        </div>
      </div>
      <div className="order-container-boxes">
        <div className="order-container-box-right">
          <h1 className="order-h1">ORDER BY PHONE</h1>
            <p className="order-h5">New Malden</p>
            <p className="order-p">020 8942 3888</p>
            <p className="order-h5">Wimbledon</p>
            <p className="order-p">020 8540 6963</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Order;
