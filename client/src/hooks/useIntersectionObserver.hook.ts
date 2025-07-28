import { useEffect, useRef, useState } from "react";

interface MenuItem {
  href: string;
  label: string;
  key: string;
}

interface UseIntersectionObserverOptions {
  menuItems: MenuItem[];
  rootMargin?: string;
  threshold?: number;
  onSectionVisible?: (sectionId: string, menuKey: string) => void;
}

export const useIntersectionObserver = ({
  menuItems,
  rootMargin = "-20% 0px -20% 0px",
  threshold = 0.1,
  onSectionVisible,
}: UseIntersectionObserverOptions) => {
  const [selectedKey, setSelectedKey] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin,
      threshold,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          const correspondingMenuItem = menuItems.find(
            (item) => item.href === `#${sectionId}`
          );

          if (correspondingMenuItem) {
            setSelectedKey(correspondingMenuItem.key);
            onSectionVisible?.(sectionId, correspondingMenuItem.key);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Delay to ensure DOM elements are available
    const setupObserver = () => {
      // Observe all sections that correspond to menu items
      menuItems.forEach((item) => {
        if (item.href.startsWith("#")) {
          const sectionId = item.href.substring(1);
          const section = document.getElementById(sectionId);
          if (section) {
            observerRef.current?.observe(section);
          }
        }
      });
    };

    // Try immediately, then retry after a short delay
    setupObserver();
    const timeoutId = setTimeout(setupObserver, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [menuItems, rootMargin, threshold, onSectionVisible]);

  const setSelectedKeyManually = (key: string) => {
    setSelectedKey(key);
  };

  const clearSelection = () => {
    setSelectedKey("");
  };

  return {
    selectedKey,
    setSelectedKey: setSelectedKeyManually,
    clearSelection,
  };
};
