import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaTimes, FaBars } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-[#171716] text-white px-4 py-3 sticky top-0 z-50">
      <div className="container mx-auto">
        {/* Mobile Header */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-[80px] h-[60px] flex items-center justify-center md:w-[100px] md:h-[70px]">
            <img src="/logo.png" alt="company logo" className="h-full w-auto" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button onClick={toggleSearch} className="text-white p-2">
              <CiSearch className="h-5 w-5" />
            </button>
            <button onClick={toggleMenu} className="text-white p-2">
              {isMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Product
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Category
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Procedure Guide
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Pharmaceuticals
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Blog
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
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

            <button className="p-2 border border-[#136BFB] rounded-lg">
              <RiShoppingCart2Line className="h-5 w-5 text-[#136BFB]" />
            </button>

            <button className="flex items-center space-x-1 px-4 py-2 border border-[#136BFB] text-[#136BFB] rounded-lg">
              <FaRegUser className="h-4 w-4" />
              <span>Log in</span>
            </button>

            <button className="flex items-center space-x-1 px-4 py-2 bg-[#136BFB] text-white rounded-lg">
              <FiUserPlus className="h-4 w-4" />
              <span className="text-[15px] font-bold">Sign up</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="mt-3 md:hidden">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CiSearch className="h-4 w-4 text-[#136BFB]" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-black border border-[#136BFB] rounded-xl pl-10 pr-4 py-2 text-white placeholder-[#136BFB] focus:outline-none"
              />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <VscSettings className="h-5 w-5 text-[#136BFB]" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-white hover:text-gray-300 transition-colors py-2">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors py-2">
                Product
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors py-2">
                Category
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors py-2">
                Procedure Guide
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors py-2">
                Pharmaceuticals
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors py-2">
                Blog
              </a>
              <div className="flex space-x-4 pt-2">
                <button className="p-2 border border-[#136BFB] rounded-lg">
                  <RiShoppingCart2Line className="h-5 w-5 text-[#136BFB]" />
                </button>
                <button className="flex items-center space-x-1 px-4 py-2 border border-[#136BFB] text-[#136BFB] rounded-lg">
                  <FaRegUser className="h-4 w-4" />
                  <span>Log in</span>
                </button>
                <button className="flex items-center space-x-1 px-4 py-2 bg-[#136BFB] text-white rounded-lg">
                  <FiUserPlus className="h-4 w-4" />
                  <span>Sign up</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
