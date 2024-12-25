import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { prisma } from "@/lib/prisma";
import Brands from "../Components/Brands/Brands";

export default async function page() {
  const session = await getServerSession(authOptions);
  const brands = await prisma.brand.findMany();

  return (
    <div className="p-8 w-full">
      <Brands brands={brands} />
    </div>
  );
}
