import React from "react";
import Link from "next/link";

export default function Aboutcom() {
  return (
    <div className="flex flex-col md:flex-row max-h-[700px] max-w-[90vw] lg:max-w-[80vw] pb-10 pt-2 md:pt-10 mx-auto gap-x-20 items-center justify-between">
      <div className="flex flex-col justify-center lg:justify-between">
        <div className=" flex justify-center md:justify-normal">
          <img
            src="/images/Trending-baby-logo.png"
            alt="trendingbaby-logo"
            width={150}
            height={150}
            className=" object-contain"
          />
        </div>
        <div>
          <p className="font-semibold whitespace-pre-wrap md:pb-10  items-center text-center max-w-[600px]   md:text-left ">
            Trending Baby was founded on a passion for providing innovative
            solutions that make life easier for parents. We believe that
            children are our future, which is why we continuously invest in
            research and development to offer the latest products that meet
            their evolving needs. Our goal is to be the leading company in the
            children's products industry in the region..
          </p>
        </div>
        <div className="flex py-10 md:pb-0 justify-center md:justify-normal  ">
          <div className=" flex  flex-col h-[40px] w-[120px] rounded-md bg-[#3F738D] text-white hover:bg-[#579bbc] text-center justify-center items-center text-xl ">
            <Link href={`/about`} className="">
              <p>About Us</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        <img
          src="/images/trending-baby-15.jpg"
          className="md:max-w-[560px] max-h-[500px] object-contain"
        />
      </div>
    </div>
  );
}
