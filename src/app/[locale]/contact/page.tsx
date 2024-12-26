import Contact from "@/src/components/Contact";
import React from "react";
import { prisma } from "@/lib/prisma";
type Props = {};

export default async function page({}: Props) {
  const products = await prisma.product.findMany({
    select: {
      name: true,
      id: true,
    },
  });
  return (
    <div>
      <Contact products={products} />
    </div>
  );
}
