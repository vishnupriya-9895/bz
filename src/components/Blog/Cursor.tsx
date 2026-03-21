"use client";
import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setDotPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <div
        className="fixed top-0 left-0 w-6 h-6 border border-orange-400/60 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        }}
      />

      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-orange-400 rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate(${dotPosition.x - 3}px, ${dotPosition.y - 3}px)`,
        }}
      />
    </>
  );
};

export default Cursor;