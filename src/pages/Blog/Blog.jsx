import React from 'react'
import SectionHeading from '../../components/shared/SectionHeading'
import { MdOutlineDateRange } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
  const posts = [
    {
      title: 'Dental Checkup Guide',
      description:
        'Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.',
      date: '20/05/2025',
      image: 'https://i.ibb.co/Nd7JQ7rz/new-dental-1.png',
    },
    {
      title: 'Chairside Journal',
      description:
        'Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.',
      date: '12/06/2025',
      image: 'https://i.ibb.co/DDKx27ZW/new-dental-2.png',
    },
    {
      title: 'Smarter Smiles',
      description:
        'Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.',
      date: '01/07/2025',
      image: 'https://i.ibb.co/twvSkjgB/new-dental-3.png',
    },
    {
      title: 'The Operatory Edit',
      description:
        'Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.',
      date: '15/07/2025',
      image: 'https://i.ibb.co/rfRtSpS6/new-dental-4.png',
    },
    {
      title: 'Dental Checkup Guide',
      description:
        'Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.',
      date: '20/05/2025',
      image: 'https://i.ibb.co/Nd7JQ7rz/new-dental-1.png',
    },
    {
      title: 'Chairside Journal',
      description:
        'Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.',
      date: '12/06/2025',
      image: 'https://i.ibb.co/DDKx27ZW/new-dental-2.png',
    },
    {
      title: 'Smarter Smiles',
      description:
        'Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.',
      date: '01/07/2025',
      image: 'https://i.ibb.co/twvSkjgB/new-dental-3.png',
    },
    {
      title: 'The Operatory Edit',
      description:
        'Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.',
      date: '15/07/2025',
      image: 'https://i.ibb.co/rfRtSpS6/new-dental-4.png',
    },
    {
      title: 'Dental Checkup Guide',
      description:
        'Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.',
      date: '20/05/2025',
      image: 'https://i.ibb.co/Nd7JQ7rz/new-dental-1.png',
    },
    {
      title: 'Chairside Journal',
      description:
        'Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.',
      date: '12/06/2025',
      image: 'https://i.ibb.co/DDKx27ZW/new-dental-2.png',
    },
    {
      title: 'Smarter Smiles',
      description:
        'Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.',
      date: '01/07/2025',
      image: 'https://i.ibb.co/twvSkjgB/new-dental-3.png',
    },
    {
      title: 'The Operatory Edit',
      description:
        'Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.',
      date: '15/07/2025',
      image: 'https://i.ibb.co/rfRtSpS6/new-dental-4.png',
    },
  ]

  const navigate = useNavigate();


  return (
    <div className='container text-white mx-auto'>
      <SectionHeading showButton={false}  title='Insights & Innovations in Dental Care' />

      {/* cards */}
      <div className='flex gap-5 flex-wrap space-y-5'>
        {posts.map((post, idx) => (
          <div
            key={idx}
            className='border-[#6F6F6F] border-[1.5px] bg-[#1c1c1c] rounded-md overflow-hidden max-w-[365px] cursor-pointer'
            onClick={()=>{
              navigate(`/blog/details/1234`);
            }}
          >
            <div className='overflow-hidden'>
              <img
                src={post.image}
                alt={post.title}
                className='w-full h-[240px] object-cover '
              />
            </div>

            {/* content */}
            <div className='p-5 flex flex-col gap-2'>
              <p className='text-white text-xl font-semibold cursor-pointer'>
                {post.title}
              </p>
              <p className='text-[#9F9C96] text-sm'>{post.description}</p>
              <div className='text-[#9F9C96] text-sm mt-2 flex items-center gap-2'>
                <MdOutlineDateRange className='text-[#9F9C96] text-lg' /> 
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>


      
    </div>
  )
}

export default Blog
