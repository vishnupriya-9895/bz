"use client";

import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

// ✅ Plus Jakarta Sans (ExtraLight source)
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "500"], // ExtraLight + Medium
  style: ["italic", "normal"],
});

const Button = () => {
  return (
    <div
      className={`flex flex-wrap gap-4 mt-8 sm:mt-10 justify-center md:justify-start ${plusJakarta.className}`}
    >
      {/* BUTTON */}
      <button className="bg-black text-white border-[1.6px] border-[rgb(17,142,195)] rounded-[10px]
      text-[18px] font-medium tracking-[0.5px]
      px-[11px] py-[11px] h-[58.95px]
      transition-all duration-300 hover:bg-[#18e4cd] hover:text-black">
        All
      </button>

      <button className="bg-black text-white border-[1.6px] border-[rgb(17,142,195)] rounded-[10px]
      text-[18px] font-medium tracking-[0.5px]
      px-[11px] py-[11px] h-[58.95px]
      transition-all duration-300 hover:bg-[#18e4cd] hover:text-black">
        Editor's Pick
      </button>

      <button className="bg-black text-white border-[1.6px] border-[rgb(17,142,195)] rounded-[10px]
      text-[18px] font-medium tracking-[0.5px]
      px-[11px] py-[11px] h-[58.95px]
      transition-all duration-300 hover:bg-[#18e4cd] hover:text-black">
        Technology & Business
      </button>

      <button className="bg-black text-white border-[1.6px] border-[rgb(17,142,195)] rounded-[10px]
      text-[18px] font-medium tracking-[0.5px]
      px-[11px] py-[11px] h-[58.95px]
      transition-all duration-300 hover:bg-[#18e4cd] hover:text-black">
        Artificial Intelligence
      </button>
    </div>
  );
};

export default Button;