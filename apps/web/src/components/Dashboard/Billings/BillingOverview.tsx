"use client";

import React from "react";

const BillingOverview: React.FC = () => {
  return (
    <>
      <div className="ibias-card bg-white dark:bg-[#0c1427] mb-[25px] p-[25px] rounded-md">
        <div className="flex flex-col md:flex-row justify-between items-center gap-[20px]">
          <div>
            <h5 className="mb-[5px] font-bold text-lg">Current Plan: Beta (Free)</h5>
            <p className="text-gray-500 mb-0">Your plan renews on <span className="font-semibold text-gray-900 dark:text-white">Forever</span>.</p>
          </div>
          
          <div className="flex gap-[10px]">
             <button className="bg-gray-100 dark:bg-[#15203c] text-gray-700 dark:text-gray-300 px-[20px] py-[10px] rounded-md font-medium hover:bg-gray-200 dark:hover:bg-[#1f2b4a] transition-colors">
               Cancel Plan
             </button>
             <button className="bg-primary-500 text-white px-[20px] py-[10px] rounded-md font-medium hover:bg-primary-600 transition-colors">
               Upgrade Plan
             </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
         {/* Plan 1 */}
         <div className="ibias-card bg-white dark:bg-[#0c1427] p-[30px] rounded-md border-2 border-primary-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-[10px] py-[5px] rounded-bl-md">
               Current Plan
            </div>
            <h4 className="text-xl font-bold mb-[5px]">Beta Access</h4>
            <div className="text-3xl font-bold text-primary-500 mb-[15px]">
               $0 <span className="text-sm text-gray-400 font-normal">/ month</span>
            </div>
            <p className="text-gray-500 mb-[25px]">Perfect for early adopters and testing the platform.</p>
            
            <ul className="flex flex-col gap-[10px] mb-[30px]">
               <li className="flex items-center gap-[10px] text-gray-700 dark:text-gray-300">
                  <i className="material-symbols-outlined text-green-500 text-[20px]">check_circle</i>
                  Connect 1 Store
               </li>
               <li className="flex items-center gap-[10px] text-gray-700 dark:text-gray-300">
                  <i className="material-symbols-outlined text-green-500 text-[20px]">check_circle</i>
                  Basic Analytics
               </li>
               <li className="flex items-center gap-[10px] text-gray-700 dark:text-gray-300">
                  <i className="material-symbols-outlined text-green-500 text-[20px]">check_circle</i>
                  Weekly AI Reports
               </li>
            </ul>
            
            <button disabled className="w-full bg-gray-100 text-gray-400 py-[12px] rounded-md font-medium cursor-not-allowed">
               Active
            </button>
         </div>
         
         {/* Plan 2 */}
         <div className="ibias-card bg-white dark:bg-[#0c1427] p-[30px] rounded-md border border-gray-100 dark:border-[#172036]">
            <h4 className="text-xl font-bold mb-[5px]">Growth</h4>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-[15px]">
               $49 <span className="text-sm text-gray-400 font-normal">/ month</span>
            </div>
            <p className="text-gray-500 mb-[25px]">For scaling merchants who need deeper insights.</p>
            
            <ul className="flex flex-col gap-[10px] mb-[30px]">
               <li className="flex items-center gap-[10px] text-gray-700 dark:text-gray-300">
                  <i className="material-symbols-outlined text-green-500 text-[20px]">check_circle</i>
                  Connect Unlimited Stores
               </li>
               <li className="flex items-center gap-[10px] text-gray-700 dark:text-gray-300">
                  <i className="material-symbols-outlined text-green-500 text-[20px]">check_circle</i>
                  Advanced Analytics & AI
               </li>
               <li className="flex items-center gap-[10px] text-gray-700 dark:text-gray-300">
                  <i className="material-symbols-outlined text-green-500 text-[20px]">check_circle</i>
                  Daily Recommendations
               </li>
               <li className="flex items-center gap-[10px] text-gray-700 dark:text-gray-300">
                  <i className="material-symbols-outlined text-green-500 text-[20px]">check_circle</i>
                  Competitor Analysis
               </li>
            </ul>
            
            <button className="w-full border border-primary-500 text-primary-500 py-[12px] rounded-md font-medium hover:bg-primary-50 transition-colors">
               Upgrade to Growth
            </button>
         </div>
      </div>
    </>
  );
};

export default BillingOverview;
