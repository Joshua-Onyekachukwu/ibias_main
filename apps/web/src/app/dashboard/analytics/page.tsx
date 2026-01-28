"use client";

import React from "react";
import AnalyticsOverview from "@/components/Dashboard/Analytics/AnalyticsOverview";
import RealtimeActiveUsers from "@/components/Dashboard/Analytics/RealtimeActiveUsers";
import BrowserUsedByUsers from "@/components/Dashboard/Analytics/BrowserUsedByUsers";
import DeviceSessions from "@/components/Dashboard/Analytics/DeviceSessions";
import Clicks from "@/components/Dashboard/Analytics/Clicks";
import Impressions from "@/components/Dashboard/Analytics/Impressions";
import Sessions from "@/components/Dashboard/Analytics/Sessions";
import SessionsByChannel from "@/components/Dashboard/Analytics/SessionsByChannel";
import ClicksImpressionsByKeywords from "@/components/Dashboard/Analytics/ClicksImpressionsByKeywords";
import TopBrowsingPagesToday from "@/components/Dashboard/Analytics/TopBrowsingPagesToday";
import UsersByCountry from "@/components/Dashboard/Analytics/UsersByCountry";
import Stats from "@/components/Dashboard/Analytics";

export default function AnalyticsPage() {
  return (
    <>
      <div className="mb-[25px]">
        <Stats />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2">
          <AnalyticsOverview />
        </div>
        <div className="lg:col-span-1">
          <RealtimeActiveUsers />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-1">
          <BrowserUsedByUsers />
        </div>
        <div className="lg:col-span-1">
          <DeviceSessions />
        </div>
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 gap-[25px]">
            <Clicks />
            <Impressions />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2">
          <Sessions />
        </div>
        <div className="lg:col-span-1">
          <SessionsByChannel />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2">
          <ClicksImpressionsByKeywords />
        </div>
        <div className="lg:col-span-1">
          <TopBrowsingPagesToday />
        </div>
      </div>
      
      <div className="mb-[25px]">
        <UsersByCountry />
      </div>
    </>
  );
}
