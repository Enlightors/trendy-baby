import { prisma } from "@/lib/prisma";
import Categories from "../Components/Categories/Categories";

export default async function page() {
  const categories = await prisma.category.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return <Categories Categories={categories} />;
}
