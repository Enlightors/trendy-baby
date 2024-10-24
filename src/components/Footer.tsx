import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer({ locale }: any) {
  return (
    <div className="flex flex-col bg-[#5ac5f1] h-[370px] text-white">
      <div className="grid grid-cols-3  px-10  pt-10 text-sm">
        <div className="flex flex-col gap-y-2 ">
          <h1 className="font-medium text-4xl "> Contact</h1>
          <p> Customer Service</p>
          <p>Monday to Friday</p>
          <p>From 9am to 5pm</p>
          <p className="font-semibold">babybrezza@onnaworld.com</p>
        </div>
        <div className="flex flex-col gap-y-2 py-12">
          <p>Home</p>
          <p>About US</p>
          <p>Customer Services</p>
          <p>Products</p>
          <p>Spaire Parts</p>

          <p>Blog</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h1 className="font-medium text-4xl "> Socials</h1>
          <span className="bg-[#ecf0f3] rounded-full h-[25px] w-[25px] flex items-center justify-center">
            <a href="" target="_blank" rel="noreferrer">
              <FaFacebookF color="#5ac5f1" />
            </a>
          </span>

          <span className="bg-[#ecf0f3] rounded-full h-[25px] w-[25px] flex items-center justify-center">
            <a href="" target="_blank" rel="noreferrer">
              <FaInstagram color="#5ac5f1" />
            </a>
          </span>

          <span className="bg-[#ecf0f3] rounded-full h-[25px] w-[25px] flex items-center justify-center">
            <a href="" target="_blank" rel="noreferrer">
              <FaTiktok color="#5ac5f1" />
            </a>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center  ">
        <p> © 2024, Trending Baby, All Rights Reserved</p>
      </div>
    </div>
  );
}
