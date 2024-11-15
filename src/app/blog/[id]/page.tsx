"use client";

import React, { useState, useEffect, useRef } from "react";
import { blogs } from "../../../../libs/data";
import Link from "next/link";
import Image from "next/image";
import {
  FaChevronLeft,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaThumbsUp,
  FaComment,
  FaShareAlt,
  FaHeart,
} from "react-icons/fa";
import { IoIosShareAlt, IoMdClose } from "react-icons/io";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import Newsletter from "@/components/Newsletter";
import { FiLink } from "react-icons/fi";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";

const BlogPost = ({ params }: { params: { id: string } }) => {
  const [loading, setLoading] = useState(true);
  const [showShareDropdown, setShowShareDropdown] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showComments, setShowComments] = useState(false); // New state for comments
  const [userComments, setUserComments] = useState<{ author: string; text: string }[]>([]);
  const shareRef = useRef<HTMLDivElement>(null);
  const commentsRef = useRef<HTMLDivElement>(null); // New ref for comments

  const randomComments = [
    // New random comments
    { author: "User1", text: "Great post!" },
    { author: "User2", text: "Very informative." },
    { author: "User3", text: "Thanks for sharing!" },
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading delay
  }, []);

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_${params.id}`);
    if (storedComments) {
      setUserComments(JSON.parse(storedComments));
    }
  }, [params.id]);

  const toggleShowComments = () => {
    setShowComments(!showComments); // Corrected to toggle showComments based on its own state
  };

  const toggleShareDropdown = () => {
    setShowShareDropdown(!showShareDropdown); // Corrected to toggle showShareDropdown based on its own state
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
      setShowShareDropdown(false);
    }
  };

  const handleClickOutsideComments = (event: MouseEvent) => {
    if (
      commentsRef.current &&
      !commentsRef.current.contains(event.target as Node)
    ) {
      setShowComments(false);
    }
  };

  useEffect(() => {
    if (showShareDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showShareDropdown]);

  useEffect(() => {
    if (showComments) {
      document.addEventListener("mousedown", handleClickOutsideComments);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideComments);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideComments);
    };
  }, [showComments]);

  const handleAddComment = (newComment: { author: string; text: string }) => {
    const updatedComments = [...userComments, newComment];
    setUserComments(updatedComments);
    localStorage.setItem(`comments_${params.id}`, JSON.stringify(updatedComments));
  };

  const blog = blogs.find((blog) => blog.id === params.id);

  if (loading) {
    return (
      <section className="pt-10 px-4">
        <div className="container !px-0">
          <div className="h-10 bg-gray-300 rounded w-1/4 mb-5"></div>
          <div className="text-text">
            <div className="lg:px-10">
              <div className="h-10 bg-gray-300 rounded w-3/4 mb-5"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2 mb-5"></div>
              <div className="h-60 bg-gray-300 rounded"></div>
            </div>
            <div className="max-w-4xl mx-auto pt-10">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="mb-5">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                  <div className="h-6 bg-gray-300 rounded w-full mb-3"></div>
                  <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                </div>
              ))}
              <div className="border-t-2 mt-4 pt-4">
                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
              </div>
              <div className="border-t-2 flex flex-col gap-4 md:flex-row justify-between items-center mt-4 pt-4">
                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                <div className="flex gap-4">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="h-10 w-10 bg-gray-300 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  const currentIndex = blogs.findIndex((blog) => blog.id === params.id);
  const prevPost = blogs[currentIndex - 1];
  const nextPost = blogs[currentIndex + 1];

  return (
    <section className="pt-10 px-4">
      <div className="container !px-0">
        <button className="btn w-fit !px-0 ml-6">
          <Link
            href={"/blog"}
            className="flex gap-4 items-center border border-black rounded-full px-2 py-1"
          >
            <FaChevronLeft /> Back to Blogs
          </Link>
        </button>

        <div className="text-text">
          <div className="lg:px-10">
            <div className="my-4">
              <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-black">
                {blog.title}
              </h1>
              <div className="text-text flex items-center gap-3 divide-x-2 mt-4">
                <p className="flex items-center gap-2 text-xs md:text-sm">
                  <Image
                    src={blog.authorImage}
                    alt=""
                    width={80}
                    height={80}
                    className="rounded-full h-[30px] w-[30px] object-cover"
                  />
                  {blog.author}
                </p>
                <p className="pl-3 text-xs md:text-sm">{blog.date}</p>
                <p className="pl-3 text-xs md:text-sm font-semibold">
                  {blog.category}
                </p>
              </div>
            </div>
            <div
              className="flex justify-center overflow-hidden"
              style={{ perspective: "800px" }}
            >
              <Image
                src={blog.mainImage}
                alt={blog.title}
                height={1000}
                width={1000}
                className="rounded-xl"
                style={{ transform: "rotateY(5deg)", transformOrigin: "left" }}
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto pt-10">
            <div>
              <h2 className="font-semibold text-3xl my-5 text-black">
                {blog.mainContent.paragraph.heaging}
              </h2>
              <p className="text-black">{blog.mainContent.paragraph.text}</p>
            </div>
            {blog.content.paragraphs.map((paragraph, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold my-5 text-black">
                  {paragraph.heading}
                </h3>
                <p>{paragraph.text}</p>
                {paragraph.points.map((point, idx) => (
                  <div key={idx} className="mt-3">
                    <p>
                      <span className="font-semibold text-black">
                        {point.pointTitle}:
                      </span>{" "}
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            ))}
            <div>
              <h3 className="text-4xl my-5 font-bold text-black">Conclusion</h3>
              <p>{blog.conclusion}</p>
            </div>
            <div className="border-t-2 mt-4 pt-4">
              <ul className="flex gap-2">
                {blog.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="text-white w-fit text-xs min-[350px]:text-sm px-3 py-1 rounded-full bg-back/60"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center mt-4 pt-4">
              <div className="flex gap-4">
                <FaThumbsUp className="text-2xl cursor-pointer hover:text-theme" />
                <span className="relative">
                  <FaComment
                    className="text-2xl cursor-pointer hover:text-theme"
                    onClick={toggleShowComments}
                  />
                  <span className="absolute -top-2 -right-2 bg-red-500 pointer-events-none text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {randomComments.length + userComments.length}
                  </span>
                </span>
              </div>
              <div className="relative" ref={shareRef}>
                <FaShareAlt
                  className="text-2xl cursor-pointer hover:text-theme"
                  onClick={toggleShareDropdown}
                />
                {showShareDropdown && (
                  <div className="absolute right-0 py-2 z-10 mt-2 w-52 bg-white border rounded shadow-lg">
                    <button
                      className="w-full flex items-center gap-2 text-left px-4 py-2 hover:bg-gray-100"
                      onClick={copyLink}
                    >
                      <span>
                        <FiLink />
                      </span>
                      <span>Copy Link</span>
                    </button>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100"
                    >
                      <span>
                        <CiFacebook className="text-lg" />
                      </span>
                      <span>Share on Facebook</span>
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    >
                      <span>
                        <CiLinkedin className="text-lg" />
                      </span>
                      <span>Share on LinkedIn</span>
                    </a>
                    <a
                      href={`https://www.instagram.com/?url=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    >
                      <span>
                        <FaInstagram />
                      </span>
                      <span>Share on Instagram</span>
                    </a>
                  </div>
                )}
                {copied && (
                  <div className="fixed bottom-10 pointer-events-none z-20 right-10 mt-2 w-52 bg-green-100 text-green-800 px-4 py-2 rounded shadow">
                    Copied link
                  </div>
                )}
              </div>
            </div>

            {showComments && (
              <div
                className="fixed top-0 right-0 w-[80%] md:w-[60%] lg:w-[30%] h-full bg-white shadow-lg p-4 z-20 overflow-y-auto commentMenu"
                ref={commentsRef}
              >
                <div className="flex justify-end">
                  <button
                    onClick={() => setShowComments(false)}
                    className="mb-4"
                  >
                    <IoMdClose className="border rounded text-2xl"/>
                  </button>
                </div>

                <div className="relative commentBox p-2">
                  <div className="flex items-center gap-2 mb-4">
                    <IoPersonCircleOutline className="text-4xl text-black" />
                    <p className="font-semibold">You</p>
                  </div>
                  <textarea
                    className="w-full p-2 outline-none text-sm rounded mb-2"
                    rows={5}
                    placeholder="Write a comment..."
                  ></textarea>
                  <div className="flex justify-end">
                    <button
                      className="btn w-fit text-sm bg-theme"
                      onClick={() => {
                        const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
                        if (textarea.value.trim()) {
                          handleAddComment({ author: "You", text: textarea.value.trim() });
                          textarea.value = "";
                        }
                      }}
                    >
                      Respond
                    </button>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-4 mt-10">Comments</h2>
                {[...randomComments, ...userComments].map((comment, index) => (
                  <div key={index} className="mb-3">
                    <div className="flex items-center gap-2 mb-4">
                      <IoPersonCircleOutline className="text-3xl text-black" />
                      <p>{comment.author}</p>
                    </div>
                    <p className="border text-black min-h-24 p-2 text-sm rounded">
                      {comment.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <Newsletter />
          </div>
        </div>
      </div>
      <div>
        <div
          className={`container rounded-xl nav flex flex-col gap-6 px-10 md:flex-row md:gap-0 !my-4  pt-6 pb-8 bg-[#F2EDFF] ${
            !prevPost ? "justify-end" : "justify-between"
          }`}
        >
          {prevPost && (
            <Link href={`/blog/${prevPost.id}`}>
              <button className="btn flex items-center gap-4 uppercase">
                <span className="border border-black rounded-full flex justify-center items-center p-2">
                  <GoArrowUpLeft className="text-xl" />
                </span>{" "}
                Previous Post
              </button>
              <div className="border-b border-black pb-4 mt-4 grid grid-cols-[auto_65%] gap-4 items-center w-10/12">
                <div style={{ perspective: "800px" }}>
                  <Image
                    src={prevPost.mainImage}
                    alt={prevPost.title}
                    height={1000}
                    width={1000}
                    className="rounded-md w-[150px] object-cover"
                    style={{
                      transform: "rotateY(20deg)",
                      transformOrigin: "left",
                    }}
                  />
                </div>
                <h3 className="font-bold text-sm">{prevPost.title}</h3>
              </div>
            </Link>
          )}
          {nextPost && (
            <Link
              className="flex flex-col items-end"
              href={`/blog/${nextPost.id}`}
            >
              <button className="btn flex items-center justify-end gap-4 uppercase">
                Next Post{" "}
                <span className="border border-black rounded-full flex justify-center items-center p-2">
                  <GoArrowUpRight className="text-xl" />
                </span>
              </button>
              <div className="border-b border-black pb-4 mt-4 grid grid-cols-[65%_auto] gap-4 items-center w-10/12">
                <h3 className="font-bold text-sm">{nextPost.title}</h3>
                <div style={{ perspective: "800px" }}>
                  <Image
                    src={nextPost.mainImage}
                    alt={nextPost.title}
                    height={1000}
                    width={1000}
                    className="rounded-md w-[150px] object-cover"
                    style={{
                      transform: "rotateY(-20deg)",
                      transformOrigin: "right",
                    }}
                  />
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
