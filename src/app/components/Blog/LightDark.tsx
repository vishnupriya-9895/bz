"use client";

import React, { useEffect, useState } from "react";

const LightDark = () => {
  const [dark, setDark] = useState(false);

  // Load saved theme
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
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed bottom-4 left-4 z-50
        px-4 py-2 text-sm rounded-lg
        border
        transition-all duration-300

        bg-white text-black border-black
        dark:bg-black dark:text-white dark:border-white

        hover:bg-orange-500 hover:text-white
      "
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default LightDark;