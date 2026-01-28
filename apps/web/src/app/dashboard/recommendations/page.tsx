"use client";

import React from "react";
import TaskBoard from "@/components/Dashboard/Recommendations/TaskBoard";

export default function RecommendationsPage() {
  return (
    <>
      <div className="mb-[25px] flex items-center justify-between">
        <h5 className="mb-0 text-xl font-bold">Action Center</h5>
        <button className="bg-primary-500 text-white px-[20px] py-[8px] rounded-md hover:bg-primary-600 transition-colors">
          + Add Custom Task
        </button>
      </div>
      
      <TaskBoard />
    </>
  );
}
