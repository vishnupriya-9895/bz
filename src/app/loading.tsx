"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 8000); 

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
      <img
        src="/load.png"
        alt="logo"
        className="w-40 animate-pulse"
      />
    </div>
  );
}