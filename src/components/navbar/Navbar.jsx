import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
export default function Navbar() {
  return (
    <nav className="bg-[#171716] text-white px-6 py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <div className="w-[100px] h-[70px] flex items-center justify-center">
            <img src="/logo.png" alt="company logo" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Product
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Category
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Procedure Guide
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Pharmaceuticals
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Blog
          </a>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CiSearch className="h-4 w-4 text-[#136BFB]" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="bg-black border border-[#136BFB] rounded-xl pl-10 pr-4 py-2 text-white placeholder-[#136BFB] focus:outline-none w-64"
            />
            <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <VscSettings className="h-5 w-5 text-[#136BFB]" />
            </button>
          </div>

          {/* Shopping Cart */}
          <button className="p-2 border border-[#136BFB] rounded-lg">
            <RiShoppingCart2Line className="h-5 w-5 text-[#136BFB]" />
          </button>

          {/* Login Button */}
          <button className="flex items-center space-x-1 px-4 py-2 border border-[#136BFB] text-[#136BFB] rounded-lg">
            <FaRegUser className="h-4 w-4" />
            <span>Log in</span>
          </button>

          {/* Sign Up Button */}
          <button className="flex items-center space-x-1 px-4 py-3 bg-[#136BFB] text-white rounded-lg">
            <FiUserPlus className="h-4 w-4" />
            <span className="text-[15px] text-white font-bold">Sign up</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
