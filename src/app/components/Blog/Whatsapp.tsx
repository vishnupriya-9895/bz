import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-4 right-3 z-50">

      {/* main button */}
      <div className="relative flex h-16 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-black/20 bg-white shadow-xl transition-transform hover:scale-105 dark:border-white/20 dark:bg-black">

        {/* small white glow */}
        <span className="pointer-events-none absolute top-2 left-3 h-6 w-6 rounded-full bg-white/80 blur-md"></span>

        {/* edge highlight */}
        <span className="absolute inset-0 rounded-full border-r-4 border-b-2 border-white/70"></span>

        {/* inner circle */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gray-300 dark:bg-black">
          <FaWhatsapp className="text-3xl text-[#f79d0f]" />
        </div>

      </div>

    </div>
  );
};

export default Whatsapp;