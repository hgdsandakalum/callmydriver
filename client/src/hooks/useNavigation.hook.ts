import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ROUTES } from "@/constants";
import { scrollToElement, createScrollListener } from "@/utils/scroll.utills";
import { useIntersectionObserver, useIsMobileDevice } from "@/hooks";
import { MenuItem } from "@/components/organisms/navigation/NavigationMenu";
import { BASE_MENU_ITEMS, NAVIGATION_CONSTANTS } from "@/constants";

export const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobileDevice(NAVIGATION_CONSTANTS.BREAKPOINTS.MOBILE);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(BASE_MENU_ITEMS);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isOnNeedDriverButtonVisible, setIsOnNeedDriverButtonVisible] =
    useState(false);

  // Update menu items based on mobile state
  // useEffect(() => {
  //   if (isMobile) {
  //     setMenuItems([
  //       {
  //         href: "#",
  //         label: "Home",
  //         key: "home",
  //       },
  //       ...BASE_MENU_ITEMS,
  //     ]);
  //   } else {
  //     setMenuItems(BASE_MENU_ITEMS);
  //   }
  // }, [isMobile]);

  // Intersection observer for active menu highlighting
  const { selectedKey, setSelectedKey, clearSelection } =
    useIntersectionObserver({
      menuItems,
      onSectionVisible: (sectionId, menuKey) => {
        setSelectedKey(menuKey);
      },
    });

  // Scroll listener
  useEffect(() => {
    const removeScrollListener = createScrollListener(setScrollY);
    return removeScrollListener;
  }, []);

  useEffect(() => {
    if (!pathname) return;
    const normalizedPath = pathname === "/" ? "/home" : pathname;
    const matched = menuItems.find(
      (item) => item.href.split("#")[0] === normalizedPath
    );
    if (matched) {
      setSelectedKey(matched.key);
    } else {
      // Clear if no direct match (e.g., other routes)
      setSelectedKey(null as unknown as string);
    }
  }, [pathname, menuItems]);

  // Compute visibility of "Need a Driver" button
  useEffect(() => {
    if (isMobile) {
      setIsOnNeedDriverButtonVisible(true);
    } else {
      setIsOnNeedDriverButtonVisible(
        scrollY > NAVIGATION_CONSTANTS.SCROLL_THRESHOLDS.HEADER_OPACITY
      );
    }
  }, [isMobile, scrollY]);

  // Event handlers
  const handleLogoClick = () => {
    scrollToElement("hero");
    clearSelection();
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleLoginNavigation = async () => {
    try {
      await router.push(ROUTES.LOGIN);
    } catch (error) {
      console.error("Navigation failed:", error);
    }
  };

  const handleNotificationClick = () => {
    console.log("notification clicked");
  };

  const handleLogout = () => {
    console.log("logout clicked");
  };

  const handleNeedDriverClick = () => {
    console.log("need a driver clicked");
  };

  const handleMenuClick = (key: string) => {
    const menuItem = menuItems.find((item) => item.href === key);
    if (!menuItem) return;

    setSelectedKey(menuItem.key);
    const href = menuItem.href;

    if (href.startsWith("#")) {
      scrollToElement(href.substring(1));
      return;
    }

    if (href.startsWith("/")) {
      router.push(href as any);
      return;
    }
  };

  return {
    // State
    scrollY,
    mobileMenuOpen,
    menuItems,
    isDarkMode,
    selectedKey,
    isOnNeedDriverButtonVisible,

    // Actions
    handleLogoClick,
    handleMobileMenuToggle,
    handleMobileMenuClose,
    handleThemeToggle,
    handleLoginNavigation,
    handleNotificationClick,
    handleLogout,
    handleNeedDriverClick,
    handleMenuClick,
  };
};
