"use client";

import React from "react";
import Image from "next/image";

const WhyIbias: React.FC = () => {
  return (
    <>
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
            <div className="ltr:lg:-mr-[10px] rtl:lg:-ml-[10px] text-center">
              <Image
                src="/images/why-ibias.png"
                className="inline-block rtl:-scale-x-100 rounded-2xl shadow-lg"
                alt="ibias-analytics-preview"
                width={640}
                height={659}
              />
            </div>
            <div>
              <span className="inline-block py-[4.5px] px-[15px] text-primary-600 bg-primary-50 dark:bg-gray-900 rounded-[100px] mb-[12px] md:!mb-[15px]">
                Why IBIAS?
              </span>
              
              <h2 className="!text-gray-900 dark:!text-white !font-medium md:-tracking-[1px] !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl xl:max-w-[540px] !leading-[1.2] !mb-[11px] md:!mb-[13px] lg:!mb-[15px]">
                Built for Merchants, Not Data Scientists
              </h2>

              <p className="!leading-[1.6]">
                Most analytics tools are too expensive or too complex. IBIAS is simple, affordable, and tells you exactly what to do.
              </p>

              <div className="grid grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-[40px] xl:gap-[50px] mt-[20px] md:mt-[30px] lg:mt-[40px] xl:mt-[60px]">
                <div>
                  <div className="leading-none text-gray-900 dark:text-white text-[40px] md:text-[54px] lg:text-[64px]">
                    60s
                  </div>
                  <div className="h-px w-full bg-gray-100 dark:bg-gray-800 -mt-[7px] md:-mt-[9px] md:max-w-[200px]"></div>
                  <span className="block mt-[10px]">
                    To Get Your First Insight
                  </span>
                </div>
                <div>
                  <div className="leading-none text-gray-900 dark:text-white text-[40px] md:text-[54px] lg:text-[64px]">
                    100%
                  </div>
                  <div className="h-px w-full bg-gray-100 dark:bg-gray-800 -mt-[7px] md:-mt-[9px] md:max-w-[200px]"></div>
                  <span className="block mt-[10px]">Automated Analysis</span>
                </div>
                <div>
                  <div className="leading-none text-gray-900 dark:text-white text-[40px] md:text-[54px] lg:text-[64px]">
                    $0
                  </div>
                  <div className="h-px w-full bg-gray-100 dark:bg-gray-800 -mt-[7px] md:-mt-[9px] md:max-w-[200px]"></div>
                  <span className="block mt-[10px]">
                    Cost for Beta Users
                  </span>
                </div>
                <div>
                  <div className="leading-none text-gray-900 dark:text-white text-[40px] md:text-[54px] lg:text-[64px]">
                    24/7
                  </div>
                  <div className="h-px w-full bg-gray-100 dark:bg-gray-800 -mt-[7px] md:-mt-[9px] md:max-w-[200px]"></div>
                  <span className="block mt-[10px]">
                    Store Monitoring
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

export default WhyIbias;
