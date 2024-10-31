import React from "react";

interface Product {
  id: number;
  imageSrc: string;
  name: string;
  description: string;
}

const productData: Product[] = [
  {
    id: 1,
    imageSrc: "/images/trending-baby-1.png",
    name: "Smart Formula Milk Maker",
    description: "",
  },
  {
    id: 2,
    imageSrc: "/images/trendy-baby-2.webp",
    name: "Sterilizers",
    description: "Sterilizers to clean your baby’s bottles.",
  },
  {
    id: 3,
    imageSrc: "/images/trendy-baby-3.webp",
    name: "Bottle Warmers",
    description: "Warm your baby’s bottle quickly.",
  },
  {
    id: 4,
    imageSrc: "/images/trendy-baby-4.webp",
    name: "Food Maker Deluxe",
    description: "Make baby food with ease.",
  },
  {
    id: 5,
    imageSrc: "/images/trendy-baby-5.webp",
    name: "Spare Parts",
    description: "All the spare parts you need.",
  },
];

export default function page({
  params: { locale, id },
  searchParams,
}: {
  params: { locale: string; id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const product = productData.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="min-h-screen pt-12 h-auto ">
     <div className="w-full ">
      <img src="/images/trending-baby-14.png"/>
     </div>
     <div className="px-[40px] py-[40px] flex flex-row items-center justify-center gap-x-40">
      <div>
     <img 
      className=""
      height={300}
      width={300}
      src={product.imageSrc} alt={product.name} />
       <h1 className="text-center text-2xl font-bold">{product.name}</h1>
       <p className="text-center">{product.description}</p>
       </div>
       <div className="flex flex-col gap-y-4 ">

          <div className="flex flex-row bg-[#3F738D] h-[130px] w-[800px] text-white  text-bold  whitespace-normal gap-4 items-center px-4">
          <img src="/images/trending-baby-icon-1.png" className="w-[100px] h-[100px] "/>
           <div className="flex flex-col">
           <p className="font-bold text-2xl"> Instant-Heating</p>
           <p className="font-semibold text-xl">
             With Thermoblock heating technology,<br/>
             no pre-heating time needed,     <br/>
             free from re-boiling water.     <br/>
             </p>
         </div>
         </div>


         <div  className="flex flex-row bg-[#FF8189] h-[130px] w-[800px] text-white whitespace-normal gap-4 items-center px-4 ">
         <img src="/images/trending-baby-icon-2.png" className=" w-[100px] h-[100px] "/>
         <div className="flex flex-col">
            <p className="font-bold text-2xl">Materials</p>
            <p className="font-semibold text-xl ">
            The powder container, funnel and water  <br/>
            tank are made of food-grade materials, <br/>
            FDA approved and BPA free.<br/>
            </p>
         </div>
         </div>


         <div  className="flex flex-row bg-[#F5CE3E] h-[130px] w-[800px] text-white whitespace-normal gap-4 items-center px-4 ">
         <img src="/images/trending-baby-icon-2.png" className=" w-[100px] h-[100px] "/>
         <div className="flex flex-col">
            <p className="font-bold text-2xl">Materials</p>
            <p className="font-semibold text-xl ">
            The powder container, funnel and water  <br/>
            tank are made of food-grade materials, <br/>
            FDA approved and BPA free.<br/>
            </p>
         </div>
         </div>


         <div  className="flex flex-row bg-[#3F738D] h-[130px] w-[800px] text-white whitespace-normal gap-4 items-center px-4 ">
         <img src="/images/trending-baby-icon-2.png" className=" w-[100px] h-[100px] "/>
         <div className="flex flex-col">
            <p className="font-bold text-2xl">Materials</p>
            <p className="font-semibold text-xl ">
            The powder container, funnel and water  <br/>
            tank are made of food-grade materials, <br/>
            FDA approved and BPA free.<br/>
            </p>
         </div>
         </div>

         <div  className="flex flex-row bg-[#FF8189] h-[130px] w-[800px] text-white whitespace-normal gap-4 items-center px-4 ">
         <img src="/images/trending-baby-icon-2.png" className=" w-[100px] h-[100px] "/>
         <div className="flex flex-col">
            <p className="font-bold text-2xl">Materials</p>
            <p className="font-semibold text-xl ">
            The powder container, funnel and water  <br/>
            tank are made of food-grade materials, <br/>
            FDA approved and BPA free.<br/>
            </p>
         </div>
         </div>

         <div  className="flex flex-row bg-[#F5CE3E] h-[130px] w-[800px] text-white whitespace-normal gap-4 items-center px-4 ">
         <img src="/images/trending-baby-icon-2.png" className=" w-[100px] h-[100px] "/>
         <div className="flex flex-col">
            <p className="font-bold text-2xl">Materials</p>
            <p className="font-semibold text-xl ">
            The powder container, funnel and water  <br/>
            tank are made of food-grade materials, <br/>
            FDA approved and BPA free.<br/>
            </p>
         </div>
         </div>


       </div>
      </div>
    






     
    </div>
  );
}
