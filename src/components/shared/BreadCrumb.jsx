import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function BreadCrumb({ title }) {
  return (

      <ul className="flex items-center justify-center font-[sans-serif] py-5 gap-2">
        <li className="relative">
          <span className="text-[#9F9C96] cursor-pointer text-sm">
            Home
          </span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9F9C96] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
        <FaAngleRight className="text-[#9F9C96]" />
        <li className="relative">
          <span className="text-[#136BFB] cursor-pointer text-sm">
            {title}
          </span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
      </ul>
  )
}
