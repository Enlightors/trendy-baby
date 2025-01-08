"use client";

import { Home, Package, LayoutGrid, Building2, User } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LogoutButton } from "@/components/logout-button";
import { Session } from "next-auth";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/Admin",
    icon: Home,
  },
  {
    title: "Products",
    url: "/Admin/Products",
    icon: Package,
  },
  {
    title: "Categories",
    url: "/Admin/Categories",
    icon: LayoutGrid,
  },
  {
    title: "Brands",
    url: "/Admin/Brands",
    icon: Building2,
  },
];

export function AppSidebar({ session }: { session: Session }) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/Admin/Account">
                  <SidebarMenuButton>
                    <User />
                    <span>{session?.user?.name || "User"}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <LogoutButton />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
