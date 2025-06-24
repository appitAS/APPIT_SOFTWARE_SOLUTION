"use client";

import Image from "next/image";

const ContactUs = () => {
  return (
<div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] p-6 max-w-5xl mx-auto">
      {/* Heading */}
      <h2 className="text-center text-black text-xl sm:text-2xl font-semibold mb-0 leading-tight">
        Hiring an individual or assembling <br />
        an entire team, we have got you covered
      </h2>

      {/* Content Row: Image + Form */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT SIDE – Illustration */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-[380px] h-[380px] sm:w-[420px] sm:h-[420px]">
            <Image
              src="/images/contact-us.png"
              alt="Contact Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* RIGHT SIDE – Form */}
        <div className="w-full lg:w-1/2">
          <div className="w-full max-w-[560px] flex flex-col items-center gap-4">
                {/* Name Field */}
                <div className="w-full h-14 px-6 flex items-center gap-4 rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full text-xs font-jost font-normal leading-[120%] focus:outline-none placeholder:text-black placeholder:font-jost placeholder:text-xs placeholder:font-normal placeholder:leading-[120%]"
                  />
                </div>

                {/* Mobile and Email Fields */}
                <div className="w-full flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2 h-14 px-6 flex items-center gap-2 rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                    
                    <input
                      type="text"
                      placeholder="Enter Your Mobile Number"
                      className="w-full text-xs font-jost font-normal leading-[120%] focus:outline-none placeholder:text-black placeholder:font-jost placeholder:text-xs placeholder:font-normal placeholder:leading-[120%] placeholder:w-[137px] placeholder:flex-shrink-0"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 h-14 px-6 flex items-center gap-2 rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                    <input
                      type="email"
                      placeholder="Business Email"
                      className="w-full text-xs font-jost font-normal leading-[120%] focus:outline-none placeholder:text-black placeholder:font-jost placeholder:text-xs placeholder:font-normal placeholder:leading-[120%]"
                    />
                  </div>
                </div>

                {/* Level of Experience Field */}
                <div className="w-full h-14 px-6 flex items-center gap-4 rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                  <input
                    type="text"
                    placeholder="Level of experience do you need ?"
                    className="w-full text-xs font-jost font-normal leading-[120%] focus:outline-none placeholder:text-black placeholder:font-jost placeholder:text-xs placeholder:font-normal placeholder:leading-[120%]"
                  />
                </div>

                {/* Monthly budget Field */}
                <div className="w-full h-14 px-6 flex items-center gap-4 rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                  <input
                    type="text"
                    placeholder="Your monthly budget for this role ?"
                    className="w-full text-xs font-jost font-normal leading-[120%] focus:outline-none placeholder:text-black placeholder:font-jost placeholder:text-xs placeholder:font-normal placeholder:leading-[120%]"
                  />
                </div>

                {/* Submit Button */}
                <button className="w-full h-14 px-6 mt-4 flex justify-center items-center gap-4 rounded-[16px] bg-gradient-to-r from-[#002C4D] to-[#0066B3] shadow-[2px_4px_4px_2px_rgba(0,0,0,0.25)_inset] text-white font-jost font-semibold text-base leading-[120%]">
                  SUBMIT
                </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
