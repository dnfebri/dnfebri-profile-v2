import { ButtonOpenMenuNav } from "@/components/button";
import React from "react";
import { RiMenu4Line } from "react-icons/ri";

export default function NavigationBar() {
  return (
    <nav>
      <div className="flex justify-between items-center">
        <div>NavigationBar</div>
        <ButtonOpenMenuNav />
      </div>
    </nav>
  );
}
