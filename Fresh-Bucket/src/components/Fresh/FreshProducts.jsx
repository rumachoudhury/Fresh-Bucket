import React from "react";
import { FaStar } from "react-icons/fa";

function FreshProducts() {
  let freshProducts = [
    {
      image: "/images/fresh-bucket-images/green-apple.png",
      title: "Green Apple",
      salePrice: "$14.99",
      rating: 4,
    },
    {
      image: "/images/fresh-bucket-images/eggplant.png",
      title: "Eggplant",
      salePrice: "$14.99",
      rating: 4,
    },
    {
      image: "/images/fresh-bucket-images/potatos.png",
      title: "Big Potatos",
      salePrice: "$14.99",
      rating: 4,
    },
    {
      image: "/images/fresh-bucket-images/malta.png",
      title: "Indian Malta",
      salePrice: "$14.99",
      rating: 4,
    },
    {
      image: "/images/fresh-bucket-images/okra.png",
      title: "Green Okra",
      salePrice: "$14.99",
      rating: 4,
    },
    {
      image: "/images/fresh-bucket-images/corn.png",
      title: "Corn",
      salePrice: "$14.99",
      rating: 4,
    },
    {
      image: "/images/fresh-bucket-images/lettuce.png",
      title: "Green Lettuce",
      salePrice: "$14.99",
      rating: 4,
    },
    {
      image: "/images/fresh-bucket-images/tomatos.png",
      title: "Red Tomatos",
      salePrice: "$14.99",
      rating: 4,
    },
    {
      image: "/images/fresh-bucket-images/cauliflower.png",
      title: "Fresh Cauliflower",
      salePrice: "$14.99",
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    // the function will execute 5 times, once for each index.
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        // If the index is less than the rating, it gets a yellow color (text-yellow-500)
        className={index < rating ? "text-yellow-500" : "text-gray-400"}
      />
    ));
  };

  return (
    <div
      className="px-10 py-5 bg-cover bg-center "
      style={{
        backgroundImage:
          "url('/images/fresh-bucket-images/productBackground.png')",
      }}
    >
      {/* Top Section */}
      <div className="container mx-auto">
        <div className=" text-white">
          <div className="flex  items-center">
            <img
              src="/images/fresh-bucket-images/Vector-white.png"
              alt="Left Image"
              className="w-6 h-6 mt-6"
            />
            <p className="text-sm mx-1 mt-6">Fresh From Our Farm</p>
            <img
              src="/images/fresh-bucket-images/Vector-white.png"
              alt="Right Image"
              className="w-6 h-6 mt-6"
            />
          </div>
          <h2 className="text-3xl font-bold mt-2">Our Organic Products</h2>
        </div>

        {/* Category Selection */}
        <div className="flex justify-end mt-2  px-3 text-md">
          <ul className="bg-white text-green-400 py-1 rounded-lg flex justify-between gap-5 space-x-4">
            <li className="bg-green-500 text-white px-4 py-1 ml-2 rounded-lg cursor-pointer hover:bg-blue-700  text-sm">
              All
            </li>
            <li className="cursor-pointer hover:text-gray-300">Vegetable</li>
            <li className="cursor-pointer hover:text-gray-300">Fruit</li>
            <li className="cursor-pointer hover:text-gray-300 flex mr-2">
              Bread
            </li>
          </ul>
        </div>

        {/* Main Layout */}
        <div className="flex  mt-6 gap-6">
          {/* Product Cards */}
          <div className="grid grid-cols-3 gap-6 w-3/4">
            {freshProducts.map((product, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-md bg-white flex items-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-green-600 font-bold">
                    {product.salePrice}
                  </p>
                  {/* renderStars(product.rating) dynamically generates stars based on the rating. */}
                  <div className="flex">{renderStars(product.rating)}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Special Offer */}
          <div className="w-1/4 flex justify-center items-center rounded-lg  h-auto bg-red-400 bg-[url(/images/fresh-bucket-images/shoppingImage.png)] bg-cover bg-repeat ">
            <div className=" w-full h-full  text-center  mt-20">
              <h2 className="text-sm font-bold">Special Offer</h2>
              <p className="text-3xl text-green font-semibold mt-2 text-green-500">
                50% Off
              </p>
              <div className="flex items-center justify-center">
                <button className="bg-white text-green-600 px-6 py-2 mt-4 rounded-2xl font-semibold hover:bg-gray-200 transition flex items-center justify-between ">
                  Shop Now
                  <img
                    src="/images/fresh-bucket-images/greenarrow.png"
                    alt=""
                    className="w-5 h-5 ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className=" flex justify-center mt-6">
          <button className="bg-green-500 text-white px-6 py-2 mb-5 rounded-lg shadow-lg hover:bg-green-600 transition duration-300  flex items-center justify-between ">
            View More
            <img src="/images/arrow-down.png" alt="" className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FreshProducts;

//-----------------------------------------//
// Array(5): Creates an empty array of 5 elements.
// [...Array(5)]: Spreads the array into an iterable list, allowing .map() to work.
// .map((_, index) => ( ... )): Loops through each index from 0 to 4 to render 5 star icons (FaStar).
// <FaStar key={index} />: Represents a star icon.
// index < rating ? "text-yellow-500" : "text-gray-400":
// If the index is less than the rating, it gets a yellow color (text-yellow-500).
// Otherwise, it gets a gray color (text-gray-400).
