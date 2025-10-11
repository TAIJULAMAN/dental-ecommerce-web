import React from "react";
import SectionHeading from "../../components/shared/SectionHeading";
import { MdOutlineDateRange } from "react-icons/md";
import BlogCard from "../../components/shared/BlogCard";
import { useFetchAllBlogsQuery } from "../../redux/features/blog/blogApi";
import { getBaseUrl } from "../../utils/getBaseUrl";
// import { useNavigate } from 'react-router-dom'

const Blog = () => {
  const posts = [
    {
      title: "Dental Checkup Guide",
      description:
        "Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.",
      date: "20/05/2025",
      image: "https://i.ibb.co/Nd7JQ7rz/new-dental-1.png",
    },
    {
      title: "Chairside Journal",
      description:
        "Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.",
      date: "12/06/2025",
      image: "https://i.ibb.co/DDKx27ZW/new-dental-2.png",
    },
    {
      title: "Smarter Smiles",
      description:
        "Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.",
      date: "01/07/2025",
      image: "https://i.ibb.co/twvSkjgB/new-dental-3.png",
    },
    {
      title: "The Operatory Edit",
      description:
        "Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.",
      date: "15/07/2025",
      image: "https://i.ibb.co/rfRtSpS6/new-dental-4.png",
    },
    {
      title: "Dental Checkup Guide",
      description:
        "Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.",
      date: "20/05/2025",
      image: "https://i.ibb.co/Nd7JQ7rz/new-dental-1.png",
    },
    {
      title: "Chairside Journal",
      description:
        "Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.",
      date: "12/06/2025",
      image: "https://i.ibb.co/DDKx27ZW/new-dental-2.png",
    },
    {
      title: "Smarter Smiles",
      description:
        "Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.",
      date: "01/07/2025",
      image: "https://i.ibb.co/twvSkjgB/new-dental-3.png",
    },
    {
      title: "The Operatory Edit",
      description:
        "Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.",
      date: "15/07/2025",
      image: "https://i.ibb.co/rfRtSpS6/new-dental-4.png",
    },
    {
      title: "Dental Checkup Guide",
      description:
        "Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.",
      date: "20/05/2025",
      image: "https://i.ibb.co/Nd7JQ7rz/new-dental-1.png",
    },
    {
      title: "Chairside Journal",
      description:
        "Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.",
      date: "12/06/2025",
      image: "https://i.ibb.co/DDKx27ZW/new-dental-2.png",
    },
    {
      title: "Smarter Smiles",
      description:
        "Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.",
      date: "01/07/2025",
      image: "https://i.ibb.co/twvSkjgB/new-dental-3.png",
    },
    {
      title: "The Operatory Edit",
      description:
        "Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.",
      date: "15/07/2025",
      image: "https://i.ibb.co/rfRtSpS6/new-dental-4.png",
    },
  ];

  // const navigate = useNavigate();
  const { data: blogs } = useFetchAllBlogsQuery({});
  console.log(blogs);

  return (
    <div className="container text-white mx-auto">
      <SectionHeading
        showButton={false}
        title="Insights & Innovations in Dental Care"
      />

      {/* cards */}
      <div className="flex gap-5 flex-wrap space-y-5 px-5 md:px-0">
        {blogs?.map((blog, idx) => (
          <BlogCard
            key={idx}
            image={`${getBaseUrl()}${blog.imageUrl?.[0]}`}
            id={blog?._id}
            title={blog?.title}
            description={blog?.description}
            date={new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            blogId={blog.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
