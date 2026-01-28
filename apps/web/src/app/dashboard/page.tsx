"use client";

import React from "react";
import Welcome from "@/components/Dashboard/eCommerce/Welcome";
import TotalSales from "@/components/Dashboard/eCommerce/TotalSales";
import TotalOrders from "@/components/Dashboard/eCommerce/TotalOrders";
import TotalCustomers from "@/components/Dashboard/eCommerce/TotalCustomers";
import TotalRevenue from "@/components/Dashboard/eCommerce/TotalRevenue";
import SalesByLocations from "@/components/Dashboard/eCommerce/SalesByLocations";
import TopSellingProducts from "@/components/Dashboard/eCommerce/TopSellingProducts";
import RecentOrders from "@/components/Dashboard/eCommerce/RecentOrders";
import OrderSummary from "@/components/Dashboard/eCommerce/OrderSummary";
import RecentTransaction from "@/components/Dashboard/eCommerce/RecentTransaction";
import ReturningCustomerRate from "@/components/Dashboard/eCommerce/ReturningCustomerRate";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2">
          <Welcome />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] mb-[25px]">
            <TotalOrders />
            <TotalCustomers />
            <TotalRevenue />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-[25px] mb-[25px]">
            <RecentOrders />
          </div>
        </div>

        <div className="lg:col-span-1">
          <TotalSales />
          
          <div className="mb-[25px]">
             <OrderSummary />
          </div>
         
          <div className="mb-[25px]">
            <RecentTransaction />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2">
          <TopSellingProducts />
        </div>

        <div className="lg:col-span-1">
          <SalesByLocations />
        </div>
      </div>
      
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
          <div className="lg:col-span-2">
             <ReturningCustomerRate />
          </div>
       </div>
    </>
  );
}
