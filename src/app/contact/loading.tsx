
import React from 'react';

const Loading = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {/* Skeleton for Left Section */}
          <div className="lg:mb-0 mb-10">
            <div className="relative h-full">
              {/* Image Skeleton */}
              <div className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-gray-300 animate-pulse"></div>
              {/* Title Skeleton */}
              <div className="absolute top-11 left-11 h-8 w-32 bg-gray-300 rounded animate-pulse"></div>
              <div className="absolute bottom-0 w-full lg:p-11 p-5">
                <div className="bg-white rounded-lg p-6">
                  {/* Contact Information Skeleton */}
                  <div className="flex items-center mb-6">
                    <div className="h-6 w-6 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="h-6 w-32 bg-gray-300 rounded ml-5 animate-pulse"></div>
                  </div>
                  <div className="flex items-center mb-6">
                    <div className="h-6 w-6 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="h-6 w-32 bg-gray-300 rounded ml-5 animate-pulse"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="h-6 w-6 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="h-6 w-48 bg-gray-300 rounded ml-5 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Skeleton for Right Section */}
          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            {/* Title Skeleton */}
            <div className="h-8 bg-gray-300 rounded w-48 mb-11 animate-pulse"></div>
            {/* Input Skeletons */}
            <div className="h-12 bg-gray-300 rounded-full mb-10 animate-pulse"></div>
            <div className="h-12 bg-gray-300 rounded-full mb-10 animate-pulse"></div>
            <div className="h-12 bg-gray-300 rounded-full mb-10 animate-pulse"></div>
            {/* Radio Buttons Skeleton */}
            <div className="mb-10">
              <div className="h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>
              <div className="flex">
                <div className="flex items-center gap-1 mr-11 animate-pulse">
                  <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                  <div className="h-6 bg-gray-300 rounded w-24"></div>
                </div>
                <div className="flex items-center gap-1 animate-pulse">
                  <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                  <div className="h-6 bg-gray-300 rounded w-24"></div>
                </div>
              </div>
            </div>
            {/* Textarea Skeleton */}
            <div className="h-24 bg-gray-300 rounded-lg p-4 mb-10 animate-pulse"></div>
            {/* Button Skeleton */}
            <div className="h-12 bg-gray-300 rounded-full w-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;