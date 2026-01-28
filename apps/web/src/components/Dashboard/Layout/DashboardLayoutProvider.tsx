"use client";

import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import Header from "./Header";
import Footer from "./Footer";

interface DashboardLayoutProviderProps {
  children: React.ReactNode;
}

export default function DashboardLayoutProvider({ children }: DashboardLayoutProviderProps) {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className={`main-content-wrap ${active ? "active" : ""}`}>
      <SidebarMenu toggleActive={toggleActive} />

      <div className="main-content flex flex-col min-h-screen">
        <Header toggleActive={toggleActive} />

        <div className="main-content-container overflow-hidden flex-grow">
          {children}
        </div>

        <Footer />
      </div>
    </div>
  );
}
