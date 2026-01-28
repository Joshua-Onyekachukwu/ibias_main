"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the menu items as a dynamic array
const menuItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features/" },
  { label: "Use Cases", href: "/use-cases/" },
  { label: "Testimonials", href: "/testimonials/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Blog", href: "/blog/" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Determine the appropriate class based on the current path
  const navbarClass = isHomePage
    ? "ecommerce-navbar fixed top-0 right-0 left-0 transition-all h-auto z-[5] py-[20px] md:py-[30px] lg:py-[40px]"
    : "ecommerce-navbar relative top-0 right-0 left-0 bg-primary-500 transition-all h-auto z-[5] py-[20px] md:py-[30px] lg:py-[40px]";

  // Sticky navbar
  useEffect(() => {
    const elementId = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); // Added empty dependency array to avoid repeated effect calls

  // Add active class to mobile menu
  const [isActiveMobileMenu, setActiveMobileMenu] = useState<boolean>(true);

  const handleToggleMobileMenu = (): void => {
    setActiveMobileMenu(!isActiveMobileMenu);
  };

  return (
    <>
      <div className={navbarClass} id="navbar">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="flex items-center relative flex-wrap lg:flex-nowrap justify-between lg:justify-start">
            <Link
              href="/"
              className="inline-block w-[150px] ltr:mr-[15px] rtl:ml-[15px]"
            >
              <Image
                src="/images/logo.svg"
                alt="logo"
                className="inline-block"
                width={109}
                height={29}
              />
            </Link>

            <button
              type="button"
              className="inline-block relative leading-none lg:hidden"
              onClick={handleToggleMobileMenu}
            >
              <span className="h-[3px] w-[30px] my-[5px] block bg-white"></span>
              <span className="h-[3px] w-[30px] my-[5px] block bg-white"></span>
              <span className="h-[3px] w-[30px] my-[5px] block bg-white"></span>
            </button>

            {/* For Big Devices */}
            <div className="hidden lg:flex items-center grow basis-full">
              <ul className="flex mx-auto flex-row gap-[30px] xl:gap-[50px]">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`font-medium transition-all hover:text-secondary-200 ${
                        pathname === item.href
                          ? "text-secondary-200"
                          : "text-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className="inline-block py-[9px] px-[25px] md:py-[10.5px] md:px-[30px] font-medium text-primary-500 bg-white rounded-[100px] border border-white transition-all hover:bg-primary-500 hover:border-primary-500 hover:text-white"
              >
                Get Started
              </Link>
            </div>

            {/* For Responsive */}
            <div
              className={`bg-black border border-gray-500 rounded-[15px] mt-[15px] p-[20px] md:p-[30px] w-full hidden lg:!hidden ${
                isActiveMobileMenu ? "" : "active"
              }`}
              id="navbar-collapse"
            >
              <ul>
                {menuItems.map((item) => (
                  <li
                    key={item.href}
                    className="my-[14px] md:my-[16px] first:mt-0 last:mb-0"
                  >
                    <Link
                      href={item.href}
                      className={`font-medium transition-all hover:text-secondary-200 ${
                        pathname === item.href
                          ? "text-secondary-200"
                          : "text-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className="inline-block py-[9px] px-[25px] md:py-[10.5px] md:px-[30px] font-medium text-primary-500 bg-white rounded-[100px] border border-white transition-all hover:bg-primary-500 hover:border-primary-500 hover:text-white mt-[15px]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
