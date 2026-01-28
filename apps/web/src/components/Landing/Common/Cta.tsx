"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cta: React.FC = () => {
  return (
    <>
      <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
        <div
          className="rounded-[15px] px-[20px] md:px-[30px] lg:px-[50px] py-[70px] md:py-[90px] lg:py-[110px] xl:py-[140px] text-center relative z-[1]"
          style={{
            background:
              "linear-gradient(278deg, #757DFF 23.88%, #4936F5 94.06%)",
          }}
        >
          <h2 className="!text-white !font-medium md:-tracking-[1px] !text-xl md:!text-3xl lg:!text-4xl xl:!text-5xl !leading-[1.2] !mb-[11px] md:!mb-[13px] lg:!mb-[15px]">
            Ready to stop guessing?
          </h2>

          <p className="text-white !leading-[1.6]">
            Join the smart merchants who use AI to run their stores.
            <br />
            Free for beta users.
          </p>

          <div className="-mt-[8px] md:mt-[30px] lg:mt-[35px] xl:mt-[40px]">
            <Link
              href="/auth/signup"
              className="inline-block py-[9px] px-[25px] md:py-[11.5px] md:px-[30px] font-medium text-primary-500 bg-white rounded-[100px] border border-primary-500 transition-all hover:bg-primary-600 hover:text-white hover:border-primary-600 mx-[5px] mt-[15px] md:mt-0"
            >
              Start Free Trial
            </Link>

            <Link
              href="mailto:founder@ibias.ai"
              className="inline-block py-[9px] px-[25px] md:py-[11.5px] md:px-[30px] font-medium text-white rounded-[100px] border border-white transition-all hover:bg-primary-600 hover:border-primary-600 mx-[5px] mt-[15px] md:mt-0"
            >
              Contact Us
            </Link>
          </div>

          {/* Shape Images */}
          <div className="absolute bottom-[20%] ltr:left-[6.5%] rtl:right-[6.5%] -z-[1] hidden lg:block">
            <Image
              src="/images/shapes/shape1.png"
              alt="shape"
              width={87}
              height={87}
            />
          </div>
          <div className="absolute bottom-[43%] ltr:left-[14%] rtl:right-[14%] -z-[1] hidden lg:block">
            <Image
              src="/images/shapes/shape2.png"
              alt="shape"
              width={50}
              height={50}
            />
          </div>
          <div className="absolute top-[20%] ltr:right-[6.5%] rtl:left-[6.5%] -z-[1] hidden lg:block">
            <Image
              src="/images/shapes/shape3.png"
              alt="shape"
              width={87}
              height={87}
            />
          </div>
          <div className="absolute top-[43%] ltr:right-[14%] rtl:left-[14%] -z-[1] hidden lg:block">
            <Image
              src="/images/shapes/shape4.png"
              alt="shape"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
