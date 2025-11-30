import React from "react";

const Description = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 rounded-lg mx-auto container">
      {/* Left Side */}
      <div className="md:w-1/2 p-4 text-sm gap-4 ">
        <h2 className="text-lg mb-4 text-blue-500 border-b-2 border-gray-300 relative pb-2">
          {/* 1-inch blue and the rest gray effect */}
          <span className="absolute bottom-0 left-0 h-[2px] w-[1in] bg-blue-500"></span>
          Description
        </h2>
        <p className="text-gray-700">
          Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
          posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
          vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
          porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
          Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
          et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
          scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
          commodo quis, egestas elementum leo. Donec convallis mollis enim.
          Aliquam id mi quam. Phasellus nec fringilla elit.
        </p>
        <p className="text-gray-700 mb-4">
          Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
          iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit,
          pellentesque tristique neque mi eget nulla. Proin luctus elementum
          neque et pharetra.
        </p>
        {/* List with Checkmarks */}
        <ul className="space-y-2">
          {[
            "100 g of fresh leaves provides.",
            "Aliquam ac est at augue volutpat elementum.",
            "Quisque nec enim eget sapien molestie.",
            "Proin convallis odio volutpat finibus posuere.",
          ].map((item, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="w-6 h-6 flex items-center justify-center bg-green-500 text-white rounded-full mr-2">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 mt-4">
          Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
          blandit eros non turpis lobortis iaculis at ut massa.
        </p>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex flex-col items-center">
        <img
          src="/images/fresh-bucket-images/Video.png"
          alt="Video"
          className="w-full max-w-lg rounded-lg mt-12 px-4"
        />

        {/* Discount Section */}
        <div className="w-md bg-[#F9F7E6]  gap-3 flex justify-around items-center py-3 text-center mt-4 ">
          {/* First Row */}
          <div className="flex items-center gap-3">
            <img
              src="/images/fresh-bucket-images/price-tag 1.png"
              alt="Discount"
              className="items-center  w-6 h-6 "
            />
            <div>
              <h3 className="text-md font-bold text-start">64% Discount</h3>
              <p className="text-xs text-gray-500 mt-2">
                Save your 64% money with us
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex items-center gap-4">
            <img
              src="/images/fresh-bucket-images/leaf.png"
              alt="Organic"
              className="w-6 h-6"
            />
            <div>
              <p className="text-md font-bold text-start">100% Organic</p>
              <p className="text-xs text-gray-500 mt-2">
                100% Organic Vegetables
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
