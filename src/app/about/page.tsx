"use client";

import Image from "next/image";
import { FaUsers } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section>
        <div className="container mx-auto px-4 py-12">
          {/* Skeleton for title */}
          <div className="h-8 bg-gray-300 rounded mb-5 w-1/2 mx-auto"></div>

          {/* Skeleton for image and text */}
          <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-[40%]">
              <div className="w-full justify-center items-start flex">
                <div className="aspect-square h-[280px] bg-gray-300 rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%]"></div>
              </div>
            </div>
            <div className="md:w-[60%]">
              <div className="h-6 bg-gray-300 rounded mb-4 w-full"></div>
              <div className="h-6 bg-gray-300 rounded mb-4 w-full"></div>
            </div>
          </div>

          {/* Skeleton for Our Mission */}
          <div className="mb-12">
            <div className="h-8 bg-gray-300 rounded mb-10 w-1/3 mx-auto"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Repeat skeleton cards */}
              <div>
                <div className="h-full bg-gray-300 rounded-xl p-6"></div>
              </div>
              <div>
                <div className="h-full bg-gray-300 rounded-xl p-6"></div>
              </div>
              <div>
                <div className="h-full bg-gray-300 rounded-xl p-6"></div>
              </div>
            </div>
          </div>

          {/* Skeleton for Our Approach */}
          <div className="mt-16">
            <div className="h-8 bg-gray-300 rounded mb-10 w-1/3 mx-auto"></div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="h-6 bg-gray-300 rounded mb-4 w-full"></div>
                <div className="h-6 bg-gray-300 rounded mb-4 w-full"></div>
              </div>
              <div className="md:w-1/2">
                <div className="h-40 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container mx-auto px-4 py-12">
        <h1 className="uppercase font-bold text-2xl !text-center lg:text-start md:text-3xl lg:text-4xl pb-5 pt-10 lg:pr-5 w-full">
          About Polymath
        </h1>

        <div className="mb-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-[40%]">
            <div className="w-full justify-center items-start flex">
              <div className="aspect-square h-[280px] md:h-[500px] lg:h-[400px] rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%] overflow-hidden">
                <Image
                  className="rounded-xl object-cover h-full"
                  src={"/team.avif"}
                  height={1000}
                  width={1000}
                  alt="about Us image"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-[60%]">
            <p className="text-lg mb-4">
              Welcome to Polymath, a platform dedicated to exploring and
              connecting diverse fields of knowledge. Founded in 2024, we strive
              to provide our readers with high-quality content that bridges gaps
              between different disciplines, fostering a truly polymathic
              approach to learning and understanding.
            </p>
            <p className="text-lg mb-4">
              Our team of passionate writers and experts from various fields
              work tirelessly to bring you insightful articles, in-depth
              analyses, and thought-provoking discussions that challenge
              conventional thinking and inspire interdisciplinary exploration.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Mission
          </h2>
          <div className="grid grid-rows-[200px_200px_200px] lg:grid-rows-[200px] lg:grid-cols-3 gap-4">
            <div>
              <div className="h-full grid grid-rows-[40%_auto] md:grid-rows-1 md:grid-cols-[30%_auto] bg-gray-100 rounded-xl overflow-hidden">
                <div className="bg-theme p-4 flex md:flex-col gap-4 items-center justify-center">
                  <FiBookOpen className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Educate</h3>
                </div>
                <div className="px-3 content-center">
                  <p className="text-sm md:text-base">
                    Provide accessible and comprehensive information across a
                    wide range of subjects, encouraging a multidisciplinary
                    approach to learning.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="h-full grid grid-rows-[40%_auto] md:grid-rows-1 md:grid-cols-[30%_auto] bg-gray-100 rounded-xl overflow-hidden">
                <div className="bg-theme p-4 flex md:flex-col gap-4 items-center justify-center">
                  <FaUsers className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Connect</h3>
                </div>
                <div className="px-3 content-center">
                  <p className="text-sm md:text-base">
                    Foster a community of curious minds and lifelong learners,
                    facilitating discussions that transcend traditional subject
                    boundaries.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="h-full grid grid-rows-[40%_auto] md:grid-rows-1 md:grid-cols-[30%_auto] bg-gray-100 rounded-xl overflow-hidden">
                <div className="bg-theme p-4 flex md:flex-col gap-4 items-center justify-center">
                  <IoMailOutline className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Inspire</h3>
                </div>
                <div className="px-3 content-center">
                  <p className="text-sm md:text-base">
                    Motivate our readers to explore new ideas, make unexpected
                    connections, and develop a truly polymathic perspective on
                    the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Our Approach
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                At Polymath, we believe that the most innovative ideas often
                emerge at the intersection of different disciplines. Our content
                is carefully curated to highlight these connections, encouraging
                readers to think critically and creatively across various fields
                of study.
              </p>
              <p className="text-lg mb-4">
                Whether you're a student, professional, or simply a curious
                individual, Polymath offers a unique platform for expanding your
                knowledge and challenging your perspectives. Join us on this
                exciting journey of intellectual exploration and discovery!
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/idea.jpg"
                alt="Polymath approach illustration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
