import React from "react";

function HomeTopContent() {
  return (
    <section>
      <div class="bg-black text-white py-20">
        <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 class="text-3xl md:text-5xl  text-yellow-300 tracking-loose">
              Kamakhya
            </h1>
            <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              We Belive in
            </h2>
            <p class="text-sm md:text-base text-gray-50 mb-4">
              Quality,Value ,Affordability
            </p>
          </div>
          <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div class="h-48 flex flex-wrap content-center">
              <div>
                <img
                  class="inline-block mt-24 md:mt-0 p-8 md:p-0"
                  src="https://www.pngall.com/wp-content/uploads/4/Carbon-Transparent.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeTopContent;
