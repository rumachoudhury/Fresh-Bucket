import React from "react";

const SaleWeek = () => {
  return (
    <div className="">
      <div className="flex text-center justify-center space-x-4">
        {/* Fruit & Vegetable Section */}
        <div
          className="relative bg-cover bg-center h-48 md:h-56 w-96 md:w-[630px] flex flex-col justify-center mt-15 rounded-xl"
          style={{
            backgroundImage:
              "url('/images/fresh-bucket-images/fruite-vegetable.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-start justify-start flex-col ml-6 text-white h-full py-6">
            <div className="text-start grow-[1]">
              <p className="text-sm ">100% Organic</p>
              <h2 className=" text-lg md:text-xl font-bold ">
                Fruit & Vegetable
              </h2>
              <p className="text-sm md:text-md font-semibold">
                Starting at:{" "}
                <span className="bg-[#FF8A00] text-sm pt-1 px-2 rounded-sm">
                  $11.99
                </span>
              </p>
            </div>
            <button className="mt-2 bg-[#02B307] hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm md:text-md flex items-center justify-between cursor-pointer">
              Shop Now
              <img
                src="/images/fresh-bucket-images/arrow2.png"
                alt="arrow-down"
                className="ml-2"
              />
            </button>
          </div>
        </div>

        {/* Sale Off The Week Section */}
        <div
          className="relative bg-cover bg-center h-48 md:h-56 w-96 md:w-[630px] flex flex-col justify-center mt-15 rounded-xl"
          style={{
            backgroundImage: "url('/images/fresh-bucket-images/sale-week.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-start justify-start flex-col ml-6 text-white h-full py-6">
            <div className="text-start grow-[1]">
              <p className="text-xs md:text-sm font-light ">
                Sale Off The Week
              </p>
              <h2 className="text-md md:text-lg font-bold">
                Sales of the Year
              </h2>
              <div className="flex space-x-1 text-sm md:text-lg  mt-1">
                <span>00</span>:<span>02</span>:<span>18</span>:<span>46</span>
              </div>
              <p className="text-xs md:text-sm">Days Hours Mins Secs</p>
            </div>
            <button className="mt-2 bg-[#F55422] hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm md:text-md flex items-center justify-between cursor-pointer">
              Shop Now
              <img
                src="images/fresh-bucket-images/arrow2.png"
                alt="arrow-down"
                className="ml-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleWeek;
