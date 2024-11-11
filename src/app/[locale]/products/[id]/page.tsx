import Productscom from "@/src/components/Productscom";
import { notFound } from "next/navigation";
import React from "react";

interface Product {
  id: number;
  imageSrc: string;
  name: string;
  description: string;
  Features?: any;
  header?: any;
  headericon?: any;
}

const productData: Product[] = [
  {
    id: 1,
    imageSrc: "/images/trending-baby-1.png",
    name: "Smart Formula Milk Maker",
    description: `Safety Design & Fast Done – Formula Milk Maker

Our advanced Formula Milk Maker combines cutting-edge technology and safety to create the perfect bottle for your baby in seconds. Equipped with 4 safety sensors, it ensures the utmost protection during formula preparation. Say goodbye to waiting for your bottle—just press the "START" button and receive a warm formula bottle instantly, saving you time compared to traditional machines.`,
    header: [
      {
        media: {
          type: "image",
          url: "/images/trending-baby-12.png",
        },
        img: "",
        title: "Smart Formula Milk Maker O5",
        description: ` Quickly prepare a safe, warm bottle with one touch.  Equipped with safety sensors, adjustable settings, and instant heating, it ensures a fresh, BPA-free bottle every time.
            Self-cleaning, easy-to-clean design fits all
            bottle sizes and formula types.`,
      },
    ],
    headericon: [
      {
        bg: "#FF8189",
        icon: "/images/smart-formula-1.png",
        description: "Safety Design & Fast Done",
      },
      {
        bg: "",
        icon: "/images/smart-formula-2.png",
        description: "Automatic & Intelligent",
      },
      {
        bg: "",
        icon: "/images/smart-formula-3.png",
        description: "Healthy & Durable",
      },
      {
        bg: "",
        icon: "/images/smart-formula-4.png",
        description: "Customized Design",
      },
    ],
   
  },
  {
    id: 2,
    imageSrc: "/images/trending-baby-2.png",
    name: "Wavy Video Baby Monitor",
    description: "",
    header: [
      {
        media: {
          type: "video",
          url: "/videos/Trending-baby-2.mp4",
        },
        title: " Wavy Monitor",
        description: "  ",
      },
    ],
    headericon: [
      {
        bg: "#FF8189",
        icon: "/images/wavy-1.png",
        description: "360 View",
      },
      {
        bg: "",
        icon: "/images/wavy-2.png",
        description: "Temprature Monitoring",
      },
      {
        bg: "",
        icon: "/images/wavy-3.png",
        description: "Two Way-Communication",
      },
      {
        bg: "",
        icon: "/images/wavy-4.png",
        description: "2x Close Up zoom",
      },
    ],

    
  },
  {
    id: 3,
    imageSrc: "/images/trending-baby-3.png",
    name: "Mona Full HD Video Baby Monitor",
    description: "",
    header: [
      {
        media: {
          type: "video",
          url: "/videos/Trending-baby-2.mp4",
        },
        title: " Mona Monitor",

        description: "  ",
      },
    ],
    headericon: [
      {
        bg: "#FF8189",
        icon: "/images/mona-1.png",
        description: "Wi-Fi Connection",
      },
      {
        bg: "",
        icon: "/images/mona-2.png",
        description: "Lullabies",
      },
      {
        bg: "",
        icon: "/images/mona-3.png",
        description: "Infraded Night vision",
      },
      {
        bg: "",
        icon: "/images/mona-4.png",
        description: "1080 HD 5.0 Display",
      },
    ],
   
  },
  {
    id: 4,
    imageSrc: "/images/trending-baby-4.png",
    name: "",
    description: "",
    // header: [
    //   {
    //     media: {
    //       type: "video",
    //       url: "/videos/Trending-baby-2.mp4",
    //     },
    //     title: " Mona Monitor",

    //     description: "  ",
    //   },
    // ],
    // headericon: [
    //   {
    //     bg: "#FF8189",
    //     icon: "/images/mona-1.png",
    //     description: "Wi-Fi Connection",
    //   },
    //   {
    //     bg: "",
    //     icon: "/images/mona-2.png",
    //     description: "Lullabies",
    //   },
    //   {
    //     bg: "",
    //     icon: "/images/mona-3.png",
    //     description: "Infraded Night vision",
    //   },
    //   {
    //     bg: "",
    //     icon: "/images/mona-4.png",
    //     description: "1080 HD 5.0 Display",
    //   },
    // ],

  },
  
];

export default function Page({ params: { id } }: { params: { id: string } }) {
  const productId = Number(id);
  const product = productData.find((p) => p.id === productId);

  if (!product) {
    return notFound();
  }

  return (
    <div className="min-h-screen pt-12 h-auto  mx-auto  ">
      {product?.header?.map((header: any, index: any) => (
        <div className="flex  lg:flex-row gap-x-4 mx-auto justify-center  pr-0">
          <div className=" w-full lg:max-w-[600px] lg:max-h-[400px]">
            {header?.media?.type === "video" ? ( 
              <video
                className=""
                src={header?.media?.url}
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              />
            ) : (
              <img src={header?.media?.url} alt="Product" />
            )}
          </div>
          <div className="flex flex-col px-8 gap-y-4 ">
            <div className="max-w-[60%]">
              <p className="font-bold text-3xl  mx-auto ">{header.title}</p>
            </div>
            {/* <p className="">
              {header.description}
              </p> */}

            {product?.headericon?.map((headericon: any, index: any) => (
              <div className="grid grid-cols-2">
                
                <div className="flex flex-row items-center gap-x-2 ">
                  
                  <div className="flex  h-[50px] w-[50px] bg-[#FF8189] rounded-full justify-center items-center">
                    <img
                      src={headericon.icon}
                      className=" object-contain w-[34px] h-[31px]"
                    />
                  </div>
                  <div className="font-medium">
                    <p> {headericon.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="px-20 py-[40px] flex  w-full flex-col md:flex-row items-center justify-center gap-x-20 mx-auto">
        <div className=" h-[300px]">
          <img
            className="object-contain h-[300px]"
            src={product.imageSrc}
            alt={product.name}
          />
        </div>
        <div className="flex flex-col max-w-[400px]">
        <p className="text-xl font-normal  text-wrap  ">
          {product.description}
        </p>
        </div>

      </div>
      <p className="text-[#2D617B] font-bold text-4xl text-center">
        More Products
      </p>
      <Productscom filter={[productId]} />
    </div>
  );
}
