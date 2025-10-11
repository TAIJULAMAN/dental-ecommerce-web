import React from 'react'
import SectionHeading from '../../../components/shared/SectionHeading'
import { useNavigate } from 'react-router-dom'
import CategoryCard from '../../../components/shared/CategoryCard'
import { useFetchAllCategoriesQuery } from '../../../redux/features/category/CategoriesApi'
import { getBaseUrl } from '../../../utils/getBaseUrl'


const ExploreByCategory = () => {
  const navigate = useNavigate();
   const { data: categories } = useFetchAllCategoriesQuery({});


  return (
    <div className='mb-10'>
      <SectionHeading onButtonClick={() => {
        navigate("/all-category")
      }} />

      {/* cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5 container mx-auto px-5 md:px-0'>
        {categories?.map((category, idx) => (
          <CategoryCard
            key={idx}
             title={category?.name}
              image={`${getBaseUrl()}${category?.imageUrl}`}
            link="/product"
          />
        ))}
      </div>



    </div>
  )
}

export default ExploreByCategory
