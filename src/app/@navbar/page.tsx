"use client";
import { useLayout } from "@/hooks/useLayout";
import React from "react";
import { MenuNavigation } from "./_components/MenuNavigation";
import { NavigationDesktop } from "./_components/NavigationDesktop";

export default function NavigationBar() {
  const { openMenuNav } = useLayout();
  return (
    <nav>
      <div className="flex justify-between items-center">
        <div className="hidden lg:block">
          <NavigationDesktop />
        </div>
        <div className="lg:hidden z-10">
          <MenuNavigation />
        </div>
      </div>
    </nav>
  );
}
