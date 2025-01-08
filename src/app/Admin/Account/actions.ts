"use server";

import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/auth";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

export async function ChangePassword(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You must be logged in");
  }

  const oldPassword = formData.get("oldPassword") as string;
  const newPassword = formData.get("newPassword") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (newPassword !== confirmPassword) {
    throw new Error("New password and confirm password do not match");
  }

  if (!session.user?.email) {
    throw new Error("User not found");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user || !(await bcrypt.compare(oldPassword, user.password))) {
    throw new Error("Current password is incorrect");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: {
      email: session.user.email,
    },
    data: {
      password: hashedPassword,
    },
  });

  revalidatePath("/admin/account");
}
