"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/atoms/button";
import { ChevronUp } from "../../../../public/icons";
import { scrollToTop } from "@/utils/scroll.utills";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    scrollToTop();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={handleScrollToTop}
      className="!fixed !bottom-10 !right-10 !z-50 hover:!scale-110 transition-all duration-300"
      aria-label="Scroll to top"
    >
      <ChevronUp className="!text-xl" />
    </Button>
  );
}
