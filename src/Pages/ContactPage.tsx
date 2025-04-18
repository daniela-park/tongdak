import React, { useEffect } from "react";
import "./ContactPage.css";
import Contact from "../Components/Contact";

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Tongdak | Contact";
  }, []);

  return (
    <div>
      <div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
