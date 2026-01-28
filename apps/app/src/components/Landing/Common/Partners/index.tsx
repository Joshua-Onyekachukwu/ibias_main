"use client";

import React from "react";
import Image from "next/image";
import partnersData from "./partners.json";

interface Partner {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PartnersData {
  description: string;
  partners: Partner[];
}

const Partners: React.FC = () => {
  const { description, partners } = partnersData as PartnersData;

  return (
    <>
      <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px] relative z-[1]">
        <span className="block text-[16px] md:text-[18px] lg:text-[20px] font-medium text-center text-gray-700 dark:text-gray-100 mb-[30px] md:mb-[40px] lg:mb-[50px]">
          {description}
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:flex gap-[20px] md:gap-[25px] items-center justify-between">
          {partners.map((partner) => (
            <Image
              key={partner.id}
              src={partner.src}
              alt={partner.alt}
              className="w-auto h-auto inline-block dark:invert"
              width={145}
              height={35}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
