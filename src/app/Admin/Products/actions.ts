"use server";

import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/auth";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You must be logged in");
  }

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const imageSrc = formData.get("imageSrc") as string;
  const featured = formData.get("featured") === "true";
  const category_id = parseInt(formData.get("category_id") as string);
  const brandId = formData.get("brandId")
    ? parseInt(formData.get("brandId") as string)
    : null;

  await prisma.product.create({
    data: {
      name,
      description,
      imageSrc,
      featured,
      category_id,
      brandId,
    },
  });

  revalidatePath("/admin/products");
}

export async function updateProduct(productId: number, formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You must be logged in");
  }

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const imageSrc = formData.get("imageSrc") as string;
  const featured = formData.get("featured") === "true";
  const category_id = parseInt(formData.get("category_id") as string);
  const brandId = formData.get("brandId")
    ? parseInt(formData.get("brandId") as string)
    : null;

  await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      name,
      description,
      imageSrc,
      featured,
      category_id,
      brandId,
    },
  });

  revalidatePath("/admin/products");
}

export async function deleteProduct(productId: number) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You must be logged in");
  }

  await prisma.product.delete({
    where: {
      id: productId,
    },
  });

  revalidatePath("/admin/products");
}
