
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { PiShoppingCartBold } from "react-icons/pi";
import BreadCrumb from "../../components/shared/BreadCrumb";

export default function ProcedureDetails() {
    const [selectedItems, setSelectedItems] = useState(new Set());
    const [selectAll, setSelectAll] = useState(false);

    const products = [
        { id: '1', name: 'Walden Tesla Air Rotor', image: 'https://images.pexels.com/photos/6507023/pexels-photo-6507023.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { id: '2', name: 'Walden Tesla Air Rotor', image: 'https://images.pexels.com/photos/6507023/pexels-photo-6507023.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { id: '3', name: 'Walden Tesla Air Rotor', image: 'https://images.pexels.com/photos/6507023/pexels-photo-6507023.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { id: '4', name: 'Walden Tesla Air Rotor', image: 'https://images.pexels.com/photos/6507023/pexels-photo-6507023.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { id: '5', name: 'Walden Tesla Air Rotor', image: 'https://images.pexels.com/photos/6507023/pexels-photo-6507023.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { id: '6', name: 'Walden Tesla Air Rotor', image: 'https://images.pexels.com/photos/6507023/pexels-photo-6507023.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { id: '7', name: 'Walden Tesla Air Rotor', image: 'https://images.pexels.com/photos/6507023/pexels-photo-6507023.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { id: '8', name: 'Walden Tesla Air Rotor', image: 'https://images.pexels.com/photos/6507023/pexels-photo-6507023.jpeg?auto=compress&cs=tinysrgb&w=300' },
    ];

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedItems(new Set());
        } else {
            setSelectedItems(new Set(products.map(p => p.id)));
        }
        setSelectAll(!selectAll);
    };

    const handleItemSelect = (itemId) => {
        const newSelected = new Set(selectedItems);
        if (newSelected.has(itemId)) {
            newSelected.delete(itemId);
        } else {
            newSelected.add(itemId);
        }
        setSelectedItems(newSelected);
        setSelectAll(newSelected.size === products.length);
    };

    const selectedCount = selectedItems.size;
    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-10">

                <BreadCrumb name="Procedure Guide" title="Root Canal Treatment" />
                {/* Hero Section */}
                <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
                    <div className="aspect-w-16 aspect-h-9">
                        <img
                            src="/detail.png"
                            alt="Endodontic procedure equipment"
                            className="w-full h-80 object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                        <p className="text-white text-lg font-medium drop-shadow-lg">
                            All the essentials for a standard endodontic procedure, ready to review
                        </p>
                    </div>
                </div>

                {/* Select All Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Select Equipment</h2>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                        <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
                            Select all
                        </span>
                        <div className="relative">
                            <input
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAll}
                                className="sr-only"
                            />
                            <div className={`w-5 h-5 rounded border-2 transition-all duration-200 ${selectAll
                                    ? 'bg-blue-500 border-blue-500'
                                    : 'border-gray-300 hover:border-blue-400 bg-white'
                                }`}>
                                {selectAll && (
                                    <FaCheck className="w-3 h-3 text-white absolute top-0.5 left-0.5" />
                                )}
                            </div>
                        </div>
                    </label>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isSelected={selectedItems.has(product.id)}
                            onSelect={() => handleItemSelect(product.id)}
                        />
                    ))}
                </div>

                {/* Add to Cart Button */}
                <div className="flex justify-center">
                    <button
                        className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 ${selectedCount > 0
                                ? 'bg-blue-500 hover:bg-blue-600 transform hover:scale-105 shadow-lg hover:shadow-xl'
                                : 'bg-gray-400 cursor-not-allowed'
                            }`}
                        disabled={selectedCount === 0}
                    >
                        <PiShoppingCartBold className="w-5 h-5" />
                        <span>
                            Add To Cart {selectedCount > 0 && `(${selectedCount})`}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}






