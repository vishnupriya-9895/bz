import React, { useState } from "react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const Slider = () => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div className="bg-black  flex flex-col items-center">
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
                  (Retrieval Augmented <br /> Generation) is Transforming <br />
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

        <div className="flex justify-center  space-x-3 mb-10">
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
    </>
  );
};

export default Slider;
