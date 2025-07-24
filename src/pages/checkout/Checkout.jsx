import React, { useState } from "react"
import { RiDeleteBinLine } from "react-icons/ri"
import { TbUserEdit } from "react-icons/tb"
import Checkbox from "../../components/shared/Checkbox"
import BreadCrumb from "../../components/shared/BreadCrumb"
import { useNavigate } from "react-router-dom"

export default function Checkout() {

    const [isSelected, setIsSelected] = useState("")
    const [selectedPayment, setSelectedPayment] = useState("")

    const addresses = [
        {
            id: "home",
            name: "Sujon",
            type: "Home",
            mobile: "018XXXXXXX",
            address: "Road no: 03 , C - block , Banasree",
            location: "Dhaka North , Dhaka",
        },
        {
            id: "office",
            name: "Sujon",
            type: "Office",
            mobile: "018XXXXXXX",
            address: "Road no: 03 , C - block , Banasree",
            location: "Dhaka North , Dhaka",
        },
    ]
    const navigate = useNavigate()
    return (
        <div className="">
            <div className="container mx-auto flex justify-start items-center">
                <BreadCrumb name="Home" title="Checkout" />
            </div>
            <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Shipping Address */}
                <div className="space-y-5 bg-[#202020] p-5 rounded-lg">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl text-white font-semibold">Select Shipping Address</h2>
                        <button onClick={() => navigate("/add-new-address")} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                            Add New Address
                        </button>
                    </div>
                    <div className="border-b-2 border-gray-700 my-5"></div>

                    <div className="space-y-5">
                        {addresses.map((address) => (
                            <div
                                key={address.id}
                                className="bg-neutral-700 border border-gray-700 rounded-lg p-4"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-3">
                                        <div onClick={() => setIsSelected(address.id)} className="cursor-pointer">
                                            <Checkbox isSelected={isSelected === address.id} />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center space-x-2">
                                                <span className="font-medium">{address.name}</span>
                                                <span
                                                    className={`px-2 py-1 text-xs rounded ${address.type === "Home"
                                                        ? "bg-blue-600 text-blue-100"
                                                        : "bg-green-600 text-green-100"
                                                        }`}
                                                >
                                                    {address.type}
                                                </span>
                                            </div>
                                            <p className="text-gray-300 text-sm">Mobile: {address.mobile}</p>
                                            <p className="text-gray-300 text-sm">{address.address}</p>
                                            <p className="text-gray-300 text-sm">{address.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="text-blue-400 hover:text-blue-300">
                                            <TbUserEdit className="w-4 h-4" />
                                        </button>
                                        <button className="text-red-400 hover:text-red-300">
                                            <RiDeleteBinLine className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary + Payment */}
                <div className="space-y-5 bg-[#202020] p-5 rounded-lg">
                    {/* Order Summary */}
                    <div className="p-5 text-gray-300">
                        <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-300 mb-4">
                            <span>Product</span>
                            <span className="text-center">QTY</span>
                            <span className="text-right">Price</span>
                        </div>
                        <div className="border-b-2 border-gray-700 my-5"></div>

                        <div className="grid grid-cols-3 gap-4 items-center py-4 border-b border-gray-700">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                                    <img
                                        src="/image.png"
                                        alt="Walden Tesla Air Rotor"
                                        className="rounded w-10 h-10"
                                    />
                                </div>
                                <span className="text-sm text-gray-300">Walden Tesla Air Rotor</span>
                            </div>
                            <span className="text-center">01</span>
                            <span className="text-right">350.00$</span>
                        </div>

                        <div className="flex justify-between py-3 text-sm text-gray-300">
                            <span>Delivery Fee</span>
                            <span>5.00$</span>
                        </div>

                        <div className="flex justify-between py-3 border-t border-gray-700 font-semibold">
                            <span>Total :</span>
                            <span className="text-blue-400">355.00$</span>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="p-5 text-gray-300">
                        <h3 className="text-lg font-semibold mb-4">Select Payment Method</h3>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div onClick={() => setSelectedPayment("bank")} className="cursor-pointer">
                                        <Checkbox isSelected={selectedPayment === "bank"} />
                                    </div>
                                    <span onClick={() => setSelectedPayment("bank")} className="cursor-pointer">Bank</span>
                                </div>

                                <div className="flex space-x-2">
                                    <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-xs font-bold">
                                        VISA
                                    </div>
                                    <div className="w-10 h-6 bg-gradient-to-r from-red-500 to-yellow-500 rounded flex items-center justify-center">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full -ml-1"></div>
                                    </div>
                                    <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center text-xs font-bold">
                                        PP
                                    </div>
                                    <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-xs font-bold text-gray-800">
                                        G Pay
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div onClick={() => setSelectedPayment("cod")} className="cursor-pointer">
                                    <Checkbox isSelected={selectedPayment === "cod"} />
                                </div>
                                <span onClick={() => setSelectedPayment("cod")} className="cursor-pointer">Cash On Delivery</span>
                            </div>
                        </div>

                        <div className="flex justify-center w-1/2 mx-auto">
                            <button className="w-full bg-[#136BFB] text-white py-3 mt-6 rounded-lg font-semibold">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
