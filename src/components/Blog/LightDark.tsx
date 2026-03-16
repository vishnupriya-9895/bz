"use client";

import React, { useEffect, useState } from "react";

const LightDark = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
<button
  onClick={toggleTheme}
  className="
  fixed bottom-[15px] left-[15px] z-[1000]
  bg-black text-white
  text-[15px] font-extrabold
  px-[7px] py-[5px]
  border border-white
  overflow-hidden
  transition-all duration-500
  cursor-pointer
  group
  "
>
  
  {/* animation layer */}
  <span
    className="
    absolute left-1/2 top-1/2
    w-[150%] h-0
    bg-white
    -translate-x-1/2 -translate-y-1/2
    rotate-[-25deg]
    transition-all duration-300
    group-hover:h-[400%]
    -z-10
    "
  ></span>

  {/* text */}
  <span className="relative z-10 group-hover:text-orange-500 transition-colors duration-300">
    Light / Dark
  </span>

</button>
  );
};

export default LightDark;
