"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { blogs } from "../../libs/data";
import Link from "next/link";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const heroBlogs = blogs.slice(0, 3);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <section className="pt-4">
      <div className="container">
        <div className="grid grid-row-2 lg:grid-cols-[30%_auto] gap-3 h-[500px] max-h-[500px]">
          <div className="flex flex-col gap-3 h-full">
            {loading ? (
              <>
                <div className="h-full lg:h-1/2 rounded-xl overflow-hidden relative bg-gray-300 animate-pulse"></div>
                <div className="h-full lg:h-1/2 rounded-xl overflow-hidden relative bg-gray-300 animate-pulse"></div>
              </>
            ) : (
              heroBlogs.slice(0, 2).map((blog, index) => (
                <div key={index} className="h-full lg:h-1/2 rounded-xl overflow-hidden relative">
                  <Image
                    src={blog.mainImage}
                    alt={blog.title}
                    width={1000}
                    height={1000}
                    className="h-full absolute inset-0 object-cover"
                  />
                  <div className="relative h-full text-white">
                    <div className="h-full flex flex-col justify-end gap-2 p-3">
                      <h4 className="text-white w-fit px-3 rounded-full bg-back/60">
                        {blog.category}
                      </h4>
                      <Link href={`/blog/${blog.id}`} className="text-xl uppercase line-clamp-3 text-ellipsis w-[80%] hover:underline transition-all duration-75">
                        {blog.title}
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="rounded-xl overflow-hidden relative">
            {loading ? (
              <div className="h-full rounded-xl overflow-hidden relative bg-gray-300 animate-pulse"></div>
            ) : (
              <>
                <Image
                  src={heroBlogs[2].mainImage}
                  alt={heroBlogs[2].title}
                  width={1000}
                  height={1000}
                  className="h-full absolute inset-0 object-cover"
                />
                <div className="relative h-full text-white">
                  <div className="h-full flex flex-col justify-end gap-2 p-3">
                    <h4 className="text-white w-fit px-3 rounded-full bg-back/60">
                      {heroBlogs[2].category}
                    </h4>
                    <Link href={`/blog/${heroBlogs[2].id}`} className="text-xl uppercase line-clamp-3 text-ellipsis w-[80%] lg:text-4xl lg:font-bold hover:underline transition-all duration-75">
                      {heroBlogs[2].title}
                    </Link>
                    <div className="hidden lg:flex gap-2 pt-5">
                      <button className="btn border !py-1 !text-white transition-all  ease-linear duration-100 hover:bg-text"><Link href={`/blog/${heroBlogs[2].id}`}>Read Article</Link></button>
                      <button className="btn !py-1 !text-white bg-gray-500 flex items-center gap-2">
                        <Image 
                          src={heroBlogs[2].authorImage}
                          alt=""
                          width={80}
                          height={80}
                          className="rounded-full h-[40px] w-[40px] object-cover"
                        />
                        By {heroBlogs[2].author}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
