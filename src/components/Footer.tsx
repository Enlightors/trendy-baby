import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer({ locale }: any) {
  return (
    <div className="flex flex-col bg-[#00B1D5] h-[300px] text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 px-10  pt-10 text-sm ">
        <div className="flex flex-col gap-y-2 ">
          <h1 className="font-medium text-4xl "> Contact</h1>
          <p> Customer Service</p>
          <p>Monday to Friday</p>
          <p>From 9am to 5pm</p>
          
          <p className=" flex flex-col font-semibold"> 
           <p> steve@trendingbaby.com</p>
           <p>john@trendingbaby.com</p>
            <p>christian@trendingbaby.com</p>
           <p> sales@trendingbaby.com</p>
          </p>
        </div>
        <div className=" flex-col gap-y-2 py-12 hidden md:flex">
          <Link href={`/`}><p>Home</p></Link>
          <Link href={`/products`}><p>Products</p></Link>
          <Link href={`/about`}><p>About Us</p></Link>
          <Link href={`/contact`}><p>Contact</p></Link>
        </div>

        <div className="flex flex-col gap-y-2">
          <h1 className="font-medium text-xl  "> Follow us on Instagram</h1>
          {/* <span className="bg-[#ecf0f3] rounded-full h-[25px] w-[25px] flex items-center justify-center">
            <a href="" target="_blank" rel="noreferrer">
              <FaFacebookF color="#5ac5f1" />
            </a>
          </span> */}
          <div className="flex flex-row gap-x-2">
          <span className="bg-[#ecf0f3] rounded-full h-[25px] w-[25px] flex items-center justify-center">
            <a href="https://www.instagram.com/trending.babybh/profilecard/?igsh=MW5za2E4bDl4MmMzMQ==" target="_blank" rel="noreferrer">
              <FaInstagram color="#5ac5f1" />
            </a>
          </span>
          
        <div>
            <a href="https://www.instagram.com/trending.babybh/profilecard/?igsh=MW5za2E4bDl4MmMzMQ%3D%3D">Instagram</a>
          </div>
          
          </div>

          {/* <span className="bg-[#ecf0f3] rounded-full h-[25px] w-[25px] flex items-center justify-center">
            <a href="" target="_blank" rel="noreferrer">
              <FaTiktok color="#5ac5f1" />
            </a>
          </span> */}
          
        </div>
      </div>
      <div className="flex flex-col items-center pt-10 md:pt-0 ">
        <p> © 2024, Trending Baby, All Rights Reserved</p>
      </div>
    </div>
  );
}
