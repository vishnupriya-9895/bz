import React from 'react'

const Blogcard = () => {
  return (
    <div> <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 place-items-center">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="w-full max-w-[374px] 
          bg-[#f7f7f7] 
          rounded-[10px] 
          shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_6px_20px_rgba(0,0,0,0.19)]
          pt-[10px] px-[10px] pb-[20px]
          flex flex-col gap-[6px]
          text-[14px] sm:text-[16px] font-medium
          leading-[24px] sm:leading-[30px] tracking-[0.5px]
          transition-transform duration-300 ease-in
          hover:scale-105"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                <img
                  src="https://bzanalytics.ai/assets/images/blog/rag-l.jpg"
                  className="w-full h-[160px] sm:h-[180px] object-cover rounded-[10px]"
                  alt=""
                />

                <div className="flex items-center text-blue-800">
                  <span className="text-xl sm:text-2xl mr-2 -translate-y-1">
                    •
                  </span>
                  <span>Technology & Business</span>
                </div>

                <p className="text-gray-700">
                  Bridging the gap between AI and real-world data using
                  Retrieval Augmented Generation.
                </p>

                <span className="text-black text-xs sm:text-sm">
                  Apr 14 • 2024
                </span>
              </div>
            ))}
          </div></div>
  )
}

export default Blogcard