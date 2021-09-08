import React from "react";
import { navItems } from "../../utils/constants";

function Footer() {
  return (
    <div class=" px-32 w-full min-h-screen flex items-center justify-center bg-black">
      <div class=" w-full px-4 text-white flex flex-col">
        <div class="w-full  text-7xl font-bold">
          <h1 class="w-full ">Kamakhya Marketing Pvt Ltd.</h1>
        </div>
        <div class="flex mt-8  flex-col md:flex-row md:justify-between">
          <p class="  text-gray-400">
            We are a trading firm that is involved in importing and supplying
            coal in Nepal. WIth 18 years of experience in the field, we are one
            of the leading suppliers in Nepal. We are committed to adding value
            to the customers and maintaining impeccable quality in terms of
            product and services.
          </p>
          <div class="w-44 pt-6 md:pt-0">
            <a class="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">
              Contact US
            </a>
          </div>
        </div>
        <FooterNavItems />
      </div>
    </div>
  );
}

const FooterNavItems = () => {
  return (
    <div class="flex flex-col">
      <div class="flex mt-24 mb-12 flex-row justify-between">
        {navItems.map((item, index) => {
          return (
            <a
              key={index}
              className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
            >
              {item.name}
            </a>
          );
        })}
      </div>
      <hr class="border-gray-600" />
      <p class="w-full text-center my-12 text-gray-600">
        Copyright © 2020 Besnik Creative
      </p>
    </div>
  );
};

export default Footer;
