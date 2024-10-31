"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useRef } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
export default function NavBar({ locale, T }: { locale: string; T: any }) {
  const [MobileMenu, setMobileMenu] = React.useState(false);
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const languages = [
    {
      name: "English",
      value: "en",
    },
    {
      name: "العربية",
      value: "ar",
    },
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

    <div className=" fixed top-0  w-full z-50 flex flex-col bg-[#00B1D5] h-[60px]  items-center justify-center text-white   ">    Make feeding your baby easier with TrendingBaby</div>
   <div className="bg-white h-[120px] pt-[100px]  border-transparent border-b-[#fff] border-[2px]  flex items-center justify-between  px-20  ">
  
      <div className="">
          <Link href={`/${locale}`} key="home">
            <Image
              src={
                locale === "en" ? "/images/Trending-baby-logo.png" : "/images/Trending-baby-logo.png"
              }
              className=""
              loading="lazy"
              width={266}
              height={266}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="items-center gap-[20px] hidden md:flex justify-between ">
          {Pages.map((page) => (
            <Link
              className={`px-[20px] ${
                path === `/${locale}${page.path}` ||
                (path === `/${locale}` && page.path === "/")
                  ? "border-transparent  border-[2px]"
                  : ""
              } cursor-pointer  justify-center items-center flex flex-col h-[80px]`}
              href={`/${locale}${page.path}`}
              key={page.name}
            >
              <p
                className={`text-black
              ${locale === "en" && "first-letter:uppercase"}
              `}
              >
                {T[page.name]}
              </p>
            </Link>
          ))}
        </div>
        {/* <div>
          <SelectBox
            options={languages}
            value={locale}
            onChange={switchLang}
            T={T}
          />
        </div> */}
        <div className="md:hidden cursor-pointer">
          <IoMenu
            className="text-black text-4xl"
            onClick={() => setMobileMenu(!MobileMenu)}
          />
        </div>
        </div>
    
   
      <div className="md:hidden">
        <div
          className={`
          ${
            MobileMenu ? "opacity-100" : "opacity-0 hidden"
          } transition-all duration-300 ease-in-out fixed top-0 left-0 gap-4 right-0 z-50 bottom-0 bg-[#1F3449] flex flex-col items-center justify-center`}
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
  {
    name: "Home",
    path: "/",
  },
    {
      name: "About",
      path: "/about",
    },
  //   {
  //     name: "Services",
  //     path: "/services",
  //   },
    {
      name: "Products",
      path: "/product",
    },
    {
      name: "Contact",
      path: "/contact",
    },
];

const SelectBox = ({ options, value, onChange, T }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: any) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={selectRef}>
      <div
        className="flex w-max items-center gap-2 px-2 py-1 cursor-pointer"
        onClick={toggleDropdown}
      >
        <span
          className={`first-letter:uppercase font-bold text-[20px] cursor-pointer ${
            isOpen ? "text-[#ffffff]" : "text-[#ffffff]"
          }`}
        >
          {options.find((option: any) => option.value === value)?.name}
        </span>
        <MdOutlineArrowDropDown color="white" size={30} />
      </div>
      {isOpen && (
        <div className="absolute overflow-hidden top-full left-0 mt-1 w-[110px] bg-white border border-gray-300 rounded">
          {options
            .filter((option: any) => option.value !== value)
            .map((lang: any) => (
              <div
                key={lang.value}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick(lang.value)}
              >
                <p
                  className={`first-letter:uppercase font-bold text-[20px] cursor-pointer text-[#1F3449]`}
                >
                  {lang.name}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
