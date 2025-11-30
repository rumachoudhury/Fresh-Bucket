import React from "react";

const InternationalYear = () => {
  return (
    <div className="container mx-auto my-10 rounded-2xl py-10  relative h-[60vh] bg-[url('/images/fresh-bucket-images/internationalYear.png')] flex items-center justify-center bg-cover bg-center px-6">
      {/* Overlay (optional) */}
      <div className="absolute top-0 left-0 w-full h-full"></div>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-10 max-w-6xl relative">
        {/* Section 1: Image (Left Side) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/fresh-bucket-images/GroupPlate.png"
            alt="Group Plate"
            className="w-full max-w-md absolute left-10 top-1/2 transform -translate-y-1/2"
          />
        </div>

        {/* Section 2: Text Content (Right Side) */}
        <div className="w-full md:w-1/2 p-8 text-left relative z-10">
          <div className="flex items-center space-x-2">
            <img
              src="/images/fresh-bucket-images/VectorRed.png"
              alt="Vector Icon"
              className="w-6 h-6"
            />
            <h1 className="text-4xl font-bold text-white">2024</h1>
            <img
              src="/images/fresh-bucket-images/VectorRed.png"
              alt="Vector Icon"
              className="w-6 h-6"
            />
          </div>
          <h2 className="text-3xl font-semibold mt-2 text-white">
            International Year of Fruits <br />& Vegetables
          </h2>
          {/* leading-relaxed class sets the line height of an element to 1.625 */}
          <p className="mt-2 text-sm text-white leading-relaxed">
            The titles are organized to emphasize different aspects of the
            organic offerings, starting from the overall concept of a
            sustainable life.
          </p>
          <div className="mt-6">
            <button className="px-8 py-2 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition flex items-center cursor-pointer">
              View More
              <img
                src="/images/arrow-down.png"
                alt="arrow-down"
                className="ml-2 w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalYear;
