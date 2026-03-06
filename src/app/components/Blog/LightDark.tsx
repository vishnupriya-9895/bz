"use client";

import React, { useEffect, useState } from "react";

const LightDark = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

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
      className="cursor-pointer border border-white/30 px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-black dark:border-white/30 dark:hover:bg-white dark:hover:text-black"
    >
      <span>LIGHT</span>
      {" / "}
      <span>DARK</span>
    </button>
  );
};

export default LightDark;