"use client";
import Link from "next/link";
import React from "react";
import Logo from "@/app/assets/Chorki_Logo.png";
import { Button } from "@/components/ui/button";
import { FaCrown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { MorePopover } from "./MorePopOver";
import { LoginForm } from "./LoginForm";
import { usePathname } from "next/navigation";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Originals", href: "/originals" },
  { name: "Movies", href: "/movies" },
  { name: "Series", href: "/series" },
  { name: "Bytes", href: "/bytes" },
  { name: "Shortfilms", href: "/shortfilms" },
  { name: "Songs", href: "/songs" },
];
const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="flex items-center max-w-8xl  justify-between w-full mx-auto h-20 px-5 py-5 sm:px-6 lg:px-10 ">
      <div className="flex items-center">
        <Link href="/">
          <Image
            width={85}
            height={48}
            src={Logo}
            alt="Site-Logo"
            priority
          ></Image>
        </Link>
        <ul className="lg:flex gap-x-8 pl-[24px] pr-[24px] ml-[16px] hidden">
          {links.map((link, index) => (
            <div key={index}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white text-lg font-bold "
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href={link.href} className="text-white/80">
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-4 ">
        <div className="flex flex-col h-[36px] items-center  text-xs justify-center">
          <FiSearch className="size-[17px]" />
          Search
        </div>
        <LoginForm />
        <Button
          type="submit"
          className="bg-orange-500 text-white font-semibold  w-[125px] h-[40px]"
        >
          <FaCrown /> Subscribe
        </Button>
        <div>
          <MorePopover />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
