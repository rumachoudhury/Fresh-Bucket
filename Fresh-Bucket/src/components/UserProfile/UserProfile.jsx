import React, { useState } from "react";
import {
  FaUserCircle,
  FaEdit,
  FaUser,
  FaBars,
  FaRegCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "Ruma",
    lastName: "Choudhury",
    email: "rumachoudhury@gmail.com",
    dob: "15-05-1990",
    mobile: "+123456789",
    gender: "",
    memberSince: "January 2024",
  });

  const [isEditing, setIsEditing] = useState(false);

  // const handleChange = (e) => {
  //   console.log(`Updating ${e.target.name}:`, e.target.value); // Debugging
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handle save functionality
  const handleSave = () => {
    console.log("Updated User Data:", formData);
    setIsEditing(false); // Disable editing mode after saving
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-lg text-sm">
      <div className="flex flex-col items-start mb-6">
        <FaUserCircle className="text-gray-500 text-6xl" />
        <h2 className="text-xl font-bold mt-2">{`${formData.firstName} ${formData.lastName}`}</h2>
        <p className="text-gray-600">{formData.email}</p>
      </div>

      <div className="flex text-center">
        <div className="flex items-center space-x-2 bg-[#26AB1F] w-50 h-10 text-white p-2 rounded-lg">
          <FaUser className="text-white" />
          <button className="text-center">Basic Information</button>
        </div>
        {/* order list text and icon */}
        <div className="w-full flex items-center">
          <button className="flex items-center py-2 justify-center gap-x-2 bg-[#E8F7E9] w-48 h-10">
            <FaBars className="text-green-400" />
            <span className="text-green-500">Order List</span>
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-3">
        <h2 className="text-md font-bold">Personal Information</h2>
        <button
          onClick={toggleEdit}
          className=" bg-[#26AB1F] w-24 h-8  gap-1 rounded-lg hover:bg-gray-300 flex items-center justify-center"
        >
          <FaEdit className="text-white" />
          <span className="text-white text-xs"> Edit</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 text-gray-500">
        <div>
          <label className="block text-gray-700 font-medium">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-[#FFF6F4] h-10"
            disabled={!isEditing}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-[#FFF6F4] h-10"
            disabled={!isEditing}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="w-full p-2 rounded-md bg-[#FFF6F4] h-10"
            readOnly
          />
        </div>

        {/* Date of Birth */}
        <div className="relative w-full">
          <label className="block text-gray-700 font-medium">
            Date of Birth *
          </label>
          <input
            type="text"
            name="dob"
            value={formData.dob}
            className="w-full p-2 rounded-md bg-[#FFF6F4] h-10"
            readOnly
          />
          <FaRegCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none mt-3" />
        </div>

        {/* Phone Number with Flag */}
        <div>
          <label className="block text-gray-700 font-medium">
            Mobile Number
          </label>
          <div className="flex items-center rounded-md overflow-hidden w-full bg-[#FFF6F4]">
            {/* Flag & Dropdown */}
            <div className="flex items-center px-3 py-2 border-r border-gray-300">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="US Flag"
                className="w-5 h-5"
              />
              <FaChevronDown className="ml-2 text-gray-400" />
            </div>

            {/* Phone Input */}
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="flex-1 p-2 outline-none bg-transparent"
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Gender */}
        {/* Gender */}
        <div>
          <label className="block text-gray-700 font-medium">Gender *</label>
          <select
            name="gender"
            value={formData.gender || ""}
            onChange={handleChange}
            className={`w-full p-2 rounded-md h-10 ${
              isEditing
                ? "bg-white border border-gray-400"
                : "bg-[#FFF6F4] border-none"
            }`}
            disabled={!isEditing}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* <div>
          <label className="block text-gray-700 font-medium">Gender *</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-[#FFF6F4] h-10"
            disabled={!isEditing}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div> */}

        {/* Member Since */}
        <div className="col-span-2 relative w-full">
          <label className="block text-gray-700 font-medium">
            Member Since
          </label>
          <input
            type="text"
            name="memberSince"
            value={formData.memberSince}
            className="w-full p-2 rounded-md bg-[#FFF6F4] h-10"
            readOnly
          />
          <FaRegCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none mt-3" />
        </div>
      </div>

      {isEditing && (
        <button
          onClick={handleSave}
          className="w-full mt-4 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save Changes
        </button>
      )}
    </div>
  );
};

export default UserProfile;
