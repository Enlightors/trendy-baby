import { prisma } from "@/lib/prisma";
import Brands from "../Components/Brands/Brands";

export default async function page() {
  const brands = await prisma.brand.findMany();

  return (
    <div className="p-8 w-full">
      <Brands brands={brands} />
    </div>
  );
}
