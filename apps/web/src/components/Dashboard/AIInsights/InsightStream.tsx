"use client";

import React from "react";

const insights = [
  {
    id: 1,
    type: "high",
    title: "Checkout Abandonment Spike",
    description: "Cart abandonment rate increased by 15% in the last 4 hours. Most users drop off at the 'Shipping' step.",
    date: "10 mins ago",
    icon: "warning",
    iconColor: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    id: 2,
    type: "medium",
    title: "New Traffic Source Detected",
    description: "Unexpected spike in traffic from 'TikTok'. Conversion rate is 2.5% (above average).",
    date: "2 hours ago",
    icon: "trending_up",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 3,
    type: "low",
    title: "Inventory Alert: 'Summer Dress'",
    description: "Stock levels are low (5 units left). Reorder recommended within 2 days.",
    date: "5 hours ago",
    icon: "inventory_2",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    id: 4,
    type: "info",
    title: "Weekly Performance Summary",
    description: "Revenue is up 12% compared to last week. Top performing category: 'Accessories'.",
    date: "1 day ago",
    icon: "insights",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

const InsightStream: React.FC = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {insights.map((insight) => (
        <div 
          key={insight.id} 
          className={`ibias-card bg-white dark:bg-[#0c1427] p-[25px] rounded-md border-l-4 ${insight.borderColor} relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg`}
        >
          <div className="flex items-start gap-[20px]">
            <div className={`w-[50px] h-[50px] rounded-full flex items-center justify-center shrink-0 ${insight.bgColor}`}>
              <i className={`material-symbols-outlined text-[24px] ${insight.iconColor}`}>
                {insight.icon}
              </i>
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-[5px]">
                <h5 className="text-lg font-bold mb-0 text-gray-900 dark:text-white">
                  {insight.title}
                </h5>
                <span className="text-xs text-gray-500 font-medium bg-gray-100 dark:bg-[#15203c] px-[10px] py-[4px] rounded-full">
                  {insight.date}
                </span>
              </div>
              
              <p className="text-gray-500 dark:text-gray-400 mb-[15px] leading-relaxed max-w-[800px]">
                {insight.description}
              </p>
              
              <div className="flex gap-[15px]">
                <button className="text-primary-500 text-sm font-semibold hover:text-primary-600 flex items-center gap-[5px]">
                  <i className="material-symbols-outlined text-[18px]">add_task</i>
                  Create Task
                </button>
                <button className="text-gray-500 text-sm font-semibold hover:text-gray-700 flex items-center gap-[5px]">
                  <i className="material-symbols-outlined text-[18px]">visibility_off</i>
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InsightStream;
