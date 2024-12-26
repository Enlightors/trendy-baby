import { prisma } from "@/lib/prisma";
import Products from "../Components/Products/Products";

export default async function page() {
   const products = await prisma.product.findMany({
    include: {
      category: true,
      brand: true,
      features: true,
    },
  });
  const brands = await prisma.brand.findMany();
  const categories = await prisma.category.findMany();
  return (
    <Products products={products} brands={brands} categories={categories} />
  );
}