"use client";

import React from "react";
import InsightStream from "@/components/Dashboard/AIInsights/InsightStream";

export default function AIInsightsPage() {
  return (
    <>
      <div className="mb-[25px] flex items-center justify-between">
        <div>
          <h5 className="mb-[5px] text-xl font-bold">AI Intelligence Feed</h5>
          <p className="text-gray-500 mb-0">Real-time analysis and anomalies detected by IBIAS AI.</p>
        </div>
        
        <div className="flex gap-[10px]">
          <select className="bg-white dark:bg-[#0c1427] border border-gray-100 dark:border-[#172036] rounded-md px-[15px] py-[8px] text-sm focus:outline-none focus:border-primary-500">
            <option>All Insights</option>
            <option>High Priority</option>
            <option>Medium Priority</option>
            <option>Low Priority</option>
          </select>
        </div>
      </div>
      
      <InsightStream />
    </>
  );
}
