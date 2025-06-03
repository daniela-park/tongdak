import React, { useEffect } from "react";
import "./LandingPage.css";
import Main from "../Components/Main";
import Top5 from "../Components/Top5";
import MostOrdered from "../Components/MostOrdered";
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
          <MostOrdered />
          <Order />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
