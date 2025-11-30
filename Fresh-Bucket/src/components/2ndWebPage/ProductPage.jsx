import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Description from "./Description";
import RelatedProduct from "./RelatedProduct";
import Footer from "../Footer/Footer";

const ProductPage = () => {
  return (
    <div>
      <div className="p-8 bg-[url('/images/hero-bg.svg')]">
        <div className="text-gray-600 mb-4">
          {/* &gt --> which stands for "greater than" symbol >) */}
          <span>Home</span> &gt;{" "}
          <span className="text-green-400">Product Page</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full  bg-white shadow-lg rounded-lg mx-auto container  p-6">
          {/* Product Image */}
          <div className="relative flex px-4 ">
            {/* heart icon*/}
            <div className="bg-[#E2F0D5] w-12 h-12 flex items-center justify-center rounded-full absolute top-4 right-6">
              <img
                src="/images/fresh-bucket-images/Heart.png"
                alt="Heart Icon"
                className="cursor-pointer"
              />
            </div>
            <img
              src="/images/fresh-bucket-images/ChineseCabbage.png"
              alt="Chinese Cabbage"
              className="w-full  bg-[#F9F7E6] rounded-2xl border border-orange-400"
            />
          </div>

          {/* Right: Product Details */}
          <div className="w-full">
            <h2 className="text-2xl font-bold">Chinese Cabbage</h2>
            <div className="flex items-center text-yellow-500 mt-2">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
              <span className="text-gray-600 ml-2">(4.5/5)</span>
            </div>
            <div className="mt-3">
              <span className="text-2xl font-bold text-green-600">$60.00</span>
              <span className="text-gray-400 line-through ml-3">$120.60</span>
              <span className="text-red-500 font-semibold ml-3   bg-[#FFE9EA] rounded-full px-3 py-1">
                40% off
              </span>
            </div>
            <p className="text-gray-700 text-sm md:text-md mt-4 border-b border-gray-300">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
            </p>
            <div className="mt-4 text-gray-600">
              <div className="mt-4 text-gray-600 flex justify-between">
                <p className="text-sm md:text-md">
                  <strong>Category:</strong> Vegetables
                </p>
                {/* icons */}
                <p className="flex items-center gap-2">
                  <FaFacebookF className="text-white bg-green-700 rounded-full w-6 h-6 p-1" />
                  <FaTwitter className="text-white bg-green-700 rounded-full w-6 h-6 p-1" />
                  <FaYoutube className="text-white bg-green-700 rounded-full w-6 h-6 p-1" />
                </p>
              </div>
              <p className="border-b border-gray-300 text-sm md:text-md mt-4">
                <strong>Tag:</strong> Vegetables, Healthy, Chinese Cabbage,
                Green Cabbage
              </p>
            </div>
            {/* Choose Size */}
            <div className="mt-4">
              <p className="text-sm md:text-md">Choose Size</p>
              <div className="flex gap-2 mt-2">
                <button className="px-4 py-2 text-sm bg-[#F0F0F0] rounded-full hover:bg-orange-200">
                  Small
                </button>
                <button className="px-4 py-2 text-sm bg-[#F0F0F0] rounded-full hover:bg-orange-200">
                  Medium
                </button>
                <button className="px-4 py-2 text-sm bg-black text-white  rounded-full hover:bg-orange-200">
                  Large
                </button>
                <button className="px-4 py-2  text-sm bg-[#F0F0F0] rounded-full hover:bg-orange-200">
                  X-Large
                </button>
                <p className=" border-b border-gray-300"></p>
              </div>
            </div>
            {/* Quantity section */}
            <div className="mt-4 border-t  border-gray-300">
              <p>Quantity</p>
              <div className="flex gap-4">
                <p className="bg-[#F0F0F0] w-8 h-8 flex items-center justify-center rounded-full">
                  {" "}
                  -{" "}
                </p>
                <p className="text-sm mt-2"> 5 </p>
                <p className="bg-[#F0F0F0] w-8 h-8 flex items-center justify-center rounded-full">
                  {" "}
                  +{" "}
                </p>
                <p className=" text-sm text-red-400 gap-8">Out of Stock</p>
              </div>
            </div>
            {/* button */}
            <div className="border-t border-gray-300 mt-4 ">
              <button className="w-full max-w-xs md:max-w-md lg:max-w-lg py-2 bg-[#26AB1F] text-white rounded-lg mt-4 cursor-pointer ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Description />
      <RelatedProduct />
      <Footer />
    </div>
  );
};

export default ProductPage;
