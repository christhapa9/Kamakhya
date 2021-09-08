import React from "react";
import MainLayout from "../../components/layouts/main_layout";
import OrderCart from "./order_cart";
import OrderForm from "./order_form";


function Order() {
  return (
    <MainLayout>
      <div className="bg-black gap-7 px-28 pt-28">
        <span>
          Please provide the following details to successfully place your order!
        </span>
        <div className="grid grid-cols-3 gap-7">
          <div className="col-span-2">
            {" "}
            <OrderForm />
          </div>{" "}
          <OrderCart />
        </div>
      </div>
    </MainLayout>
  );
}

export default Order;
