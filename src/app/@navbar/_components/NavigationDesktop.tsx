import { LIST_NAVIGATION_MENU } from "@/constant/listNavigationMenu";
import React from "react";

export const NavigationDesktop = () => {
  return (
    <div className=" left-0 right-0 fixed top-0 w-full">
      <div className="bg-white mt-4 max-w-xl rounded-lg mx-auto p-2 backdrop-blur-sm">
        <div className="flex justify-between mx-4">
          {LIST_NAVIGATION_MENU.map((item, i) => (
            <div key={i}>
              <button>
                <p>{item.name}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
