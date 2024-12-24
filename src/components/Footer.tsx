import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer({ locale }: any) {
  return (
    <div className="flex flex-col bg-[#00B1D5] h-[300px] text-white">
      <div className="grid grid-cols-2 lg:grid-cols-3  pt-10 text-sm w-full max-w-[90vw] lg:max-w-[80vw] mx-auto">
        <div className="flex flex-col gap-y-2 ">
          <h1 className="font-medium text-4xl ">Contact</h1>
          <p className=" flex flex-col font-semibold">
            <p>sales@trendingbaby.com</p>
          </p>
          <p className="font-semibold text-xl">Address</p>
          <p>Via Pescallo, 22021 Bellagio Co,Italy </p>
        </div>
        <div className=" flex-col gap-y-2 py-12 hidden md:flex">
          <Link href={`/`}>
            <p>Home</p>
          </Link>
          <Link href={`/products`}>
            <p>Products</p>
          </Link>
          <Link href={`/about`}>
            <p>About Us</p>
          </Link>
          <Link href={`/contact`}>
            <p>Contact</p>
          </Link>
          <Link href={`/privacy`}>
            <p>Privacy Policy</p>
          </Link>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="font-medium text-xl"> Follow us on Social Media</h1>
          <div className="flex flex-row gap-x-2">
            <span className="bg-[#ecf0f3] rounded-full h-[25px] w-[25px] flex items-center justify-center">
              <a href="#" target="_blank" rel="noreferrer">
                <FaInstagram color="#5ac5f1" />
              </a>
            </span>
            <div>
              <a href="#">Instagram</a>
            </div>
          </div>
          <div className="flex flex-row gap-x-2">
            <span className="bg-[#ecf0f3] rounded-full h-[25px] w-[25px] flex items-center justify-center">
              <a href="#" target="_blank" rel="noreferrer">
                <FaFacebookF color="#5ac5f1" />
              </a>
            </span>
            <div>
              <a href="#">Facebook</a>
            </div>
          </div>
          <div className="flex flex-row gap-x-2">
            <span className="bg-[#ecf0f3] rounded-full h-[25px] w-[25px] flex items-center justify-center">
              <a href="#" target="_blank" rel="noreferrer">
                <FaTiktok color="#5ac5f1" />
              </a>
            </span>
            <div>
              <a href="#">Tiktok</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-10 md:pt-0 ">
        <p>© 2024, Trending Baby, All Rights Reserved</p>
      </div>
    </div>
  );
}
