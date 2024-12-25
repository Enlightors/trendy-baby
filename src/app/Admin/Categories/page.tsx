import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { prisma } from "@/lib/prisma";
import Categories from "../Components/Categories/Categories";

export default async function page() {
  const session = await getServerSession(authOptions);
  const categories = await prisma.category.findMany();

  return (
    <div className="p-8 w-full">
      <Categories Categories={categories} />
    </div>
  );
}
