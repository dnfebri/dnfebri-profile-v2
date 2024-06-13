import React from "react";
import { RiMenu4Line } from "react-icons/ri";

export const ButtonOpenMenuNav = () => {
  return (
    <div className="p-2 mx-2">
      <button className="flex justify-center items-center">
        <RiMenu4Line size={24} className="font-black" />
      </button>
    </div>
  );
};
