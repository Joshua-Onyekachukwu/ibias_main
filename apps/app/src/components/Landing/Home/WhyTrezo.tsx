"use client";

import React from "react";
import Image from "next/image";

const WhyTrezo: React.FC = () => {
  return (
    <>
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
            <div className="ltr:lg:-mr-[10px] rtl:lg:-ml-[10px] text-center">
              <Image
                src="/images/why-trezo.png"
                className="inline-block rtl:-scale-x-100"
                alt="why-trezo-image"
                width={640}
                height={659}
              />
            </div>
            <div>
              <span className="inline-block py-[4.5px] px-[15px] text-primary-600 bg-primary-50 dark:bg-gray-900 rounded-[100px] mb-[12px] md:!mb-[15px]">
                Why Trezo?
              </span>
              
              <h2 className="!text-gray-900 dark:!text-white !font-medium md:-tracking-[1px] !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl xl:max-w-[540px] !leading-[1.2] !mb-[11px] md:!mb-[13px] lg:!mb-[15px]">
                Built for Modern Online Sellers
              </h2>

              <p className="!leading-[1.6]">
                Every feature of Trezo is crafted to help you sell smarter, not
                harder.
              </p>

              <div className="grid grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-[40px] xl:gap-[50px] mt-[20px] md:mt-[30px] lg:mt-[40px] xl:mt-[60px]">
                <div>
                  <div className="leading-none text-gray-900 dark:text-white text-[40px] md:text-[54px] lg:text-[64px]">
                    2x
                  </div>
                  <div className="h-px w-full bg-gray-100 dark:bg-gray-800 -mt-[7px] md:-mt-[9px] md:max-w-[200px]"></div>
                  <span className="block mt-[10px]">
                    Faster Sales Monitoring
                  </span>
                </div>
                <div>
                  <div className="leading-none text-gray-900 dark:text-white text-[40px] md:text-[54px] lg:text-[64px]">
                    98%
                  </div>
                  <div className="h-px w-full bg-gray-100 dark:bg-gray-800 -mt-[7px] md:-mt-[9px] md:max-w-[200px]"></div>
                  <span className="block mt-[10px]">Inventory Accuracy</span>
                </div>
                <div>
                  <div className="leading-none text-gray-900 dark:text-white text-[40px] md:text-[54px] lg:text-[64px]">
                    3x
                  </div>
                  <div className="h-px w-full bg-gray-100 dark:bg-gray-800 -mt-[7px] md:-mt-[9px] md:max-w-[200px]"></div>
                  <span className="block mt-[10px]">
                    Better Conversion Insights
                  </span>
                </div>
                <div>
                  <div className="leading-none text-gray-900 dark:text-white text-[40px] md:text-[54px] lg:text-[64px]">
                    5k+
                  </div>
                  <div className="h-px w-full bg-gray-100 dark:bg-gray-800 -mt-[7px] md:-mt-[9px] md:max-w-[200px]"></div>
                  <span className="block mt-[10px]">
                    Orders Automated Weekly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyTrezo;
