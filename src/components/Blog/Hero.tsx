
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative h-[50vh] md:h-[60vh]">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://bzanalytics.ai/assets/images/backgrounds/page-header-bg-1-1.jpg')",
          }}
        />

        {/* Overlay (LIGHT + DARK AUTO SWITCH) */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-white/70 via-white/30 to-white/80 to-transparent 
            dark:from-black/89 dark:via-black/50 dark:to-black/90
          "
        ></div>

        {/* Content */}
        <div
          className="
            relative z-10
            px-6 sm:px-10 md:px-20 lg:px-40
            pt-32 sm:pt-40 md:pt-52
            md:text-left
          "
        >
          <div className="mb-0 text-base sm:text-lg md:text-xl">
            <span>Home</span>
            <span className="mx-2">.</span>
            <span>Blogs</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Blogs
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
