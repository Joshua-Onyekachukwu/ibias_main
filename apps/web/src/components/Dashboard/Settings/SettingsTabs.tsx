"use client";

import React, { useState } from "react";
import Image from "next/image";

const SettingsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="ibias-card bg-white dark:bg-[#0c1427] mb-[25px] p-[25px] rounded-md">
      <div className="ibias-tabs">
        <ul className="navs flex flex-wrap gap-[20px] mb-[20px] border-b border-gray-100 dark:border-[#172036]">
          <li className="nav-item">
            <button
              className={`nav-link pb-[15px] text-[15px] font-medium transition-all relative ${
                activeTab === "account" ? "active text-primary-500" : "text-gray-500 hover:text-primary-500"
              }`}
              onClick={() => setActiveTab("account")}
            >
              Account Settings
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link pb-[15px] text-[15px] font-medium transition-all relative ${
                activeTab === "store" ? "active text-primary-500" : "text-gray-500 hover:text-primary-500"
              }`}
              onClick={() => setActiveTab("store")}
            >
              Store Connections
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link pb-[15px] text-[15px] font-medium transition-all relative ${
                activeTab === "notifications" ? "active text-primary-500" : "text-gray-500 hover:text-primary-500"
              }`}
              onClick={() => setActiveTab("notifications")}
            >
              Notifications
            </button>
          </li>
        </ul>

        <div className="tab-content">
          {/* Account Tab */}
          <div className={`tab-pane ${activeTab === "account" ? "active" : "hidden"}`}>
            <h5 className="mb-[15px] text-lg font-bold">Profile Information</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              <div>
                <label className="block mb-[10px] text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full h-[45px] border border-gray-100 dark:border-[#172036] rounded-md px-[15px] bg-gray-50 dark:bg-[#0c1427] focus:outline-none focus:border-primary-500"
                  defaultValue="Olivia John"
                />
              </div>
              <div>
                <label className="block mb-[10px] text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full h-[45px] border border-gray-100 dark:border-[#172036] rounded-md px-[15px] bg-gray-50 dark:bg-[#0c1427] focus:outline-none focus:border-primary-500"
                  defaultValue="olivia@ibias.ai"
                />
              </div>
              <div className="md:col-span-2">
                 <button className="bg-primary-500 text-white px-[25px] py-[10px] rounded-md font-medium hover:bg-primary-600 transition-colors">
                    Save Changes
                 </button>
              </div>
            </div>
          </div>

          {/* Store Tab */}
          <div className={`tab-pane ${activeTab === "store" ? "active" : "hidden"}`}>
            <div className="flex justify-between items-center mb-[20px]">
               <h5 className="mb-0 text-lg font-bold">Connected Stores</h5>
               <button className="bg-black text-white px-[15px] py-[8px] rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                  + Connect New Store
               </button>
            </div>
            
            <div className="border border-gray-100 dark:border-[#172036] rounded-md p-[20px] mb-[15px] flex items-center justify-between">
               <div className="flex items-center gap-[15px]">
                  <div className="w-[50px] h-[50px] bg-green-50 rounded-full flex items-center justify-center">
                     <Image src="/images/icons/shopify.svg" alt="shopify" width={24} height={24} />
                  </div>
                  <div>
                     <h6 className="mb-[2px] font-bold">Olivia&apos;s Fashion Store</h6>
                     <p className="text-xs text-gray-500 mb-0">myshopify.com • Connected 2 days ago</p>
                  </div>
               </div>
               <span className="bg-green-100 text-green-700 text-xs px-[10px] py-[3px] rounded-full font-medium">
                  Active
               </span>
            </div>
          </div>

          {/* Notifications Tab */}
          <div className={`tab-pane ${activeTab === "notifications" ? "active" : "hidden"}`}>
             <h5 className="mb-[15px] text-lg font-bold">Email Notifications</h5>
             <div className="flex flex-col gap-[15px]">
                <div className="flex items-center justify-between p-[15px] border border-gray-100 dark:border-[#172036] rounded-md">
                   <div>
                      <h6 className="mb-[2px] font-semibold text-sm">Weekly Performance Report</h6>
                      <p className="text-xs text-gray-500 mb-0">Get a summary of your store&apos;s performance every Monday.</p>
                   </div>
                   <div className="form-check">
                      <input type="checkbox" id="weeklyReport" defaultChecked />
                   </div>
                </div>
                
                <div className="flex items-center justify-between p-[15px] border border-gray-100 dark:border-[#172036] rounded-md">
                   <div>
                      <h6 className="mb-[2px] font-semibold text-sm">Critical Inventory Alerts</h6>
                      <p className="text-xs text-gray-500 mb-0">Receive instant emails when stock is low.</p>
                   </div>
                   <div className="form-check">
                      <input type="checkbox" id="inventoryAlert" defaultChecked />
                   </div>
                </div>
                
                 <div className="flex items-center justify-between p-[15px] border border-gray-100 dark:border-[#172036] rounded-md">
                   <div>
                      <h6 className="mb-[2px] font-semibold text-sm">New Recommendations</h6>
                      <p className="text-xs text-gray-500 mb-0">Get notified when AI detects a new opportunity.</p>
                   </div>
                   <div className="form-check">
                      <input type="checkbox" id="recommendations" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTabs;
