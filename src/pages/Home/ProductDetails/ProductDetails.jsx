import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../../components/shared/BreadCrumb";
import HotSellingCard from "../../../components/shared/HotSellingCard";
import SectionHeading from "../../../components/shared/SectionHeading";
import {
  FaShareAlt,
  FaHeart,
  FaRegHeart,
  FaTruck,
  FaUndo,
  FaCheck,
  FaMedal,
} from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  // const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const IsLogin = false;

  const Product = [
    {
      id: id,
      title: "Penora 200",
      availability: true,
      brand: "Panora",
      procedure: "Root Canal",

      images: [
        "https://i.ibb.co/nsfm8xgd/4de2c5b7-3921-48c0-8683-f1a166734214.jpg",
        "https://i.ibb.co/Wvr7BDR9/selling2.png",
        "https://i.ibb.co/gb6H9kgd/selling3.png",
        "https://i.ibb.co/7dwxVDfq/selling4.png",
        "https://i.ibb.co/2YpB12Kz/selling5.png",
      ],
      description:
        "High-speed titanium handpiece with quattro spray, ergonomic grip",
      price: 200,
      details:
        "PANORA 200 is a gel used for enamel etching and dentin conditioning in conjunction with sealing and direct composite restorations as well as adhesive cementation of lab-fabricated all-ceramic or composite restorations.",
      features: [
        { icon: <FaTruck />, text: "Fast Delivery" },
        { icon: <FaUndo />, text: "Easy Returns" },
        { icon: <FaCheck />, text: "Quality Guaranteed" },
      ],
    },
  ];

const Relatedproducts = [
  {
    id: 1,
    title: "Penora 200",
    image: "https://i.ibb.co/nsfm8xgd/4de2c5b7-3921-48c0-8683-f1a166734214.jpg",
    description: "High-speed titanium handpiece with quattro spray, ergonomic grip",
  },
  {
    id: 2,
    title: "Walden Tesla Air Rotor",
    image: "https://i.ibb.co/Wvr7BDR9/selling2.png",
    description: "High-speed titanium handpiece with quattro spray, ergonomic grip",
  },
  {
    id: 3,
    title: "Endo Excellence canal Commander...",
    image: "https://i.ibb.co/gb6H9kgd/selling3.png",
    description: "High-speed titanium handpiece with quattro spray, ergonomic grip",
  },
  {
    id: 4,
    title: "Nova Compo Plus",
    image: "https://i.ibb.co/7dwxVDfq/selling4.png",
    description: "High-speed titanium handpiece with quattro spray, ergonomic grip",
  },
  {
    id: 5,
    title: "B&E Etch-37",
    image: "https://i.ibb.co/2YpB12Kz/selling5.png",
    description: "High-speed titanium handpiece with quattro spray, ergonomic grip",
  },
];


  console.log(id);
  const product = Product[0];
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [showModal, setShowModal] = useState(false);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="mx-auto container text-white py-10">
      <BreadCrumb name="Home" title={product.title} />

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        {/* Image Section */}
        <div className="flex flex-col gap-4">
          <div
            onClick={() => setShowModal(true)}
            className="rounded-md overflow-hidden w-full h-[500px] cursor-pointer"
          >
            <img
              src={selectedImage}
              alt="Main"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-6 flex-wrap">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 rounded-md cursor-pointer object-cover ${
                  selectedImage === img ? "ring-2 ring-blue-500" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between space-y-5  text-[#9F9C96] text-xl">
          {/* Top Row */}
          <div className="flex justify-between items-start">
            {/* Text Content */}
            <div className="space-y-3">
              <h1 className="text-2xl text-white font-semibold">
                {product.title}
              </h1>
              <p>
                Availability:{" "}
                <span
                  className={
                    !product.isAvailable ? "text-[#2ECC71]" : "text-red-600"
                  }
                >
                  {!product.isAvailable ? "In Stock" : "Not Available"}
                </span>
              </p>
              <p className="text-[#9F9C96]">{product.description}</p>

              <div className=" space-y-1">
                <p>
                  Brand:{" "}
                  <span className="text-[#136BFB] cursor-pointer hover:underline">
                    {product.brand}
                  </span>
                </p>
                <p>
                  Procedure:{" "}
                  <span className="text-[#136BFB] cursor-pointer hover:underline">
                    {product.procedure}
                  </span>
                </p>
              </div>

              {/* Price or Login */}
              <p className="pt-1">
                {IsLogin ? (
                  <span className="text-white font-medium text-base">
                    {product.price}
                  </span>
                ) : (
                  <span className="text-[#136BFB] font-medium  cursor-pointer">
                    Log In or Sign Up For view price
                  </span>
                )}
              </p>

              <div className="border-b border-[#3a3a3a] pt-2 w-full" />
            </div>

            {/* Icons */}
            {/* <div className="flex gap-4 pt-2">
          <button className="text-white text-lg">
            <FaRegHeart className="hover:text-red-500" />
          </button>
          <button className="text-white text-lg">
            <FaShareAlt className="hover:text-[#136BFB]" />
          </button>
        </div> */}
          </div>
          {/* Bottom Row */}
          <div className="">
            {/* Quantity Selector */}
            <div className="flex justify-between">
              <label className="block mb-2 text-white font-medium">
                Quantity
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={decrementQuantity}
                  className="w-8 h-8 flex font-bold items-center justify-center rounded-md bg-[#9F9C96] hover:bg-[#3a3a3a] text-white"
                >
                  -
                </button>
                <input
                  type="number"
                  min={1}
                  
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 px-3 py-1 rounded-md bg-transparent border border-gray-500 text-white text-center"
                />
                <button
                  onClick={incrementQuantity}
                  className="w-8 h-8 flex font-bold items-center justify-center rounded-md bg-[#9F9C96] hover:bg-[#3a3a3a] text-white"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#136BFB] hover:bg-[#0f5ed1] px-8 py-3 rounded-md font-medium text-white w-full sm:w-auto">
                Buy Now
              </button>
              <button className="border border-[#136BFB] text-[#136BFB] px-8 py-3 rounded-md font-medium w-full sm:w-auto">
                Add To Cart
              </button>
            </div>
          </div>

          {/* Mobile Login Reminder */}
          {!IsLogin && (
            <div className="sm:hidden mt-4">
              <button className="w-full py-3 bg-[#2e2e2e] text-[#136BFB] rounded-md">
                Log In or Sign Up To View Price
              </button>
            </div>
          )}
        </div>


         <div className=" text-white p-0 space-y-4 max-w-md mx-auto">
      {/* Card 1 */}
      <div className="flex items-center gap-4 p-4 border border-gray-700 rounded-md">
        <FaTruck className="text-gray-400 text-2xl" />
        <div>
          <h3 className="font-semibold text-white">Fast Delivery</h3>
          <p className="text-sm text-gray-400">Enter your Delivery Address</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex items-center gap-4 p-4 border border-gray-700 rounded-md">
        <FaUndo className="text-gray-400 text-2xl" />
        <div>
          <h3 className="font-semibold text-white">Return Delivery</h3>
          <p className="text-sm text-gray-400">Free 30 Days Delivery Returns.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex items-center gap-4 p-4 border border-gray-700 rounded-md">
        <FaMedal className="text-gray-400 text-2xl" />
        <div>
          <h3 className="font-semibold text-white">Best Product Quality</h3>
          <p className="text-sm text-gray-400">Customer Service Product</p>
        </div>
      </div>
    </div>
      </div>

      {/* Modal for Enlarged Image */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />
        </div>
      )}

      {/* Product Details */}
      <div className="mt-16">
        <SectionHeading title="Product Details:" showButton={false} />
        <p className="text-[#9F9C96] mt-4 leading-7">{product.details}</p>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <SectionHeading title="Related Products" showButton={false} />
        <div className="flex gap-5 flex-wrap justify-center mt-6">
          {Relatedproducts.map((prod, idx) => (
            <HotSellingCard
              key={idx}
              image={prod.image}
              title={prod.title}
              description={prod.description}
              onViewDetails={() => alert(`View: ${prod.title}`)}
              onAddToCart={() => alert(`Added to Cart: ${prod.title}`)}
              onWishlistClick={() => alert(`Wishlisted: ${prod.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
