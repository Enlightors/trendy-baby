"use client";

import React from "react";

interface Icon {
  id: number;
  img: string;
  desc: string;
}

const iconData: Icon[] = [
  {
    id: 1,
    img: "/images/trending-baby-banner-1.png",
    desc: "Purchase and official price guaranteed",
  },

  {
    id: 2,
    img: "/images/trending-baby-banner-4.png",
    desc: "Direct manufacturer warranty coverage",
  },

  {
    id: 3,
    img: "/images/trending-baby-banner-5.png",
    desc: "Customer Service",
  },

  {
    id: 4,
    img: "/images/trending-baby-banner-6.png",
    desc: "Official distributor",
  },
];

export default function Banner() {
  return (
    <div className="flex flex-wrap md:flex-row  bg-[#ecf0f2] justify-center  gap-x-12 gap-y-0 items-center  h-[600px] md:h-[250px]  ">
      {iconData.map((Icon) => (
        <div
          key={Icon.id}
          className="flex flex-col items-center py-4 px-4 " // Use w-1/4 to make each item take up 25% width
        >
          <img
            src={Icon.img}
            alt={Icon.desc}
            className="max-w-[80px] max-h-[80px] object-contain "
          />
          <div className="flex flex-col w-[140px] text-center items-center justify-center">
            <p className="text-sm font-semibold text-gray-600">{Icon.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
