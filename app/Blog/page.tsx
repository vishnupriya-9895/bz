"use client";
import React, { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const Page = () => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      {/* heading  */}

     <div className="relative h-[50vh] md:h-[60vh]">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://bzanalytics.ai/assets/images/backgrounds/page-header-bg-1-1.jpg')",
    }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>

  {/* Content */}
  <div
    className="relative z-10 text-white 
    px-6 sm:px-10 md:px-20 lg:px-40 
    pt-24 sm:pt-32 md:pt-40
    text-center md:text-left"
  >
    <div className="mb-4 text-base sm:text-lg md:text-xl">
      <span>Home</span>
      <span className="mx-2">.</span>
      <span>Blogs</span>
    </div>

    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
      Blogs
    </h1>
  </div>
</div>

      {/* second- */}
      <div
        className="bg-black text-white 
                      py-12 sm:py-16 md:py-20 
                      px-6 sm:px-10 md:px-20 lg:px-40 
                      "
      >
        <h2 className="text-2xl text-center  sm:text-3xl md:text-4xl font-bold mb-6">
          Welcome to Bz Analytics Blogs
        </h2>

        <p className="text-gray-400 max-w-3xl text-center mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-12">
          Welcome to BzAnalytics blogs, where we share in-depth articles, case
          studies, and insights on data analytics, business intelligence, and
          industry trends. Our blog is designed to help you stay informed and
          enhance your knowledge with expert advice and analysis.
        </p>

        {/*  slider*/}
        <div className="bg-black py-24 flex flex-col items-center">
          <div className="relative w-full max-w-[1520px] h-[650px] overflow-hidden">
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {/* ===== SLIDE 1 ===== */}
              <div className="min-w-full h-full relative flex items-end">
                {/* Image */}
                <img
                  src="https://bzanalytics.ai/assets/images/blog/rag-l.jpg"
                  className="absolute inset-0 w-full h-[550px] object-cover rounded-2xl"
                  alt=""
                />

                {/* White Card */}
                <div
                  className={`relative mb-6 ml-10 
  w-[633px] h-[370px] bg-white 
  px-8 py-10
  rounded-2xl 
  shadow-2xl border border-gray-200
  ${plusJakarta.className}`}
                >
                  <h1 className="flex items-center text-sm font-semibold text-blue-800 mb-4">
                    <span className="text-4xl mr-2 leading-none -mt-1">•</span>
                    <span>Technology & Business</span>
                  </h1>

                  <h1 className="text-4xl  text-black leading-snug  mb-5 font-semibold">
                    Bridging the Gap: How RAG <br />
                    (Retrieval Augmented <br /> Generation) is Transforming{" "}
                    <br />
                    Generative AI
                  </h1>

                  {/* Meta */}
                  <span className="text-black font-bold text-sm ">
                    April 15, 2024{" "}
                    <span className="text-black ml-6"> • 10 min read</span>
                  </span>
                </div>
              </div>

              {/* ===== SLIDE 2 ===== */}
              <div className="min-w-full h-full relative flex items-end">
                <img
                  src="https://bzanalytics.ai/assets/images/blog/fashion-l.jpg"
                  className="absolute inset-0 w-full h-[550px] object-cover rounded-2xl"
                  alt=""
                />

                {/* White Card */}
                <div
                  className={`relative mb-6 ml-10 
  w-[633px] h-[370px] bg-white 
  px-8 py-10
  rounded-2xl 
  shadow-2xl border border-gray-200
  ${plusJakarta.className}`}
                >
                  <h1 className="flex items-center text-sm font-semibold text-blue-800 mb-4">
                    <span className="text-4xl mr-2 leading-none -mt-1">•</span>
                    <span>Technology & Business</span>
                  </h1>

                  <h1 className="text-4xl  text-black leading-snug  mb-5 font-semibold">
                    Unlocking the Future of <br />
                    Fashion:The Power Of Virtual <br /> Try-On and Digital
                    Innovation
                  </h1>

                  {/* Meta */}
                  <span className="text-black font-bold text-sm ">
                    April 14, 2024{" "}
                    <span className="text-black ml-6"> • 12 min read</span>
                  </span>
                </div>
              </div>

              {/* ===== SLIDE 3 ===== */}
              <div className="min-w-full h-full relative flex items-end">
                <img
                  src="https://bzanalytics.ai/assets/images/blog/Blog_L11.jpg"
                  className="absolute inset-0 w-full h-[550px] object-cover rounded-2xl"
                  alt=""
                />

                {/* White Card */}
                <div
                  className={`relative mb-6 ml-10 
  w-[633px] h-[370px] bg-white 
  px-8 py-10
  rounded-2xl 
  shadow-2xl border border-gray-200
  ${plusJakarta.className}`}
                >
                  <h1 className="flex items-center text-sm font-semibold text-blue-800 mb-4">
                    <span className="text-4xl mr-2 leading-none -mt-1">•</span>
                    <span>Technology & Business</span>
                  </h1>

                  <h1 className="text-4xl  text-black leading-snug  mb-5 font-semibold">
                    Application Of Machine <br />
                    Learning In The Fashion
                    <br /> Industry
                  </h1>

                  {/* Meta */}
                  <span className="text-black font-bold text-sm ">
                    october 20, 2023{" "}
                    <span className="text-black ml-6"> • 8 min read</span>
                  </span>
                </div>
              </div>

              {/* ===== SLIDE 4 ===== */}
              <div className="min-w-full h-full relative flex items-end">
                <img
                  src="https://bzanalytics.ai/assets/images/blog/Blog_L10.jpg"
                  className="absolute inset-0 w-full h-[550px] object-cover rounded-2xl"
                  alt=""
                />

                {/* White Card */}
                <div
                  className={`relative mb-6 ml-10 
  w-[633px] h-[200px] bg-white 
  px-8 py-10
  rounded-2xl 
  shadow-2xl border border-gray-200
  ${plusJakarta.className}`}
                >
                  <h1 className="flex items-center text-sm font-semibold text-blue-800 mb-4">
                    <span className="text-4xl mr-2 leading-none -mt-1">•</span>
                    <span>Technology & Business</span>
                  </h1>

                  <h1 className="text-4xl  text-black leading-snug  mb-5 font-semibold">
                    AI In Ecommerce
                  </h1>

                  {/* Meta */}
                  <span className="text-black font-bold text-sm ">
                    Juky 8, 2024{" "}
                    <span className="text-black ml-10"> • 10 min read</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== DOTS OUTSIDE ===== */}
          <div className="flex justify-center  space-x-3">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === i ? "bg-yellow-400 scale-125" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/*categories  */}
        <div className="text-white ">
          <h1 className="text-5xl">Categories</h1>
          <div className="flex flex-wrap gap-4 mt-8 sm:mt-10 justify-center md:justify-start">
            <button className="px-5 py-3 text-sm sm:text-base bg-black text-white border-[1.6px] border-[rgb(17,142,195)] rounded-xl transition-all duration-300 hover:bg-[#18e4cd] hover:text-black">
              All
            </button>

            <button className="px-5 py-3 text-sm sm:text-base bg-black text-white border-[1.6px] border-[rgb(17,142,195)] rounded-xl transition-all duration-300 hover:bg-[#18e4cd] hover:text-black">
              Editor's Pick
            </button>

            <button className="px-5 py-3 text-sm sm:text-base bg-black text-white border-[1.6px] border-[rgb(17,142,195)] rounded-xl transition-all duration-300 hover:bg-[#18e4cd] hover:text-black">
              Technology & Business
            </button>

            <button className="px-5 py-3 text-sm sm:text-base bg-black text-white border-[1.6px] border-[rgb(17,142,195)] rounded-xl transition-all duration-300 hover:bg-[#18e4cd] hover:text-black">
              Artificial Intelligence
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 place-items-center">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
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
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                <img
                  src="https://bzanalytics.ai/assets/images/blog/rag-l.jpg"
                  className="w-full h-[160px] sm:h-[180px] object-cover rounded-[10px]"
                  alt=""
                />

                <div className="flex items-center text-blue-800">
                  <span className="text-xl sm:text-2xl mr-2 -translate-y-1">
                    •
                  </span>
                  <span>Technology & Business</span>
                </div>

                <p className="text-gray-700">
                  Bridging the gap between AI and real-world data using
                  Retrieval Augmented Generation.
                </p>

                <span className="text-black text-xs sm:text-sm">
                  Apr 14 • 2024
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
