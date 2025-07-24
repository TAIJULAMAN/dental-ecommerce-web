import React from "react";
import BreadCrumb from "../../../../components/shared/BreadCrumb";
import SectionHeading from "../../../../components/shared/SectionHeading";
import CategoryCard from "../../../../components/shared/CategoryCard";

const AllCategory = () => {
  const categories = [
    {
      id: "12341234",
      title: "Endodontics",
      image:
        "https://i.ibb.co/p62JL0kw/0b031cc6c6dbb3cccbd3c06d62f0e40859ba08c2.png",
    },
    {
      id: "1234123234",
      title: "Surgical Instruments",
      image: "https://i.ibb.co/QF38khXz/Category-1.jpg",
    },
    {
      id: "1234123123",
      title: "Impression Materials",
      image: "https://i.ibb.co/WWn8pCtd/Category-2.jpg",
    },
    {
      id: "2345123423",
      title: "Infection Control &....",
      image: "https://i.ibb.co/Gv8SChtR/Category-3.jpg",
    },
    {
      id: "234512678",
      title: "Orthodontics",
      image: "https://i.ibb.co/HDvXq17R/Category-4.jpg",
    },

    {
      title: "Endodontics",
      image:
        "https://i.ibb.co/p62JL0kw/0b031cc6c6dbb3cccbd3c06d62f0e40859ba08c2.png",
    },
    {
      title: "Surgical Instruments",
      image: "https://i.ibb.co/QF38khXz/Category-1.jpg",
    },
    {
      title: "Impression Materials",
      image: "https://i.ibb.co/WWn8pCtd/Category-2.jpg",
    },
    {
      title: "Infection Control &....",
      image: "https://i.ibb.co/Gv8SChtR/Category-3.jpg",
    },
    {
      title: "Orthodontics",
      image: "https://i.ibb.co/HDvXq17R/Category-4.jpg",
    },

    {
      title: "Endodontics",
      image:
        "https://i.ibb.co/p62JL0kw/0b031cc6c6dbb3cccbd3c06d62f0e40859ba08c2.png",
    },
    {
      title: "Surgical Instruments",
      image: "https://i.ibb.co/QF38khXz/Category-1.jpg",
    },
    {
      title: "Impression Materials",
      image: "https://i.ibb.co/WWn8pCtd/Category-2.jpg",
    },
    {
      title: "Infection Control &....",
      image: "https://i.ibb.co/Gv8SChtR/Category-3.jpg",
    },
    {
      title: "Orthodontics",
      image: "https://i.ibb.co/HDvXq17R/Category-4.jpg",
    },

    {
      title: "Endodontics",
      image:
        "https://i.ibb.co/p62JL0kw/0b031cc6c6dbb3cccbd3c06d62f0e40859ba08c2.png",
    },
    {
      title: "Surgical Instruments",
      image: "https://i.ibb.co/QF38khXz/Category-1.jpg",
    },
    {
      title: "Impression Materials",
      image: "https://i.ibb.co/WWn8pCtd/Category-2.jpg",
    },
    {
      title: "Infection Control &....",
      image: "https://i.ibb.co/Gv8SChtR/Category-3.jpg",
    },
    {
      title: "Orthodontics",
      image: "https://i.ibb.co/HDvXq17R/Category-4.jpg",
    },
  ];

  return (
    <div>
      <div className="mx-auto container text-white py-10 px-0">
        <BreadCrumb name="Home" title="Category" />

        <SectionHeading
          title="All Category"
          showButton={false}
        ></SectionHeading>

        {/* cards */}
        <div className="flex gap-5 flex-wrap justify-center">
          {categories.map((category, idx) => (
            <CategoryCard
              key={idx}
              title={category.title}
              image={category.image}
              link="/product-details"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategory;
