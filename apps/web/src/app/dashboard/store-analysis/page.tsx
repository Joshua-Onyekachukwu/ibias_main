"use client";

import React from "react";
import Stats from "@/components/Dashboard/StoreAnalysis/Stats";
import CustomerVisits from "@/components/Dashboard/StoreAnalysis/CustomerVisits";
import TotalRevenue from "@/components/Dashboard/StoreAnalysis/GrossRevenue"; // Renaming for clarity if needed, or check component name
import SalesByCategory from "@/components/Dashboard/StoreAnalysis/SalesByCategory";
import SalesByGender from "@/components/Dashboard/StoreAnalysis/SalesByGender";
import TopSellingProducts from "@/components/Dashboard/StoreAnalysis/TopSellingProducts";
import RecentSales from "@/components/Dashboard/StoreAnalysis/RecentSales";
import SalesThisMonth from "@/components/Dashboard/StoreAnalysis/SalesThisMonth";
import StockAlerts from "@/components/Dashboard/StoreAnalysis/StockAlerts";

export default function StoreAnalysisPage() {
  return (
    <>
      <div className="mb-[25px]">
        <Stats />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2">
          <CustomerVisits />
        </div>
        <div className="lg:col-span-1">
          <TotalRevenue />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-1">
          <SalesByCategory />
        </div>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
             <SalesByGender />
             <SalesThisMonth />
          </div>
        </div>
      </div>
      
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2">
          <RecentSales />
        </div>
        <div className="lg:col-span-1">
          <TopSellingProducts />
        </div>
      </div>

       <div className="mb-[25px]">
          <StockAlerts />
       </div>
    </>
  );
}
