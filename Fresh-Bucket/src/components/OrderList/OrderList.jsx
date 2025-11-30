import React from "react";
import { FaEdit, FaUserCircle, FaBars, FaUser } from "react-icons/fa";

const OrderList = ({
  //defining all data here
  orders = [
    {
      id: "TS-658798782945",
      date: "Apr 01, 2024",
      amount: "12,000",
      paymentMethod: "Stride",
      attachment: "/images/fresh-bucket-images/Attachment.png",
      status: "Approved",
      time: "10:30 AM",
    },
    {
      id: "TS-658798782946",
      date: "Apr 05, 2024",
      amount: "14,000",
      paymentMethod: "Stride",
      attachment: "/images/fresh-bucket-images/Attachment.png",
      status: "Pending",
      time: "11:40 AM",
    },
    {
      id: "TS-658798782947",
      date: "Apr 08, 2024",
      amount: "16,000",
      paymentMethod: "Stride",
      attachment: "/images/fresh-bucket-images/Attachment.png",
      status: "Pending",
      time: "12:30 PM",
    },
    {
      id: "TS-658798782948",
      date: "Apr 10, 2024",
      amount: "12,000",
      paymentMethod: "Stride",
      attachment: "/images/fresh-bucket-images/Attachment.png",
      status: "Approved",
      time: "1:30 PM",
    },
    {
      id: "TS-658798782949",
      date: "Apr 15, 2024",
      amount: "15,000",
      paymentMethod: "Stride",
      attachment: "/images/fresh-bucket-images/Attachment.png",
      status: "Approved",
      time: "2:00 PM",
    },
    {
      id: "TS-658798782949",
      date: "Apr 15, 2024",
      amount: "15,000",
      paymentMethod: "Stride",
      attachment: "/images/fresh-bucket-images/Attachment.png",
      status: "Approved",
      time: "2:00 PM",
    },
    {
      id: "TS-658798782949",
      date: "Apr 15, 2024",
      amount: "15,000",
      paymentMethod: "Stride",
      attachment: "/images/fresh-bucket-images/Attachment.png",
      status: "Approved",
      time: "2:00 PM",
    },
    {
      id: "TS-658798782949",
      date: "Apr 15, 2024",
      amount: "15,000",
      paymentMethod: "Stride",
      attachment: "/images/fresh-bucket-images/Attachment.png",
      status: "Approved",
      time: "2:00 PM",
    },
  ],
}) => {
  const handleEditClick = () => {
    alert("Edit button clicked!");
  };

  return (
    <div className="p-8 bg-white shadow-2xl rounded-lg max-w-5xl mx-auto ">
      <div>
        {/* User Information and */}
        <div className="mb-6">
          <FaUserCircle className="text-gray-500 text-6xl" />
          <h2 className="text-2xl font-bold">Ruma Choudhury</h2>
          <p className="text-gray-600">rumachoudhury@gmail.com</p>
        </div>

        {/* Basic Information text and Order List text and icons */}
        <div className="flex text-center mt-4">
          <div className="flex items-center space-x-2 bg-[#E8F7E9] w-60 h-10 text-green-500 p-2 rounded-lg">
            <FaUser className="text-green" />
            <button className="text-center">Basic Information</button>
          </div>
          {/* order list text and icon */}
          <div className="w-full flex items-center">
            <button className="flex items-center py-2 justify-center gap-x-2 bg-[#26AB1F] w-48 h-10 rounded-lg">
              <FaBars className="text-white text-sm" />
              <span className="text-white text-sm">Order List</span>
            </button>
          </div>
        </div>

        {/* Header with title and Edit button */}
        <div className="flex items-center justify-between  border-b border-gray-400 mt-4   gap-4">
          <h2 className="text-xl font-bold">Your Orders</h2>
          <button
            className="bg-[#26AB1F] text-white px-4 py-1 rounded flex items-center gap-2 cursor-pointer mb-4"
            onClick={handleEditClick}
          >
            <FaEdit />
            Edit
          </button>
        </div>
      </div>

      {/* main container */}
      <div className="flex flex-col mt-6">
        <div className="grid grid-cols-6 items-center text-center">
          <p className="text-gray-700 text-sm font-semibold">Order</p>
          <p className="text-gray-700 text-sm font-semibold">Order Date</p>
          <p className="text-gray-700 text-sm font-semibold">Amount</p>
          <p className="text-gray-700 text-sm font-semibold">Payment Method</p>
          <p className="text-gray-700 text-sm font-semibold">Attachment</p>
          <p className="text-gray-700 text-sm font-semibold">Status</p>
        </div>

        {/* Order Cards */}
        <div className="space-y-4">
          {/* Mapping  */}
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <div
                key={index}
                className=" bg-[#FFF6F4] grid grid-cols-6 text-center items-center rounded-lg shadow mt-4 p-2"
              >
                <p className="text-gray-700 text-xs text-center ml-3">
                  {order.id}
                </p>
                <p className="text-gray-700 text-xs  text-center flex flex-col">
                  {order.date}
                  <strong className="text-xs">{order.time}</strong>
                </p>
                <p className="text-gray-700 text-xs">${order.amount}</p>
                <p className="text-gray-700 text-xs">{order.paymentMethod}</p>

                <img
                  src={order.attachment}
                  alt="Attachment"
                  className="w-2xl h-10 object-cover"
                />

                <p
                  className={`text-sm font-semibold ${
                    order.status === "Approved"
                      ? "text-green-600  bg-[#DEEAD4] rounded-lg ml-5 p-2"
                      : "text-yellow-600 bg-[#FEECDC] rounded-lg ml-5 p-2"
                  }`}
                >
                  {order.status}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
