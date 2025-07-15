import React from "react";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    gdc_no: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Column - Form */}
      <div className="w-full md:w-1/2 bg-[#171717] p-8 flex flex-col justify-center relative">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-center text-3xl font-bold text-white mb-2">
            Create Account
          </h1>
          <p className="text-center text-[#9F9C96] mb-8">
            Please enter your information to create account
          </p>

          <form className="space-y-5">
            <div className="flex gap-5">
              <div>
                <label className="block text-white font-bold text-lg mb-2">
                  First name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#2D2D2D] text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-bold text-lg mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#2D2D2D] text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-white font-bold text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-[#2D2D2D] text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-white font-bold text-lg mb-2">
                GDC No
              </label>
              <input
                type="number"
                name="gdc_no"
                value={formData.gdc_no}
                onChange={handleChange}
                placeholder="Enter your GDC No"
                className="w-full px-4 py-3 bg-[#2D2D2D] text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-white font-bold text-lg mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-[#2D2D2D] text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <IoEyeOffOutline size={20} />
                  ) : (
                    <IoEyeOutline size={20} />
                  )}
                </button>
              </div>
            </div>

            <Link to="/login">
              <button
                type="submit"
                className="w-full bg-[#136BFB] text-white font-bold py-3 px-4 rounded-lg transition mt-5"
              >
                Sign Up
              </button>
            </Link>

            <p className="text-center text-[#9F9C96] mt-5">
              Already have an account?{" "}
              <Link to="/login" className="text-[#136BFB]">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Column - Illustration */}
      <div className="hidden md:flex md:w-1/2 bg-[#162236] items-center justify-center relative">
        <div className="text-center px-12">
          <div className="w-[500px] h-[500px] mx-auto">
            <img src="./signin.svg" alt="sign up logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
