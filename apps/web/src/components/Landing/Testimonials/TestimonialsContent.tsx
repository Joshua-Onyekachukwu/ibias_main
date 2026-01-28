"use client";

import React from "react";
import Image from "next/image"; 

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

const TestimonialsContent: React.FC = () => {
  // Testimonial data array with TypeScript typing
  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 5,
      content:
        "Ibias has completely transformed how we run our store. The real-time dashboard gives us a clear view of sales and stock, and the marketing tools helped us scale faster than expected. It's like having a full team behind us.",
      author: {
        name: "Alex H.",
        role: "Apparel Store Owner",
        image: "/images/users/user1.jpg",
      },
    },
    {
      id: 2,
      rating: 5,
      content:
        "We were juggling multiple tools for sales tracking, email, & product analytics — until we found Ibias. Now everything's in one place. It saves time, reduces errors, & helps us grow smarter. Highly recommended for serious store owners.",
      author: {
        name: "Monica R.",
        role: "Shopify Seller",
        image: "/images/users/user2.jpg",
      },
    },
    {
      id: 3,
      rating: 5,
      content:
        "I love how intuitive Ibias is. Even my team members with no tech background can use it easily. The analytics are easy to digest, and the automation features are powerful. We've seen a big jump in engagement and retention.",
      author: {
        name: "Daniel K.",
        role: "Fitness Gear Retailer",
        image: "/images/users/user3.jpg",
      },
    },
    {
      id: 4,
      rating: 5,
      content:
        "The onboarding was quick and easy. Within a day, we had insights we never thought possible. Ibias’s integrations with our existing tools were seamless and incredibly useful.",
      author: {
        name: "Sara M.",
        role: "Digital Goods Entrepreneur",
        image: "/images/users/user4.jpg",
      },
    },
    {
      id: 5,
      rating: 5,
      content:
        "Switching to Ibias was a game changer. From inventory tracking to customer analytics, it's all smooth and centralized. We've doubled our efficiency in just 3 months.",
      author: {
        name: "Jason L.",
        role: "Electronics Retail Manager",
        image: "/images/users/user5.jpg",
      },
    },
    {
      id: 6,
      rating: 5,
      content:
        "Ibias feels like it was made for us. The automation features alone save us hours every week. We now focus more on customer service while the system takes care of the rest.",
      author: {
        name: "Priya D.",
        role: "Home Decor Brand Founder",
        image: "/images/users/user6.jpg",
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
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px] relative z-[1]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="text-center mb-[35px] md:mb-[45px] lg:mb-[55px] xl:mb-[65px]">
            <span className="inline-block py-[4.5px] px-[15px] text-primary-600 bg-primary-50 dark:bg-gray-900 rounded-[100px] mb-[12px]">
              Customer Testimonials
            </span>
            <h2 className="!text-gray-900 dark:!text-white !font-medium md:-tracking-[1px] !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl lg:max-w-[480px] xl:max-w-[540px] mx-auto !leading-[1.2] !mb-[11px] md:!mb-[13px] lg:!mb-[15px]">
              What Store Owners Say About Ibias
            </h2>
            <p className="!leading-[1.6]">
              Real feedback from real users — building better eCommerce with
              Ibias.
            </p>
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

export default TestimonialsContent;
