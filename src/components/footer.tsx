import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { categories } from '../../libs/data';
import Image from 'next/image';

const Footer = () => {
  // const categories = Array.from(new Set(blogs.map(blog => blog.category)));

  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-4">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className='grid lg:grid-rows-[40%_auto]'>
          <div className='relative'>
          <Image
              src="/polymath.svg"
              alt="logo"
              width={200}
              height={50}
              layout="fixed"
              className="cursor-pointer aspect-video h-[90px] relative lg:absolute -left-[60px]"
            />
            <Link href="/" className='absolute inset-0 w-[200px]'/>
          </div>
          <div><p>gmail@gmail.com</p>
          <p>(000) 0000-00000</p>
          <div className="flex gap-4 mt-4">
            <FaFacebook className="text-xl cursor-pointer hover:text-blue-600" />
            <FaGithub className="text-xl cursor-pointer hover:text-gray-700" />
            <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
            <FaLinkedin className="text-xl cursor-pointer hover:text-blue-800" />
          </div></div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <p>3554 Zindabahar, Haha, NIKE 10632, Monte Cristo</p>
          <p>Support@polymath.com</p>
          <p>+008-176985656</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul>
            {categories.map(category => (
              <li key={category.name} className="hover:text-theme mb-2">
                <Link href={`/category/${category.name.toLowerCase()}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Center Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help Center</h3>
          <ul>
            <li className="mb-2 hover:text-theme"><Link href="/home">Home</Link></li>
            <li className="mb-2 hover:text-theme"><Link href="/about">About</Link></li>
            <li className="mb-2 hover:text-theme"><Link href="/blog">Blog</Link></li>
            <li className="mb-2 hover:text-theme"><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

      </div>
      
      {/* Footer Bottom Section */}
      <div className="border-t mt-8 pt-4 text-center text-sm text-gray-500">
        <p>&copy; 2023 PolyMath. All rights reserved.</p>
        <p className="mt-2">Terms of Use | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
