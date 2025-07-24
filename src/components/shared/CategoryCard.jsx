import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ image, title, link, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      navigate(link);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="border-[#6F6F6F] border-[1.5px] rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-[288px] h-[280px] object-cover"
        />
      </div>
      <div className="flex justify-between p-5 items-center">
        <p className="text-white text-xl">{title}</p>
        <img
          src="https://i.ibb.co/YB8RfTwg/arrow-right.png"
          alt="arrow"
          className="hover:scale-105"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
