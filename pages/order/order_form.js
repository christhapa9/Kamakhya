import React from "react";
import InputComponent from "../../components/input";

function OrderForm() {
  return (
    <div class="py-12 px-12 bg-white dark:bg-red-800 rounded-2xl shadow-xl z-20">
      <div>
        <h1 class="text-3xl font-bold dark:text-white mb-4 cursor-pointer">
          Order
        </h1>
      </div>
      <div class="space-y-4">
        <div className="grid grid-cols-2 gap-7">
          <InputComponent placeholder="Full Name" label="Full Name" />
          <InputComponent placeholder="Email" label="Email Address" />
        </div>
        <div className="grid grid-cols-2 gap-7">
          <InputComponent placeholder="Address" label="Address" />
          <InputComponent placeholder="City" label="City" />
        </div>
        <div className="grid grid-cols-2 gap-7">
          <InputComponent placeholder="State" label="State" />
          <InputComponent placeholder="Zip" label="Zip" />
        </div>
        <div className="grid grid-cols-2 gap-7">
          <InputComponent placeholder="Company Name" label="Company Zip" />
          <InputComponent placeholder="Pan No" label="Pan No" />
        </div>
        <div className="grid grid-cols-2 gap-7">
          <InputComponent
            placeholder="Quantity In Tons"
            label="Quantity In Tons"
          />

          <div>
            <label class="text-gray-700 dark:text-white pb-5">
              Select Country
            </label>
            <select
              class="block w-52 text-gray-700 py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              name="animals"
            >
              <option value="parrot">American</option>
              <option value="spider">Indonesia</option>
              <option value="goldfish">Nangal</option>
            </select>
          </div>
        </div>
      </div>
      <div class="text-center mt-6">
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
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default OrderForm;
