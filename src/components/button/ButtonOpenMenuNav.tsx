"use client";
import { useLayout } from "@/hooks/useLayout";
import React from "react";
import { RiMenu4Line } from "react-icons/ri";
import { ButtonNav } from "./ButtonNav";

export const ButtonOpenMenuNav = () => {
  const { setToggleOpenMenu } = useLayout();
  return (
    <div className="p-2 mx-2">
      <ButtonNav
        className="flex justify-center items-center"
        onClick={setToggleOpenMenu}
      >
        <RiMenu4Line size={24} className="font-black" />
        {/* <p>{openMenuNav ? "open" : "Tutup"}</p> */}
      </ButtonNav>
    </div>
  );
};
