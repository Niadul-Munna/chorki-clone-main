"use client";
import { RiFacebookFill } from "react-icons/ri";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface footerProps {
  name: string;
  href: string;
}
const links: footerProps[] = [
  { name: "About Us ", href: "/page/about-us" },
  { name: "Privacy Policy", href: "/page/privacy-policy" },
  { name: "Terms of Service", href: "/page/terms-of-service" },
  { name: "FAQ", href: "/page/faq" },
  { name: "Contact Us", href: "/page/contact-us" },
];
const year = new Date();
const Footer = () => {
  const pathName = usePathname();
  return (
    <div className="bg-neutral-900 divide-y px-10 w-auto h-auto">
      <div className="grid  lg:grid-cols-3 lg:mx-52  text-sm font-semibold py-8 text-center">
        <div className="">
          <h1 className="uppercase mb-4">Call us</h1>
          <p className="text-base">+8809613102010</p>
        </div>
        <div className="flex flex-col  items-center">
          <h1 className="uppercase text-center mb-4">Follow us on</h1>
          <span className="flex items-center space-x-3 text-zinc-300">
            <RiFacebookFill size={24} />
            <FaYoutube size={24} />
            <FaTiktok size={24} />
            <FaInstagram size={24} />
            <FaXTwitter size={24} />
            <FaLinkedin size={24} />
          </span>
        </div>
        <div className="space-x-3 tracking-tighter">
          <h1 className="uppercase mb-4">Download app</h1>
          <Button
            variant="noHover"
            className="bg-black  text-white border px-1"
          >
            <FaGooglePlay />
            <div className="leading-none tracking-tighter">
              <span className="text-[8px] flex uppercase">Get it on</span>
              <span className="text-[12px] font-semibold ">Google Play</span>
            </div>
          </Button>
          <Button variant="noHover" className="bg-black text-white border px-1">
            <FaApple />
            <div className="leading-none ">
              <span className="text-[8px]  flex">Download on the</span>
              <span className="text-[12px] font-semibold">App Store</span>
            </div>
          </Button>
        </div>
      </div>
      <ul className="grid grid-cols-2 items-center lg:flex  font-semibold justify-center text-zinc-400  gap-5 lg:gap-9 text-sm p-10">
        {links.map((link, index) => (
          <div key={index}>
            {pathName === link.href ? (
              <li className="hover:text-orange-600">
                <Link href={link.href} className="">
                  {link.name}
                </Link>
              </li>
            ) : (
              <li className="hover:text-orange-600">
                <Link href={link.href}>{link.name}</Link>
              </li>
            )}
          </div>
        ))}
      </ul>
      <footer className="text-center  p-9 font-medium text-zinc-500 text-sm">
        &copy; {year.getFullYear()} All Rights Reserved by Chorki.
      </footer>
    </div>
  );
};

export default Footer;
