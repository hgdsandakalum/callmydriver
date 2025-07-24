import React from 'react';

export const FormSkeleton = () => {
  return (
    <div className="fixed inset-0 flex bg-gray-50 z-[9999]">
      {/* Sidebar Skeleton - Fixed height */}
      <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-4 overflow-y-auto">
        {/* User Profile Skeleton */}
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-3 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* New Button Skeleton */}
        <div className="w-full h-10 mb-6 bg-gray-200 rounded-md animate-pulse"></div>

        {/* Navigation Skeleton */}
        <div className="space-y-2">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center space-x-3 px-3 py-2">
              <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Skeleton - Fixed height with scroll */}
      <div className="flex-1 min-h-screen overflow-y-auto">
        <div className="p-8">
          <div className=" mx-auto">
            {/* Header Skeleton */}
            <div className="flex items-center justify-between mb-8">
              <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-10 w-20 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Form Skeleton */}
            <div className="space-y-6">
              {/* Email Field Skeleton */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Username Field Skeleton */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Shimmer Effect Overlay */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </div>
  );
};
