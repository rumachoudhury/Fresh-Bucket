import React from "react";

//Best Organic Products
const BestOrganicProducts = () => {
  let organicProducts = [
    {
      discunt25: "/images/fresh-bucket-images/25.png",
      image: "/images/fresh-bucket-images/service-img-1.png",
      title: "Organic Tomatoes",
      price: "$24.99",
      original_pric: "$39.07",
      backgroundColor: "#F9F8E6",
      reviews: "4.9",
      star: "/images/fresh-bucket-images/star.png",
    },
    {
      discunt25: "/images/fresh-bucket-images/25.png",
      image: "/images/fresh-bucket-images/Border.png",
      title: "Organic Orange",
      price: "$30.00",
      original_pric: "$40.00",
      backgroundColor: "#F9F8E6",
      reviews: "4.9",
      star: "/images/fresh-bucket-images/star.png",
    },
    {
      discunt25: "/images/fresh-bucket-images/25.png",
      image: "/images/fresh-bucket-images/service-img-03.png",
      title: "Organic Strawberries",
      price: "$20.00",
      original_pric: "$35.00",
      backgroundColor: "#F9F8E6",
      reviews: "4.9",
      star: "/images/fresh-bucket-images/star.png",
    },
    {
      discunt25: "/images/fresh-bucket-images/25.png",
      image: "/images/fresh-bucket-images/service-img-04.png",
      title: "Organic Apple",
      price: "$15.00",
      original_pric: "$25.00",
      backgroundColor: "#F9F8E6",
      reviews: "4.9",
      star: "/images/fresh-bucket-images/star.png",
    },
  ];
  return (
    <div className="container mx-auto p-6 ">
      {/* Banner Section */}
      <div className="flex items-center justify-between  p-6  py-10 px-6">
        <div>
          <div className="flex">
            <img
              src="/images/fresh-bucket-images/Vector (1).png"
              alt="Left Image"
              className="w-6 h-6"
            />

            <p className="text-red-400 font-bold  text-sm mb-2">
              Fresh From Our Farm
            </p>

            <img
              src="/images/fresh-bucket-images/Vector (1).png"
              alt="Right Image"
              className="w-6 h-6"
            />
          </div>

          <div className="text-center flex-1">
            <h3 className="text-4xl font-bold text-black-500 mt-2">
              Best Organic Products
            </h3>
          </div>
        </div>

        {/* flex button --> text and iamge */}
        <div className="flex items-center justify-around ">
          <button className="px-6 py-2 bg-green-600 text-white text-1xl rounded-lg shadow-md hover:bg-green-700 transition-all flex items-center justify-between  cursor-pointer">
            <span>View More</span>
            <img
              src="/images/arrow-down.png"
              alt="arrow-down"
              className="ml-2"
            />
          </button>
        </div>
      </div>
      {/* Product card List map Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {organicProducts.map((product, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-md relative overflow-hidden"
            style={{
              backgroundColor: product.backgroundColor,
              //To create a curved the top right corner.(90% 0)->Moves the right side
              clipPath:
                "polygon(0 0, 90% 0, 100% 10%, 100% 90%, 100% 100%, 0 100%)",
            }}
          >
            {/* Discunt Badge and link image */}
            <div className="reletive w-full">
              {/* Right Corner Image */}
              <img
                src="/images/fresh-bucket-images/Link.png"
                alt="Linkpng"
                // set the link image
                className="absolute top-4 right-2 w-8"
              />

              {/* Left Corner Discount Badge */}
              <img
                src={product.discunt25}
                alt="Discunt"
                className="absolute top-4 left-0 w-12"
              />
            </div>

            {/* Product Info */}
            <img
              src={product.image}
              alt=""
              //rounded-full: Makes the image fully round.
              className="w-50 h-50 rounded-full mx-auto border-4 border-green-500 object-cover "
            />
            {/* border-b-1: Adds a bottom border with a thickness of 1px */}
            <h3 className="text-lg font-bold mt-6 border-b-1 border-gray-400">
              {product.title}
            </h3>

            {/* Reviews and Ratings */}
            <div className="flex justify-between mt-2 gap-2">
              <p className="text-green-700 font-bold  text-xl ">
                {product.price}{" "}
                <span className="text-gray-500 line-through text-sm ml-2">
                  {product.original_pric}
                </span>
              </p>

              <div className="flex items-center gap-1 mt-1">
                <img src={product.star} alt="Star Rating" className="w-4 h-4" />
                <p className="text-sm">({product.reviews})</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestOrganicProducts;
