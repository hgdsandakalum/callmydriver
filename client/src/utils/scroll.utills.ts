//Utility functions for smooth scrolling operations
export const scrollToElement = (
  elementId: string,
  behavior: ScrollBehavior = "smooth",
  block: ScrollLogicalPosition = "start",
  inline: ScrollLogicalPosition = "nearest"
): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior,
      block,
      inline,
    });
  }
};

//Smoothly scrolls to an element by its selector
export const scrollToSelector = (
  selector: string,
  behavior: ScrollBehavior = "smooth",
  block: ScrollLogicalPosition = "start",
  inline: ScrollLogicalPosition = "nearest"
): void => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({
      behavior,
      block,
      inline,
    });
  }
};

//Smoothly scrolls to the top of the page with slow animation
export const scrollToTop = (duration: number = 1000): void => {
  const start = window.pageYOffset;
  const startTime = performance.now();

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, start * (1 - eased));

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

//Smoothly scrolls to a specific Y position
export const scrollToY = (
  y: number,
  behavior: ScrollBehavior = "smooth"
): void => {
  window.scrollTo({
    top: y,
    behavior,
  });
};

//Checks if an element is in viewport
export const isElementInViewport = (
  element: Element,
  threshold: number = 0.1
): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.top <= windowHeight * (1 - threshold) &&
    rect.bottom >= windowHeight * threshold
  );
};

//Gets the current scroll position
export const getScrollY = (): number => {
  return (
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop
  );
};

//Gets the current scroll position as a percentage
export const getScrollPercentage = (): number => {
  const scrollTop = getScrollY();
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
};

//Scrolls to a hash link with smooth behavior
export const scrollToHash = (hash: string): void => {
  const cleanHash = hash.startsWith("#") ? hash : `#${hash}`;
  const element = document.querySelector(cleanHash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

//Creates a scroll event listener with throttling for performance
export const createScrollListener = (
  callback: (scrollY: number) => void,
  throttleMs: number = 16
): (() => void) => {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback(getScrollY());
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};
