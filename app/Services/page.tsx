import React from 'react'

const page = () => {
  return (
    <>
    {/* hero */}
           <div className="relative h-[50vh] md:h-[60vh]">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://bzanalytics.ai/assets/images/backgrounds/page-header-bg-1-1.jpg')",
    }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>

  {/* Content */}
  <div
    className="relative z-10 text-white 
    px-6 sm:px-10 md:px-20 lg:px-40 
    pt-24 sm:pt-32 md:pt-40
    text-center md:text-left"
  >
    <div className="mb-4 text-base sm:text-lg md:text-xl">
      <span>Home</span>
      <span className="mx-2">.</span>
      <span>Services</span>
    </div>

    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
      Services
    </h1>
  </div>
</div>
{/* second */}

<div className="bg-black text-white  px-6   text-center">
  
  <div className="text-orange-500 text-2xl mb-4">
    •
  </div>

 
  <p className="uppercase tracking-wider text-sm sm:text-base mb-4">
    What We Are Offering
  </p>


  <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
    Services We’re Providing <br />
    To Our Customers
  </h1>

</div>
{/* card */}

<div className="bg-black py-20 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">

    {[1,2,3,4].map((item, index) => (
      <div
        key={index}
        className="bg-[#101010] text-[#eaeaea] 
        w-[270px] 
        px-10 pt-8 pb-8 
        text-center 
        border border-transparent 
        hover:border-white"
      >

        {/* Icon */}
        <img
          src="https://bzanalytics.ai/assets/images/service/serviceicons/ai-iconwhite.svg"
          alt="AI Development"
          className="mx-auto mb-6 w-16 h-16"
        />

        {/* Heading */}
        <h3 className="text-xl font-semibold mb-4">
          AI Development
        </h3>

        {/* Paragraph */}
        <p className="text-sm leading-7 mb-6">
          By developing AI, we provide businesses with cutting-edge solutions 
          that utilize the power of sophisticated algorithms and machine learning 
          to boost productivity, improve efficiency, and open up new opportunities.
        </p>

        {/* Small Grey HR */}
        <hr className="border-gray-600 my-6" />

        {/* Read More */}
        <p className="text-sm font-medium cursor-pointer mb-40">
          Read More
        </p>

      </div>
    ))}

  </div>
</div>
{/* grid-2 */}

<div className="bg-black text-white py-20 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Left Side */}
    <div>

      {/* Orange Dot + Small Title */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-orange-500 text-2xl">•</span>
        <p className="uppercase tracking-wider text-sm">
          Why Choose Us
        </p>
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl font-extrabold mb-8">
        Providing the Best Services
      </h2>

      {/* Points */}
      <div className="space-y-8">

        {/* Item 1 */}
        <div className="flex gap-4">
          <div className="flex items-start justify-center w-8 h-8 border border-white rounded-full text-sm mt-1">
            ✓
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Innovative Approach
            </h3>
            <p className="text-gray-400 leading-7">
              Our company stands out for its innovative thinking, offering fresh 
              perspectives and creative solutions to meet your unique needs.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex gap-4">
          <div className="flex items-start justify-center w-8 h-8 border border-white rounded-full text-sm mt-1">
            ✓
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Proven Track Record
            </h3>
            <p className="text-gray-400 leading-7">
              With a successful track record of delivering high-quality projects, 
              we have earned the trust of numerous satisfied clients.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex gap-4">
          <div className="flex items-start justify-center w-8 h-8 border border-white rounded-full text-sm mt-1">
            ✓
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Expert Team
            </h3>
            <p className="text-gray-400 leading-7">
              Our team of seasoned professionals brings a wealth of expertise 
              and experience to ensure your project's success.
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* Right Side Image */}
   <div className="flex justify-center lg:justify-end">
  <img
    src="https://bzanalytics.ai/assets/images/resources/why-choose-1-2.png"
    alt="Why Choose Us"
    className="w-[495px] h-[457px] object-cover rounded-4xl"
  />
</div>
  </div>
</div>
{/*  */}
<div>
  services page for
</div>
    </>
  )
}

export default page