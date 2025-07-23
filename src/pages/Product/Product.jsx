import React from "react";
import BreadCrumb from "../../components/shared/BreadCrumb";
import SectionHeading from "../../components/shared/SectionHeading";
import HotSellingCard from "../../components/shared/HotSellingCard";

const Product = () => {



const products = [
  {
    title: 'Penora 200',
    image: 'https://i.ibb.co/nsfm8xgd/4de2c5b7-3921-48c0-8683-f1a166734214.jpg',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'Walden Tesla Air Rotor',
    image: 'https://i.ibb.co/Wvr7BDR9/selling2.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'Endo Excellence canal Commander...',
    image: 'https://i.ibb.co/gb6H9kgd/selling3.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'Nova Compo Plus',
    image: 'https://i.ibb.co/7dwxVDfq/selling4.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'B&E Etch-37',
    image: 'https://i.ibb.co/2YpB12Kz/selling5.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },


   {
    title: 'Penora 200',
    image: 'https://i.ibb.co/nsfm8xgd/4de2c5b7-3921-48c0-8683-f1a166734214.jpg',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'Walden Tesla Air Rotor',
    image: 'https://i.ibb.co/Wvr7BDR9/selling2.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'Endo Excellence canal Commander...',
    image: 'https://i.ibb.co/gb6H9kgd/selling3.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'Nova Compo Plus',
    image: 'https://i.ibb.co/7dwxVDfq/selling4.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'B&E Etch-37',
    image: 'https://i.ibb.co/2YpB12Kz/selling5.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },


   {
    title: 'Penora 200',
    image: 'https://i.ibb.co/nsfm8xgd/4de2c5b7-3921-48c0-8683-f1a166734214.jpg',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'Walden Tesla Air Rotor',
    image: 'https://i.ibb.co/Wvr7BDR9/selling2.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'Endo Excellence canal Commander...',
    image: 'https://i.ibb.co/gb6H9kgd/selling3.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'Nova Compo Plus',
    image: 'https://i.ibb.co/7dwxVDfq/selling4.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'B&E Etch-37',
    image: 'https://i.ibb.co/2YpB12Kz/selling5.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },


   {
    title: 'Penora 200',
    image: 'https://i.ibb.co/nsfm8xgd/4de2c5b7-3921-48c0-8683-f1a166734214.jpg',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'Walden Tesla Air Rotor',
    image: 'https://i.ibb.co/Wvr7BDR9/selling2.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'Endo Excellence canal Commander...',
    image: 'https://i.ibb.co/gb6H9kgd/selling3.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'Nova Compo Plus',
    image: 'https://i.ibb.co/7dwxVDfq/selling4.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    title: 'B&E Etch-37',
    image: 'https://i.ibb.co/2YpB12Kz/selling5.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
]



 return (
    <div className="mx-auto container text-white py-10 px-4">
      <BreadCrumb title={`Home`} name={`Product`} />
      <SectionHeading title="All Products" showButton={false} />

      {/* Filter and products */}
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen gap-6">
        {/* Filter Section */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="space-y-6">
            {/* Price Filter */}
<div className="p-4  rounded-md w-full max-w-xs">
  <h3 className="text-white text-sm font-semibold mb-3">Price Filter</h3>
  
  {/* Min - Max Inputs */}
  <div className="flex items-center gap-2 mb-4">
    <input
      type="number"
      placeholder="Min"
      className="w-full p-2  rounded border border-gray-400 bg-transparent text-white placeholder:text-gray-400 outline-none"
    />
    <span className="text-white">–</span>
    <input
      type="number"
      placeholder="Max"
      className="w-full py-2 px-2 rounded border border-gray-400 bg-transparent text-white placeholder:text-gray-400 outline-none"
    />
    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white border border-gray-300">
      ▶
    </button>
  </div>

  {/* Horizontal line */}
  <hr className="border-gray-500 opacity-30" />
</div>


            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Category</h3>
              <ul className="space-y-2">
                {['Endodontics', 'Surgical Instrument', 'Orthodontics', 'Impression materials'].map((category) => (
                  <li key={category} className="flex justify-between items-center">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-500 bg-[#2b2d32] border border-[#136BFB]" />
                      <span>{category}</span>
                    </label>
                    <span className="text-[#6C757D] bg-[#B4D0FE] rounded-sm px-1 text-sm">10214</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Procedure Type Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Procedure Type</h3>
              <ul className="space-y-2">
                {['Filling', 'Root Canal', 'Crown/Bridge', 'Extraction'].map((procedure) => (
                  <li key={procedure}>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>{procedure}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brand Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Brand</h3>
              <ul className="space-y-2">
                {['Panora', 'Walden', 'Dentsply', '3M'].map((brand) => (
                  <li key={brand}>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>{brand}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Availability</h3>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-blue-500" defaultChecked />
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
            </div>

            {/* Reset Filters Button */}
            <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded-md mt-4">
              Reset Filters
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div className="col-span-3">
          {/* Product Cards Grid */}
          <div className="flex flex-wrap gap-4">
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
              <button className="px-4 py-2 bg-gray-700 rounded-md">Previous</button>
              <button className="px-4 py-2 bg-blue-500 rounded-md">1</button>
              <button className="px-4 py-2 bg-gray-700 rounded-md">2</button>
              <button className="px-4 py-2 bg-gray-700 rounded-md">3</button>
              <button className="px-4 py-2 bg-gray-700 rounded-md">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
