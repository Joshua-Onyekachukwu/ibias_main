"use client";

import React from "react";
import BillingOverview from "@/components/Dashboard/Billings/BillingOverview";

export default function BillingsPage() {
  return (
    <>
      <div className="mb-[25px]">
        <h5 className="mb-[5px] text-xl font-bold">Billing & Subscription</h5>
        <p className="text-gray-500 mb-0">Manage your subscription plan and payment methods.</p>
      </div>
      
      <BillingOverview />
    </>
  );
}
