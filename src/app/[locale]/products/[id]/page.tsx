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
     <div className="px-[40px] py-[40px] flex flex-row items-center justify-between">
      <div>
     <img 
      className=""
      height={170}
      width={170}
      src={product.imageSrc} alt={product.name} />
       <h1>{product.name}</h1>
       <p>{product.description}</p>
       </div>
       <div className="flex flex-col  ">
          <div className="flex flex-col bg-[#3F738D] h-auto w-[700px] text-white">
           hhhhh
        </div>
        
       </div>
      </div>
    






     
    </div>
  );
}
