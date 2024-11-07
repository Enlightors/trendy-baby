import Products from "@/src/components/Productscom";
import React from "react";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Pattern from "@/src/components/Pattern";
import Aboutcom from "@/src/components/Aboutcom";
import Contacthome from "@/src/components/Contacthome";
import Video2 from "@/src/components/Video2";



export default function Home() {
  return (
    <div>
      <Header />
      <p className="text-center text-[#2D617B] text-3xl sm:text-3xl md:text-4xl font-semibold lg:text-4xl py-4 px-20">
        Make feeding your baby easier with TrendingBaby
      </p>
      <Products />
      <Aboutcom/>
     <Contacthome/>
 
      <Video2/> 
      
    </div>
  );
}
