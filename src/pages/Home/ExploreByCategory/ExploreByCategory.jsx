import React from 'react'
import SectionHeading from '../../../components/shared/SectionHeading'

const categories = [
  {
    title: 'Endodontics',
    image: 'https://i.ibb.co/p62JL0kw/0b031cc6c6dbb3cccbd3c06d62f0e40859ba08c2.png',
  },
  {
    title: 'Surgical Instruments',
    image: 'https://i.ibb.co/QF38khXz/Category-1.jpg',
  },
  {
    title: 'Impression Materials',
    image: 'https://i.ibb.co/WWn8pCtd/Category-2.jpg',
  },
  {
    title: 'Infection Control &....',
    image: 'https://i.ibb.co/Gv8SChtR/Category-3.jpg',
  },
  {
    title: 'Orthodontics',
    image: 'https://i.ibb.co/HDvXq17R/Category-4.jpg',
  },
]

const ExploreByCategory = () => {
  return (
    <div className='mb-10'>
      <SectionHeading />

      {/* cards */}
      <div className='flex gap-5 flex-wrap'>
        {categories.map((category, idx) => (
          <div
            key={idx}
            className='border-[#6F6F6F] border-[1.5px] rounded-md overflow-hidden'
          >
            <div className='overflow-hidden'>
              <img
                src={category.image}
                alt={category.title}
                className='w-[288px] h-[280px] object-cover'
              />
            </div>
            <div className='flex justify-between p-5 items-center cursor-pointer'>
              <p className='text-white text-xl'>{category.title}</p>
              <img
                src='https://i.ibb.co/YB8RfTwg/arrow-right.png'
                alt='arrow'
                className='hover:scale-105'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreByCategory
