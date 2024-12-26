import Productspage from "@/src/components/Productspage";
import React from "react";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      brand: true,
      features: true,
    },
  });
  const categories = await prisma.category.findMany();

  return (
    <div className="max-w-[90vw] lg:max-w-[80vw] mx-auto">
      <Productspage products={products} categories={categories} />
    </div>
  );
}
