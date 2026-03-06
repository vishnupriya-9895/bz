"use client";
import { FiChevronUp, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import React, { useState } from "react";

const navItems = [
  { name: "Home" },
  { name: "About Us" },
  { name: "Services" },
  { name: "Success Stories" },
  { name: "Blogs" },
  { name: "Careers" },
  { name: "Contact Us" },
];

const languages = [
  { code: "en", label: "HI", flag: "/flag.jpeg" },
  { code: "hi", label: "AR", flag: "/flag2.jpeg" },
  { code: "ar", label: "EN", flag: "/flag3.jpeg" },
];

const Header = () => {
  const [openLang, setOpenLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50">
      <div className="w-full h-[80px] flex items-center justify-between px-2">
        
        {/* Logo */}
        <img
          className="w-[150px] h-auto"
          src="https://bzanalytics.ai/assets/bz/bq.png"
          alt="logo"
        />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex ml-7 items-center gap-2 text-[15px] font-bold">
          <span className="text-white text-[13px]">•</span>

          {navItems.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <span className="cursor-pointer hover:text-orange-500 text-white transition">
                {item.name}
              </span>

              {/* Language dropdown beside Contact Us */}
              {item.name === "Contact Us" && (
                <div className="relative ml-2">
                  <button
                    onClick={() => setOpenLang(!openLang)}
                    className="flex items-center gap-2 text-white"
                  >
                    <img
                      src={selectedLang.flag}
                      className="w-6 h-6 rounded-full object-cover"
                      alt="flag"
                    />
                    {selectedLang.label}
                    {openLang ? (
                      <FiChevronUp size={18} />
                    ) : (
                      <FiChevronDown size={18} />
                    )}
                  </button>

                  {openLang && (
                    <div className="absolute right-0 mt-3 bg-black border border-gray-700 rounded-md shadow-lg w-[120px] z-50">
                      {languages.map((lang) => (
                        <div
                          key={lang.code}
                          onClick={() => {
                            setSelectedLang(lang);
                            setOpenLang(false);
                          }}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 cursor-pointer text-white"
                        >
                          <img
                            src={lang.flag}
                            className="w-5 h-5 rounded-full object-cover"
                            alt={lang.label}
                          />
                          {lang.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {index !== navItems.length - 1 && (
                <span className="text-white text-[13px]">•</span>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Desktop Button */}
        <button className="hidden lg:block relative overflow-hidden group border border-white text-white font-bold px-13 py-5 hover:bg-white transition">

  <span className="absolute top-1/2 left-1/2 w-[400%] h-[400%] bg-white 
  -translate-x-1/2 -translate-y-1/2 rotate-45 
  scale-0 group-hover:scale-100 
  transition-transform duration-300 ease-out"></span>

  <span className="relative z-10 text-white group-hover:text-orange-500 transition-colors duration-300">
    Schedule a consultation
  </span>

</button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="lg:hidden bg-black px-6 py-6 space-y-4">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="text-white border-b border-gray-700 pb-3 cursor-pointer hover:text-orange-500"
            >
              {item.name}
            </div>
          ))}

          <button className="w-full mt-5 border border-white text-white font-bold px-5 py-2 hover:bg-white hover:text-black transition">
            Schedule a consultation
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;