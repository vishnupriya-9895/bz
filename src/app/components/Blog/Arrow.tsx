import React, { useState, useEffect } from "react";
import { BiUpArrowAlt } from "react-icons/bi";

const Arrow = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        bottom: "88px",
        right: "18px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease", // smooth fade-in/fade-out
        zIndex: 99,
        position: "fixed",
        backgroundColor: "black",
      }}
      className={`flex items-center justify-center text-orange-500 text-2xl 
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <BiUpArrowAlt />
    </button>
  );
};

export default Arrow;