"use client"; 

import React, { useState } from 'react';

export default function Video2() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative h-[250px] md:h-[600px] overflow-hidden">
      <video
         className='absolute md:top-0 md:left md:right  w-full h-[40hv] md:w-full md:h-[110vh] object-cover  '
        src="/videos/trending-baby-2.mp4"
        autoPlay
        loop
        muted={isMuted}
        preload="auto"
        playsInline
      />
 
      <button
        onClick={toggleMute}
        className="absolute   bottom-10 left-2 md:bottom-20 md:left-6 bg-black  p-1 md:p-2 rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-300"
      >
        {isMuted ? (

          <img src="/images/sound-off.svg" alt="Muted" className="w-6 h-6" />
        ) : (

          <img src="/images/sound-on.svg" alt="Sound On" className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
