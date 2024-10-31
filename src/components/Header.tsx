import React from 'react';


export default function Header() {
  return (
    <div>
      <div className='h-[700px] relative overflow-hidden '>
        <video
          className='absolute top-0 left-0 w-full h-full object-cover pt-12'
          src='/videos/Trending-bay-1.mp4'
          autoPlay
          loop
          muted
          preload='auto'
          playsInline
        />
      </div>
    </div>
  );
}
 Header;
