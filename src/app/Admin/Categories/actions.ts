"use server";

import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/auth";
import { revalidatePath } from "next/cache";

export async function createCategory(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You must be logged in");
  }

  const name = formData.get("name") as string;
  await prisma.category.create({
    data: {
      name,
    },
  });

  revalidatePath("/admin/categories");
}

export async function updateCategory(categoryId: number, formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You must be logged in");
  }

  const name = formData.get("name") as string;

  await prisma.category.update({
    where: {
      id: categoryId,
    },
    data: {
      name,
    },
  });

  revalidatePath("/admin/categories");
}

export async function deleteCategory(categoryId: number) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You must be logged in");
  }

  await prisma.category.delete({
    where: {
      id: categoryId,
    },
  });

  revalidatePath("/admin/categories");
}
