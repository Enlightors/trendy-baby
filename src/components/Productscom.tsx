import React from "react";
import Link from "next/link";

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
  {
    id: 5,
    imageSrc: "/images/trending-baby-6.png",
    name: "Baby Crib",
  },
  {
    id: 6,
    imageSrc: "/images/trending-baby-7.png",
    name: "Baby Crib",
  },
];

interface ProductscomProps {
  filter?: number[];
  isPopover?: boolean; // Add this prop to check if displayed in a popover
}

export default function Productscom({ filter = [], isPopover = false }: ProductscomProps) {
  const filteredProducts = productData.filter(
    (product) => !filter.includes(product.id)
  );

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:flex md:flex-row my-[30px] place-items-center gap-x-8 justify-center items-center px-[20px] md:h-[200px]">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center"
          >
            <Link href={`/products/${product.id}`} className="text-center">
              <div className="max-h-[200px] h-[150px] flex items-center justify-center">
                <img
                  className="h-[100px] object-contain"
                  src={product.imageSrc}
                  alt={product.name}
                />
              </div>
              <div className="max-w-[200px]">
                <p
                  className={`text-lg font-semibold cursor-pointer hover:text-[#5ac5f1] break-words text-center ${
                    isPopover ? "text-white" : "text-black"
                  }`} // Conditionally apply text color
                >
                  {product.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
        {/* <div className="col-span-full flex justify-center md:justify-start">
          <Link href={`/products`}>
            <p
              className={`flex flex-row items-center justify-center hover:text-[#5ac5f1] underline ${
                isPopover ? "text-white" : "text-black"
              }`}
            >
              More &gt;
            </p>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
