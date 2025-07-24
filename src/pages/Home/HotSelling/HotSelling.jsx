import React from 'react'
import SectionHeading from '../../../components/shared/SectionHeading'
import HotSellingCard from '../../../components/shared/HotSellingCard'
import { useNavigate } from 'react-router-dom'

const products = [
  {
    id: "12346789",
    title: 'Penora 200',
    image: 'https://i.ibb.co/nsfm8xgd/4de2c5b7-3921-48c0-8683-f1a166734214.jpg',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    id: "22346789",
    title: 'Walden Tesla Air Rotor',
    image: 'https://i.ibb.co/Wvr7BDR9/selling2.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    id: "32346789",
    title: 'Endo Excellence canal Commander...',
    image: 'https://i.ibb.co/gb6H9kgd/selling3.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    id: "42346789",
    title: 'Nova Compo Plus',
    image: 'https://i.ibb.co/7dwxVDfq/selling4.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
  {
    id: "52346789",
    title: 'B&E Etch-37',
    image: 'https://i.ibb.co/2YpB12Kz/selling5.png',
    description: 'High-speed titanium handpiece with quattro spray, ergonomic grip',
  },
]


const HotSelling = () => {
  const navigate = useNavigate();
  return (
    <div className='pb-10'>
      <SectionHeading
        title='Hot Selling'
        buttonText='View All'
        onButtonClick={() => {
          navigate("hot-selling")
        }}
      />

      {/* cards */}
      <div className='flex gap-5 flex-wrap justify-center'>
        {products.map((product, idx) => (
<HotSellingCard
  key={idx}
  id={product.id}
  image={product.image}
  title={product.title}
  description={product.description}
  onAddToCart={() => alert(`Added to Cart: ${product.title}`)}
  onWishlistClick={() => alert(`Wishlisted: ${product.title}`)}
/>

        ))}
      </div>



    </div>
  )
}

export default HotSelling
