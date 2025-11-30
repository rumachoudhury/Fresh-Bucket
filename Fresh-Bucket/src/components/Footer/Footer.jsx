import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0C1A09] h-80  text-white py-15 ">
      <div className="flex flex-row justify-evenly  ">
        {/* footer first section start */}
        <div className="flex flex-col items-center justify-center text-center ">
          <img
            src="/images/fresh-bucket-images/footer.png"
            alt="Fresh Bucket"
          />
          <p className="text-sm pt-2">
            It is a long established fact that a <br></br> reader will be
            distracted by the <br></br> readable looking at its layout.
          </p>

          <div className="flex flex-row justify-center space-x-4 pt-8">
            <h5 className="text-sm ">Follow Us:</h5>
            <div className="flex justify-center space-x-4 mt-1">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        {/* footer second section start */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Resources
              </a>
            </li>
          </ul>
        </div>
        {/* footer 3rd section start*/}
        <div>
          <h3 className="text-lg font-semibold mb-3">My Account</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Suport
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Your Quotes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Track Your Order
              </a>
            </li>
          </ul>
        </div>
        {/* footer 4th section start*/}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:techserve4u@gmail.com"
                className="hover:underline"
              >
                techserve4u@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+1235899763" className="hover:underline">
                +123-589-9763
              </a>
            </li>
            <li>
              <span>King Street, Melbourne, Australia</span>
            </li>
          </ul>
        </div>
      </div>

      {/* footer end section */}
      <div className="flex justify-around md:flex-row p-4 mt-5 text-sm bg-[#040E01] ">
        <p className="">
          &copy; 2024. All rights reserved. Designed by TechServe4U.
        </p>
        <div className="flex justify-center align-center text-center  gap-6 ">
          <p>Setting&Privacy</p>
          <p>Faqs</p>
          <p>Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
