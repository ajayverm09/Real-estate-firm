import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0b132b] text-white px-6 sm:px-8 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
        <div>
          <h2 className="text-lg sm:text-xl font-bold mb-4">
            TO CONTACT OUR RENTAL OR SALES TEAM <br />
            PLEASE CALL OR EMAIL US:
          </h2>
          <div className="space-y-2 text-sm sm:text-base">
            <p>Tel: 123-456-7890</p>
            <p>Email: info@mysite.com</p>
            <p>Fax: 123-456-7890</p>
          </div>
          <div className="mt-4 text-sm sm:text-base">
            <p>500 Terry Francine Street</p>
            <p>San Francisco, CA 94158</p>
          </div>
          <div className="mt-4 flex gap-4 text-xl sm:text-2xl">
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
          <p className="mt-6 text-xs sm:text-sm">
            © 2035 by Colton Properties. Powered and secured by Wix
          </p>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl font-bold mb-4">
            ALTERNATIVELY YOU CAN FILL <br />
            IN THE FOLLOWING CONTACT FORM:
          </h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="First Name *"
              className="p-2 sm:p-3 bg-transparent border border-gray-400 focus:outline-none focus:ring focus:ring-white rounded"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="p-2 sm:p-3 bg-transparent border border-gray-400 focus:outline-none focus:ring focus:ring-white rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-2 sm:p-3 bg-transparent border border-gray-400 focus:outline-none focus:ring focus:ring-white rounded sm:col-span-2"
            />
            <textarea
              placeholder="Message"
              className="p-2 sm:p-3 bg-transparent border border-gray-400 focus:outline-none focus:ring focus:ring-white rounded sm:col-span-2 h-24 sm:h-28"
            />
            <button
              type="submit"
              className="bg-transparent border rounded-2xl w-24 py-2 border-gray-400 hover:bg-white hover:text-black hover:border-black transition sm:col-span-2 sm:w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
