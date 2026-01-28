"use client";

import React from "react";
import SettingsTabs from "@/components/Dashboard/Settings/SettingsTabs";

export default function SettingsPage() {
  return (
    <>
      <div className="mb-[25px]">
        <h5 className="mb-[5px] text-xl font-bold">Settings</h5>
        <p className="text-gray-500 mb-0">Manage your account, store connections, and preferences.</p>
      </div>
      
      <SettingsTabs />
    </>
  );
}
