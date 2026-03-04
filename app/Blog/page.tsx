"use client";

import Slider from "./Slider"
import Button from "./Button";
import Blogcard from "./Blogcard";
import { Plus_Jakarta_Sans } from "next/font/google";


const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200"], // ExtraLight
  style: ["normal", "italic"],
});

const Page = () => {
  return (
    <div className={plusJakarta.className}>
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

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>

        {/* Content */}
        <div
          className="relative z-10 text-white 
          px-6 sm:px-10 md:px-20 lg:px-40 
          pt-24 sm:pt-32 md:pt-40
           md:text-left"
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

      {/* second */}
      <div
        className="bg-black text-white 
        py-12 sm:py-16 md:py-20 
        px-6 sm:px-10 md:px-20 lg:px-40"
      >
    <h2
  className="
    text-center
    text-[32px]
    font-extrabold
    leading-[38.4px]
    tracking-[0.5px]
    text-white
    max-w-[760px]
    mx-auto
    mb-[8px]
  "
>
  Welcome to Bz Analytics Blogs
</h2>

<p
  className="
    text-center
    text-[#EAEAEA]
    max-w-[760px]
    mx-auto
    text-[15px]
    font-medium
    leading-[28.125px]
    tracking-[0.5px]
    px-[20px]
    py-[20px]
    mt-[40px]
   
  "
>
  Welcome to BzAnalytics blogs, where we share in-depth articles,
  case studies, and insights on data analytics, business intelligence,
  and industry trends. Our blog is designed to help you stay informed
  and enhance your knowledge with expert advice and analysis.
</p>

        {/* slider */}
     
<Slider/>
        {/* categories */}
        <div className="text-white">
        <h1
  className="
    text-[36px]
    font-semibold
    leading-[43.2px]
    tracking-[0.5px]
    text-white
    mb-[8px]
    mt-[20px]
  "
>
  Categories
</h1>
          <Button />

          {/* card */}
          <Blogcard />
        </div>
      </div>
    </div>
  );
};

export default Page;