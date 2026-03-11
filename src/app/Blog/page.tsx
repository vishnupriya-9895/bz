"use client";
import { Plus_Jakarta_Sans } from "next/font/google";


import Blogcard from "@/src/components/Blog/Blogcard";
import Whatsapp from "@/src/components/Blog/Whatsapp";
import LightDark from "@/src/components/Blog/LightDark";
import Arrow from "@/src/components/Blog/Arrow";
import Button from "@/src/components/Blog/Button";
import Hero from "@/src/components/Blog/Hero";
import Slider from "@/src/components/Blog/Slider";
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200"],
  style: ["normal", "italic"],
});

const Page = () => {
  return (
    <div className={plusJakarta.className}>
      <div className="fixed left-3 top-[90%] z-[9999]">
        <LightDark />
      </div>
      {/* heading  */}
      <Hero />
      {/* second */}
      <div
        className="
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
    
    max-w-[760px]
    mx-auto
    mb-[9px]
  "
        >
          Welcome to Bz Analytics Blogs
        </h2>

        <p
          className="
    text-center
   
    max-w-[760px]
    mx-auto
    text-[15px]
    font-medium
    leading-[28.125px]
    tracking-[0.5px]
    px-[20px]
    py-[25px]
    mt-[40px]
   
  "
        >
          Welcome to BzAnalytics blogs, where we share in-depth articles, case
          studies, and insights on data analytics, business intelligence, and
          industry trends. Our blog is designed to help you stay informed and
          enhance your knowledge with expert advice and analysis.
        </p>

        {/* slider */}
        <Slider />
        {/* categories */}
        <div className="">
          <h1
            className="
    text-[36px]
    font-semibold
    leading-[43.2px]
    tracking-[0.5px]
    
    mb-[8px]
    mt-[20px]
  "
          >
            Categories
          </h1>
          {/* 5 button */}
          <Button />
          {/* card */}
          <Blogcard />
        </div>
      </div>
      {/*  */}
      <Arrow />
      <Whatsapp />
      
    </div>
  );
};

export default Page;
