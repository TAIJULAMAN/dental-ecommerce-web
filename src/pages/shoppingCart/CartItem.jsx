import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartItem = ({
    id,
    name,
    price,
    quantity,
    image,
    isSelected,
    onToggleSelect,
    onUpdateQuantity
}) => {
    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            onUpdateQuantity(id, newQuantity);
        }
    };

    return (
        <div className="flex items-center gap-4 py-4 border-b border-gray-600 last:border-b-0">
            {/* Checkbox */}
            <div className="flex-shrink-0">
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onToggleSelect(id)}
                    className="w-5 h-5 text-blue-500 border-[#136BFB] rounded"
                />
            </div>

            {/* Product Image */}
            <div className="flex-shrink-0">
                <img
                    src={image}
                    alt={name}
                    className="w-16 h-16 object-cover rounded-lg bg-neutral-700"
                />
            </div>

            {/* Product Details */}
            <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium text-sm mb-1">{name}</h3>
                <p className="text-neutral-400 text-sm font-semibold">Price: ${price.toFixed(2)}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm mr-2">QTY</span>
                <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded flex items-center justify-center transition-colors"
                    disabled={quantity <= 1}
                >
                    <FaMinus className="w-4 h-4 text-white" />
                </button>
                <span className="w-8 text-center text-blue-400 font-semibold">
                    {quantity.toString().padStart(2, '0')}
                </span>
                <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded flex items-center justify-center transition-colors"
                >
                    <FaPlus className="w-4 h-4 text-white" />
                </button>
            </div>
        </div>
    );
};

export default CartItem;