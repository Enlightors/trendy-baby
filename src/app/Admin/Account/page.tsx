"use client";

import { ChangePassword } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

import * as z from "zod";

// Define Zod schema for form validation
const passwordSchema = z
  .object({
    oldPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New password and confirm password do not match",
    path: ["confirmPassword"],
  });

export default function Page() {
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      oldPassword: formData.get("oldPassword") as string,
      newPassword: formData.get("newPassword") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    // Validate form data using Zod
    const validation = passwordSchema.safeParse(data);
    if (!validation.success) {
      setError(validation.error.errors[0].message);
      toast({
        title: "Error",
        description: validation.error.errors[0].message,
      });
      return;
    }

    try {
      await ChangePassword(formData);
      setError(null);
      toast({
        title: "Success",
        description: "Password changed successfully",
      });
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message,
      });
      setError(err.message);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Update your account password</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="oldPassword">Current Password</Label>
              <Input
                id="oldPassword"
                name="oldPassword"
                type="password"
                required
              />
              {error && error.includes("Current password") && (
                <div className="text-red-500 text-sm">{error}</div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                required
              />
              {error && error.includes("New password") && (
                <div className="text-red-500 text-sm">{error}</div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
              />
              {error && error.includes("do not match") && (
                <div className="text-red-500 text-sm">{error}</div>
              )}
            </div>
            <Button type="submit" className="w-full">
              Change Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
