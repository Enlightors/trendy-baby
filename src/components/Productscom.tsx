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
];

interface ProductscomProps {
  filter?: number[];
  isPopover?: boolean;
  hasBackground?: boolean; // Add this prop
}

export default function Productscom({
  filter = [],
  isPopover = false,
  hasBackground = false,
}: ProductscomProps) {
  const filteredProducts = productData.filter(
    (product) => !filter.includes(product.id)
  );

  return (
    <div
      className={`${
        hasBackground ? "bg-[#ecf0f2]" : ""
      } grid grid-cols-2 gap-4 md:flex md:flex-row my-[30px] place-items-center gap-x-8 justify-center items-center  px-[20px]  h-[700px] md:h-[250px]`}
    >
      {filteredProducts.map((product) => (
        <div key={product.id} className="flex flex-col items-center justify-center">
          <Link href={`/products/${product.id}`} className="text-center">
            <div className="max-h-[200px] h-[150px] flex items-center justify-center">
              <img className="h-[150px] object-contain" src={product.imageSrc} alt={product.name} />
            </div>
            <div className="max-w-[200px]">
              <p
                className={`text-lg font-semibold cursor-pointer hover:text-[#5ac5f1] break-words text-center ${
                  isPopover ? "text-white" : "text-black"
                }`}
              >
                {product.name}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
