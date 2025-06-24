import Image from 'next/image'
import React from 'react'

const FormWithImage = () => {
  return (
     <div className="my-10 px-4 ">
        <div
          className={`capitalize text-center font-semibold font-jost text-[40px] leading-[120%] text-[#252525]`}
        >
          Discover Generative AI Applications for Your Business
        </div>

        <div className="flex flex-col lg:flex-row justify-center p-6 items-center gap-6 w-full mt-10  max-w-[1240px] mx-auto rounded-[32px] bg-white shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)]">
          {/* Form Container */}
          <div>
            <Image
              src="/images/mosImage9.png"
              alt="Contact Us"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div
            className={`w-full  flex flex-col items-center gap-6  transition-all duration-1000 ease-out ${
              true
                ? "opacity-100 translate-x-0 "
                : "opacity-0 -translate-x-20 shadow-none"
            }`}
          >
            {/* Name Input Field */}
            <div className="flex h-12 px-6 items-center gap-4 self-stretch rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M5 21C5 21 3.5 21 3.5 19.5C3.5 18 5 13.5 12.5 13.5C20 13.5 21.5 18 21.5 19.5C21.5 21 20 21 20 21H5ZM12.5 12C13.6935 12 14.8381 11.5259 15.682 10.682C16.5259 9.83807 17 8.69347 17 7.5C17 6.30653 16.5259 5.16193 15.682 4.31802C14.8381 3.47411 13.6935 3 12.5 3C11.3065 3 10.1619 3.47411 9.31802 4.31802C8.47411 5.16193 8 6.30653 8 7.5C8 8.69347 8.47411 9.83807 9.31802 10.682C10.1619 11.5259 11.3065 12 12.5 12Z"
                  fill="black"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full text-black font-jost text-xs font-normal leading-[120%] bg-transparent outline-none placeholder-black"
              />
            </div>

            {/* Mobile Number and Email ID Fields (on same line) */}
            <div className="flex flex-col sm:flex-row w-full gap-4">
              {/* Mobile Number Input Field */}
              <div className="flex h-12 px-6 items-center gap-2 rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M20.9375 9.23438C21.0406 9.23438 21.125 9.15 21.125 9.04688V7.64062C21.125 7.5375 21.0406 7.45312 20.9375 7.45312H17.0938V3.5625C17.0938 3.45937 17.0094 3.375 16.9062 3.375H15.4062C15.3031 3.375 15.2188 3.45937 15.2188 3.5625V7.45312H9.875V3.5625C9.875 3.45937 9.79063 3.375 9.6875 3.375H8.1875C8.08437 3.375 8 3.45937 8 3.5625V7.45312H4.0625C3.95937 7.45312 3.875 7.5375 3.875 7.64062V9.04688C3.875 9.15 3.95937 9.23438 4.0625 9.23438H8V14.7656H4.0625C3.95937 14.7656 3.875 14.85 3.875 14.9531V16.3594C3.875 16.4625 3.95937 16.5469 4.0625 16.5469H8V20.4375C8 20.5406 8.08437 20.625 8.1875 20.625H9.6875C9.79063 20.625 9.875 20.5406 9.875 20.4375V16.5469H15.2188V20.4375C15.2188 20.5406 15.3031 20.625 15.4062 20.625H16.9062C17.0094 20.625 17.0938 20.5406 17.0938 20.4375V16.5469H20.9375C21.0406 16.5469 21.125 16.4625 21.125 16.3594V14.9531C21.125 14.85 21.0406 14.7656 20.9375 14.7656H17.0938V9.23438H20.9375ZM15.2188 14.7656H9.875V9.23438H15.2188V14.7656Z"
                    fill="black"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Enter Your Mobile Number"
                  className="w-full text-black font-jost text-xs font-normal leading-[120%] bg-transparent outline-none placeholder-black"
                />
              </div>

              {/* Email ID Input Field */}
              <div className="flex h-12 px-6 items-center gap-2 rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M20.375 3.75H4.625C3.92904 3.75074 3.26179 4.02755 2.76967 4.51967C2.27755 5.01179 2.00074 5.67904 2 6.375V17.625C2.00074 18.321 2.27755 18.9882 2.76967 19.4803C3.26179 19.9725 3.92904 20.2493 4.625 20.25H20.375C21.071 20.2493 21.7382 19.9725 22.2303 19.4803C22.7225 18.9882 22.9993 18.321 23 17.625V6.375C22.9993 5.67904 22.7225 5.01179 22.2303 4.51967C21.7382 4.02755 21.071 3.75074 20.375 3.75ZM19.7103 8.09203L12.9603 13.342C12.8287 13.4444 12.6667 13.4999 12.5 13.4999C12.3333 13.4999 12.1713 13.4444 12.0397 13.342L5.28969 8.09203C5.21038 8.03214 5.14377 7.95709 5.09372 7.87123C5.04367 7.78537 5.01118 7.69042 4.99815 7.5919C4.98511 7.49338 4.99179 7.39325 5.01778 7.29733C5.04378 7.20142 5.08858 7.11162 5.14958 7.03316C5.21058 6.95471 5.28656 6.88916 5.37312 6.84032C5.45967 6.79149 5.55506 6.76034 5.65376 6.74869C5.75245 6.73704 5.85248 6.74513 5.94802 6.77247C6.04357 6.79981 6.13272 6.84587 6.21031 6.90797L12.5 11.7998L18.7897 6.90797C18.947 6.7892 19.1447 6.73711 19.34 6.76296C19.5354 6.78881 19.7128 6.89053 19.8338 7.04612C19.9547 7.20171 20.0096 7.39866 19.9865 7.59439C19.9634 7.79011 19.8642 7.96888 19.7103 8.09203Z"
                    fill="black"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Enter Your Mail ID"
                  className="w-full text-black font-jost text-xs font-normal leading-[120%] bg-transparent outline-none placeholder-black"
                />
              </div>
            </div>

            {/* Company Name Input Field */}
            <div className="flex h-12 px-6 items-center gap-4 self-stretch rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M21.5 19H23.5V21H1.5V19H3.5V4C3.5 3.73478 3.60536 3.48043 3.79289 3.29289C3.98043 3.10536 4.23478 3 4.5 3H14.5C14.7652 3 15.0196 3.10536 15.2071 3.29289C15.3946 3.48043 15.5 3.73478 15.5 4V19H17.5V9H20.5C20.7652 9 21.0196 9.10536 21.2071 9.29289C21.3946 9.48043 21.5 9.73478 21.5 10V19ZM7.5 11V13H11.5V11H7.5ZM7.5 7V9H11.5V7H7.5Z"
                  fill="black"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter Your Company Name"
                className="w-full text-black font-jost text-xs font-normal leading-[120%] bg-transparent outline-none placeholder-black"
              />
            </div>

            {/* Message Input Field */}
            <div className="flex h-12 px-6 justify-center items-center gap-4 self-stretch rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M18.5 3C19.5609 3 20.5783 3.42143 21.3284 4.17157C22.0786 4.92172 22.5 5.93913 22.5 7V15C22.5 16.0609 22.0786 17.0783 21.3284 17.8284C20.5783 18.5786 19.5609 19 18.5 19H13.776L9.014 21.857C8.87059 21.9431 8.70788 21.9918 8.54077 21.9987C8.37366 22.0056 8.20749 21.9705 8.05746 21.8966C7.90743 21.8227 7.77833 21.7123 7.68199 21.5756C7.58565 21.4389 7.52514 21.2802 7.506 21.114L7.5 21V19H6.5C5.47376 19 4.48677 18.6056 3.74319 17.8983C2.9996 17.191 2.55631 16.225 2.505 15.2L2.5 15V7C2.5 5.93913 2.92143 4.92172 3.67157 4.17157C4.42172 3.42143 5.43913 3 6.5 3H18.5ZM14.5 12H8.5C8.23478 12 7.98043 12.1054 7.79289 12.2929C7.60536 12.4804 7.5 12.7348 7.5 13C7.5 13.2652 7.60536 13.5196 7.79289 13.7071C7.98043 13.8946 8.23478 14 8.5 14H14.5C14.7652 14 15.0196 13.8946 15.2071 13.7071C15.3946 13.5196 15.5 13.2652 15.5 13C15.5 12.7348 15.3946 12.4804 15.2071 12.2929C15.0196 12.1054 14.7652 12 14.5 12ZM16.5 8H8.5C8.23478 8 7.98043 8.10536 7.79289 8.29289C7.60536 8.48043 7.5 8.73478 7.5 9C7.5 9.26522 7.60536 9.51957 7.79289 9.70711C7.98043 9.89464 8.23478 10 8.5 10H16.5C16.7652 10 17.0196 9.89464 17.2071 9.70711C17.3946 9.51957 17.5 9.26522 17.5 9C17.5 8.73478 17.3946 8.48043 17.2071 8.29289C17.0196 8.10536 16.7652 8 16.5 8Z"
                  fill="black"
                />
              </svg>
              <input
                type="text"
                placeholder="Your Message................."
                className="flex-1 text-black font-jost text-xs font-normal leading-[120%] bg-transparent outline-none placeholder-black"
              />
            </div>

            {/* Submit Button */}
            <button className="flex w-full h-12 px-6 justify-center items-center gap-4 rounded-[16px] bg-gradient-to-r from-[#002C4D] to-[#0066B3] shadow-[2px_4px_4px_2px_rgba(0,0,0,0.25)_inset]">
              <span className="text-white text-center font-jost text-sm sm:text-base font-semibold leading-[120%]">
                SUBMIT
              </span>
            </button>
          </div>
        </div>
      </div>
  )
}

export default FormWithImage