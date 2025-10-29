import { MenuItem } from "@/components/organisms/navigation/NavigationMenu";

export const NAVIGATION_CONSTANTS = {
  BREAKPOINTS: {
    MOBILE: 1024,
  },
  SCROLL_THRESHOLDS: {
    HEADER_OPACITY: 250,
  },
  HEADER: {
    HEIGHT: 64,
    MOBILE_HEIGHT: "100%",
    PADDING: "0 24px",
  },
  ANIMATION: {
    DURATION: 300,
  },
} as const;

export const BASE_MENU_ITEMS: MenuItem[] = [
  { href: "/home", label: "Home", key: "home" },
  { href: "/home#how-it-works", label: "How It Works", key: "how-it-works" },
  { href: "/home#features", label: "Features", key: "features" },
  { href: "/about", label: "About", key: "about" },
  { href: "/careers", label: "Careers", key: "careers" },
  { href: "/contact", label: "Contact", key: "contact" },
];

export const USER_MENU_ITEMS = [
  {
    key: "profile",
    label: "Profile",
    icon: "UserOutline",
  },
  {
    key: "settings",
    label: "Settings",
    icon: "SettingsOutline",
  },
  {
    key: "help",
    label: "Help",
    icon: "HelpOutline",
  },
  {
    key: "logout",
    label: "Logout",
    icon: "LogoutOutline",
  },
] as const;

export const THEME_CONFIG = {
  token: {
    // colorPrimary: "var(--color-primary)",
    // colorBgContainer: "var(--color-primary)",
    // colorText: "white",
    // colorBgTextHover: "rgba(255, 255, 255, 0.8)",
    // borderRadius: 0,
  },
  components: {
    Layout: {
      // headerBg: "var(--color-primary)",
      headerHeight: NAVIGATION_CONSTANTS.HEADER.HEIGHT,
      headerPadding: NAVIGATION_CONSTANTS.HEADER.PADDING,
    },
  },
} as const;
