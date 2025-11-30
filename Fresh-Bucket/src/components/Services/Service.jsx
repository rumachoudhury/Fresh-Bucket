import React from "react";

function Service() {
  return (
    <div className="container mx-auto py-10 px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {/* Card 1 */}
        <div className="relative bg-[#FCF5D6] py-6 rounded-lg shadow-md text-center flex flex-col items-center">
          {/* Image positioned half inside and half outside */}
          <div className="absolute -top-10 w-20 h-20">
            <img
              src="/images/fresh-bucket-images/free-delivery.png"
              alt="Free Delivery"
              className="w-full h-full object-contain"
            />
          </div>
          <div className=" pt-8 ">
            <h6 className="text-sm font-semibold text-gray-700">
              Free Delivery
            </h6>
            <h4 className="text-lg font-bold text-gray-900">From $99.00</h4>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#FDE6E4] py-6 rounded-lg shadow-md text-center flex flex-col items-center">
          {/* Image positioned half inside and half outside */}
          <div className="absolute -top-10 w-20 h-20">
            <img
              src="/images/fresh-bucket-images/customer-feedback.png"
              alt="Free Delivery"
              className="w-full h-full object-contain"
            />
          </div>
          <div className=" pt-8 ">
            <h6 className="text-sm font-semibold text-gray-700">
              Customer Feedback
            </h6>
            <h4 className="text-lg font-bold text-gray-900">95.50%</h4>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-[#F6EBFC] py-6 rounded-lg shadow-md text-center flex flex-col items-center">
          {/* Image positioned half inside and half outside */}
          <div className="absolute -top-10 w-20 h-20">
            <img
              src="/images/fresh-bucket-images/free-return.png"
              alt="Free Delivery"
              className="w-full h-full object-contain"
            />
          </div>
          <div className=" pt-8 ">
            <h6 className="text-sm font-semibold text-gray-700">Free Return</h6>
            <h4 className="text-lg font-bold text-gray-900">365 Days</h4>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative bg-[#EBEFFF] py-6 rounded-lg shadow-md text-center flex flex-col items-center">
          {/* Image positioned half inside and half outside */}
          <div className="absolute -top-10 w-20 h-20">
            <img
              src="/images/fresh-bucket-images/payment.png"
              alt="Free Delivery"
              className="w-full h-full object-contain"
            />
          </div>
          <div className=" pt-8 ">
            <h6 className="text-sm font-semibold text-gray-700">Payment</h6>
            <h4 className="text-lg font-bold text-gray-900">Secure System</h4>
          </div>
        </div>

        {/* Card 5 */}
        <div className="relative bg-[#FFEDE8] py-6 rounded-lg shadow-md text-center flex flex-col items-center">
          {/* Image positioned half inside and half outside */}
          <div className="absolute -top-10 w-20 h-20">
            <img
              src="/images/fresh-bucket-images/secureShopping.png"
              alt="Free Delivery"
              className="w-full h-full object-contain"
            />
          </div>
          <div className=" pt-8 ">
            <h6 className="text-sm font-semibold text-gray-700">100% Safe</h6>
            <h4 className="text-lg font-bold text-gray-900">Secure Shopping</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
