import React from "react";

function OrderCart() {
  return (
    <div className="dark:bg-black">
      <div className="pt-5">
        <div className="mx-auto bg-white dark:bg-red-800 rounded-lg px-10">
          <div className="flex flex-col ">
            <h6 className="text-black dark:text-white text-xl my-4 dark:text-white">
              Cart
            </h6>
            <div
              className="flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Subtotal</p>
              <p className="text-black dark:text-white mr-4">$2,650</p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Shipping</p>
              <p className="text-black dark:text-white mr-4">$15</p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">VAT(included)</p>
              <p className="text-black dark:text-white mr-4">20%</p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Total</p>
              <p className="text-indigo-600 mr-4">$2,665</p>
            </div>
            <div className="px-3 py-5 ">
              <button
                className="
                  min-w-full
                  bg-gray-400
                  font-semibold
                  text-white
                  px-2
                  py-2
                  rounded-md
                "
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCart;
