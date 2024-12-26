import { ReactNode } from "react";
import "./globals.css";

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
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="TrendingBaby" />
      <link rel="manifest" href="/site.webmanifest" />
      <body>{children}</body>
    </html>
  );
}
