import React, { useEffect } from "react";
import "./OrderPage.css";
import OrderOnline from "../Components/OrderOnline";

const OrderPage: React.FC = () => {
  useEffect(() => {
    document.title = "Tongdak | Order";
  }, []);

  return (
    <div>
      <div>
        <div>
          <OrderOnline/>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
