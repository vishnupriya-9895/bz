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
  const [openLangDesktop, setOpenLangDesktop] = useState(false);
  const [openLangMobileTop, setOpenLangMobileTop] = useState(false);
  const [openLangMobileMenu, setOpenLangMobileMenu] = useState(false);

  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50">
      <div className="w-full h-[70px] sm:h-[80px] flex items-center justify-between px-2 sm:px-3">

        {/* Logo */}
        <img
          className="w-[110px] sm:w-[130px] xl:w-[150px] h-auto"
          src="https://bzanalytics.ai/assets/bz/bq.png"
          alt="logo"
        />

        {/* Desktop Navigation */}
        <ul className="hidden min-[1000px]:flex ml-3 xl:ml-7 items-center gap-1 xl:gap-2 text-[13px] xl:text-[15px] font-bold">
          <span className="text-white text-[12px]">•</span>

          {navItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2 xl:gap-4">
              <span className="cursor-pointer hover:text-orange-500 text-white transition whitespace-nowrap">
                {item.name}
              </span>

              {/* Desktop Language */}
              {item.name === "Contact Us" && (
                <div className="relative ml-2">
                  <button
                    onClick={() => setOpenLangDesktop(!openLangDesktop)}
                    className="flex items-center gap-2 text-white"
                  >
                    <img
                      src={selectedLang.flag}
                      className="w-5 h-5 rounded-full"
                      alt="flag"
                    />
                    {selectedLang.label}
                    {openLangDesktop ? <FiChevronUp /> : <FiChevronDown />}
                  </button>

                  {openLangDesktop && (
                    <div className="absolute right-0 mt-3 bg-black border border-gray-700 rounded-md w-[120px]">
                      {languages.map((lang) => (
                        <div
                          key={lang.code}
                          onClick={() => {
                            setSelectedLang(lang);
                            setOpenLangDesktop(false);
                          }}
                          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800 cursor-pointer text-white"
                        >
                          <img
                            src={lang.flag}
                            className="w-5 h-5 rounded-full"
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
                <span className="text-white text-[12px]">•</span>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* ✅ Mobile Top Language */}
          <div className="min-[1000px]:hidden relative">
            <button
              onClick={() => setOpenLangMobileTop(!openLangMobileTop)}
              className="flex items-center gap-1 text-white text-[12px] border border-gray-600 px-2 py-1"
            >
              <img
                src={selectedLang.flag}
                className="w-4 h-4 rounded-full"
                alt="flag"
              />
              {selectedLang.label}
              {openLangMobileTop ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
            </button>

            {openLangMobileTop && (
              <div className="absolute right-0 mt-2 bg-black border border-gray-700 rounded-md w-[100px] z-50">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang);
                      setOpenLangMobileTop(false);
                    }}
                    className="flex items-center gap-2 px-2 py-2 hover:bg-gray-800 cursor-pointer text-white text-[12px]"
                  >
                    <img
                      src={lang.flag}
                      className="w-4 h-4 rounded-full"
                      alt={lang.label}
                    />
                    {lang.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Button */}
          <button className="hidden min-[1000px]:block relative overflow-hidden group border border-white text-white font-bold px-4 xl:px-10 py-2 xl:py-4 hover:bg-white transition text-[13px] xl:text-[15px]">

            <span
              className="absolute top-1/2 left-1/2 w-[400%] h-[400%] bg-white 
              -translate-x-1/2 -translate-y-1/2 rotate-45 
              scale-0 group-hover:scale-100 
              transition-transform duration-300 ease-out"
            ></span>

            <span className="relative z-10 text-white group-hover:text-orange-500 transition-colors duration-300">
              Schedule a consultation
            </span>

          </button>
          {/* Mobile Menu Button */}
          <button
            className="min-[1000px]:hidden text-white p-1"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>

        </div>
      </div>

  
      {openMenu && (
        <div className="min-[1000px]:hidden bg-black px-4 py-5 space-y-3">

          {navItems.map((item, index) => (
            <div
              key={index}
              className="text-white text-[14px] border-b border-gray-700 pb-2 cursor-pointer hover:text-orange-500"
            >
              {item.name}
            </div>
          ))}

       
          <div className="pt-3">
            <button
              onClick={() => setOpenLangMobileMenu(!openLangMobileMenu)}
              className="flex items-center justify-between w-full text-white border border-gray-700 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src={selectedLang.flag}
                  className="w-5 h-5 rounded-full"
                  alt="flag"
                />
                {selectedLang.label}
              </div>
              {openLangMobileMenu ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {openLangMobileMenu && (
              <div className="mt-2 border border-gray-700 rounded-md">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang);
                      setOpenLangMobileMenu(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800 cursor-pointer text-white text-[14px]"
                  >
                    <img
                      src={lang.flag}
                      className="w-5 h-5 rounded-full"
                      alt={lang.label}
                    />
                    {lang.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="w-full mt-4 border border-white text-white font-bold px-4 py-2 text-[14px] hover:bg-white hover:text-black transition">
            Schedule a consultation
          </button>

        </div>
      )}
    </header>
  );
};

export default Header;