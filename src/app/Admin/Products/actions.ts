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
  const featured = formData.get("featured") === "true";
  const category_id = parseInt(formData.get("category_id") as string);
  const brandId = formData.get("brandId")
    ? parseInt(formData.get("brandId") as string)
    : null;

  // Handle image upload
  const imageSrc = formData.get("imageSrc") as string;

  const additionalImages = formData
    .getAll("additional_images[]")
    .map((image) => image.toString());

  const colors = formData.getAll("colors[]").map((color) => color.toString());

  const featureNames = formData
    .getAll("feature_names[]")
    .map((name) => name.toString());
  const featureImages = formData
    .getAll("feature_images[]")
    .map((image) => image.toString());

  // Create product with the uploaded image URL
  const product = await prisma.product.create({
    data: {
      name,
      description,
      imageSrc, // Main product image
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
      ProductImages: {
        create: additionalImages.map((image) => ({
          imageSrc: image,
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
  const featured = formData.get("featured") === "true";
  const category_id = parseInt(formData.get("category_id") as string);
  const brandId = formData.get("brandId")
    ? parseInt(formData.get("brandId") as string)
    : null;

  const imageSrc = formData.get("imageSrc") as string;
  const colors = formData.getAll("colors[]").map((color) => color.toString());
  const additionalImages = formData
    .getAll("additional_images[]")
    .map((image) => image.toString());
  const featureNames = formData
    .getAll("feature_names[]")
    .map((name) => name.toString());
  const featureImages = formData
    .getAll("feature_images[]")
    .map((image) => image.toString());

  // First delete existing features and additional images
  await prisma.feature.deleteMany({
    where: {
      productId: productId,
    },
  });

  await prisma.productImages.deleteMany({
    where: {
      productId: productId,
    },
  });

  // Update product with new data
  await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      name,
      description,
      ...(imageSrc ? { imageSrc } : {}), // Only update main image if a new one was uploaded
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
      ProductImages: {
        create: additionalImages.map((image) => ({
          imageSrc: image,
        })),
      },
    },
  });

  revalidatePath("/admin/products");
}

export async function deleteProduct(productId: number) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You must be logged in");
  }

  await prisma.productImages.deleteMany({
    where: {
      productId: productId,
    },
  });

  await prisma.product.delete({
    where: {
      id: productId,
    },
  });

  revalidatePath("/admin/products");
}
export async function deleteProductImage(productId: number, imageId: number) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You must be logged in");
  }

  await prisma.productImages.delete({
    where: { id: imageId, productId: productId },
  });
  revalidatePath("/admin/products");
}
