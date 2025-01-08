import { prisma } from "@/lib/prisma";
import Products from "../Components/Products/Products";

export default async function page() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      brand: true,
      features: true,
      ProductImages: true,
    },
    orderBy: {
      id: "asc",
    },
  });
  const brands = await prisma.brand.findMany({
    orderBy: {
      id: "asc",
    },
  });
  const categories = await prisma.category.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return (
    <Products products={products} brands={brands} categories={categories} />
  );
}
