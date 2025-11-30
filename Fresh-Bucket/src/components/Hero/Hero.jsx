import React from "react";

function Hero() {
  return (
    <div className="relative h-[70vh] bg-[url('/images/hero-bg.svg')] bg-cover bg-center flex flex-col items-center justify-center text-center px-10 lg:px-20">
      {/* Background image (hidden but applied via CSS) */}
      <img src="/images/hero-bg.svg" alt="Hero Background" className="hidden" />

      {/* gradient background" is a background design where colors smoothly transition from one to another */}
      <h2 className="absolute top-10 text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-red-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 w-full text-center italic md:not-italic hidden sm:block ">
        Welcome To Fresh Bucket
      </h2>

      {/* Content Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between mt-10 w-full">
        {/* Left Section take 1/2 with */}
        <div className="space-y-4 px-4 lg:px-0 text-center lg:text-left flex-1 lg:w-1/2 lg:pl-24">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-black-800">
            A Sustainable Life with <br />
            Fresh Fruits, Vegetables, <br />
            and Healthy Foods
          </h2>

          <p className="text-gray-600 text-sm md:text-base">
            The titles are organized to emphasize different aspects of the
            organic offerings, starting from the overall concept of a
            sustainable life to the specific component such as fresh vegetables,
            fruits, and healthy foods.
          </p>

          <button className="mt-4 px-10 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition flex items-center justify-between cursor-pointer">
            Subscribe
            <img
              src="/images/arrow-down.png"
              alt="arrow-down"
              className="ml-2"
            />
          </button>
        </div>

        {/* Right Section - Image  take 1/2 with*/}
        <div className="mt-8 lg:mt-0 flex justify-center flex-1 lg:w-1/2">
          <img
            src="/images/fresh-bucket-images/fresh-png"
            alt="Vegetable Basket"
            className="w-[80%] md:w-[60%] lg:w-[70%] max-w-sm rounded-lg shadow-lg object-contain mb-12"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
