import "./Contact.css";
import Phone from "../assets/Contact.gif"

const Contact = () => {

  return (
    <>
      <div className="contact-container">
        <div className="contact-container-transp">
          <h1 className="order-h1">GET IN TOUCH</h1>
          <div className="contact-container-box-left">
            <div className="contact-details-container">
              <p className="contact-h5">New Malden</p>
              <p className="contact-p">020 8942 3888</p>
              <p className="contact-p">newmalden@tongdak.co.uk</p>
            </div>
            <div className="contact-details-container">
              <p className="contact-h5">Wimbledon</p>
              <p className="contact-p">020 8540 6963</p>
              <p className="contact-p">wimbledon@tongdak.co.uk</p>
            </div>
          </div>
        </div>
        <div className="contact-container-transp">
          <div className="contact-container-box-right">
            <img src={Phone} className="contact-gif"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
