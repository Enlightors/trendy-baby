"use server";

import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/auth";
import { revalidatePath } from "next/cache";

export async function createBrand(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You must be logged in");
  }

  const name = formData.get("name") as string;
  await prisma.brand.create({
    data: {
      name,
    },
  });

  revalidatePath("/admin/brands");
}

export async function updateBrand(brandId: number, formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You must be logged in");
  }

  const name = formData.get("name") as string;

  await prisma.brand.update({
    where: {
      id: brandId,
    },
    data: {
      name,
    },
  });

  revalidatePath("/admin/brands");
}

export async function deleteBrand(brandId: number) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You must be logged in");
  }

  await prisma.brand.delete({
    where: {
      id: brandId,
    },
  });

  revalidatePath("/admin/brands");
}
