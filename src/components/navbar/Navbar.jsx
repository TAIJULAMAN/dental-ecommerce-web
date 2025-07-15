import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaTimes, FaBars } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { RiShoppingCart2Line } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen && isMobile) {
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen && isMobile) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-menu-container") &&
        !event.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#171716] text-white px-4 py-3 sticky top-0 z-50">
      <div className="container mx-auto relative">
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
            <button
              onClick={toggleMenu}
              className="menu-button text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-5 w-5" />
              ) : (
                <FaBars className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
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
            <div className="flex-1 flex items-center justify-end space-x-6">
              <div className="flex items-center space-x-3 cursor-pointer group">
                <Link to="/profile">
                  <img
                    src="https://i.ibb.co.com/RvFgZC8/aman.png"
                    alt="profile"
                    className="h-10 w-10 rounded-full"
                  />
                </Link>
              </div>
              <Link to="/notification">
                <button className="p-1 text-gray-400 hover:text-white relative">
                  <LuBell className="h-8 w-8" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
              </Link>
            </div>
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
      </div>

      {/* Mobile Menu Overlay and Content */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-container fixed top-0 left-0 h-full w-4/5 max-w-xs bg-[#171716] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div className="w-24">
              <img
                src="/logo.png"
                alt="company logo"
                className="w-full h-auto"
              />
            </div>
            <button
              onClick={toggleMenu}
              className="text-white p-2 -mr-2"
              aria-label="Close menu"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-6">
              <li>
                <a
                  href="#"
                  className="block text-white hover:text-[#136BFB] text-lg py-2 transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white hover:text-[#136BFB] text-lg py-2 transition-colors"
                  onClick={toggleMenu}
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white hover:text-[#136BFB] text-lg py-2 transition-colors"
                  onClick={toggleMenu}
                >
                  Category
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white hover:text-[#136BFB] text-lg py-2 transition-colors"
                  onClick={toggleMenu}
                >
                  Procedure Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white hover:text-[#136BFB] text-lg py-2 transition-colors"
                  onClick={toggleMenu}
                >
                  Pharmaceuticals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white hover:text-[#136BFB] text-lg py-2 transition-colors"
                  onClick={toggleMenu}
                >
                  Blog
                </a>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-[#136BFB] text-[#136BFB] rounded-lg">
                  <FaRegUser className="h-4 w-4" />
                  <span>Log in</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[#136BFB] text-white rounded-lg">
                  <FiUserPlus className="h-4 w-4" />
                  <span>Sign up</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-[#136BFB] text-[#136BFB] rounded-lg">
                  <RiShoppingCart2Line className="h-5 w-5" />
                  <span>Cart</span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}
