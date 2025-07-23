import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

const CartHeader = ({
    selectedCount,
    onSelectAll,
    onDeleteSelected,
    allSelected
}) => {
    return (
        <div className="flex items-center justify-between mb-5 bg-neutral-700 rounded-lg p-2">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={onSelectAll}
                    className="w-5 h-5 border border-[#136BFB]"
                />
                <span className="text-gray-300 font-medium">Select all</span>
            </div>

            <button
                onClick={onDeleteSelected}
                disabled={selectedCount === 0}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200"
            >
                <RiDeleteBinLine className="w-4 h-4" />
                <span>Delete</span>
            </button>
        </div>
    );
};

export default CartHeader;