"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { blogs } from "../../libs/data"; // Import articles data
import Link from "next/link";

const Article = () => {
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
      <section className="m-4">
        <div className="container py-20 bg-theme rounded-xl">
          <div className="h-10 bg-gray-300 rounded w-1/2 mb-5"></div>
          <div className="flex justify-between flex-col md:flex-row gap-3 py-5">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-10 bg-gray-300 rounded w-1/4"></div>
          </div>
          <div className="blogs mt-5">
            <div className="flex gap-4 flex-col md:flex-row">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex-1 h-60 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="m-4">
      <div className="container py-20 bg-theme rounded-xl">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our most <br /> popular articles
        </h2>

        <div className="flex justify-between flex-col md:flex-row gap-3 py-5">
          <p>
            The Latest news, tips and advice to help you run your <br className="hidden md:block"/>{" "}
            business with less fuss
          </p>
          <button className="btn bg-back !text-white w-fit"><Link href={"/blog"}>Read All Article</Link></button>
        </div>

        <div className="blogs mt-5">
          <div className="flex gap-4 flex-col md:flex-row">
            {blogs.slice(-3).map((article, index) => (
              <div key={index} className="flex-1">
                <div className="h-full rounded-xl overflow-hidden relative aspect-square">
                  <Image
                    src={article.mainImage}
                    alt={article.title}
                    width={1000}
                    height={1000}
                    className="h-full absolute inset-0 object-cover"
                  />
                  <div className="relative h-full text-white">
                    <div className="h-full flex flex-col justify-end gap-2 p-3">
                      <h4 className="text-white w-fit px-3 rounded-full bg-back/60">
                        {article.author}
                      </h4>
                      <Link href={`/blog/${article.id}`} className="text-lg uppercase line-clamp-3 text-ellipsis w-[80%] hover:underline transition-all duration-75">
                        {article.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
