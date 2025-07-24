import React from 'react';

export const ModalSkeleton = () => {
  return (
    <div className={`  relative z-[20] `}>
      <div className="flex items-center gap-x-4">
        <div className="w-1/3 h-14 bg-gray-200 rounded-lg overflow-hidden relative animate-pulse">
          <div className=" animate-pulse"></div>
        </div>
        <div className="w-2/3 h-14 bg-gray-200 rounded-lg overflow-hidden relative animate-pulse">
          <div className=" animate-pulse"></div>
        </div>
      </div>
      <div className="mt-4 w-full h-24 bg-gray-200 rounded-lg overflow-hidden relative animate-pulse">
        <div className=" animate-pulse"></div>
      </div>
      <div className="mt-4 w-1/2 h-14 bg-gray-200 rounded-lg overflow-hidden relative animate-pulse">
        <div className=" animate-pulse"></div>
      </div>
      <div className="mt-4 w-1/2 h-14 bg-gray-200 rounded-lg overflow-hidden relative animate-pulse">
        <div className=" animate-pulse"></div>
      </div>
      <div className="mt-4 w-1/2 h-14 bg-gray-200 rounded-lg overflow-hidden relative animate-pulse">
        <div className=" animate-pulse"></div>
      </div>
      <div className="flex items-center gap-x-4 mt-4">
        <div className="w-1/3 h-14 bg-gray-200 rounded-lg overflow-hidden relative animate-pulse">
          <div className=" animate-pulse"></div>
        </div>
        <div className="w-2/3 h-14 bg-gray-200 rounded-lg overflow-hidden relative animate-pulse">
          <div className=" animate-pulse"></div>
        </div>
        <div className="w-2/3 h-14 bg-gray-200 rounded-lg overflow-hidden relative animate-pulse">
          <div className=" animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
