"use client";

import { useEffect, useState } from "react";

type Blog = {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

const Blogcard = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // fetch blogs
  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();

    // auto refresh every 2-3 seconds to show updated data
    const interval = setInterval(fetchBlogs, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 place-items-center">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="w-full max-w-[374px] 
              bg-[#f7f7f7] 
              rounded-[10px] 
              shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_6px_20px_rgba(0,0,0,0.19)]
              pt-[10px] px-[10px] pb-[20px]
              flex flex-col gap-[6px]
              text-[14px] sm:text-[16px] font-medium
              leading-[24px] sm:leading-[30px] tracking-[0.5px]
              transition-transform duration-300 ease-in
              hover:scale-105"
          >
            <img
              src={blog.image}
              className="w-full h-[160px] sm:h-[180px] object-cover rounded-[10px]"
              alt={blog.title}
            />

            <div className="flex items-center text-blue-800">
              <span className="text-xl sm:text-2xl mr-2 -translate-y-1">•</span>
              <span>{blog.category}</span>
            </div>

            <h6 className="text-black font-semibold text-[18px] leading-[22px] tracking-[0.5px]">
              {blog.title}
            </h6>

            <span className="text-black text-xs sm:text-sm">
              {blog.date} • {blog.readTime}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogcard;