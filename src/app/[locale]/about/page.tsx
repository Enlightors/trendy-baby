import Aboutcom from '@/src/components/Aboutcom'
import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div>
    <div className="flex flex-col md:flex-row items-center justify-between max-h-[700px] px-20 pt-10 ">
      <div className="flex flex-col  ">
        <div>
          <img
            src="/images/Trending-baby-logo.png"
            alt="trendingbaby-logo"
            width={200}
            height={200}
            className=" object-contain"
          />
        </div>

        <div>
          <p className="font-semibold whitespace-normal pb-10  ">
            Trending Baby offers everything a child needs,<br/> with a special focus on providinga professional<br/> and comfortable experience for parents. 
          </p>
        </div>

        <div className=" flex  flex-col h-[40px] w-[120px] rounded-md bg-[#3F738D] text-white text-center justify-center items-center text-xl">
          <Link href={`/products`} className="">
            <p>Products</p>
          </Link>
        </div>
      </div>

      <div className="">
        <img
          src="/images/trending-baby-12.png"
          className="max-w-[560px] max-h-[500px] object-contain"
        />
      </div>
    </div>
    </div>
  )
}

 page