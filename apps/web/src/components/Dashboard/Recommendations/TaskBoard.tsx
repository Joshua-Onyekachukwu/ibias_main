"use client";

import React, { useState } from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  impact: string;
  impactColor: string;
  status: "new" | "in_progress" | "completed" | "ignored";
  date: string;
}

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Increase Ad Spend on 'Summer Dress'",
    description: "Traffic is high but conversion is low. Retargeting needed.",
    impact: "+$500 Revenue",
    impactColor: "bg-green-100 text-green-700",
    status: "new",
    date: "2 mins ago"
  },
  {
    id: "2",
    title: "Restock 'Blue Denim Jeans'",
    description: "Stock level is below 10 units. High demand predicted.",
    impact: "Prevent Stockout",
    impactColor: "bg-red-100 text-red-700",
    status: "new",
    date: "1 hour ago"
  },
  {
    id: "3",
    title: "Email Campaign for 'VIP' Segment",
    description: "VIP segment hasn't purchased in 30 days.",
    impact: "Retention Boost",
    impactColor: "bg-blue-100 text-blue-700",
    status: "in_progress",
    date: "1 day ago"
  },
  {
    id: "4",
    title: "Fix Broken Link on Checkout",
    description: "404 error detected on payment gateway redirect.",
    impact: "Critical Fix",
    impactColor: "bg-red-100 text-red-700",
    status: "completed",
    date: "2 days ago"
  }
];

const TaskBoard: React.FC = () => {
  const [tasks] = useState<Task[]>(initialTasks);

  const getTasksByStatus = (status: Task["status"]) => {
    return tasks.filter((task) => task.status === status);
  };

  const columns = [
    { id: "new", title: "New Recommendations", color: "border-l-4 border-blue-500" },
    { id: "in_progress", title: "In Progress", color: "border-l-4 border-yellow-500" },
    { id: "completed", title: "Completed", color: "border-l-4 border-green-500" },
    { id: "ignored", title: "Ignored", color: "border-l-4 border-gray-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px]">
      {columns.map((column) => (
        <div key={column.id} className="flex flex-col gap-[20px]">
          <div className={`ibias-card bg-white dark:bg-[#0c1427] p-[15px] rounded-md ${column.color}`}>
            <h6 className="mb-0 text-md font-semibold">{column.title}</h6>
            <span className="text-gray-500 text-xs">
              {getTasksByStatus(column.id as Task["status"]).length} Tasks
            </span>
          </div>

          <div className="flex flex-col gap-[15px]">
            {getTasksByStatus(column.id as Task["status"]).map((task) => (
              <div
                key={task.id}
                className="ibias-card bg-white dark:bg-[#0c1427] p-[20px] rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex justify-between items-start mb-[10px]">
                  <span className={`text-xs px-[8px] py-[2px] rounded-sm font-medium ${task.impactColor}`}>
                    {task.impact}
                  </span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <i className="material-symbols-outlined text-[18px]">more_horiz</i>
                  </button>
                </div>
                
                <h5 className="text-base font-bold mb-[8px] leading-[1.4]">{task.title}</h5>
                <p className="text-gray-500 text-sm mb-[15px]">{task.description}</p>
                
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-[#172036] pt-[15px]">
                  <span className="text-xs text-gray-400">{task.date}</span>
                  <div className="flex -space-x-2">
                     {/* Avatars or Action Buttons could go here */}
                     <button className="text-primary-500 text-sm font-medium hover:underline">
                        View
                     </button>
                  </div>
                </div>
              </div>
            ))}
            
            {getTasksByStatus(column.id as Task["status"]).length === 0 && (
              <div className="text-center p-[20px] border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-md">
                <p className="text-gray-400 text-sm mb-0">No tasks</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
