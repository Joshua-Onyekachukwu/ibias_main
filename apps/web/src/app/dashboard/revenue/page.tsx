"use client";

import React from "react";
import Stats from "@/components/Dashboard/Revenue/Stats";
import RealTimeSales from "@/components/Dashboard/Revenue/RealTimeSales";
import SalesOverview from "@/components/Dashboard/Revenue/SalesOverview";
import RecentOrders from "@/components/Dashboard/Revenue/RecentOrders";
import SalesByLocations from "@/components/Dashboard/Revenue/SalesByLocations";
import GrossEarnings from "@/components/Dashboard/Revenue/GrossEarnings";
import TransactionHistory from "@/components/Dashboard/Revenue/TransactionHistory";
import RecentEarnings from "@/components/Dashboard/Revenue/RecentEarnings";

export default function RevenuePage() {
  return (
    <>
      <div className="mb-[25px]">
        <Stats />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2">
          <SalesOverview />
        </div>
        <div className="lg:col-span-1">
          <RealTimeSales />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-1">
          <SalesByLocations />
        </div>
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-1">
          <GrossEarnings />
        </div>
        <div className="lg:col-span-1">
          <TransactionHistory />
        </div>
        <div className="lg:col-span-1">
          <RecentEarnings />
        </div>
      </div>
    </>
  );
}
