import React from "react";

const FreshBucket = () => {
  return (
    <div className="bg-[url('/images/hero-bg.svg')] mt-15">
      {/* Background Image */}
      <div className="flex">
        {/* Section 1 */}
        <section className="z-10 flex justify-center items-center py-20">
          <img
            src="/images/fresh-bucket-images/fresh-vege.png"
            alt="Fresh Bucket"
            className="w-auto rounded-lg "
          />
        </section>

        {/* Section 2 */}
        <div>
          <section className="z-10 text-center py-24 px-8 rounded-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <img
                src="images/fresh-bucket-images/Vector (1).png"
                alt=""
                className="w-6"
              />
              <h6 className="text-sm font-bold  text-red-600">
                Fresh From Our Farm
              </h6>
              <img
                src="images/fresh-bucket-images/Vector (1).png"
                alt=""
                className="w-6"
              />
            </div>
            <h1 className="text-4xl text-black-700 mt-2">
              Trusted Organic Food <br /> Store Conscious
            </h1>
            <p className="text-md text-gray-600 mt-4 ">
              The titles are organized to emphasize different aspects of the
              organic offerings, starting from the overall concept of a
              sustainable life to the specific components such as fresh
              vegetables, fruits, and healthy foods.
            </p>
            <div className="flex justify-center items-center">
              <button className="mt-6 px-6 py-3 bg-green-500 text-white text-sm font-semibold rounded-lg shadow hover:bg-green-600 flex gap-3">
                View More
                <img src="/images/arrow-down.png" alt="" className="" />
              </button>
            </div>
          </section>
        </div>

        {/* Section 3 */}
        <section className="relative z-10 flex justify-center items-center py-20">
          <img
            src="images/fresh-bucket-images/organic-backet.png"
            alt="Organic Basket"
            className="w-auto"
          />
        </section>
      </div>
    </div>
  );
};

export default FreshBucket;
