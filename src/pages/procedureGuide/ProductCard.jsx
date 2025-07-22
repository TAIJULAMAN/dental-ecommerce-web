import React  from "react";
import { FaCheck } from "react-icons/fa";


export default function ProductCard({ product, isSelected, onSelect }) {
    return (
      <div 
        className={`relative bg-white rounded-xl shadow-sm border-2 transition-all duration-200 cursor-pointer hover:shadow-md ${
          isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
        }`}
        onClick={onSelect}
      >
        {/* Checkbox */}
        <div className="absolute top-3 left-3 z-10">
          <div className={`w-5 h-5 rounded border-2 transition-all duration-200 ${
            isSelected 
              ? 'bg-blue-500 border-blue-500' 
              : 'border-gray-300 bg-white hover:border-blue-400'
          }`}>
            {isSelected && (
              <FaCheck className="w-3 h-3 text-white absolute top-0.5 left-0.5" />
            )}
          </div>
        </div>
  
        {/* Product Image */}
        <div className="aspect-square p-4 pt-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
  
        {/* Product Name */}
        <div className="px-3 pb-3">
          <p className="text-sm font-medium text-gray-900 line-clamp-2">
            {product.name}
          </p>
        </div>
      </div>
    );
  }