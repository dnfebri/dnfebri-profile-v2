"use client";
import { useLayout } from "@/hooks/useLayout";
import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { ButtonNav } from "./ButtonNav";

export const ButtonCloseMenuNav = () => {
  const { setToggleOpenMenu } = useLayout();
  return (
    <div className="p-2 mx-2">
      <ButtonNav
        className="flex justify-center items-center"
        onClick={setToggleOpenMenu}
      >
        <RiCloseLine size={24} className="font-black" />
      </ButtonNav>
    </div>
  );
};
