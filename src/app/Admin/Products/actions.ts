"use server";
import { productData } from "@/lib/products";
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

  const colors = formData.getAll("colors[]").map((color) => color.toString());

  const featureNames = formData
    .getAll("feature_names[]")
    .map((name) => name.toString());
  const featureImages = formData
    .getAll("feature_images[]")
    .map((image) => image.toString());

  await prisma.product.create({
    data: {
      name,
      description,
      imageSrc,
      featured,
      category_id,
      brandId,
      colors: colors,
      features: {
        create: featureNames.map((name, index) => ({
          name: name,
          image: featureImages[index],
        })),
      },
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

  const colors = formData.getAll("colors[]").map((color) => color.toString());

  const featureNames = formData
    .getAll("feature_names[]")
    .map((name) => name.toString());
  const featureImages = formData
    .getAll("feature_images[]")
    .map((image) => image.toString());

  // First delete existing features
  await prisma.feature.deleteMany({
    where: {
      productId: productId,
    },
  });

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
      colors: colors,
      features: {
        create: featureNames.map((name, index) => ({
          name: name,
          image: featureImages[index],
        })),
      },
    },
  });
  Seeder();

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
const Seeder = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You must be logged in");
  }

  try {
    for (const product of productData) {
      await prisma.product.create({
        data: {
          name: product.name,
          description: product.description || "",
          imageSrc: product.imageSrc,
          featured: product.featured || false,
          category_id: product.category_id || 1,
        },
      });
    }

    revalidatePath("/Admin/Products");
  } catch (error) {
    console.error("Error in Seeder:", error);
    throw error; // Re-throw to handle in calling code
  }
};
