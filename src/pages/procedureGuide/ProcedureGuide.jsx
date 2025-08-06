import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import PageHeading from "../../components/shared/PageHeading";

export default function ProcedureGuide() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");


    const procedures = [
        {
            id: 1,
            title: "Endodontic Therapy",
            description:
                "All the essentials for a standard endodontic procedure, ready to review",
            productsIncluded: 8,
            image:
                "https://images.pexels.com/photos/6812539/pexels-photo-6812539.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
            id: 2,
            title: "Pulpotomy and Pulp Capping",
            description:
                "All the essentials for a standard endodontic procedure, ready to review",
            productsIncluded: 8,
            image:
                "https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
            id: 3,
            title: "Apicoectomy Procedure",
            description:
                "All the essentials for a standard endodontic procedure, ready to review",
            productsIncluded: 8,
            image:
                "https://images.pexels.com/photos/6812546/pexels-photo-6812546.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
            id: 4,
            title: "Dental Implant Placement",
            description:
                "Complete set of tools and materials for dental implant placement",
            productsIncluded: 12,
            image:
                "https://images.pexels.com/photos/6812513/pexels-photo-6812513.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
            id: 5,
            title: "Braces Adjustment Session",
            description:
                "Essential instruments for routine orthodontic maintenance and adjustments",
            productsIncluded: 6,
            image:
                "https://images.pexels.com/photos/6812502/pexels-photo-6812502.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
            id: 6,
            title: "Advanced Gum Surgery",
            description:
                "Specialized tools for advanced periodontal surgical procedures",
            productsIncluded: 10,
            image:
                "https://images.pexels.com/photos/6812521/pexels-photo-6812521.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
    ];

    const filteredProcedures = procedures.filter(
        (procedure) =>
            procedure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            procedure.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="py-10 container mx-auto px-5 md:px-0">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-2">
                <PageHeading title="Browse by Dental Procedure" />
            </header>

            {/* Procedure Cards */}
            <div className="space-y-5 flex flex-col gap-5">
                {filteredProcedures.map((procedure) => (
                    <div
                        key={procedure.id}
                        className="relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                    >
                        <div className="relative h-[20rem] md:h-[25rem] overflow-hidden">
                            <img
                                src={procedure.image}
                                alt={procedure.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

                            <div className="absolute inset-0 flex flex-col justify-between p-8">
                                <div className="flex-1">
                                    <h3 className="text-3xl font-bold text-white mb-3">
                                        {procedure.title}
                                    </h3>
                                    <p className="text-white/90 text-lg mb-4 max-w-2xl leading-relaxed">
                                        {procedure.description}
                                    </p>
                                    <p className="text-white/80 text-base font-medium">
                                        Products Included: {procedure.productsIncluded} Items
                                    </p>
                                </div>

                                <div className="flex gap-2 mt-5">
                                    <Link to="/procedure-guide-details">
                                    <button
                                  
                                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white md:px-6 px-3 md:py-3 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                                    >

                                        <span>View Products</span>
                                        <FaArrowRightLong className="h-4 w-4" />
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};
