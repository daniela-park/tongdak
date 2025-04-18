import React, { useEffect } from "react";
import "./LandingPage.css";
import Main from "../Components/Main";
import Top5 from "../Components/Top5";
import Order from "../Components/Order";

const LandingPage: React.FC = () => {
  useEffect(() => {
    document.title = "Tongdak | Home";
  }, []);

  return (
    <div>
      <div>
        <div>
          <Main />
          <Top5 />
          <Order />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
