import Contact from "@/src/components/Contact";
import React from "react";
import { prisma } from "@/lib/prisma";

export default async function page() {
  const products = await prisma.product.findMany({
    select: {
      name: true,
      id: true,
    },
  });
  return (
    <div>
      {/* @ts-expect-error  May havae defrent types */}
      <Contact products={products} />
    </div>
  );
}
