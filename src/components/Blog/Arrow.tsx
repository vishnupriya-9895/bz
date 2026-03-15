"use client";
import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const Arrow = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(scrolled);
      setVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  if (!visible) return null;

  return (
    <div className="fixed right-3 bottom-22 z-50">
      <button
        onClick={scrollToTop}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-2xl dark:bg-black"
      >
        <svg className="absolute top-0 left-0 -rotate-90" width="64" height="64">
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="#e5e5e5"
            strokeWidth="3"
            fill="transparent"
          />
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="#f79d0f"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.2s linear" }}
          />
        </svg>

        <BsArrowUp className="text-[#f79d0f] text-2xl relative z-10" />
      </button>
    </div>
  );
};

export default Arrow;