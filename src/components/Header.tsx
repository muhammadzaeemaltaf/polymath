"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen, dropdownOpen]);

  return (
    <header className="text-white border-b">
      <div className="container flex justify-between items-center py-3 text-text">
        <div className="h-[60px] w-[100px]  relative">
          <Image
            src="/polymath.svg"
            alt="logo"
            width={200}
            height={50}
            layout="fixed"
            className="cursor-pointer aspect-video h-[90px] absolute right-0 -top-4"
          />
          <Link href="/" className="absolute inset-0 w-[100px]" />
        </div>
        <div
          ref={menuRef}
          className={`fixed h-[100vh] bg-back/90 lg:bg-white backdrop-blur-sm w-[80%] top-0 z-10 transition-all ease-linear duration-150 lg:relative lg:w-auto lg:h-auto lg:top-0 lg:left-0 ${
            menuOpen ? "right-0" : "-right-[80%]"
          } flex items-center justify-center`}
        >
          <button
            className="absolute top-4 right-4 text-2xl border rounded-md p-1 lg:hidden"
            onClick={() => {
              toggleMenu();
              setDropdownOpen(false);
            }}
          >
            <IoClose />
          </button>
          <ul className="flex gap-10 text-white lg:text-text text-2xl flex-col items-center lg:flex-row lg:text-lg">
            <li className="cursor-pointer transition-all duration-75 hover:text-white lg:hover:text-black">
              <Link
                href={"/"}
                onClick={() => {
                  toggleMenu();
                  setDropdownOpen(false);
                }}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer transition-all duration-75 hover:text-white lg:hover:text-black">
              <Link
                href={"/blog"}
                onClick={() => {
                  toggleMenu();
                  setDropdownOpen(false);
                }}
              >
                Blog
              </Link>
            </li>
            <li className="relative cursor-pointer transition-all duration-75 hover:text-white lg:hover:text-black">
              <div onClick={toggleDropdown} className="flex items-center gap-1">
                Categories{" "}
                <FaAngleDown
                  className={`${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  } transition-all duration-100`}
                />
              </div>
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md overflow-hidden"
                >
                  <ul className="flex flex-col">
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link
                        href={"/category/technology"}
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                      >
                        Technology
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link
                        href={"/category/health"}
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                      >
                        Health
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link
                        href={"/category/finance"}
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                      >
                        Finance
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="cursor-pointer transition-all duration-75 hover:text-white lg:hover:text-black">
              <Link
                href={"/about"}
                onClick={() => {
                  toggleMenu();
                  setDropdownOpen(false);
                }}
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer transition-all duration-75 hover:text-white lg:hover:text-black">
              <Link
                href={"/contact"}
                onClick={() => {
                  toggleMenu();
                  setDropdownOpen(false);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <button className="btn bg-theme">Get Started</button>
          </div>
          <div className="hamburger lg:hidden" onClick={toggleMenu}>
            <IoMenu className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
