'use client'; 

import React from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  imageSrc: string;
  name: string;
}

const productData: Product[] = [
  {
    id: 1,
    imageSrc: '/images/trending-baby-1.webp',
    name: 'Automatic Bottle Maker',
  },
  {
    id: 2,
    imageSrc: '/images/trending-baby-2.webp',
    name: 'Sterilizers',
  },
  {
    id: 3,
    imageSrc: '/images/trending-baby-3.webp',
    name: 'Bottle Warmers',
  },
  {
    id: 4,
    imageSrc: '/images/trending-baby-4.webp',
    name: 'Food Maker Deluxe',
  },
  {
    id: 5,
    imageSrc: '/images/trending-baby-5.webp',
    name: 'Spare Parts',
  },
];

export default function Products() {
  return (
    <div>
      <p className="text-center text-[#65858f] text-3xl sm:text-3xl md:text-4xl font-semibold lg:text-4xl py-10">
        Make feeding your baby easier with Babybrezza
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-[40px] gap-x-2 px-[20px]">
        {productData.map((product) => (
          <div key={product.id} className="flex flex-col items-center justify-center">
            <img className="h-[175px] w-[175px]" src={product.imageSrc} alt={product.name} />
            <Link href={`/product/${product.id}`}>
              <p className="text-black text-xl font-semibold text-center cursor-pointer  hover:text-[#5ac5f1]">
                {product.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}






