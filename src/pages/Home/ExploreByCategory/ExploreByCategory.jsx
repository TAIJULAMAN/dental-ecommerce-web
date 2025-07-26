import React from 'react'
import SectionHeading from '../../../components/shared/SectionHeading'
import { useNavigate } from 'react-router-dom'
import CategoryCard from '../../../components/shared/CategoryCard'

const categories = [
  {
    id: "345678",
    title: 'Endodontics',
    image: 'https://i.ibb.co/p62JL0kw/0b031cc6c6dbb3cccbd3c06d62f0e40859ba08c2.png',
  },
  {
    id: "345678",
    title: 'Surgical Instruments',
    image: 'https://i.ibb.co/QF38khXz/Category-1.jpg',
  },
  {
    id: "345678234",
    title: 'Impression Materials',
    image: 'https://i.ibb.co/WWn8pCtd/Category-2.jpg',
  },
  {
    id: "345678456",
    title: 'Infection Control &....',
    image: 'https://i.ibb.co/Gv8SChtR/Category-3.jpg',
  },
  {
    id: "345676788",
    title: 'Orthodontics',
    image: 'https://i.ibb.co/HDvXq17R/Category-4.jpg',
  },
]


const ExploreByCategory = () => {
  const navigate = useNavigate();

  return (
    <div className='mb-10'>
      <SectionHeading onButtonClick={() => {
        navigate("/all-category")
      }} />

      {/* cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5 container mx-auto px-5 md:px-0'>
        {categories.map((category, idx) => (
          <CategoryCard
            key={idx}
            title={category.title}
            image={category.image}
            link="/product"
          />
        ))}
      </div>



    </div>
  )
}

export default ExploreByCategory
