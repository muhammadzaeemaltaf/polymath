"use client";

import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import {
  Blog,
  blogs,
  searchBlogs,
  searchUsers,
  searchCategories,
  User,
  type Category,
} from "../../../../libs/data";
import { useState, useEffect } from "react";
import Slider from "@/components/Slider";

const Category = ({ params }: { params: { category: string } }) => {

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<{
    blogs: Blog[];
    users: User[];
    categories: Category[];
  }>({ blogs: [], users: [], categories: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading delay
    setSearchTerm("");
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      setSearchResults({
        blogs: searchBlogs(term).slice(0, 3),
        users: searchUsers(term).slice(0, 3),
        categories: searchCategories(term).slice(0, 3),
      });
    } else {
      setSearchResults({ blogs: [], users: [], categories: [] });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/search?query=${searchTerm}`;
  };

  const filteredBlogs = blogs.filter(
    (blog) => blog.category.toLowerCase() === params.category.toLowerCase()
  );

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Add start and end indices for the current page
  const start = indexOfFirstBlog + 1;
  const end = Math.min(indexOfLastBlog, filteredBlogs.length);

  if (loading) {
    return (
      <section>
        <div className="container pt-5">
          <div className="flex flex-col-reverse lg:flex-row gap-4 lg:px-5">
            <div className="lg:w-[70%] lg:border-r px-10">
              <div className="h-10 bg-gray-300 rounded w-1/2 mb-5"></div>
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row gap-4 lg:h-[270px] py-6 border-t relative"
                >
                  <div className="lg:w-[60%] flex flex-col justify-between gap-3 lg:gap-0 py-5 lg:pr-4">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                  </div>
                  <div className="lg:w-[40%] lg:aspect-square overflow-hidden rounded-xl p-6 bg-gray-300"></div>
                </div>
              ))}
            </div>
            <div className="lg:w-[30%] top-post lg:px-8 pt-10">
              <div className="relative">
                <div className="h-10 bg-gray-300 rounded w-full"></div>
              </div>
              <div className="hidden md:block mt-4">
                <div className="h-10 bg-gray-300 rounded w-1/2 mb-4"></div>
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="flex gap-4 h-[120px] py-5 border-t relative"
                  >
                    <div className="w-[30%] overflow-hidden pointer-events-none bg-gray-300 rounded"></div>
                    <div className="w-[70%] flex items-center justify-between py-2 relative">
                      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:px-5 pb-4">
          <div className="lg:w-[70%] lg:border-r md:px-10">
            <h1 className="uppercase font-bold text-2xl text-center lg:text-start md:text-3xl lg:text-4xl pb-5 pt-10 lg:pr-5 ">
              Showing {start}-{end} of {filteredBlogs.length} results for {params.category}
            </h1>
            <div className="">
              {currentBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="flex flex-col lg:flex-row gap-4 lg:h-[270px] py-6 border-t  relative"
                >
                  <Link
                    href={`/blog/${blog.id}`}
                    className="absolute inset-0"
                  />
                  <div className="lg:w-[60%] flex flex-col justify-between gap-3 lg:gap-0 py-5 lg:pr-4">
                    <h1 className="font-bold text-3xl hover:underline transition-all duration-75 relative line-clamp-2">
                      <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </h1>
                    <p className="line-clamp-2">
                      {blog.mainContent.paragraph.text}
                    </p>
                    <div className="text-text flex items-center gap-3 divide-x-2">
                      <p className="flex items-center gap-2">
                        <Image
                          src={blog.authorImage}
                          alt=""
                          width={80}
                          height={80}
                          className="rounded-full h-[40px] w-[40px] object-cover"
                        />
                        {blog.author}
                      </p>
                      <p className="pl-3">{blog.date}</p>
                    </div>
                  </div>
                  <div className="lg:w-[40%] lg:aspect-square overflow-hidden rounded-xl p-6">
                    <Image
                      src={blog.mainImage}
                      alt={blog.title}
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover main-blog min-h-full rounded-xl"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-3 py-1">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>

          <div className="lg:w-[30%] top-post lg:px-8 pt-10">
            <div className="relative">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="search"
                  placeholder="Read about..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full relative p-2 pl-10 border rounded-full outline-none"
                />
                <div className="absolute top-1/2 -translate-y-1/2 left-4">
                  <IoSearchOutline className="text-text text-lg" />
                </div>
              </form>
              {searchTerm &&
                (searchResults.blogs.length > 0 ||
                  searchResults.users.length > 0 ||
                  searchResults.categories.length > 0) && (
                  <div className="absolute bg-white border rounded-lg w-full mt-2 z-10 text-sm">
                    {searchResults.users.length > 0 && (
                      <div>
                        <h4 className="p-2 font-bold">Users</h4>
                        {searchResults.users.map((user) => (
                          <Link
                            key={user.id}
                            href={`#`}
                            className="flex items-center gap-3 px-3 hover:bg-gray-200"
                          >
                            <span>
                              <Image
                                src={user.image}
                                alt={`${user.name} profile picture`}
                                height={1000}
                                width={1000}
                                className="rounded-full h-[30px] w-[30px] object-cover"
                              />
                            </span>
                            <span className="block p-2 ">{user.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                    {searchResults.blogs.length > 0 && (
                      <div>
                        <h4 className="p-2 font-bold">Blogs</h4>
                        {searchResults.blogs.map((blog) => (
                          <Link key={blog.id} href={`/blog/${blog.id}`}>
                            <span className="block p-2 hover:bg-gray-200">
                              {blog.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                    {searchResults.categories.length > 0 && (
                      <div>
                        <h4 className="p-2 font-bold">Categories</h4>
                        {searchResults.categories.map((category) => (
                          <Link
                            key={category.id}
                            href={`/category/${category.name}`}
                          >
                            <span className="block p-2 hover:bg-gray-200">
                              {category.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
            </div>
            <div className="hidden lg:block mt-4">
              <h3 className="uppercase text-xl font-bold py-4">Top Posts</h3>
              {blogs.slice(-5).map((blog) => (
                <div
                  key={blog.id}
                  className="flex gap-4 h-[120px] py-5 border-t relative"
                >
                  <Link
                    href={`/blog/${blog.id}`}
                    className="absolute inset-0"
                  />
                  <div
                    className="w-[30%] overflow-hidden pointer-events-none"
                    style={{ perspective: "1000px" }}
                  >
                    <Image
                      src={blog.mainImage}
                      alt={blog.title}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover rounded-sm"
                      style={{
                        transform: "rotateY(25deg)",
                        transformOrigin: "left",
                      }}
                    />
                  </div>
                  <div className="w-[70%] flex items-center justify-between py-2 relative hover:underline transition-all duration-75">
                    <h1 className="font-bold text-lg">
                      <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="block lg:hidden">
              <Slider  />
            </div>

            <div className="hidden lg:block mt-4">
              <h4 className="text-2xl uppercase font-bold">Follow us</h4>
              <div className="flex gap-4 mt-2">
                <div className="border p-2.5 rounded-full">
                  <FaFacebook className="text-2xl cursor-pointer hover:text-theme" />
                </div>
                <div className="border p-2.5 rounded-full">
                  <FaTwitter className="text-2xl cursor-pointer hover:text-theme" />
                </div>
                <div className="border p-2.5 rounded-full">
                  <FaInstagram className="text-2xl cursor-pointer hover:text-theme" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
