import "./Shops.css";
import Shop from "../assets/Shop.gif"

const Shops = () => {

  return (
    <>
      <div className="shops-container">
        <div className="shops-container-transp">
          <h1 className="order-h1">VISIT US</h1>
          <div className="shops-container-box-left">
            { /*
              <div className="shops-google-maps-container">
                <iframe className="shops-google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.154300634255!2d-0.2659335873158673!3d51.400219471671406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487609eb0b7ffc59%3A0x8a48a79519f995b5!2sTongdak%20(Korean%20Chicken)!5e0!3m2!1sen!2suk!4v1742951122413!5m2!1sen!2suk"></iframe>
                <iframe className="shops-google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.147766664105!2d-0.19582548731498878!3d51.41871217167556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760900258b0e65%3A0xd19ec0caed8e7be6!2sTongdak!5e0!3m2!1sen!2suk!4v1742950874492!5m2!1sen!2suk"></iframe>
              </div>
              <div className="shops-google-maps-caption-container">
                <p className="order-h5">New Malden</p>
                <p className="order-h5">Wimbledon</p>
              </div>
              <div className="shops-google-maps-caption-container">
                <p className="order-p">95A Kingston Rd KT3 3PA</p>
                <p className="order-p">148 Merton Road SW19 1EH</p>
              </div>
            */ }
            <div className="shops-google-maps-container">
              <iframe className="shops-google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.154300634255!2d-0.2659335873158673!3d51.400219471671406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487609eb0b7ffc59%3A0x8a48a79519f995b5!2sTongdak%20(Korean%20Chicken)!5e0!3m2!1sen!2suk!4v1742951122413!5m2!1sen!2suk"></iframe>
              <p className="shops-h5">New Malden</p>
              <p className="shops-p">95A Kingston Rd</p>
              <p className="shops-p">KT3 3PA</p>
            </div>
            <div className="shops-google-maps-container">
              <iframe className="shops-google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.147766664105!2d-0.19582548731498878!3d51.41871217167556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760900258b0e65%3A0xd19ec0caed8e7be6!2sTongdak!5e0!3m2!1sen!2suk!4v1742950874492!5m2!1sen!2suk"></iframe>
              <p className="shops-h5">Wimbledon</p>
              <p className="shops-p">148 Merton Road</p>
              <p className="shops-p">SW19 1EH</p>
            </div>
          </div>
        </div>
        <div className="shops-container-transp">
          <div className="shops-container-box-right">
            <img src={Shop} className="shop-gif"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shops;
