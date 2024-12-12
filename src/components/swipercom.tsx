"use client";

import React, { useRef, useState } from "react";
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
    videoSrc: "/videos/trending-baby-3.mp4",
    name: "Smart Formula Milk Maker O5",
  },
  {
    id: 2,
    videoSrc: "/videos/trending-baby-3.mp4",
    name: "Wavy Video Baby Monitor",
  },
];

interface SwipercomProps {
  filter?: number[];
  isPopover?: boolean;
}

export default function Swipercom({
  filter = [],
  isPopover = false,
}: SwipercomProps) {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  const filteredProducts = productData.filter(
    (product) => !filter.includes(product.id)
  );

  const togglePlayPause = (id: number, videoRef: HTMLVideoElement) => {
    // If another video is playing, pause it
    if (playingVideoId !== null && playingVideoId !== id) {
      const prevVideoRef = document.getElementById(
        `video-${playingVideoId}`
      ) as HTMLVideoElement;
      if (prevVideoRef) {
        prevVideoRef.pause();
      }
    }

    // Toggle play/pause for the selected video
    if (playingVideoId === id) {
      videoRef.pause();
      setPlayingVideoId(null);
    } else {
      videoRef.play();
      setPlayingVideoId(id);
    }
  };

  return (
    <div className="mx-auto py-8 px-4 relative">
      {/* Navigation buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow-lg z-10"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow-lg z-10"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <h2 className="text-center text-2xl font-semibold mb-4 text-gray-700">
        New Arrivals and Top Sellers
      </h2>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation={{ enabled: false }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {filteredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative flex flex-col items-center w-full justify-center">
              <div className="relative max-h-[700px] h-[400px] w-full flex items-center justify-center overflow-hidden">
                <video
                  className="h-full w-full object-cover"
                  src={product.videoSrc}
                  preload="metadata"
                  muted
                  playsInline
                  id={`video-${product.id}`}
                  ref={(videoRef) => {
                    if (videoRef && playingVideoId === product.id) {
                      videoRef.play();
                    }
                  }}
                />

                <button
                  onClick={() => {
                    const videoRef = document.getElementById(
                      `video-${product.id}`
                    ) as HTMLVideoElement;
                    togglePlayPause(product.id, videoRef);
                  }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  {playingVideoId === product.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-10 h-10 text-white opacity-80"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 19h4V5H6zm8-14v14h4V5z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-10 h-10 text-white opacity-80"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="mt-2 text-center">
                <p
                  className={`text-lg font-semibold ${
                    isPopover ? "text-white" : "text-gray-800"
                  }`}
                >
                  {product.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
