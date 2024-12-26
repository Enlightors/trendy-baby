import { prisma } from "@/lib/prisma";
import Brands from "../Components/Brands/Brands";

export default async function page() {
  const brands = await prisma.brand.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return <Brands brands={brands} />;
}
