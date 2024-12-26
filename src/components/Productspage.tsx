"use client";

import React from "react";
import Link from "next/link";

export default function Productspage({
  products,
  categories,
}: {
  products: any;
  categories: any;
}) {
  return (
    <div className="w-full">
      <p className="text-center text-[#2D617B] text-3xl sm:text-3xl md:text-4xl font-semibold lg:text-4xl pb-4 pt-[70px] ">
        Make feeding your baby easier with TrendingBaby
      </p>
      {categories.map((categories: any) => (
        <div key={categories.id}>
          <div className="flex flex-col items-center justify-center my-8">
            <p className="text-white bg-[#00B1D5] px-14 rounded-full py-1 text-3xl md:text-3xl font-semibold lg:text-3xl">
              {categories.name}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 my-[30px] items-center justify-center px-[40px]">
            {products
              .filter((products: any) => products.category_id === categories.id)
              .map((products: any) => (
                <div
                  key={products.id}
                  className="flex flex-col items-center justify-center"
                >
                  <Link
                    href={`/products/${products.id}`}
                    className="text-center"
                  >
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
      ))}
    </div>
  );
}
