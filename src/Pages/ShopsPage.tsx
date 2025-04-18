import React, { useEffect } from "react";
import "./ShopsPage.css";
import Shops from "../Components/Shops";

const ShopsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Tongdak | Menu";
  }, []);

  return (
    <div>
      <div>
        <div>
          <Shops />
        </div>
      </div>
    </div>
  );
};

export default ShopsPage;
