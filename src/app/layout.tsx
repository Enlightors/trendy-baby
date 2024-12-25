import { ReactNode } from "react";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Trending Baby",
    template: "%s | Trending Baby",
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <SessionProvider>{children}</SessionProvider>
    </html>
  );
}
