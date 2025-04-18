import React, { useEffect } from "react";
import "./MenuPage.css";
import Menu from "../Components/Menu";

const MenuPage: React.FC = () => {
  useEffect(() => {
    document.title = "Tongdak | Menu";
  }, []);

  return (
    <div>
      <div>
        <div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
