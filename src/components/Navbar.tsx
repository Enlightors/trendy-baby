"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/src/components/popover";
import Productscom from "@/src/components/Productscom";

export default function NavBar({ locale, T }: { locale: string; T: any }) {
  const [MobileMenu, setMobileMenu] = useState(false);

  const [popoverOpen, setPopoverOpen] = useState(false); // State for hover-based popover

  const path = usePathname();

  const router = useRouter();

  const searchParams = useSearchParams();

  const languages = [
    { name: "English", value: "en" },
    { name: "العربية", value: "ar" },
  ];

  const switchLang = (lang: string) => {
    let newPath = path;
    if (path.includes("/en")) {
      newPath = path.replace("/en", `/${lang}`);
    } else if (path.includes("/ar")) {
      newPath = path.replace("/ar", `/${lang}`);
    }
    router.push(`${newPath}?${searchParams.toString()}`);
  };

  return (
    <>
      <div className="fixed top-0 w-full z-50 flex flex-col bg-[#00B1D5] h-[60px] items-center justify-center text-white">
        Make feeding your baby easier with TrendingBaby
      </div>
      <div className="bg-white h-[120px] pt-[100px] border-transparent border-b-[#fff] border-[2px] flex items-center  justify-between px-20 pb-11">
        <div>
          <Link href={`/${locale}`} key="home">
            <Image
              src="/images/Trending-baby-logo.png"
              loading="lazy"
               width={266}
              height={266}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="items-center gap-[20px] hidden md:flex justify-between">
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
                    className={`px-[20px] cursor-pointer  justify-center items-center flex flex-col h-[80px]   ${
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
                      {T[page.name]}
                    </p>
                  </div>
                </PopoverTrigger>
                <PopoverContent
                  onMouseEnter={() => setPopoverOpen(true)}
                  onMouseLeave={() => setPopoverOpen(false)}
                >
                  <Productscom isPopover={true}/>
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
                  {T[page.name]}
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

      <div className="md:hidden">
        <div
          className={`${
            MobileMenu ? "opacity-100" : "opacity-0 hidden"
          } transition-all duration-300 ease-in-out fixed top-0 left-0  right-0 z-50 bottom-0 bg-[#26A2BE] flex flex-col px-20  items-center justify-center `}
        >
          {Pages.map((page) => (
            <Link
              onClick={() => setMobileMenu(false)}
              href={`/${locale}${page.path}`}
              key={page.name}
            >
              <p
                className={`text-white ${
                  locale === "en" && "first-letter:uppercase"
                }`}
              >
                {T[page.name]}
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
