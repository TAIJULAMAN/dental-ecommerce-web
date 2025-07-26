import React, { useState } from "react";
import BreadCrumb from "../../components/shared/BreadCrumb";
import SectionHeading from "../../components/shared/SectionHeading";
import HotSellingCard from "../../components/shared/HotSellingCard";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Product() {
  const products = [
    {
      id: 1,
      title: "Penora 200",
      image:
        "https://i.ibb.co/nsfm8xgd/4de2c5b7-3921-48c0-8683-f1a166734214.jpg",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 2,
      title: "Walden Tesla Air Rotor",
      image: "https://i.ibb.co/Wvr7BDR9/selling2.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 3,
      title: "Endo Excellence canal Commander...",
      image: "https://i.ibb.co/gb6H9kgd/selling3.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 4,
      title: "Nova Compo Plus",
      image: "https://i.ibb.co/7dwxVDfq/selling4.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 5,
      title: "B&E Etch-37",
      image: "https://i.ibb.co/2YpB12Kz/selling5.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 6,
      title: "Penora 200",
      image:
        "https://i.ibb.co/nsfm8xgd/4de2c5b7-3921-48c0-8683-f1a166734214.jpg",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 7,
      title: "Walden Tesla Air Rotor",
      image: "https://i.ibb.co/Wvr7BDR9/selling2.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 8,
      title: "Endo Excellence canal Commander...",
      image: "https://i.ibb.co/gb6H9kgd/selling3.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 9,
      title: "Nova Compo Plus",
      image: "https://i.ibb.co/7dwxVDfq/selling4.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 10,
      title: "B&E Etch-37",
      image: "https://i.ibb.co/2YpB12Kz/selling5.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 11,
      title: "Penora 200",
      image:
        "https://i.ibb.co/nsfm8xgd/4de2c5b7-3921-48c0-8683-f1a166734214.jpg",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 12,
      title: "Walden Tesla Air Rotor",
      image: "https://i.ibb.co/Wvr7BDR9/selling2.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 13,
      title: "Endo Excellence canal Commander...",
      image: "https://i.ibb.co/gb6H9kgd/selling3.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 14,
      title: "Nova Compo Plus",
      image: "https://i.ibb.co/7dwxVDfq/selling4.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 15,
      title: "B&E Etch-37",
      image: "https://i.ibb.co/2YpB12Kz/selling5.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 16,
      title: "Penora 200",
      image:
        "https://i.ibb.co/nsfm8xgd/4de2c5b7-3921-48c0-8683-f1a166734214.jpg",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 17,
      title: "Walden Tesla Air Rotor",
      image: "https://i.ibb.co/Wvr7BDR9/selling2.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 18,
      title: "Endo Excellence canal Commander...",
      image: "https://i.ibb.co/gb6H9kgd/selling3.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 19,
      title: "Nova Compo Plus",
      image: "https://i.ibb.co/7dwxVDfq/selling4.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
    {
      id: 20,
      title: "B&E Etch-37",
      image: "https://i.ibb.co/2YpB12Kz/selling5.png",
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
    },
  ];

  const [showCategory, setShowCategory] = useState(true);
  const [showProcedure, setShowProcedure] = useState(true);
  const [showBrand, setShowBrand] = useState(true);
  const [showAvailability, setShowAvailability] = useState(true);

  return (
    <div>
      <div className="absolute top-1/2 left-0">
        <div className="w-[500px] h-[500px] bg-[#136BFB] opacity-20 blur-3xl rounded-full"></div>
      </div>
      <div className="absolute bottom-0 right-0">
        <div className="w-[500px] h-[500px] bg-[#136BFB] opacity-20 blur-3xl rounded-full"></div>
      </div>


      <div className="mx-auto container text-white py-10 px-4">
        <BreadCrumb title={`Product`} name={`Home`} />
        <SectionHeading title="All Products" showButton={false} />
        {/* Filter and products */}
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen gap-5">
          {/* Filter Section */}
          <div className="bg-gray-800 px-5 py-10  rounded-lg h-[100vh]">
            <div className="space-y-6">
              {/* Price Filter */}
              <div className="p-4  w-full max-w-xs border-b border-[#DBDBDB]">
                <h3 className="text-white text-sm font-semibold mb-3">Price Filter</h3>
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full p-2 rounded border border-gray-400 bg-transparent text-white placeholder:text-gray-400 outline-none"
                  />
                  <span className="text-white">–</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full py-2 px-2 rounded border border-gray-400 bg-transparent text-white placeholder:text-gray-400 outline-none"
                  />
                  <button className="px-6 py-3 bg-[#136BFB] hover:bg-blue-700 rounded text-white border border-gray-300 ">
                    <BiSolidDownArrow className="-rotate-90"></BiSolidDownArrow>
                  </button>
                </div>

              </div>

              {/* Category Filter */}
              <div className="border-b border-[#DBDBDB] pb-4">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setShowCategory(!showCategory)}
                >
                  <h3 className="text-lg font-semibold">Category</h3>
                  <BiSolidDownArrow
                    className={`transition-transform duration-300 text-[#136BFB] ${showCategory ? "rotate-0" : "rotate-180"
                      }`}
                  />
                </div>
                {showCategory && (
                  <ul className="space-y-2 mt-2">
                    {[
                      "Endodontics",
                      "Surgical Instrument",
                      "Orthodontics",
                      "Impression materials",
                    ].map((category) => (
                      <li key={category} className="flex justify-between items-center">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded text-blue-500 bg-[#2b2d32] border border-[#136BFB]"
                          />
                          <span>{category}</span>
                        </label>
                        <span className="text-[#6C757D] bg-[#B4D0FE] rounded-sm px-1 text-sm">
                          10214
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Procedure Type Filter */}
              <div className="border-b border-[#DBDBDB] pb-4">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setShowProcedure(!showProcedure)}
                >
                  <h3 className="text-lg font-semibold">Procedure Type</h3>
                  <BiSolidDownArrow
                    className={`transition-transform duration-300 text-[#136BFB] ${showProcedure ? "rotate-0" : "rotate-180"
                      }`}
                  />
                </div>
                {showProcedure && (
                  <ul className="space-y-2 mt-2">
                    {["Filling", "Root Canal", "Crown/Bridge", "Extraction"].map(
                      (procedure) => (
                        <li key={procedure}>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" className="rounded text-blue-500" />
                            <span>{procedure}</span>
                          </label>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>

              {/* Brand Filter */}
              <div className="border-b border-[#DBDBDB] pb-4">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setShowBrand(!showBrand)}
                >
                  <h3 className="text-lg font-semibold">Brand</h3>
                  <BiSolidDownArrow
                    className={`transition-transform duration-300 text-[#136BFB] ${showBrand ? "rotate-0" : "rotate-180"
                      }`}
                  />
                </div>
                {showBrand && (
                  <ul className="space-y-2 mt-2">
                    {["Panora", "Walden", "Dentsply", "3M"].map((brand) => (
                      <li key={brand}>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" className="rounded text-blue-500" />
                          <span>{brand}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Availability Filter */}
              <div>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setShowAvailability(!showAvailability)}
                >
                  <h3 className="text-lg font-semibold">Availability</h3>
                  <BiSolidDownArrow
                    className={`transition-transform duration-300 text-[#136BFB] ${showAvailability ? "rotate-0" : "rotate-180"
                      }`}
                  />
                </div>
                {showAvailability && (
                  <ul className="space-y-2 mt-2">
                    <li>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded text-blue-500"
                          defaultChecked
                        />
                        <span>In Stock</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded text-blue-500" />
                        <span>Out of Stock</span>
                      </label>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="col-span-3">
            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto px-5 md:px-0">
              {products.map((product) => (
                <HotSellingCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  cardHeight={260}
                  cardWidth={260}
                  price={product.price}
                  onAddToCart={() => alert(`Added to Cart: ${product.title}`)}
                  onWishlistClick={() => alert(`Wishlisted: ${product.title}`)}
                />
              ))}
            </div>

            {/* Pagination would go here */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-700 rounded-md">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-500 rounded-md">1</button>
                <button className="px-4 py-2 bg-gray-700 rounded-md">2</button>
                <button className="px-4 py-2 bg-gray-700 rounded-md">3</button>
                <button className="px-4 py-2 bg-gray-700 rounded-md">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
