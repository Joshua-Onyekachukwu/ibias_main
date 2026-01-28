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
      title: "Free Trial",
      price: "$0",
      period: "/monthly",
      description: "New store owners exploring Trezo",
      features: [
        { text: "Access to basic dashboard", icon: "/images/icons/check.svg" },
        { text: "Real-time sales tracking", icon: "/images/icons/check.svg" },
        { text: "Inventory overview", icon: "/images/icons/check.svg" },
        { text: "Up to 50 products", icon: "/images/icons/check.svg" },
        { text: "1 connected store", icon: "/images/icons/check.svg" },
        { text: "Email support", icon: "/images/icons/check.svg" },
        { text: "No credit card required", icon: "/images/icons/check.svg" },
      ],
      buttonText: "Get Started",
      buttonLink: "#",
    },
    {
      id: 2,
      title: "Pro",
      price: "$39",
      period: "/monthly",
      description: "Growing businesses that need more control",
      features: [
        { text: "Everything in Free", icon: "/images/icons/check.svg" },
        {
          text: "Unlimited products & orders",
          icon: "/images/icons/check.svg",
        },
        { text: "Multi-store dashboard", icon: "/images/icons/check.svg" },
        { text: "Marketing automation tools", icon: "/images/icons/check.svg" },
        { text: "Custom email campaigns", icon: "/images/icons/check.svg" },
        { text: "Analytics & reports", icon: "/images/icons/check.svg" },
        { text: "Chat support", icon: "/images/icons/check.svg" },
      ],
      buttonText: "Get Started",
      buttonLink: "#",
      highlight: true,
    },
    {
      id: 3,
      title: "Enterprise",
      price: "$79",
      period: "/monthly",
      description: "High-volume sellers & teams",
      features: [
        { text: "Everything in Pro", icon: "/images/icons/check.svg" },
        { text: "Dedicated success manager", icon: "/images/icons/check.svg" },
        { text: "API access & integrations", icon: "/images/icons/check.svg" },
        {
          text: "Advanced analytics & forecasting",
          icon: "/images/icons/check.svg",
        },
        { text: "Priority support", icon: "/images/icons/check.svg" },
        { text: "Team roles & permissions", icon: "/images/icons/check.svg" },
        {
          text: "SLA-backed uptime guarantee",
          icon: "/images/icons/check.svg",
        },
      ],
      buttonText: "Get Started",
      buttonLink: "#",
    },
  ];

  return (
    <>
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px] bg-[#f7f7f7] dark:bg-[#0a0e19]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="text-center mb-[35px] md:mb-[45px] lg:mb-[55px] xl:mb-[65px]">
            <span className="inline-block py-[4.5px] px-[15px] text-primary-600 bg-primary-50 dark:bg-gray-900 rounded-[100px] mb-[12px]">
              Pricing Plans
            </span>
            <h2 className="!text-gray-900 dark:!text-white !font-medium md:-tracking-[1px] !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl lg:max-w-[480px] xl:max-w-[540px] mx-auto !leading-[1.2] !mb-[11px] md:!mb-[13px] lg:!mb-[15px]">
              Flexible Plans That Scale With You
            </h2>
            <p className="!leading-[1.6]">
              Start free and upgrade as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`group bg-white dark:bg-dark rounded-[15px] px-[20px] md:px-[30px] xl:px-[50px] py-[30px] md:py-[40px] xl:py-[60px] relative z-[1] ${
                  plan.highlight ? "border-2 border-primary-500" : ""
                }`}
              >
                <span className="inline-block py-[3.5px] px-[20px] border border-primary-600 text-primary-600 group-hover:bg-primary-100 dark:bg-gray-900 rounded-[100px] mb-[20px] md:mb-[25px] transition-all">
                  {plan.title}
                </span>

                <div className="leading-none text-gray-700 dark:text-gray-100 text-3xl md:text-5xl mb-[17px]">
                  {plan.price}
                  <span className="text-base md:text-[15px] lg:text-md font-normal text-gray-500 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>

                <p className="!leading-[1.6]">{plan.description}</p>

                <div className="h-px w-full bg-gray-100 dark:bg-gray-800 my-[20px]"></div>

                <span className="block font-medium text-gray-900 dark:text-white md:text-[15px] lg:text-md">
                  Features:
                </span>

                <ul className="mt-[20px] mb-[30px] md:mb-[40px] lg:mb-[50px]">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="md:text-[15px] xl:text-md relative ltr:pl-[32px] rtl:pr-[32px] mb-[12px] last:mb-0"
                    >
                      <Image
                        src={feature.icon}
                        className="w-[22px] inline-block absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"
                        alt="check"
                        width={22}
                        height={22}
                      />
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.buttonLink}
                  className="block w-full text-center py-[9px] px-[25px] md:py-[10.5px] md:px-[30px] font-medium text-primary-500 rounded-[100px] border border-primary-500 transition-all group-hover:bg-primary-500 group-hover:border-primary-500 group-hover:text-white"
                >
                  {plan.buttonText}
                </Link>

                <div className="opacity-0 transition-all group-hover:opacity-100 absolute -z-[1] top-[30px] ltr:right-[30px] rtl:left-[30px]">
                  <Image
                    src="/images/shapes/shape5.png"
                    alt="shape"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlans;
