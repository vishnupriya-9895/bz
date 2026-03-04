"use client";

import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full h-[550px] bg-[#111] text-[#EAEAEA] font-['Plus_Jakarta_Sans']">
      <div className="max-w-[1300px] mx-auto px-6 py-14">

   
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start">

          <div>

        
            <div className="text-center lg:text-left">
              <p className="text-[16px] font-medium tracking-[0.5px] leading-[30px]">
                Let’s start working together
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mt-3 hover:text-orange-400 cursor-pointer transition">
                hello@bzanalytics.ai
              </h2>
            </div>

          
            <hr className="my-10 border-gray-700 w-full" />

        
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              
              <div className="flex flex-col items-start gap-[10px] max-w-[354px]">
                <img
                  src="https://bzanalytics.ai/assets/bz/bq.png"
                  alt="BzAnalytics logo"
                  className="w-[250px] mb-20"
                />

                <div className="flex gap-[10px] mt-2">
                  {[FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram, FaYoutube]
                    .map((Icon, i) => (
                      <div
                        key={i}
                        className="w-15 h-15 bg-black rounded-full flex items-center justify-center hover:bg-orange-400 transition cursor-pointer"
                      >
                        <Icon size={16} />
                      </div>
                    ))}
                </div>
              </div>

              {/* Menu */}
              <div className="grid grid-cols-2 gap-6 text-[16px] font-medium tracking-[0.5px] leading-[30px]">
                <div className="space-y-[10px] text-gray-300">
                  <p className="hover:text-orange-400 cursor-pointer">Home</p>
                  <p className="hover:text-orange-400 cursor-pointer">About Us</p>
                  <p className="hover:text-orange-400 cursor-pointer">Services</p>
                  <p className="hover:text-orange-400 cursor-pointer">
                    Success Stories
                  </p>
                </div>

                <div className="space-y-[10px] text-gray-300">
                  <p className="hover:text-orange-400 cursor-pointer">Blogs</p>
                  <p className="hover:text-orange-400 cursor-pointer">Careers</p>
                  <p className="hover:text-orange-400 cursor-pointer">
                    Contact Us
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-[#0000004D] p-10 rounded-xl text-center space-y-[10px] w-full max-w-[300px]">

            <img
              src="https://bzanalytics.ai/assets/images/digital-marketing/dm-external/footer-logo-new.png"
              alt="subscribe"
              className="w-[150px] mx-auto"
            />

            <h3 className="text-[20px] font-semibold">
              Subscribe now
            </h3>

            <p className="text-gray-400">
              Empower Every Mind
            </p>

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-black border border-gray-700 px-4 py-3 outline-none focus:border-orange-400"
            />

            <button className="w-full bg-orange-400 py-3 font-medium hover:bg-white hover:text-orange-400 transition">
              Submit
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;