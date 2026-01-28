"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define types for pricing plans
type PricingFeature = {
  text: string;
  icon: string;
};

type PricingPlan = {
  id: number;
  title: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonLink: string;
  highlight?: boolean;
};

const PricingPlans: React.FC = () => {
  // Pricing plans data with TypeScript typing
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      title: "Beta Access",
      price: "Free",
      period: "/ limited time",
      description: "Join the waitlist and get early access to IBIAS.",
      features: [
        { text: "Connect 1 Store", icon: "/images/icons/check.svg" },
        { text: "Last 30 days data analysis", icon: "/images/icons/check.svg" },
        { text: "Weekly AI Growth Brief", icon: "/images/icons/check.svg" },
        { text: "Top Products Insights", icon: "/images/icons/check.svg" },
        { text: "Basic Inventory Alerts", icon: "/images/icons/check.svg" },
        { text: "Community Support", icon: "/images/icons/check.svg" },
      ],
      buttonText: "Join Beta Waitlist",
      buttonLink: "/auth/signup",
      highlight: false,
    },
    {
      id: 2,
      title: "Growth",
      price: "$49",
      period: "/ monthly",
      description: "For serious merchants scaling past $10k/mo.",
      features: [
        { text: "Connect up to 3 Stores", icon: "/images/icons/check.svg" },
        { text: "Unlimited Historical Data", icon: "/images/icons/check.svg" },
        { text: "Daily AI Strategy Updates", icon: "/images/icons/check.svg" },
        { text: "Competitor Benchmarking", icon: "/images/icons/check.svg" },
        { text: "Advanced Inventory Forecasting", icon: "/images/icons/check.svg" },
        { text: "Priority Email Support", icon: "/images/icons/check.svg" },
      ],
      buttonText: "Start Free Trial",
      buttonLink: "/auth/signup",
      highlight: true,
    },
    {
      id: 3,
      title: "Scale",
      price: "$149",
      period: "/ monthly",
      description: "For high-volume brands needing custom intelligence.",
      features: [
        { text: "Connect Unlimited Stores", icon: "/images/icons/check.svg" },
        { text: "Real-time Data Sync", icon: "/images/icons/check.svg" },
        { text: "Custom AI Models", icon: "/images/icons/check.svg" },
        { text: "Dedicated Success Manager", icon: "/images/icons/check.svg" },
        { text: "API Access", icon: "/images/icons/check.svg" },
        { text: "White-label Reports", icon: "/images/icons/check.svg" },
      ],
      buttonText: "Contact Sales",
      buttonLink: "#",
      highlight: false,
    },
  ];

  return (
    <>
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px] bg-[#f7f7f7] dark:bg-[#0a0e19]" id="pricing">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="text-center mb-[35px] md:mb-[45px] lg:mb-[55px] xl:mb-[65px]">
            <span className="inline-block py-[4.5px] px-[15px] text-primary-600 bg-primary-50 dark:bg-gray-900 rounded-[100px] mb-[12px]">
              Simple Pricing
            </span>
            <h2 className="!text-gray-900 dark:!text-white !font-medium md:-tracking-[1px] !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl lg:max-w-[480px] xl:max-w-[540px] mx-auto !leading-[1.2] !mb-[11px] md:!mb-[13px] lg:!mb-[15px]">
              Start for Free. Scale when you&apos;re ready.
            </h2>
            <p className="!leading-[1.6]">
              We are currently in public beta. Join now to lock in free access.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] max-w-[1200px] mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`group bg-white dark:bg-dark rounded-[15px] px-[20px] md:px-[30px] xl:px-[40px] py-[30px] md:py-[40px] xl:py-[50px] relative z-[1] ${
                  plan.highlight ? "border-2 border-primary-500 shadow-xl scale-105" : "border border-transparent"
                }`}
              >
                {plan.highlight && (
                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                     Most Popular
                   </div>
                )}
                
                <span className={`inline-block py-[3.5px] px-[20px] border rounded-[100px] mb-[20px] md:mb-[25px] transition-all ${
                    plan.highlight 
                    ? "bg-primary-100 text-primary-600 border-primary-600"
                    : "border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-300"
                }`}>
                  {plan.title}
                </span>

                <div className="leading-none text-gray-700 dark:text-gray-100 text-3xl md:text-4xl xl:text-5xl mb-[17px]">
                  {plan.price}
                  <span className="text-base md:text-[15px] lg:text-md font-normal text-gray-500 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>

                <p className="!leading-[1.6] text-sm md:text-base h-[50px]">{plan.description}</p>

                <div className="h-px w-full bg-gray-100 dark:bg-gray-800 my-[20px]"></div>

                <span className="block font-medium text-gray-900 dark:text-white md:text-[15px] lg:text-md">
                  What&apos;s included:
                </span>

                <ul className="mt-[20px] mb-[30px] md:mb-[40px] lg:mb-[50px]">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="md:text-[14px] xl:text-[15px] relative ltr:pl-[30px] rtl:pr-[30px] mb-[12px] last:mb-0 text-gray-600 dark:text-gray-400"
                    >
                      <Image
                        src={feature.icon}
                        className="w-[20px] inline-block absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"
                        alt="check"
                        width={20}
                        height={20}
                      />
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.buttonLink}
                  className={`block w-full text-center py-[9px] px-[25px] md:py-[10.5px] md:px-[30px] font-medium rounded-[100px] border transition-all ${
                      plan.highlight 
                      ? "bg-primary-500 text-white border-primary-500 hover:bg-primary-600 hover:border-primary-600" 
                      : "text-primary-500 border-primary-500 hover:bg-primary-500 hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlans;
