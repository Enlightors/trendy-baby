import Products from "@/src/components/Products";
import React from "react";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Awards from "@/src/components/Awards";
import Pattern from "@/src/components/Pattern";

export default function Home() {
  return (
    <div>
      <Header />
      <Products />
      <Awards />
      <Pattern/>
      <div className="flex flex-row items-center justify-center px-[40px] ">
        <div className="w-1/2 ">
        <div className="w-full h-[400px]">
          <img src="/images/trending-baby-12.png"/>
        </div>
        </div>
        <div className="w-1/2 ">
        <div className="w-full h-[400px]">
          <img src="/images/trending-baby-13.png"/>
          </div>
        </div>

      </div>
    </div>
  );
}
