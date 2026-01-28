"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the type for our testimonials
type Testimonial = {
  id: number;
  rating: number;
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
};

const Testimonials: React.FC = () => {
  // Testimonial data array with TypeScript typing
  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 5,
      content:
        "IBIAS found $3k in wasted ad spend in my first week. The 'Growth Brief' is literally the first thing I read every Monday morning now.",
      author: {
        name: "Sarah Jenkins",
        role: "Founder, Glow Skin",
        image: "/images/users/user1.jpg",
      },
    },
    {
      id: 2,
      rating: 5,
      content:
        "I used to spend 4 hours a week on spreadsheets. IBIAS does it in seconds. The inventory alerts alone saved me from a stockout last Black Friday.",
      author: {
        name: "Marcus Chen",
        role: "Owner, Urban Gear",
        image: "/images/users/user2.jpg",
      },
    },
    {
      id: 3,
      rating: 5,
      content:
        "Finally, an analytics tool that doesn't need a PhD to understand. It just tells me what to do. Simple, fast, effective.",
      author: {
        name: "Jessica T.",
        role: "Marketing Lead",
        image: "/images/users/user3.jpg",
      },
    },
  ];

  // Helper function to render star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <i
        key={i}
        className={`ri-star-fill ${
          i < rating ? "text-orange-400" : "text-gray-300"
        }`}
      ></i>
    ));
  };

  return (
    <>
      <div className="pb-[70px] md:pb-[90px] lg:pb-[110px] xl:pb-[150px] 2xl:pb-[180px] relative z-[1]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px] md:gap-[22px] mb-[35px] md:mb-[45px] lg:mb-[55px] xl:mb-[65px] items-center">
            <div>
              <span className="inline-block py-[4.5px] px-[15px] text-primary-600 bg-primary-50 dark:bg-gray-900 rounded-[100px] mb-[12px]">
                Beta Feedback
              </span>
              <h2 className="!text-gray-900 dark:!text-white !font-medium md:-tracking-[1px] !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl lg:max-w-[480px] xl:max-w-[540px] !leading-[1.2] !mb-[11px] md:!mb-[13px] lg:!mb-[15px]">
                Merchants Love IBIAS
              </h2>
              <p className="!leading-[1.6]">
                See why smart store owners are switching to AI-first analytics.
              </p>
            </div>
            <div className="ltr:lg:text-right rtl:lg:text-left">
              <Link
                href="/auth/signup"
                className="inline-block py-[9px] px-[25px] md:py-[10.5px] md:px-[30px] font-medium text-white bg-primary-500 rounded-[100px] border border-primary-500 transition-all hover:bg-primary-600 hover:border-primary-600"
              >
                Join the Beta
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="px-[20px] py-[30px] md:px-[30px] md:py-[40px] lg:px-[40px] lg:py-[50px] xl:px-[50px] xl:py-[60px] bg-white dark:bg-[#0a0e19] rounded-[15px] relative z-[1]"
              >
                <div className="flex items-center leading-none text-md lg:text-lg gap-[3px] mb-[18px] md:mb-[22px] lg:mb-[30px]">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="md:text-[15px] lg:text-md !leading-[1.6]">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-[12px] mt-[20px] md:mt-[25px] lg:mt-[40px] xl:mt-[50px]">
                  <Image
                    src={testimonial.author.image}
                    className="rounded-full w-[42px]"
                    alt={`${testimonial.author.name} testimonial`}
                    width={42}
                    height={42}
                  />
                  <div>
                    <h5 className="!text-base !mb-[3px] !font-semibold !text-gray-800 dark:!text-gray-100">
                      {testimonial.author.name}
                    </h5>
                    <span className="block">{testimonial.author.role}</span>
                  </div>
                </div>
                <div
                  className="rounded-[15px] absolute top-0 left-0 right-0 bottom-0 -z-[1] dark:hidden"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), linear-gradient(180deg, #FAF5FF 0%, #ECF0FF 100%)",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
