import React, { useState } from "react"
import { GoHome } from "react-icons/go"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import BreadCrumb from "../../components/shared/BreadCrumb"

export default function AddNewAddrees() {
    const [selectedDelivery, setSelectedDelivery] = useState("home")
    const [formData, setFormData] = useState({
        firstName: "Asadujjaman",
        lastName: "Asadujjaman",
        email: "Asadujjaman@gmail.com",
        streetNo: "",
        city: "",
        contact: "",
        houseNo: "",
        area: "",
        country: "",
    })

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSave = () => {
        console.log("Form data:", formData)
        console.log("Delivery option:", selectedDelivery)
    }

    const handleCancel = () => {
        console.log("Form cancelled")
    }

    return (
        <div className="min-h-screen p-5 text-white">
            <div className="container mx-auto flex justify-start items-center">
                <BreadCrumb name="Home" title="Add New Address" />
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="bg-[#202020] rounded-lg p-8">
                    <h1 className="text-2xl font-semibold mb-8">Add New Shipping Address</h1>
                    <div className="border-b-2 border-gray-700 my-5"></div>

                    <div className="space-y-6">
                        {/* First Name and Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm mb-1">
                                    First name
                                </label>
                                <input
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                                    className="w-full border border-[#136BFB] rounded px-4 py-2 text-white placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm mb-1">
                                    Last name
                                </label>
                                <input
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                                    className="w-full border border-[#136BFB] rounded px-4 py-2 text-white placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Email and Street No */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm mb-1">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    className="w-full border border-[#136BFB] rounded px-4 py-2 text-white placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="streetNo" className="block text-sm mb-1">
                                    Street No
                                </label>
                                <input
                                    id="streetNo"
                                    placeholder="Type here.."
                                    value={formData.streetNo}
                                    onChange={(e) => handleInputChange("streetNo", e.target.value)}
                                    className="w-full border border-[#136BFB] rounded px-4 py-2 text-white placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Contact and City */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="contact" className="block text-sm mb-1">
                                    Contact
                                </label>
                                <div className="flex">
                                    <select
                                        defaultValue="bd"
                                        className="w-20 border border-[#136BFB] text-white rounded-l px-2"
                                    >
                                        <option value="bd">🇧🇩</option>
                                        <option value="us">🇺🇸</option>
                                        <option value="uk">🇬🇧</option>
                                    </select>
                                    <input
                                        id="contact"
                                        value={formData.contact}
                                        onChange={(e) => handleInputChange("contact", e.target.value)}
                                        className="flex-1 border border-[#136BFB] border-l-0 rounded-r px-4 py-2 text-white placeholder-gray-400"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm mb-1">
                                    City
                                </label>
                                <input
                                    id="city"
                                    placeholder="Type here.."
                                    value={formData.city}
                                    onChange={(e) => handleInputChange("city", e.target.value)}
                                    className="w-full border border-[#136BFB] rounded px-4 py-2 text-white placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* House No and Area */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="houseNo" className="block text-sm mb-1">
                                    House No / Apartment / Floor
                                </label>
                                <input
                                    id="houseNo"
                                    placeholder="Type here.."
                                    value={formData.houseNo}
                                    onChange={(e) => handleInputChange("houseNo", e.target.value)}
                                    className="w-full border border-[#136BFB] rounded px-4 py-2 text-white placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="area" className="block text-sm mb-1">
                                    Area
                                </label>
                                <input
                                    id="area"
                                    placeholder="Type here.."
                                    value={formData.area}
                                    onChange={(e) => handleInputChange("area", e.target.value)}
                                    className="w-full border border-[#136BFB] rounded px-4 py-2 text-white placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Country */}
                        <div>
                            <label htmlFor="country" className="block text-sm mb-1">
                                Country
                            </label>
                            <input
                                id="country"
                                placeholder="Type here.."
                                value={formData.country}
                                onChange={(e) => handleInputChange("country", e.target.value)}
                                className="w-full border border-[#136BFB] rounded px-4 py-2 text-white placeholder-gray-400"
                            />
                        </div>

                        {/* Delivery Options */}
                        <div className="space-y-4 pt-4">
                            <h3 className="text-sm">Select an option for effective delivery</h3>
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setSelectedDelivery("home")}
                                    className={`flex items-center gap-2 px-6 py-2 rounded border ${selectedDelivery === "home"
                                        ? "bg-[#136BFB] text-white border-[#136BFB]"
                                        : "bg-transparent border-[#136BFB] text-[#136BFB] hover:bg-[#136BFB]"
                                        }`}
                                >
                                    <GoHome className="w-4 h-4" />
                                    Home
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedDelivery("office")}
                                    className={`flex items-center gap-2 px-6 py-2 rounded border ${selectedDelivery === "office"
                                        ? "bg-[#136BFB] text-white border-[#136BFB]"
                                        : "bg-transparent border-[#136BFB] text-[#136BFB] hover:bg-[#136BFB]"
                                        }`}
                                >
                                    <HiOutlineBuildingOffice2 className="w-4 h-4" />
                                    Office
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-4 pt-8">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="px-8 py-2 rounded border border-[#136BFB] text-[#136BFB] hover:bg-[#136BFB]"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleSave}
                                className="px-8 py-2 rounded bg-[#136BFB] text-white hover:bg-[#136BFB]"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
