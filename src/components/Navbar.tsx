"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/src/components/popover";
import Productscom from "@/src/components/Productscom";
import { Product } from "@/types";
export default function NavBar({
  locale,
  T,
  FeaturedProducts,
}: {
  locale: string;
  T: { [key: string]: string };
  FeaturedProducts: Product[];
}) {
  const [MobileMenu, setMobileMenu] = useState(false);

  const [popoverOpen, setPopoverOpen] = useState(false); // State for hover-based popover

  const path = usePathname();

  const router = useRouter();

  return (
    <>
      <div className="w-full z-50 flex flex-col bg-[#00B1D5] h-[40px] items-center justify-center text-white">
        Make feeding your baby easier with TrendingBaby
      </div>
      <div className="sticky top-0 z-10 bg-white">
        <div className="bg-white h-[60px] max-w-[90vw] lg:max-w-[80vw] mx-auto border-transparent border-b-[#fff] border-[2px] flex items-center  justify-between  px-2 ">
          <div>
            <Link href={`/${locale}`} key="home">
              <Image
                src="/images/Trending-baby-logo.png"
                loading="lazy"
                width={170}
                height={170}
                alt="Logo"
              />
            </Link>
          </div>

          <div className="items-center gap-x-[10px] hidden md:flex justify-between">
            {Pages.map((page) =>
              page.name === "Products" ? (
                <Popover
                  key={page.name}
                  open={popoverOpen}
                  onOpenChange={(open) => setPopoverOpen(open)}
                >
                  <PopoverTrigger asChild>
                    <div
                      onMouseEnter={() => setPopoverOpen(true)}
                      onMouseLeave={() => setPopoverOpen(false)}
                      onClick={() => router.push(`/${locale}${page.path}`)}
                      className={`px-[20px] cursor-pointer justify-center items-center flex flex-col h-[50px]  ${
                        path === `/${locale}${page.path}`
                          ? "border-transparent border-[2px]"
                          : ""
                      }`}
                    >
                      <p
                        className={`text-black  hover:text-[#26A2BE] ${
                          locale === "en" && "first-letter:uppercase"
                        }`}
                      >
                        {page.name}
                      </p>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent
                    onMouseEnter={() => setPopoverOpen(true)}
                    onMouseLeave={() => setPopoverOpen(false)}
                  >
                    <Productscom
                      isPopover={true}
                      setPopoverOpen={setPopoverOpen}
                      FeaturedProducts={FeaturedProducts}
                    />
                  </PopoverContent>
                </Popover>
              ) : (
                <Link
                  className={`px-[20px] ${
                    path === `/${locale}${page.path}` ||
                    (path === `/${locale}` && page.path === "/")
                      ? "border-transparent border-[2px]"
                      : ""
                  } cursor-pointer justify-center items-center flex flex-col h-[80px]`}
                  href={`/${locale}${page.path}`}
                  key={page.name}
                >
                  <p
                    className={`text-black hover:text-[#26A2BE] ${
                      locale === "en" && "first-letter:uppercase"
                    }`}
                  >
                    {page.name}
                  </p>
                </Link>
              )
            )}
          </div>

          <div className="md:hidden cursor-pointer  ">
            <IoMenu
              className="text-black text-4xl"
              onClick={() => setMobileMenu(!MobileMenu)}
            />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div
          className={`${
            MobileMenu ? "opacity-100" : "opacity-0 hidden"
          } transition-all duration-300 ease-in-out fixed top-0 left-0  right-0 z-50 bottom-0 bg-[#26A2BE] flex flex-col px-20  gap-y-4 items-center justify-center `}
        >
          {Pages.map((page) => (
            <Link
              onClick={() => setMobileMenu(false)}
              href={`/${locale}${page.path}`}
              key={page.name}
            >
              <p
                className={`text-white text-4xl ${
                  locale === "en" && "first-letter:uppercase"
                }`}
              >
                {page.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

const Pages = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
