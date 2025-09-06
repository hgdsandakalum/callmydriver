"use client";

import React from "react";
import Slider from "react-slick";
import "../../../styles/slick.css";
import { cn } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import DriverCard from "@/components/organisms/HeroSection/_components/DriverCard";
import HeroBadge from "@/components/organisms/HeroSection/_components/HeroBadge";
import { Button } from "@/components/atoms/button";
import { SteeringWheel } from "../../../../public/icons";

interface SlideContent {
  id: string;
  backgroundImage: string;
}

interface HeroSectionProps {
  slides?: SlideContent[];
  backgroundImage?: string;
  description?: string;
  showCards?: boolean;
  onSlideChange?: (currentSlide: number) => void;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  slides,
  backgroundImage = "/images/heroBackgroundImage-bw.jpg",
  description = "Professional drivers for your vehicle when you can't drive. Safe, reliable, and available on-demand for any situation.",
  onSlideChange,
  className,
}) => {
  // Create default slides if slides prop is not provided (legacy support)
  const defaultSlides: SlideContent[] = [
    {
      id: "default",
      backgroundImage,
    },
  ];

  const slidesToShow = slides && slides.length > 0 ? slides : defaultSlides;

  // Animated text parts
  const staticText = "Your designated driver,";
  const changingTexts = [
    "just a call away",
    "for every situation",
    "keeping you safe",
    "on-demand",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentText = changingTexts[currentTextIndex];
    let charIndex = 0;

    setIsTyping(true);
    setDisplayedText("");

    const typeInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        charIndex++;
        setDisplayedText(currentText.slice(0, charIndex));
      } else {
        clearInterval(typeInterval);
        // Keep typing state true for a moment to show cursor
        setTimeout(() => setIsTyping(false), 500);
      }
    }, 100); // Typing speed: 100ms per character

    return () => clearInterval(typeInterval);
  }, [currentTextIndex]);

  // Change text every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % changingTexts.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [changingTexts.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 12,
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const slideVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeIn" as const,
      },
    },
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    fade: true,
    cssEase: "linear",
    dotsClass: "slick-dots slick-thumb",
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 10000,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 10000, // Slower on mobile for better UX
          swipeToSlide: true,
          touchThreshold: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 10000,
          swipeToSlide: true,
          touchThreshold: 5,
        },
      },
    ],
    afterChange: (current: number) => {
      if (onSlideChange) {
        onSlideChange(current);
      }
    },
    customPaging: () => (
      <div className="w-full h-1 bg-white/50 rounded-sm hover:bg-white/80 transition-colors"></div>
    ),
  };

  const renderSlide = (slide: SlideContent, index: number) => (
    <motion.div
      key={slide.id || index}
      className="relative w-full"
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className={cn(
          "flex justify-center bg-cover bg-center rounded-xl p-4 sm:p-6 md:p-8 w-full min-h-[calc(100dvh-16px)] xs:min-h-[calc(80dvh)] md:min-h-[calc(65dvh)] h-auto items-center pt-[2dvh] sm:pt-0"
        )}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 125, 30, 0.5)), url(${slide.backgroundImage})`,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 rounded-xl"></div>

        {/* Main Content */}
        <motion.div
          className={cn(
            "container mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center justify-center gap-[4dvh] sm:gap-8 md:gap-2 z-20 relative px-0 sm:px-6 md:px-8 pt-12"
          )}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-full lg:w-2/3 text-foreground mb-4 sm:mb-6 md:mb-8 !font-dm-serif-display !text-[32px] sm:!text-[48px] md:!text-[64px] !font-normal break-words flex flex-col items-center lg:items-start"
            variants={titleVariants}
          >
            <div className="flex justify-center lg:justify-start mb-2">
              <HeroBadge />
            </div>
            <div className="block text-center md:text-left text-[24px] sm:text-[52px] md:text-[64px]">
              {staticText}
            </div>
            <div className="block relative min-h-[1.2em] text-center lg:text-left text-[24px] sm:text-[52px] md:text-[64px]">
              <span className="inline-block relative">
                {displayedText}
                {isTyping && (
                  <motion.span
                    className="inline-block w-0.5 h-4 sm:h-6 md:h-8 bg-white ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </span>
            </div>
            <div className="w-full lg:w-2/3 mt-2 md:mt-4 text-center lg:text-left text-base md:text-lg font-quicksand">
              {description}
            </div>
            <div className="flex flex-row sm:flex col md:flex-row w-full justify-center lg:justify-start gap-4 mt-6">
              <Button
                shape="round"
                size="large"
                label="Need a Driver?"
                icon={<SteeringWheel className="text-lg" />}
                onClick={() => {}}
                className="!font-semibold w-full md:w-1/3"
              />
              <Button
                variant="white"
                shape="round"
                size="large"
                label="Call Us Now"
                onClick={() => {}}
                className="!font-semibold w-full md:w-1/3"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/3 rotate-3 hover:rotate-0 transition-transform duration-300"
            variants={descriptionVariants}
          >
            <DriverCard />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
  return (
    <section id="home" className={cn(`h-full hero-slider ${className || ""}`)}>
      {slidesToShow.length === 1 ? (
        // Render single slide without slider wrapper
        <AnimatePresence mode="wait">
          {renderSlide(slidesToShow[0], 0)}
        </AnimatePresence>
      ) : (
        // Render slider for multiple slides
        <div className="relative w-full">
          <Slider {...sliderSettings} className="w-full">
            {slidesToShow.map((slide, index) => (
              <AnimatePresence key={slide.id} mode="wait">
                {renderSlide(slide, index)}
              </AnimatePresence>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
};

export { HeroSection };
export type { HeroSectionProps, SlideContent };
