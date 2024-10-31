import React from 'react'
import Link from "next/link";

export default function Aboutcom() {
  return (
    <div className='flex flex-row justify-between max-h-[700px] px-20'>
        
   <div className=' flex h-[40px] w-[120px] rounded-md bg-[#FF8189] text-white text-center justify-center items-center text-xl'>

    <Link href={`/about`} className=''>
    <p>About Us</p>
    </Link>

 </div>
   <div className=''>
    <img src='/images/trending-baby-12.png' className='max-w-[600px] max-h-[500px] object-contain'/>
   </div>
 </div>
  )
}

 Aboutcom