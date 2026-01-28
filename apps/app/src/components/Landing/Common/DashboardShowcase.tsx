"use client";

import React from "react";
import Image from "next/image";

// Define the type for our feature points
type FeaturePoint = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const DashboardShowcase: React.FC = () => {
  // Feature points data array with TypeScript typing
  const featurePoints: FeaturePoint[] = [
    {
      id: 1,
      icon: "/images/icons/check.svg",
      title: "Real-Time Insights",
      description: "View live sales, orders, and traffic without delay.",
    },
    {
      id: 2,
      icon: "/images/icons/check.svg",
      title: "Sales Analytics",
      description: "Track revenue, conversion rates, and product performance.",
    },
    {
      id: 3,
      icon: "/images/icons/check.svg",
      title: "Inventory Monitoring",
      description: "Get automatic alerts for low or out-of-stock items.",
    },
    {
      id: 4,
      icon: "/images/icons/check.svg",
      title: "Customer Behavior",
      description: "Understand how shoppers browse, buy, and return.",
    },
  ];

  return (
    <>
      <div className="pt-[70px] md:pt-[90px] lg:pt-[110px] xl:pt-[150px] 2xl:pt-[180px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
            <div>
              <span className="inline-block py-[4.5px] px-[15px] text-primary-600 bg-primary-50 dark:bg-gray-900 rounded-[100px] mb-[12px] md:!mb-[15px]">
                Dashboard Showcase
              </span>

              <h2 className="!text-gray-900 dark:!text-white !font-medium md:-tracking-[1px] !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl xl:max-w-[540px] !leading-[1.2] !mb-[11px] md:!mb-[13px] lg:!mb-[15px]">
                See Trezo in Action
              </h2>

              <p className="!leading-[1.6]">
                A live view of your store&apos;s performance — all in one clean
                dashboard.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-[40px] xl:gap-[50px] mt-[20px] md:mt-[30px] lg:mt-[40px] xl:mt-[70px]">
                {featurePoints.map((feature) => (
                  <div
                    key={feature.id}
                    className="relative ltr:pl-[35px] rtl:pr-[35px] ltr:xl:pl-[45px] rtl:xl:pr-[45px]"
                  >
                    <div className="absolute top-[4px] ltr:left-0 rtl:right-0">
                      <Image
                        src={feature.icon}
                        alt="check"
                        width={25}
                        height={25}
                      />
                    </div>
                    <h3 className="!text-gray-900 dark:!text-white !font-medium !text-lg md:!text-[20px] lg:!text-[22px] xl:!text-xl !leading-[1.2] !mb-[8px]">
                      {feature.title}
                    </h3>
                    <p className="!leading-[1.6]">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="xl:max-w-[521px] ltr:xl:ml-auto rtl:xl:mr-auto text-center">
              <Image
                src="/images/dashboard-showcase.jpg"
                className="inline-block rtl:-scale-x-100"
                alt="dashboard-showcase-image"
                width={1042}
                height={1304}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardShowcase;
