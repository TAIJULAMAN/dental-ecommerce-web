import React  from "react";
import { FaCheck } from "react-icons/fa";


export default function ProductCard({ product, isSelected, onSelect }) {
    return (
      <div 
        className={`relative bg-white rounded-xl shadow-sm border-2 transition-all duration-200 cursor-pointer hover:shadow-md ${
          isSelected ? 'border-[#136BFB] ring-2 ring-[#136BFB]' : 'border-gray-200 hover:border-gray-300'
        }`}
        onClick={onSelect}
      >
        {/* Checkbox */}
        <div className="absolute top-3 left-3 z-10">
          <div className={`w-5 h-5 rounded border-2 border-[#136BFB] transition-all duration-200 ${
            isSelected 
              ? 'border-[#136BFB]' 
              : ''
          }`}>
            {isSelected && (
              <FaCheck className="w-3 h-3 text-[#136BFB] absolute top-1 left-1" />
            )}
          </div>
        </div>
  
        {/* Product Image */}
        <div className="">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
  
        {/* Product Name */}
        <div className="">
          <p className="absolute bottom-5 left-3 text-sm font-medium text-gray-900 line-clamp-2">
            {product.name}
          </p>
        </div>
      </div>
    );
  }