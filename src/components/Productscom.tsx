"use client";

import React from "react";
import Link from "next/link";
import { px } from "framer-motion";

interface Product {
  id: number;
  imageSrc: string;
  name: string;
}

const productData: Product[] = [
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
];

interface ProductscomProps {
  filter?: number[];
}

export default function Productscom({ filter = [] }: ProductscomProps) {
  const filteredProducts = productData.filter(
    (product) => !filter.includes(product.id)
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row my-[30px] gap-x-10 items-center justify-center">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center  justify-center"
          >
            <Link href={`/products/${product.id}`} className="text-center">
              <div className="max-h-[200px] h-[200px] flex items-center justify-center ">
                <img
                  className="h-[150px]"
                  src={product.imageSrc}
                  alt={product.name}
                />
              </div>
              <div className="max-w-[200px]">
                <p className="text-black text-xl font-semibold cursor-pointer hover:text-[#5ac5f1]  break-words text-center">
                  {product.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
        <div className="">
          <Link href={`/products`}>
            <p className="flex flex-row items-center justify-center ">
              More &gt;{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
