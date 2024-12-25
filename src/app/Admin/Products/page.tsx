import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { prisma } from "@/lib/prisma";
import Products from "../Components/Products/Products";

export default async function page() {
  const session = await getServerSession(authOptions);
  const products = await prisma.product.findMany({
    include: {
      category: true,
      brand: true,
    },
  });
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <Products products={products} />
    </div>
  );
}
