"use client";

import React from "react";
import RevenueGrowth from "@/components/Dashboard/CRM/RevenueGrowth";
import LeadConversion from "@/components/Dashboard/CRM/LeadConversion";
import TotalOrders from "@/components/Dashboard/CRM/TotalOrders";
import AnnualProfit from "@/components/Dashboard/CRM/AnnualProfit";
import BalanceOverview from "@/components/Dashboard/CRM/BalanceOverview";
import LeadsBySource from "@/components/Dashboard/CRM/LeadsBySource";
import TopPerformers from "@/components/Dashboard/CRM/TopPerformers";
import RecentLeads from "@/components/Dashboard/CRM/RecentLeads";
import SalesReport from "@/components/Dashboard/CRM/SalesReport";
import TopProductsBySales from "@/components/Dashboard/CRM/TopProductsBySales";

export default function CRMPage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[25px] mb-[25px]">
        <div className="lg:col-span-1">
          <RevenueGrowth />
        </div>
        <div className="lg:col-span-1">
          <LeadConversion />
        </div>
        <div className="lg:col-span-1">
          <TotalOrders />
        </div>
        <div className="lg:col-span-1">
          <AnnualProfit />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2">
          <BalanceOverview />
        </div>
        <div className="lg:col-span-1">
          <LeadsBySource />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-1">
          <TopPerformers />
        </div>
        <div className="lg:col-span-2">
          <RecentLeads />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2">
          <SalesReport />
        </div>
        <div className="lg:col-span-1">
          <TopProductsBySales />
        </div>
      </div>
    </>
  );
}
