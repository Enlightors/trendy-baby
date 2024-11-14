import Aboutcom from "@/src/components/Aboutcom";
import React from "react";
import Link from "next/link";
import Banner from "@/src/components/Banner";
import Productscom from "@/src/components/Productscom";

export default function page() {
  return (
    <div className="flex flex-col gap-y-4  ">
      <div className=" flex  flex-col  md:flex-row w-full  h-[200px] md:h-[250px] bg-[#00B1D5] justify-between lg:justify-center  md:px-0 mx-auto  gap-x-24  ">
        <div className="flex flex-col items-center justify-center">
          <p className=" text-white text-2xl md:text-5xl  max-w-[400px] justify-center font-semibold md:mx-10 ">
            Focusing On Parental Care
          </p>
        </div>

        <div className=" ">
          <img src="/images/banner.png  " 
         
          className="w-[700px] h-[150px] md:w-[700px] md:h-[250px] object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between  lg:justify-center max-h-[700px]   md:px-0  gap-x-10  ">
        <div className="flex flex-col  md:mx-10 px-[20px] md:px-0">
          <div className="">
            <img
              src="/images/Trending-baby-logo.png"
              alt="trendingbaby-logo"
              width={200}
              height={200}
              className=" object-contain max-w-[500px]"
            />
          </div>

          <div>
            <p className="  whitespace-normal pb-10  max-w-[460px] items-center ">
              At Trending Baby, we are committed to providing a safe and
              comfortable environment for children. Since [Year of
              Establishment], we have been working hard to offer the latest
              technology and the best products to meet the needs of parents. Our
              mission is to help you provide the best care for your children by
              offering high-quality products designed specifically for
              childhood.
            </p>
          </div>
        </div>

        <div className="">
          <img
            src="/images/trending-baby-17.png"
            className="  md:w-[700px] max-h-[600px] object-contain"
          />
        </div>
      </div>

      <Banner />

      <div className="flex flex-col lg:flex-row  justify-between lg:justify-center max-h-[700px] px-6 md:px-20  gap-x-10 pt-5 md:pb-0 ">
        <div className="pb-10 md:pb-0">
          <img
            src="/images/trending-baby-15.jpg"
            className="max-h-[700px] object-contain  md:max-w-[600px]"
          />
        </div>
        <div className="flex flex-col   gap-y-2 ">
          <div className="flex flex-col gap-y-2">
            <p className="font-bold"> Focusing on Innovation and Growth</p>
            <p className=" whitespace-normal   max-w-[600px] ">
              Trending Baby was founded on a passion for providing innovative
              solutions that make life easier for parents. We believe that
              children are our future, which is why we continuously invest in
              research and development to offer the latest products that meet
              their evolving needs. Our goal is to be the leading company in the
              children's products industry in the region.
            </p>
          </div>
          <div className="flex flex-col  gap-y-2">
           <p className="font-bold">Focusing on Quality and Safet</p>
          <p className="max-w-[600px]">
          At Trending Baby, we put your child's safety and security first. All
          our products are designed according to the highest quality and safety
          standards and undergo rigorous testing to ensure their safety. Our
          mission is to provide a safe and comfortable environment for your
          child, so they can grow and learn in a healthy environment.
           </p>
      </div>
        </div>

      </div>

      

      <Productscom hasBackground={true} />
    </div>
  );
}
