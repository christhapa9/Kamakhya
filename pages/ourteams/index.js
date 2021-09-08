import React from "react";
import MainLayout from "../../components/layouts/main_layout";

function OurTeams() {
  return (
    <MainLayout>
      <div class="p-4 bg-black py-16">
        <p class="text-center text-3xl py-5 font-bold text-white">
          Professional team
        </p>
        <p class="text-center mb-32 text-xl font-normal text-gray-500">
          Meat the best team in wolrd
        </p>
        <div class="flex items-center space-y-24 md:space-y-0 flex-col md:flex-row justify-center">
          <div class="p-4 relative">
            <div class="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
              <a href="#" class="block relative">
                <img
                  alt="profil"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                  class="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                />
              </a>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
              <div class="text-center">
                <p class="text-2xl text-gray-800 dark:text-white">
                  Patrick Sebastien
                </p>
                <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
                  Developpeur
                </p>
                <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                  Patrick Sébastien, born November 14, 1953 in
                  Brive-la-Gaillarde, is an imitator.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 relative">
            <div class="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
              <a href="#" class="block relative">
                <img
                  alt="profil"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDJmCNYNyP_-LjdgATXSMZy5VV-GID2WTkQEGLLbrCQF0EugdQaujxLQFS2qogK0jtdY&usqp=CAU"
                  class="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                />
              </a>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
              <div class="text-center">
                <p class="text-2xl text-gray-800 dark:text-white">Charlie</p>
                <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
                  Lead dev
                </p>
                <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                  Charlie, born December 18, 1993 in Challans, is an imitator
                  and pintor.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 relative">
            <div class="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
              <a href="#" class="block relative">
                <img
                  alt="profil"
                  src="https://lh3.googleusercontent.com/proxy/IFWUA8E7k2HEonJyHNAF1aInxrBO5mv2jMQ_ABSd52kg_LRLCJbXvlrcKhMVkCtP661HtKmJXJrvIhz7SSOpFcuZfTKuDrz9HZ9R_BHObAd6RvVO7nAE9YUPtwrN"
                  class="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                />
              </a>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
              <div class="text-center">
                <p class="text-2xl text-gray-800 dark:text-white">
                  Thierry Halliday
                </p>
                <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
                  CTO
                </p>
                <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                  Thierry Halliday, born November 4, 1993 in Saint hilaire de
                  riez, is css specialist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default OurTeams;
