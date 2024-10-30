"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "../public/assets/starknet-logo.png";

const Links = [
  { label: "Ecosystem", href: "https://www.starknet-ecosystem.com/en" },
  { label: "Academy", href: "https://www.starknet-ecosystem.com/en/academy" },
  { label: "Jobs", href: "https://www.starknet-ecosystem.com/en/jobs" },
  { label: "Metrics", href: "https://www.starknet-ecosystem.com/en/academy" },
  {
    label: "Apply",
    href: "https://github.com/419Labs/starknet-ecosystem.com/blob/main/docs/add-project.md",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="bg-[#121232] relative w-full z-[100]">
      <nav className="text-white font-bold flex p-4 gap-3 items-center justify-between mx-auto">
        <div className="flex items-center gap-3">
          <div>
            <Image src={logo} width={36} height={36} alt="logo" />
          </div>
          <span className="text-xl">StarkNet Ecosystem</span>
        </div>
        <div className="relative md:hidden hover:bg-[#22244D] rounded-md transition-colors border-[#22244D] border z-10">
          <button
            className="flex items-center justify-center z-50 px-3 py-1"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={30} className="text-white" />
            ) : (
              <Menu size={30} className="text-white" />
            )}
          </button>
        </div>
        {isOpen && <div className="fixed top-0 left-0 w-full h-full bg-[#00000085] z-0"></div>}

        <div
          className={cn(
            "fixed bg-[#22244D] w-full left-0 z-0 transition-all duration-700",
            isOpen ? "top-0" : "-top-[25rem]"
          )}>
          <div className="relative flex flex-col">
            <div className="flex items-center gap-3 p-4">
              <div>
                <Image src={logo} width={36} height={36} alt="logo" />
              </div>
              <span className="text-xl">StarkNet Ecosystem</span>
            </div>
            <span className="h-[0.1px] w-full bg-[#ffffff29]"></span>
            <ul className="p-4 flex flex-col gap-5">
              {Links.map((link) => (
                <li key={link.label} className="font-normal">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative hidden md:flex md:gap-6">
          <ul className="flex md:gap-6">
            {Links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[#ffffff7a] font-normal hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <span className="w-[0.5px] bg-[#ffffff7a]"></span>
            <Link
              href="https://starkgate.starknet.io/"
              className="text-[#ffffff7a] font-normal hover:text-white transition-colors">
              Bridge
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
