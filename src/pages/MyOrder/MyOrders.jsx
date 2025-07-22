import React from "react";
import BreadCrumb from "../../components/shared/BreadCrumb";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  // Order data in array object format
  const orders = [
    {
      id: "1234",
      product: "Walden Tesla Air Rotor",
      quantity: "Q1",
      price: "$300.00",
      status: "Presents",
      total: "Price: $300.00"
    },
    {
      id: "1235",
      product: "Walden Tesla Air Rotor",
      quantity: "Q1",
      price: "$300.00",
      status: "Readings",
      total: "Price: $300.00"
    },
    {
      id: "1236",
      product: "Walden Tesla Air Rotor",
      quantity: "Q1",
      price: "$300.00",
      status: "Biggest",
      total: "Price: $300.00"
    },
    {
      id: "1236",
      product: "Walden Tesla Air Rotor",
      quantity: "Q1",
      price: "$1500.00",
      status: "Canceled",
      total: "Price: $1500.00"
    }
  ];

  // Function to determine status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Presents":
        return "text-green-500";
      case "Readings":
        return "text-blue-500";
      case "Biggest":
        return "text-purple-500";
      case "Canceled":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const navigate = useNavigate();

  return (
    <div className="mx-auto container text-white py-10 px-4">
      <BreadCrumb name="Home" title="My Orders" />
      
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-6">My Orders</h1>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Order Id</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {orders.map((order, index) => (
                <React.Fragment key={index}>
                  <tr className="hover:bg-gray-700 transition-colors cursor-pointer"
                  onClick={()=>{
                    navigate(`/myorders/details/${order.id}`)
                  }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.price}</td>
                    <td className={`px-6 py-4 whitespace-nowrap ${getStatusColor(order.status)}`}>
                      {order.status}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="5" className="px-6 py-2 text-sm text-gray-400">
                      {order.total}
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;