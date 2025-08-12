"use client";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ROUTES } from "@/constants";

interface BreadcrumbItem {
  title: string;
  path?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = "",
}) => {
  const pathname = usePathname();

  const getDefaultBreadcrumbs = () => {
    const paths = pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    // Add admin
    // if (paths[0] === "admin") {
    //   breadcrumbs.push({
    //     title: "Admin",
    //     path: ROUTES.ADMIN,
    //   });
    // }

    // Add other segments
    let currentPath = "";
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      if (index > 0) {
        // Skip home and admin as they're already added
        breadcrumbs.push({
          title: path
            .split("-")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" "),
          path: currentPath,
        });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || getDefaultBreadcrumbs();

  return (
    <Breadcrumb
      className={`text-sm ${className}`}
      items={breadcrumbItems.map((item) => {
        const isActive = item.path === pathname;
        return {
          title: item.path ? (
            <Link
              href={item.path}
              className={`${
                isActive
                  ? "!text-foreground font-medium"
                  : "text-base-30 hover:text-foreground/80"
              }`}
            >
              {item.title}
            </Link>
          ) : (
            <span className="text-gray-600">{item.title}</span>
          ),
        };
      })}
    />
  );
};
