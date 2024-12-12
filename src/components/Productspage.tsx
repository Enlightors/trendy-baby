"use client";

import React from "react";
import Link from "next/link";

interface Products {
  id: number;
  imageSrc: string;
  name: string;
}

const productData: Products[] = [
  {
    id: 1,
    imageSrc: "/images/trending-baby-1.png",
    name: "Smart Formula Milk Maker O5",
  },
  {
    id: 2,
    imageSrc: "/images/trending-baby-2.png",
    name: "Wavy Video Baby Monitor",
  },
  {
    id: 3,
    imageSrc: "/images/trending-baby-3.png",
    name: "Mono Full HD Video Baby Monitor",
  },
  {
    id: 4,
    imageSrc: "/images/trending-baby-4.png",
    name: "Furniture",
  },
  {
    id: 5,
    imageSrc: "/images/5.png",
    name: "Furniture",
  },
  {
    id: 6,
    imageSrc: "/images/6.png",
    name: "Furniture",
  },
  {
    id: 7,
    imageSrc: "/images/7.png",
    name: "Furniture",
  },
  {
    id: 8,
    imageSrc: "/images/8.png",
    name: "Furniture",
  },
  {
    id: 9,
    imageSrc: "/images/9.png",
    name: "Furniture",
  },
  {
    id: 10,
    imageSrc: "/images/10.png",
    name: "Furniture",
  },
  {
    id: 11,
    imageSrc: "/images/11.png",
    name: "Furniture",
  },
  {
    id: 12,
    imageSrc: "/images/12.png",
    name: "Furniture",
  },
  {
    id: 13,
    imageSrc: "/images/13.png",
    name: "Baby Crib",
  },
  {
    id: 14,
    imageSrc: "/images/14.png",
    name: "Furniture",
  },
  {
    id: 15,
    imageSrc: "/images/15.png",
    name: "Furniture",
  },
  {
    id: 16,
    imageSrc: "/images/16.png",
    name: "Furniture",
  },
];

export default function Productspage() {
  return (
    <div>
      <p className="text-center text-[#2D617B] text-3xl sm:text-3xl md:text-4xl font-semibold lg:text-4xl pb-4 pt-[70px] px-[20px] ">
        Make feeding your baby easier with TrendingBaby
      </p>
      {/* Change to grid layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 my-[30px] items-center justify-center px-[40px]">
        {productData.map((products) => (
          <div
            key={products.id}
            className="flex flex-col items-center justify-center"
          >
            <Link href={`/products/${products.id}`} className="text-center">
              <div className="max-h-[200px] h-[200px] flex items-center justify-center">
                <img
                  // className="h-[250px]"
                  src={products.imageSrc}
                  alt={products.name}
                  width={200}
                  height={200}
                />
              </div>
              <div className="max-w-[200px]">
                <p className="text-black text-xl font-semibold cursor-pointer hover:text-[#5ac5f1] break-words text-center">
                  {products.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
