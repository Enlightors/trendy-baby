import localFont from "next/font/local";
import { getTranslations } from "next-intl/server";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { prisma } from "@/lib/prisma";

const Arabic = localFont({
  src: "../../../public/fonts/Rabar_037.ttf",
  display: "swap",
});
const Raber22 = localFont({
  src: "../../../public/fonts/Rabar_022.ttf",
  display: "swap",
  variable: "--font-raber22",
});
export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = await getTranslations("Trans");
  const T = {
    Home: t("Home"),
    About: t("About"),
    Products: t("Products"),
    // Services: t("Services"),
    Contact: t("Contact"),
  };

  const FeaturedProducts = await prisma.product.findMany({
    where: {
      featured: true,
    },
    include: {
      category: true,
      brand: true,
      features: true,
    },
  });
  return (
    <html
      lang={locale}
      dir={locale === "en" ? "ltr" : "rtl"}
      className={`${Raber22.variable} ${
        locale !== "en" ? Arabic.className : ""
      } `}
    >
      <body className="min-h-screen h-screen">
        <Navbar locale={locale} FeaturedProducts={FeaturedProducts} />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
