"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define types for blog posts
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  url: string;
};

const BlogPostList: React.FC = () => {
  // Blog posts data with TypeScript typing
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "eCommerce Metrics That Matter in 2025",
      excerpt:
        "Understand which numbers to watch and why they matter for growth.",
      image: "/images/blogs/blog1.jpg",
      author: "Ibias",
      date: "April 13, 2025",
      url: "/blog/details",
    },
    {
      id: 2,
      title: "How to Design a Product Page That Converts",
      excerpt: "Boost sales with smarter UX and persuasive content.",
      image: "/images/blogs/blog2.jpg",
      author: "Ibias",
      date: "April 12, 2025",
      url: "/blog/details",
    },
    {
      id: 3,
      title: "Avoid These 5 Inventory Mistakes",
      excerpt: "Save money, reduce churn, and improve operations.",
      image: "/images/blogs/blog3.jpg",
      author: "Ibias",
      date: "April 11, 2025",
      url: "/blog/details",
    },
    {
      id: 4,
      title: "The Ultimate Guide to Multichannel Selling",
      excerpt: "Reach more customers by expanding your sales channels.",
      image: "/images/blogs/blog4.jpg",
      author: "Ibias",
      date: "April 10, 2025",
      url: "/blog/details",
    },
    {
      id: 5,
      title: "Secrets to High-Converting Email Campaigns",
      excerpt: "Learn how to write, design, and send emails that drive action.",
      image: "/images/blogs/blog5.jpg",
      author: "Ibias",
      date: "April 9, 2025",
      url: "/blog/details",
    },
    {
      id: 6,
      title: "Why Your Store Needs Real-Time Analytics",
      excerpt: "Stay ahead of trends and make decisions faster.",
      image: "/images/blogs/blog6.jpg",
      author: "Ibias",
      date: "April 8, 2025",
      url: "/blog/details",
    },
    {
      id: 7,
      title: "How to Build Brand Loyalty That Lasts",
      excerpt: "Turn first-time buyers into lifelong customers.",
      image: "/images/blogs/blog7.jpg",
      author: "Ibias",
      date: "April 7, 2025",
      url: "/blog/details",
    },
    {
      id: 8,
      title: "Understanding Customer Lifetime Value (CLTV)",
      excerpt: "CLTV isn't just a metric—it's a growth multiplier.",
      image: "/images/blogs/blog8.jpg",
      author: "Ibias",
      date: "April 6, 2025",
      url: "/blog/details",
    },
    {
      id: 9,
      title: "The Future of AI in eCommerce",
      excerpt: "Explore how automation and AI will shape online retail.",
      image: "/images/blogs/blog9.jpg",
      author: "Ibias",
      date: "April 5, 2025",
      url: "/blog/details",
    },
  ];

  return (
    <>
      <div className="py-[70px] md:py-[90px] lg:py-[110px] xl:py-[150px] 2xl:py-[180px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="text-center mb-[35px] md:mb-[45px] lg:mb-[55px] xl:mb-[65px]">
            <span className="inline-block py-[4.5px] px-[15px] text-primary-600 bg-primary-50 dark:bg-gray-900 rounded-[100px] mb-[12px]">
              From the Blog
            </span>
            <h2 className="!text-gray-900 dark:!text-white !font-medium md:-tracking-[1px] !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl lg:max-w-[480px] xl:max-w-[540px] mx-auto !leading-[1.2] !mb-[11px] md:!mb-[13px] lg:!mb-[15px]">
              Learn to Sell Smarter
            </h2>
            <p className="!leading-[1.6]">
              Expert tips, growth guides, and eCommerce trends — fresh every
              week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-[#f7f7f7] rounded-[15px] p-[20px] md:p-[30px] xl:p-[40px] dark:bg-[#0a0e19]"
              >
                <Link
                  href={post.url}
                  className="block rounded-[12px] text-center"
                >
                  <Image
                    src={post.image}
                    className="rounded-[12px]"
                    alt={post.title}
                    width={668}
                    height={428}
                  />
                </Link>
                <ul className="mt-[20px] md:mt-[25px] lg:mt-[30px] mb-[15px] lg:mb-[18px]">
                  <li className="relative inline-block ltr:pl-[24px] rtl:pr-[24px] mx-[10px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                    <i className="ri-user-line text-lg absolute top-1/2 ltr:left-0 rtl:right-0 -translate-y-1/2 text-primary-500"></i>
                    By: {post.author}
                  </li>
                  <li className="relative inline-block ltr:pl-[24px] rtl:pr-[24px] mx-[10px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                    <i className="ri-calendar-line text-lg absolute top-1/2 ltr:left-0 rtl:right-0 -translate-y-1/2 text-primary-500"></i>
                    {post.date}
                  </li>
                </ul>
                <h3 className="!text-gray-900 dark:!text-white !font-medium !text-lg md:!text-[20px] lg:!text-[22px] xl:!text-xl !leading-[1.2] !mb-[15px] lg:!mb-[18px]">
                  <Link
                    href={post.url}
                    className="text-gray-900 dark:text-white transition-all hover:text-primary-500"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="!leading-[1.6]">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostList;
