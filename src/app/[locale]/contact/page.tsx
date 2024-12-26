import Contact from "@/src/components/Contact";
import React from "react";
import { prisma } from "@/lib/prisma";

export default async function page({
  searchParams,
}: {
  searchParams: { product_id: string };
}) {
  const productId = searchParams.product_id;

  const products = await prisma.product.findMany({
    select: {
      name: true,
      id: true,
      imageSrc: true,
    },
  });
  const defaultProduct = productId
    ? products.find((product) => product.id === Number(productId))
    : null;
  return (
    <div>
      {/* @ts-expect-error  May havae defrent types */}
      <Contact products={products} defaultProduct={defaultProduct} />
    </div>
  );
}
