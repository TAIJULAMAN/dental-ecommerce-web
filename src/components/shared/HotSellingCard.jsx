import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HotSellingCard = ({
  image,
  title,
  description,
  cardWidth = 288,

}) => {
  const navigate = useNavigate();

  // Set the current card values as local state (defaults)
  const [cardData, setCardData] = useState({
    title: title || 'Default Title',
    description: description || 'Default Description',
    image: image || 'https://via.placeholder.com/300',
  });

  const handleWishlistClick = () => {
    navigate("/favorite");
  };

  return (
    <div>
      {/* Image Section */}
      <div
        className="rounded-md overflow-hidden cursor-pointer"
      >
        <img
          src={cardData.image}
          alt={cardData.title}
          className="w-full h-[280px] object-cover"
        />
        {/* Heart Icon */}
        <div className="absolute z-10 top-2 right-2">
          <img
            src="https://i.ibb.co/rfxr1W8q/heart.png"
            alt="heart"
            className="cursor-pointer"
            onClick={handleWishlistClick}
          />
        </div>
      </div>

      {/* Text and Buttons */}
      <div className="flex flex-col gap-4 mt-4">
        <p className="text-[#FCFBF8] text-lg line-clamp-1">{cardData.title}</p>
        <p className="text-[#9F9C96] text-sm line-clamp-2">{cardData.description}</p>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 rounded-md text-[#136BFB] border border-[#136BFB] cursor-pointer"
            onClick={() => navigate(`/Product-details`)}
          >
            View Details
          </button>
          <button
            className="bg-[#136BFB] px-4 py-2 rounded-md text-white border border-[#136BFB] cursor-pointer"
            onClick={() => navigate(`/shopping-cart`)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotSellingCard;
