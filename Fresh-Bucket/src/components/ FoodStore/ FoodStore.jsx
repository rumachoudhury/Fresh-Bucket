import React from "react";

const FoodStore = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col  ">
      {/* 1st section text with 2 images */}
      <div>
        <div className="flex items-center  space-x-2">
          <img
            src="/images/fresh-bucket-images/Vector (1).png"
            alt="Vector image"
          />
          <h5 className="text-sm text-red-500">Fresh From Our Farm</h5>
          <img
            src="/images/fresh-bucket-images/Vector (1).png"
            alt="Vector image"
          />
        </div>
        <h2 className="text-2xl font-bold">
          Trusted Organic Food Store Conscious
        </h2>
      </div>

      {/* section 2 --> left and right sight*/}
      <div className="flex items-center gap-4  mt-6">
        {/* left side--> Big image with text and Button---> left side*/}
        <div className="relative">
          <div className="absolute top-0 left-4 flex items-center ">
            <h2 className="text-2xl font-semibold text-gray-800 ">
              Explore our <br /> solutions
            </h2>
            <img
              src="/images/fresh-bucket-images/RightButton.png"
              alt="Explore Solutions"
              className="w-10 h-10"
            />
          </div>

          <div>
            <img
              src="/images/fresh-bucket-images/foodStore.png"
              alt="Fresh Food Store"
              className="w-lg h-auto" // Set width to 64 pixels
            />
          </div>
        </div>

        {/*  section 2--> Right Side */}
        <div className="flex flex-col space-y-4 ">
          {/* Store Offerings */}
          <div className="flex items-center space-x-4">
            {/* bg-[#F9F7E6] rounded-full ----> Creates a perfect circle circular background with #F9F7E6 color */}
            <div className="relative w-56 h-56 flex items-center justify-center bg-[#F9F7E6] rounded-full">
              <img
                src="/images/fresh-bucket-images/storeOfferings.png"
                alt="Store Offerings"
                className="w-48 h-48 object-cover"
              />
            </div>

            <p className="text-lg p-6 bg-[#F9F7E6] rounded-2xl w-96 h-52 text-gray-700">
              The titles are organized to emphasize different aspects of the
              organic offerings, starting from the overall concept of a
              sustainable life to the specific components such as fresh
              vegetables, fruits, and healthy foods.
            </p>
          </div>

          {/* Right side 2 images */}
          <div className="flex space-x-4">
            <div className="w-3/5">
              <img
                src="/images/fresh-bucket-images/foodBazar.png"
                alt="Food Bazar"
                className="w-full h-48"
              />
            </div>
            <div className="w-2/5">
              <img
                src="/images/fresh-bucket-images/whiteBucket.png"
                alt="White Bucket"
                className="w-full h-48"
              />
            </div>
          </div>

          {/* Categories Right Side */}
          <div className="relative bg-[#F9F7E6] p-4 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {[
                "Fruits",
                "Breads",
                "Juices",
                "Juices",
                "Vegetables",
                "Dried",
                "Dried",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <img
                    src="/images/fresh-bucket-images/check-circle 4.png"
                    alt="Check Circle"
                    className="w-5 h-5"
                  />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <button className="mt-4 flex items-center justify-between px-6 py-2 bg-[#26AB1F] text-white text-sm rounded-lg shadow-md hover:bg-orange-600 transition cursor-pointer gap-3">
              <span className="text-nowrap">View More</span>
              <img src="/images/arrow-down.png" alt="arrow-down" />
            </button>

            {/* Store Tomato Image */}
            <div className="absolute top-8 right-8">
              <img
                src="/images/fresh-bucket-images/storeTomato.png"
                alt="Store Tomato"
                className="w-32"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodStore;
