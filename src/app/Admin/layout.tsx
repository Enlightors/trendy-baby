import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { getServerSession } from "next-auth";
import LoginPage from "./Login/page";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    return <LoginPage />;
  }

  return (
    <SidebarProvider>
      <AppSidebar session={session} />
      <div className="w-full">{children}</div>
    </SidebarProvider>
  );
}
