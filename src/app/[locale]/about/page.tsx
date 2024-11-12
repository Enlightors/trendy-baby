import Aboutcom from '@/src/components/Aboutcom'
import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='flex flex-col gap-y-20  '>

    <div className="flex flex-col lg:flex-row items-center justify-between max-h-[700px]  px-6 md:px-20  gap-x-10 ">
      <div className="flex flex-col  ">
        <div>
          <img
            src="/images/Trending-baby-logo.png"
            alt="trendingbaby-logo"
            width={200}
            height={200}
            className=" object-contain max-w-[500px]"
          />
        </div>

        <div>
          <p className="font-semibold whitespace-normal pb-10  ">
          At Trending Baby, we are committed to providing a safe and comfortable environment for children. Since [Year of Establishment], we have been working hard to offer the latest technology and the best products to meet the needs of parents. Our mission is to help you provide the best care for your children by offering high-quality products designed specifically for childhood.
          </p>
        </div>
         <div className='flex pb-10'>
        <div className=" flex  flex-col h-[40px] w-[120px] rounded-md bg-[#3F738D] text-white text-center justify-center items-center text-xl ">
          <Link href={`/products`} className="">
            <p>Products</p>
          </Link>
        </div>
        </div>
      </div>

      <div className="">
        <img
          src="/images/trending-baby-12.png"
          className="  md:max-w-[560px] max-h-[500px] object-contain"
        />
      </div>



      
    </div>


    <div className="flex flex-col lg:flex-row  justify-between max-h-[700px] px-6 md:px-20  gap-x-10 pt-5 md:pb-0 ">

    <div className="pb-10">
        <img
          src="/images/trending-baby-15.jpg"
          className="max-h-[500px] object-contain  md:max-w-[560px]"
        />
      </div>
      <div className="flex flex-col  ">

        <div>
          <p className="font-semibold whitespace-normal pb-10 ">
          Trending Baby was founded on a passion for providing innovative solutions that make life easier for parents.
           We believe that children are our future, which is why we continuously 
          invest in research and development to offer the latest products that meet their evolving needs.
           Our goal is to be the leading company in the children's products industry in the region.
          </p>
        </div>

  
      </div>

 



      
    </div>
    </div>
  )
}

 page