"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div className="pt-[120px] md:pt-[150px] lg:pt-[190px] xl:pt-[200px] pb-[70px] md:pb-[90px] lg:pb-[110px] xl:pb-[150px] 2xl:pb-[180px] relative z-[1]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="text-center">
            <div className="mx-auto lg:max-w-[850px] mb-[25px] md:mb-[50px] lg:mb-[80px] xl:mb-[105px]">
              <div className="inline-block py-[4px] px-[12px] md:py-[5px] md:px-[15px] bg-primary-50 text-primary-600 rounded-[100px] mb-[12px] md:mb-[15px]">
                <span className="inline-block relative ltr:pl-[23px] rtl:pr-[23px]">
                  <i className="ri-fire-fill absolute top-1/2 ltr:left-0 rtl:right-0 -translate-y-1/2 text-[18px]"></i>
                  AI-First Analytics for SMBs
                </span>
              </div>

              <h1 className="!text-white !font-medium !text-[30px] md:!text-[45px] lg:!text-[55px] xl:!text-[72px] !leading-[1.2] -tracking-[1px] lg:-tracking-[1.5px] !mb-[12px] md:!mb-[15px]">
                Your AI E-commerce Analyst.
              </h1>

              <p className="text-white md:text-[15px] lg:text-md !leading-[1.6]">
                Connect your store, and in 60 seconds, get a prioritized list of actions to grow revenue.
                <br className="hidden md:block" />
                No complex dashboards. Just clear, actionable growth plans.
              </p>

              <div className="-mt-[8px] md:mt-[30px] lg:mt-[35px] xl:mt-[40px]">
                <Link
                  href="/auth/signup"
                  className="inline-block py-[9px] px-[25px] md:py-[10.5px] md:px-[30px] font-medium text-white bg-primary-500 rounded-[100px] border border-primary-500 transition-all hover:bg-primary-600 hover:border-primary-600 mx-[8px] mt-[15px] md:mt-0"
                >
                  Get Your Growth Plan
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-block py-[9px] px-[25px] md:py-[10.5px] md:px-[30px] font-medium text-white rounded-[100px] border border-white transition-all hover:bg-primary-600 hover:border-primary-600 mx-[8px] mt-[15px] md:mt-0"
                >
                  How It Works
                </Link>
              </div>
            </div>

            <Image
              src="/images/banner.png"
              className="inline-block"
              alt="ibias-dashboard-preview"
              width={1280}
              height={400}
            />
          </div>
        </div>

        <div
          className="absolute top-0 left-0 right-0 bottom-0 -z-[1] dark:hidden"
          style={{
            background: "linear-gradient(180deg, #4936F5 0%, #FFFFFF 100%)",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 -z-[1] hidden dark:block"
          style={{
            background: "linear-gradient(180deg, #4936F5 0%, #000000 100%)",
          }}
        ></div>

        {/* Decorative Shapes */}
        <div className="absolute top-[28.6%] ltr:left-[5%] rtl:right-[5%] ltr:xl:left-[16.5%] rtl:xl:right-[16.5%] -z-[1] hidden lg:block">
          <Image
            src="/images/shapes/shape1.png"
            alt="shape"
            width={87}
            height={87}
          />
        </div>
        <div className="absolute top-[18.4%] ltr:left-[13%] rtl:right-[13%] ltr:xl:left-[22.2%] rtl:xl:right-[22.2%] -z-[1] hidden lg:block">
          <Image
            src="/images/shapes/shape2.png"
            alt="shape"
            width={51}
            height={51}
          />
        </div>
        <div className="absolute top-[21.4%] ltr:right-[5%] rtl:left-[5%] ltr:xl:right-[16.6%] rtl:xl:left-[16.6%] -z-[1] hidden lg:block">
          <Image
            src="/images/shapes/shape3.png"
            alt="shape"
            width={87}
            height={87}
          />
        </div>
        <div className="absolute top-[33.9%] ltr:right-[13%] rtl:left-[13%] ltr:xl:right-[22.9%] rtl:xl:left-[22.9%] -z-[1] hidden lg:block">
          <Image
            src="/images/shapes/shape4.png"
            alt="shape"
            width={51}
            height={51}
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
