"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setDarkMode(isDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-[300px] sm:h-[450px] md:h-[60vh] flex items-center overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://bzanalytics.ai/assets/images/backgrounds/page-header-bg-1-1.jpg')",
        }}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-b  from-black/90 via-black/50 to-black/100"
            : "bg-gradient-to-b from-white/70 via-white/40 to-white/80"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-20 lg:px-40 text-left">

        {/* Breadcrumb */}
        <div
          className={`flex items-center gap-1 text-sm sm:text-base md:text-lg ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <span className="cursor-pointer font-medium tracking-tight">
            Home
          </span>

          <span>·</span>

          <span className="cursor-pointer font-medium tracking-tight">
            Blogs
          </span>
        </div>

        {/* Heading */}
        <h1
          className={`mt-2 text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Blogs
        </h1>
      </div>
    </div>
  );
};

export default Hero;