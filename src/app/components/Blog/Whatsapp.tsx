import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/your-number" 
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 
        w-14 h-14 
        bg-black 
        rounded-full 
        flex items-center justify-center 
        shadow-lg 
        transition-colors duration-300
        z-50
      "
    >
      <FaWhatsapp className="text-white text-2xl hover:text-orange-500 transition-colors duration-300" />
    </a>
  );
};

export default Whatsapp;