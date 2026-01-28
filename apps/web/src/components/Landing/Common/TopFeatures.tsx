"use client";

import React from "react";
import Image from "next/image";

// Define the type for our feature items
type FeatureItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
  offset?: boolean; // Optional property for the vertical offset
};

const TopFeatures: React.FC = () => {
  // Feature data array with TypeScript typing
  const features: FeatureItem[] = [
    {
      id: 1,
      icon: "/images/icons/connect.svg",
      title: "1. Connect Store",
      description:
        "Securely connect Shopify or WooCommerce in 1 click. We pull the last 30 days of data instantly.",
      offset: true,
    },
    {
      id: 2,
      icon: "/images/icons/bar-chart.svg",
      title: "2. AI Analysis",
      description:
        "Our engine analyzes trends, spikes, and drops to find *why* your revenue changed.",
    },
    {
      id: 3,
      icon: "/images/icons/creativity.svg",
      title: "3. Get Strategy",
      description:
        "Receive a prioritized checklist: 'Reorder X', 'Discount Y', 'Email Z'.",
      offset: true,
    },
    {
      id: 4,
      icon: "/images/icons/check.svg",
      title: "4. Grow Revenue",
      description: "Execute the plan and watch your metrics improve week over week.",
    },
  ];

  return (
    <>
      <div id="how-it-works" className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px] bg-[#f7f7f7] dark:bg-[#0a0e19]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="text-center mb-[35px] md:mb-[45px] lg:mb-[55px] xl:mb-[65px]">
            <span className="inline-block py-[4.5px] px-[15px] text-primary-600 bg-primary-50 dark:bg-gray-900 rounded-[100px] mb-[12px]">
              How It Works
            </span>
            <h2 className="!text-gray-900 dark:!text-white !font-medium md:-tracking-[1px] !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl lg:max-w-[480px] xl:max-w-[540px] mx-auto !leading-[1.2] !mb-[11px] md:!mb-[13px] lg:!mb-[15px]">
              From Data to Decision in 60 Seconds
            </h2>
            <p className="!leading-[1.6]">
              Stop drowning in spreadsheets. Let IBIAS do the heavy lifting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px]">
            {features.map((feature) => (
              <div key={feature.id}>
                <div
                  className={`bg-white dark:bg-gray-900 rounded-[15px] md:p-[15px] lg:p-0 xl:p-[15px] group ${
                    feature.offset ? "lg:mt-[35px]" : ""
                  }`}
                >
                  <div className="group-hover:bg-[#f7f7f7] group-hover:dark:bg-gray-800 rounded-[12px] px-[20px] py-[25px] md:py-[40px] relative z-[1] transition-all">
                    <div className="opacity-0 transition-all group-hover:opacity-100 absolute -z-[1] top-[20px] ltr:right-[20px] rtl:left-[20px]">
                      <Image
                        src="/images/shapes/shape5.png"
                        alt="shape"
                        width={80}
                        height={80}
                      />
                    </div>
                    <Image
                      src={feature.icon}
                      alt={feature.title.toLowerCase().replace(" ", "-")}
                      width={60}
                      height={60}
                    />
                    <h3 className="!text-gray-900 dark:!text-white !font-medium !text-lg md:!text-[20px] lg:!text-[22px] xl:!text-xl !leading-[1.2] !mb-[15px] md:!mb-[20px] lg:!mb-[25px] mt-[25px] md:mt-[40px] lg:mt-[65px]">
                      {feature.title}
                    </h3>
                    <p className="!leading-[1.6]">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFeatures;
