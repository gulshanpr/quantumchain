"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [{ href: "/jobs", label: "Search Jobs" }];

const SecondaryNavbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="-mt-1 px-4 md:px-12 border-b pt-4 pb-2 drop-shadow-sm ">
      <div className="flex gap-10 max-w-[70.75rem] mx-auto">
        {Links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${isActive(href) && "font-bold cursor-default"} relative`}>
            {label}
            {isActive(href) && (
              <span className="w-full bg-[#1a0c6d] h-0.5 rounded block absolute -bottom-2"></span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default SecondaryNavbar;
