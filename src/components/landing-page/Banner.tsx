import React from "react";
import banner from "@/assets/images/backgroundBanner.png";
import fotoProfile from "@/assets/images/fotoProfile.png";
import Image from "next/image";
import { BannerTitle } from "./BannerTitle";

export const Banner = () => {
  return (
    <div className="w-full lg:aspect-[16/9] grid lg:grid-cols-2 place-items-center">
      <div className="w-full aspect-square lg:aspect-auto flex justify-end items-center">
        <BannerTitle />
      </div>
      <div className="w-full aspect-square sm:aspect-auto">
        <div
          className="aspect-square bg-contain bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${banner.src})` }}
        >
          <Image
            src={fotoProfile}
            alt="profile"
            fill
            objectPosition="container"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};
