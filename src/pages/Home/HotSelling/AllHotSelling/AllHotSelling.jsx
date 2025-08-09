import React from 'react';
import BreadCrumb from "../../../../components/shared/BreadCrumb";
import SectionHeading from "../../../../components/shared/SectionHeading";
import HotSellingCard from '../../../../components/shared/HotSellingCard';

const AllHotSelling = () => {



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
    <div className="mx-auto container text-white py-10 px-5 md:px-0">



      <div className="container mx-auto flex justify-start items-center pl-5">
        <BreadCrumb name="Home" title="Hot Selling" />
      </div>

      <SectionHeading title="Hot Selling" showButton={false} />

      {/* Category Cards */}
      {/* cards */}
      <div className='flex gap-5 flex-wrap justify-center space-y-8'>
        {products.map((product, idx) => (
          <HotSellingCard
            key={idx}
            image={product.image}
            title={product.title}
            description={product.description}
            onViewDetails={() => alert(`View: ${product.title}`)}
            onAddToCart={() => alert(`Added to Cart: ${product.title}`)}
            onWishlistClick={() => alert(`Wishlisted: ${product.title}`)}
          />
        ))}
      </div>



    </div>
  );
};

export default AllHotSelling;