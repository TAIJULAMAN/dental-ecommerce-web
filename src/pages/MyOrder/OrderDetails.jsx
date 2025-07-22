import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
    const { id } = useParams();

    // Sample order data - in a real app, you would fetch this based on the ID
    const order = {
        id: "#1234",
        date: "25/05/2025",
        address: "c.block., Road no: 03_Bansares_Dhaka",
        items: [
            {
                name: "Walden Tesla Air Rotor",
                price: 300.00,
                quantity: 1
            }
        ],
        subtotal: 300.00,
        shippingFee: 5.00,
        total: 355.00,
        status: "pending" // can be "pending", "completed", "shipped", "canceled" etc.
    };

    const handleExportInvoice = () => {
        console.log(`Exporting invoice for order ${id}`);
        // In a real app, you would implement actual export functionality here
    };

    const handleCancelOrder = () => {
        console.log(`Canceling order ${id}`);
        // In a real app, you would implement actual cancel functionality here
    };

    return (
        <div className="max-w-2xl mx-auto  text-white border p-10 rounded-2xl">
            {/* Order ID Header */}
            <h1 className="text-2xl font-bold mb-6">{order.id}</h1>
            
            {/* Order Meta */}
            <div className="mb-6 space-y-2">
                <p className="text-gray-400">Placed on: <span className="text-white">{order.date}</span></p>
                <p className="text-gray-400">Address: <span className="text-white">{order.address}</span></p>
            </div>
            
            {/* Order Items */}
            <div className="border-b border-gray-700 pb-4 mb-4">
                {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                checked 
                                readOnly 
                                className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span>{item.name}</span>
                        </div>
                        <div className="text-right">
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <p className="text-gray-400">Qty: {item.quantity.toString().padStart(2, '0')}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Order Summary */}
            <div className="mb-6 space-y-2">
                <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400">Shipping fee</span>
                    <span>${order.shippingFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t border-gray-700">
                    <span>Total:</span>
                    <span>${order.total.toFixed(2)}</span>
                </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-4">
                {order.status === "pending" && (
                    <button 
                        onClick={handleCancelOrder}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
                    >
                        Cancel Order
                    </button>
                )}
                <button 
                    onClick={handleExportInvoice}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                >
                    Export Invoice
                </button>
            </div>
        </div>
    );
};

export default OrderDetails;