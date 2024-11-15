"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { RxAvatar } from "react-icons/rx";
import { blogs } from "../../libs/data";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Blog = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading delay
  }, []);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (loading) {
    return (
      <section className="py-10">
        <div className="container">
          <div className="h-10 bg-gray-300 rounded w-1/2 mb-10"></div>
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[60%_auto] gap-5">
            <div className="h-60 bg-gray-300 rounded"></div>
            <div className="lg:pr-5">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="mb-5 grid grid-cols-[70%_auto] items-center pt-5 relative">
                  <div className="space-y-2">
                    <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                  </div>
                  <div className="h-20 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const latestBlog = blogs[blogs.length - 1];

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-4xl md:text-6xl font-bold pb-10">
          Our latest blog
        </h2>
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[60%_auto] gap-5">
          <div className="">
            <div className="overflow-hidden rounded-xl ">
              <Image
                src={latestBlog.mainImage}
                alt="Blog"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-4">
                <button className="text-sm !text-gray-400 btn border w-fit">
                  {latestBlog.category}
                </button>
                <p className="text-sm text-text">{latestBlog.date}</p>
              </div>
              <Link href={`/blog/${latestBlog.id}`} className="text-2xl font-semibold">
                {latestBlog.title}
              </Link>
              <div className="text-sm">
                {latestBlog.mainContent.paragraph.text.substring(0, 200)}...
              </div>
              <div className="flex flex-col min-[350px]:flex-row items-start min-[350px]:items-center gap-4">
                <button>
                  <Link href={`/blog/${latestBlog.id}`} className="mt-3 btn border border-black flex items-center gap-2 hover:underline transition-all duration-75">
                    Read Article
                    <FaArrowRightLong />
                  </Link>
                </button>
                <div className="flex gap-2 items-center mt-3">
                  <Image
                    src={latestBlog.authorImage}
                    alt=""
                    width={500}
                    height={500}
                    className="rounded-full h-[30px] w-[30px] object-cover"
                  />
                  {latestBlog.author}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:pr-5">
            {blogs.slice(-5).map((blog, index) => (
              <>
                <div
                  key={index}
                  className="mb-5 grid grid-cols-[70%_auto] items-center pt-5 relative"
                >
                  <Link href={`/blog/${blog.id}`} className="absolute inset-0"/>
                  <div className="space-y-2">
                    <div className="flex gap-4 items-center">
                      <div className="text-sm !text-gray-400 btn border w-fit">
                        {blog.category}
                      </div>
                      <div className="text-sm flex gap-2 items-center">
                        <RxAvatar />
                        {blog.author}
                      </div>
                    </div>
                    <Link href={`/blog/${blog.id}`} className="text-lg font-semibold hover:underline transition-all duration-75 relative">
                      {blog.title}
                    </Link>
                  </div>
                  <div>
                    <div className="overflow-hidden rounded-xl flex items-end">
                      <Image
                        src={blog.mainImage}
                        alt=""
                        width={200}
                        height={200}
                        className="h-20 object-cover"
                      />
                    </div>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
