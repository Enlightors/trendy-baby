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
    name: "Baby Crib",
  },
  // {
  //   id: 5,
  //   imageSrc: "/images/trending-baby-5.png",
  //   name: "Baby Crib",
  // },
  {
    id: 6,
    imageSrc: "/images/trending-baby-6.png",
    name: "Baby Crib",
  },
  {
    id: 7,
    imageSrc: "/images/trending-baby-7.png",
    name: "Baby Crib",
  },
];

export default function Productspage() {
  return (
    <div>
      <p className="text-center text-[#2D617B] text-3xl sm:text-3xl md:text-4xl font-semibold lg:text-4xl py-4 px-20">
        Make feeding your baby easier with TrendingBaby
      </p>
      {/* Change to grid layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-[30px] items-center justify-center">
        {productData.map((products) => (
          <div key={products.id} className="flex flex-col items-center justify-center">
            <Link href={`/products/${products.id}`} className="text-center">
              <div className="max-h-[200px] h-[200px] flex items-center justify-center">
                <img
                  className="h-[150px]"
                  src={products.imageSrc}
                  alt={products.name}
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

