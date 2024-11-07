"use client";
import React from 'react'

export default function Video2() {
  return (
    <div>    
        <div className='h-[270px] md:h-[600px] relative overflow-hidden '>
    <video
      className='absolute md:top-0 md:left- md:right   w-full h-[30hv] md:w-full md:h-[110vh] object-cover  '
      src='/videos/trending-baby-2.mp4'
      autoPlay
      loop
      muted
      preload='auto'
      playsInline
    />
  </div></div>
  )
}

