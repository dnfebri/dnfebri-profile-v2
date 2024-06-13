"use client";
import { ButtonCloseMenuNav, ButtonOpenMenuNav } from "@/components/button";
import { ButtonNav } from "@/components/button/ButtonNav";
import { LIST_NAVIGATION_MENU } from "@/constant/listNavigationMenu";
import { useLayout } from "@/hooks/useLayout";
import React from "react";

export default function NavigationBar() {
  const { openMenuNav } = useLayout();
  return (
    <nav>
      <div className="flex justify-between items-center">
        <div>NavigationBar</div>
        <ButtonOpenMenuNav />
      </div>
      <div
        className={`absolute top-0 ${
          openMenuNav ? "left-0" : "left-full"
        } min-h-screen min-w-full bg-neutral-500/65 transition-all duration-300`}
      >
        <div className="flex justify-end">
          <ButtonCloseMenuNav />
        </div>
        <div className="flex gap-4 flex-col py-8">
          {LIST_NAVIGATION_MENU.map((item, idx) => (
            <ButtonNav className="hover:bg-primary" key={idx}>
              <div className="flex justify-center">{item.name}</div>
            </ButtonNav>
          ))}
        </div>
      </div>
    </nav>
  );
}
