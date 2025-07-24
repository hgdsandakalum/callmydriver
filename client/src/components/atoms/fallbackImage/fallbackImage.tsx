"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FallbackImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  layout?: string;
  objectFit?: string;
  className?: string;
  onClick?: () => void;
  fill?: boolean;
  style?: React.CSSProperties;
  noPlaceholder?: boolean;
  isPriority?: boolean;
}

// Tiny placeholder image (1x1 pixel)
const tinyPlaceholder =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwZJSstJDJJWlFWVDM9YXVtdmyAsbPE4ubm8czKtbDXvtza/////////////9sAQQUVFRgWGDEhITHC/8z///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AARCAAIAAQAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJgADf/Z";

export const FallbackImage: React.FC<FallbackImageProps> = React.memo(
  ({
    src,
    fallbackSrc = "/images/Image-not-found.png",
    alt,
    width,
    height,
    layout,
    objectFit,
    className,
    onClick,
    fill,
    style,
    noPlaceholder = false,
    isPriority = false,
  }) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);

    const handleImageError = () => {
      if (imageSrc !== fallbackSrc) {
        setImageSrc(fallbackSrc);
      }
    };

    const handleImageLoad = () => {
      setIsLoading(false);
    };

    return (
      <div className={`relative ${className || ""}`}>
        <Image
          src={imageSrc}
          onClick={onClick}
          alt={alt}
          width={width}
          height={height}
          layout={layout}
          objectFit={objectFit}
          className={`transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          placeholder={noPlaceholder ? undefined : "blur"}
          blurDataURL={tinyPlaceholder}
          priority={isPriority}
          fill={fill}
          style={style}
        />
        {isLoading && !noPlaceholder && (
          <div
            className="absolute inset-0 bg-gray-200 animate-pulse"
            style={{
              backgroundImage: `url(${tinyPlaceholder})`,
              backgroundSize: "cover",
              filter: "blur(10px)",
            }}
          />
        )}
      </div>
    );
  }
);

FallbackImage.displayName = "FallbackImage";
