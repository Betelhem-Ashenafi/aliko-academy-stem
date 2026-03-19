"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "className">, LinkProps {
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string);
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname?.startsWith(String(href) + "/") ?? false);
    
    let resolvedClassName = "";
    if (typeof className === "function") {
      resolvedClassName = className({ isActive, isPending: false });
    } else {
      resolvedClassName = cn(className, isActive && activeClassName);
    }

    return (
      <Link
        ref={ref}
        href={href}
        className={resolvedClassName}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
