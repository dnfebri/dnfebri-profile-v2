"use client";
import { ButtonCloseMenuNav, ButtonOpenMenuNav } from "@/components/button";
import { ButtonNav } from "@/components/button/ButtonNav";
import { LIST_NAVIGATION_MENU } from "@/constant/listNavigationMenu";
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
        <div className="lg:hidden">
          <MenuNavigation />
        </div>
        {/* <div className="fixed bottom-0">top</div> */}
      </div>
    </nav>
  );
}
