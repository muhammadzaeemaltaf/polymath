"use client"

import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="skeleton animate-pulse p-6 flex flex-col lg:flex-row container px-10 gap-4 ">
        <div className="bg-gray-300 h-72 w-full mb-4 rounded-xl"></div>
        <div className="bg-gray-300 h-72 w-full mb-4 rounded-xl"></div>
      </div>
    );
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {/* Left Section */}
          <div className="lg:mb-0 mb-10">
            <div className="relative h-full">
              <Image
                src="/contact.png"
                alt="ContactUs tailwind section"
                height={1000}
                width={1000}
                className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-theme object-cover"
              />
              <h1 className="font-manrope text-white text-4xl font-bold absolute top-11 left-11">
                Contact us
              </h1>
              <div className="absolute bottom-0 w-full lg:p-11 p-5">
                <div className="bg-white rounded-lg p-6">
                  {/* Contact Information */}
                  <Link href="#" className="flex items-center mb-6">
                    <FiPhone className="h-6 w-6 text-theme" />
                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                      +008-176985656
                    </h5>
                  </Link>
                  <Link href="#" className="flex items-center mb-6">
                    <IoMailOutline className="h-6 w-6 text-theme" />
                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                      Support@polymath.com
                    </h5>
                  </Link>
                  <Link href="#" className="flex items-center">
                    <CiLocationOn className="h-6 w-6 text-theme" />
                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                      3554 Zindabahar, Haha, NIKE 10632, Monte Cristo
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-theme font-manrope text-4xl font-semibold mb-11">
              Send Us A Message
            </h2>
            {/* Form Inputs */}
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Email"
            />
            <input
              type="tel"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Phone"
            />
            <div className="mb-10">
              <h4 className="text-gray-500 text-lg font-normal mb-4">
                Preferred method of communication
              </h4>
              <div className="flex">
                <div className="flex items-center gap-1">
                  <input type="radio" name="communication" id="email" />
                  <label
                    className="flex items-center cursor-pointer mr-11"
                    htmlFor="email"
                  >
                    Email
                  </label>
                </div>

                <div className="flex items-center gap-1">
                  <input type="radio" name="communication" id="phone" />
                  <label
                    className="flex items-center cursor-pointer"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                </div>
              </div>
            </div>
            <textarea
              className="w-full h-24 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal rounded-lg border border-gray-200 focus:outline-none p-4 mb-10"
              placeholder="Message"
            ></textarea>
            <button className="w-full h-12 text-white text-base font-semibold rounded-full transition-all duration-700 hover:bg-indigo-200 bg-theme shadow-sm">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
