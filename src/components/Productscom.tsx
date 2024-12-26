"use client";
import Link from "next/link";
import { Product } from "@/types";

interface ProductscomProps {
  filter?: number[];
  isPopover?: boolean;
  hasBackground?: boolean; // Add this prop
  setPopoverOpen?: (open: boolean) => void;
  FeaturedProducts?: Product[];
}

export default function Productscom({
  isPopover = false,
  hasBackground = false,
  setPopoverOpen,
  FeaturedProducts,
}: ProductscomProps) {
  return (
    <div
      className={`${
        hasBackground ? "bg-[#ecf0f2]" : ""
      } grid grid-cols-2 gap-4 md:flex md:flex-row mt-[20px] place-items-center gap-x-8 justify-center items-center  px-[20px]  h-[700px] md:h-[250px]`}
    >
      {FeaturedProducts?.map((product: Product) => (
        <div
          key={product.id}
          className="flex flex-col items-center justify-center"
        >
          <Link
            onClick={() => {
              setPopoverOpen && setPopoverOpen(false);
            }}
            href={`/products/${product.id}`}
            className="text-center"
          >
            <div className="max-h-[200px] h-[150px] flex items-center justify-center">
              <img
                className="h-[150px] object-contain"
                src={product.imageSrc}
                alt={product.name}
              />
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
