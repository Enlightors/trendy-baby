import React from 'react';


export default function Header() {
  return (
    <div>
      <div className='h-[300px] md:h-[700px] relative overflow-hidden '>
        <video
          className='absolute md:top-0 md:left- md:right  w-full h-[40hv] md:w-full md:h-[110vh] object-cover  '
          src='/videos/trending-baby-1.mp4'
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

