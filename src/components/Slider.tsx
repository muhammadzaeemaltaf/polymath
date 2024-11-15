import Image from "next/image";
import { blogs } from "../../libs/data";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <h3 className="uppercase text-xl font-bold py-6">Top Posts</h3>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="swiper-container"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id} className="relative">
            <Link href={`/blog/${blog.id}`} className="absolute inset-0" />
            <div className="flex gap-4 h-[150px] py-5 border-t">
              <div className="w-[30%] aspect-square overflow-hidden rounded-lg">
                <Image
                  src={blog.mainImage}
                  alt={blog.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-[70%] flex items-center justify-between py-2 relative hover:underline transition-all duration-75">
                <h1 className="font-bold lg:text-xl">
                  <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
