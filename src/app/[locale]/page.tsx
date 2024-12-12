import Products from "@/src/components/Productscom";
import React from "react";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

import Aboutcom from "@/src/components/Aboutcom";
import Contacthome from "@/src/components/Contacthome";
import Video2 from "@/src/components/Video2";
import Swipercom from "@/src/components/swipercom";
import Banner from "@/src/components/Banner";
import Productscom from "@/src/components/Productscom";

export default function Home() {
  return (
    <div>
      <Header />
      <p className="text-center text-[#2D617B] text-3xl sm:text-3xl md:text-4xl font-semibold lg:text-4xl xl:pt-[20px] pb-1 px-20">
        Make feeding your baby easier with TrendingBaby
      </p>
      <Productscom hasBackground={true} />

      <Banner />
      <Aboutcom />

      <Video2 />
      <Swipercom />
      <Contacthome />
    </div>
  );
}
