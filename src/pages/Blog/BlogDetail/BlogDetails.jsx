import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import BreadCrumb from "../../../components/shared/BreadCrumb";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogData = [
    {
      id: id,
      title: "The Dental Dispatch",
      description:
        "Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.Relaxing dental appointment might sound like an oxymoron. But when dental sedation is involved it proves true. Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.Relaxing dental appointment might sound like an oxymoron. But when dental sedation is involved it proves true. Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.Relaxing dental appointment might sound like an oxymoron. But when dental sedation is involved it proves true.",
      date: "20/05/2025",
      image: "https://i.ibb.co/Nd7JQ7rz/new-dental-1.png",
      content: [
        'Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.Relaxing dental appointment" might sound like an oxymoron. But when dental sedation is involved it proves true. Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.Relaxing dental appointment" might sound like an oxymoron. But when dental sedation is involved it proves true. Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.Relaxing dental appointment" might sound like an oxymoron. But when dental sedation is involved it proves true.',
      ],
    },
  ];

  // Find the blog with matching ID
  const blog = blogData.find((blog) => blog.id === id);

  if (!blog) {
    return <div className="text-white text-center py-10">Blog not found</div>;
  }

  return (
    <div className="mx-auto container text-white py-10 px-4">

        <div>
            <BreadCrumb name={`Blog`} title={`Details`}  ></BreadCrumb>
        </div>
      {/* Image */}
      <div className="relative  rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group mb-6">
        <div className="relative h-[20rem] md:h-[25rem] overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
         
        </div>
      </div>

      {/* Title & Meta */}
      <div className="flex justify-between items-center my-10">
        <h2 className="text-3xl font-semibold mb-3">{blog.title} </h2>
        <div className="text-[#9F9C96] text-sm mt-2 flex items-center gap-2">
          <MdOutlineDateRange className="text-[#9F9C96] text-lg" />
          <span>{blog.date}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#CFCFCF] mb-6">{blog.description}</p>

      {/* Content */}
      <div className="text-[#CCCCCC] flex flex-col gap-4 leading-relaxed mb-10">
        {blog.content.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>

      {/* Go Back Button */}
      <div className="text-center">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md text-white font-bold cursor-pointer"
        >
          Go Back to Blog
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
