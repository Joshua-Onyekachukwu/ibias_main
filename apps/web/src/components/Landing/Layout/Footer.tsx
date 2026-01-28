"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <div className="relative z-[1] py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:pt-[180px] dark:bg-[#0a0e19]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px]">
            <div className="ltr:xl:-mr-[35px] rtl:xl:-ml-[35px]">
              <Link
                href="/"
                className="inline-block max-w-[132px] mb-[20px] md:mb-[23px]"
              >
                <Image
                  src="/images/black-logo.svg"
                  alt="ibias-logo"
                  className="inline-block dark:hidden"
                  width={132}
                  height={34}
                />
                <Image
                  src="/images/white-logo.svg"
                  alt="ibias-logo"
                  className="hidden dark:inline-block"
                  width={132}
                  height={34}
                />
              </Link>

              <p className="!leading-[1.6]">
                Your AI E-commerce Analyst. Connect store, get insights, grow revenue.
              </p>

              <div className="mt-[20px] md:mt-[35px]">
                <a
                  href="#"
                  target="_blank"
                  className="inline-block leading-none text-[20px] text-primary-600 transition-all hover:text-primary-400 ltr:mr-[8px] rtl:ml-[8px] ltr:last:mr-0 rtl:last:ml-0"
                >
                  <i className="ri-twitter-x-fill"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="inline-block leading-none text-[20px] text-primary-600 transition-all hover:text-primary-400 ltr:mr-[8px] rtl:ml-[8px] ltr:last:mr-0 rtl:last:ml-0"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </div>
            </div>

            <div className="ltr:xl:pl-[130px] rtl:xl:pr-[130px]">
              <h3 className="!leading-[1.2] !text-[16px] md:!text-lg !mb-[18px] !font-semibold !text-gray-700 dark:!text-gray-100">
                Product
              </h3>
              <ul>
                <li className="mb-[10px] last:mb-0">
                  <Link
                    href="/#how-it-works"
                    className="lg:text-[15px] xl:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
                  >
                    How it Works
                  </Link>
                </li>
                <li className="mb-[10px] last:mb-0">
                  <Link
                    href="/#pricing"
                    className="lg:text-[15px] xl:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-[10px] last:mb-0">
                  <Link
                    href="/auth/signup"
                    className="lg:text-[15px] xl:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>

            <div className="ltr:xl:pl-[130px] rtl:xl:pr-[130px]">
              <h3 className="!leading-[1.2] !text-[16px] md:!text-lg !mb-[18px] !font-semibold !text-gray-700 dark:!text-gray-100">
                Resources
              </h3>
              <ul>
                <li className="mb-[10px] last:mb-0">
                  <Link
                    href="/#blog"
                    className="lg:text-[15px] xl:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mb-[10px] last:mb-0">
                  <Link
                    href="#"
                    className="lg:text-[15px] xl:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
                  >
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>

            <div className="ltr:xl:pl-[80px] rtl:xl:pr-[80px]">
              <h3 className="!leading-[1.2] !text-[16px] md:!text-lg !mb-[18px] !font-semibold !text-gray-700 dark:!text-gray-100">
                Contact
              </h3>
              <ul>
                <li className="lg:text-[15px] xl:text-[16px] text-gray-500 dark:text-gray-400 mb-[10px] last:mb-0">
                  Email:
                  <a
                    href="mailto:hello@ibias.ai"
                    className="text-primary-600 hover:text-primary-800 transition-all"
                  >
                    hello@ibias.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="rounded-[15px] absolute top-0 left-0 right-0 bottom-0 -z-[1] dark:hidden"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #DDE4FF 100%)",
          }}
        ></div>
      </div>

      <div className="py-[25px] md:py-[30px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-[25px]">
            <div className="text-center ltr:lg:text-left rtl:lg:text-right">
              <p className="!leading-[1.6]">
                © {new Date().getFullYear()} <span className="text-purple-500">IBIAS</span>. All Rights Reserved.
              </p>
            </div>

            <div className="text-center lg:flex items-center justify-end gap-[15px]">
              <Link
                href="#"
                className="transition-all hover:text-primary-600 inline-block mt-[10px] lg:mt-0 mx-[7px] lg:mx-0"
              >
                Terms of Service
              </Link>
              <div className="w-[1px] h-[15px] bg-gray-200 dark:bg-gray-800 hidden lg:block"></div>
              <Link
                href="#"
                className="transition-all hover:text-primary-600 inline-block mt-[10px] lg:mt-0 mx-[7px] lg:mx-0"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
