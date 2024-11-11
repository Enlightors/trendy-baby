"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";

interface Product {
  id: number;
  videoSrc: string;
  name: string;
}

const productData: Product[] = [
  {
    id: 1,
    videoSrc: "/videos/trending-baby-4.mp4",
    name: "Smart Formula Milk Maker O5",
  },
  {
    id: 2,
    videoSrc: "/videos/trending-baby-4.mp4",
    name: "Wavy Video Baby Monitor",
  },
  {
    id: 3,
    videoSrc: "/videos/trending-baby-4.mp4",
    name: "Mono Full HD Video Baby Monitor",
  },
  { id: 4, videoSrc: "/videos/trending-baby-4.mp4", name: "Baby Crib" },
  { id: 5, videoSrc: "/videos/trending-baby-4.mp4", name: "Baby Crib" },
  { id: 6, videoSrc: "/videos/trending-baby-4.mp4", name: "Baby Crib" },
];

interface ProductscomProps {
  filter?: number[];
  isPopover?: boolean;
}

export default function Productscom({
  filter = [],
  isPopover = false,
}: ProductscomProps) {
  const swiperRef = useRef<SwiperCore | null>(null);

  const filteredProducts = productData.filter(
    (product) => !filter.includes(product.id)
  );

  return (
    <div className=" mx-auto py-8 px-4 relative ">
      {/* Custom Navigation Buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow-lg z-10"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow-lg z-10"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={6}
        loop={true}
        navigation={{ enabled: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        
        {filteredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className=" flex flex-row w-full">
              <div className="flex flex-col items-center w-full justify-center gap-y-4 ">
                <div className="max-h-[300px] h-[300px] w-full flex items-center justify-center  ">
                  <video
                    className="h-[300px] w-[300px]"
                    src={product.videoSrc}
                    preload="auto"
                    // controls // Add controls if you want to provide video controls
                    muted
                    autoPlay
                    playsInline
                  />
                </div>
                <div className="">
                  <p
                    className={`text-xl font-semibold cursor-pointer hover:text-[#5ac5f1]  text-center ${
                      isPopover ? "text-white" : "text-black"
                    }`}
                  >

                    {product.name}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}
