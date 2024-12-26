"use client";

import React, { useState } from "react";

export default function Header() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative overflow-hidden h-[calc(100vh-90px)]">
      <video
        className="absolute md:top-0 md:left md:right aspect-video h-[calc(100vh-90px)] w-full md:w-full object-cover"
        src="https://storage.trendingbaby.com/storage/Trending Baby -Video - EN 2024 2 (1).mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        controls={false}
      />

      <button
        onClick={toggleMute}
        className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-black  p-1 md:p-2 rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-300"
      >
        {isMuted ? (
          <img src="/images/Sound-off.svg" alt="Muted" className="w-6 h-6" />
        ) : (
          <img src="/images/Sound-on.svg" alt="Sound On" className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
