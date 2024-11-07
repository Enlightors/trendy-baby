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
    description: "",
    header: [
      {
        media: {
          type: "video",
          url: "/videos/trending-baby-1.mp4",
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
    Features: [
      {
        title: "Instant-Heating",
        description:
          "With Thermoblock heating technology, no pre-heating time needed, free from re-boiling water.",
        icon: "/images/trending-baby-icon-1.png",
        backgroundColor: "#3F738D",
      },
      {
        title: "Materials",
        description:
          "The powder container, funnel and water tank are made of food-grade materials, FDA approved and BPA free.",
        icon: "/images/trending-baby-icon-2.png",
        backgroundColor: "#FF8189",
      },
      {
        title: "Measurement",
        description:
          "Water and formula powder are precisely measured, dispensed and perfectly mixed according to identified formula information.",
        icon: "/images/trending-baby-icon-3.png",
        backgroundColor: "#F5CE3E",
      },
      {
        title: "Safety Protection",
        description:
          "Works with 18 automatic sensors, providing instant protection and preventing faulty operation.",
        icon: "/images/trending-baby-icon-4.png",
        backgroundColor: "#3F738D",
      },
      {
        title: "Airtightness",
        description:
          "With the hermetically sealed storage, keeps formula powder from humid or unhygienic environment.",
        icon: "/images/trending-baby-icon-5.png",
        backgroundColor: "#FF8189",
      },
      {
        title: "Night Light",
        description:
          "LED soft light allows safe&handy bottle preparation at night even without other lights on.",
        icon: "/images/trending-baby-icon-6.png",
        backgroundColor: "#F5CE3E",
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

    Features: [
      {
        title: "Rechargable Battery",
        description: "",
        icon: "/images/wavy-icon-1.png",
        backgroundColor: "#3F738D",
      },
      {
        title: "Lullaby Playing",
        description: "",
        icon: "/images/wavy-icon-2.png",
        backgroundColor: "#FF8189",
      },
      {
        title: "Timer Setting",
        description: "",
        icon: "/images/wavy-icon-3.png",
        backgroundColor: "#F5CE3E",
      },
      {
        title: "Voice Activation Mode",
        description: "",
        icon: "/images/wavy-icon-4.png",
        backgroundColor: "#3F738D",
      },
      {
        title: "5.0 Inch LCD Screen",
        description: "",
        icon: "/images/wavy-icon-5.png",
        backgroundColor: "#FF8189",
      },
      {
        title: "Infraded Night Vision",
        description: "",
        icon: "/images/wavy-icon-6.png",
        backgroundColor: "#F5CE3E",
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
    Features: [
      {
        title: "Secure & Private Connection",
        description: "",
        icon: "/images/mona-icon-1.png",
        backgroundColor: "#3F738D",
      },
      {
        title: "Two Way Connection",
        description: "",
        icon: "/images/mona-icon-2.png",
        backgroundColor: "#FF8189",
      },
      {
        title: "Superion 4x Zoom",
        description: "",
        icon: "/images/mona-icon-3.png",
        backgroundColor: "#F5CE3E",
      },
      {
        title: "Vox Function",
        description: "",
        icon: "/images/mona-icon-4.png",
        backgroundColor: "#3F738D",
      },
      {
        title: "Rechargable Battery",
        description: "",
        icon: "/images/mona-icon-5.png",
        backgroundColor: "#FF8189",
      },
      {
        title: "Up to 960tf(300 meters)",
        description: "",
        icon: "/images/mona-icon-6.png",
        backgroundColor: "#F5CE3E",
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
    // Features: [
    //   {
    //     title: "Secure & Private Connection",
    //     description: "",
    //     icon: "/images/mona-icon-1.png",
    //     backgroundColor: "#3F738D",
    //   },
    //   {
    //     title: "Two Way Connection",
    //     description: "",
    //     icon: "/images/mona-icon-2.png",
    //     backgroundColor: "#FF8189",
    //   },
    //   {
    //     title: "Superion 4x Zoom",
    //     description: "",
    //     icon: "/images/mona-icon-3.png",
    //     backgroundColor: "#F5CE3E",
    //   },
    //   {
    //     title: "Vox Function",
    //     description: "",
    //     icon: "/images/mona-icon-4.png",
    //     backgroundColor: "#3F738D",
    //   },
    //   {
    //     title: "Rechargable Battery",
    //     description: "",
    //     icon: "/images/mona-icon-5.png",
    //     backgroundColor: "#FF8189",
    //   },
    //   {
    //     title: "Up to 960tf(300 meters)",
    //     description: "",
    //     icon: "/images/mona-icon-6.png",
    //     backgroundColor: "#F5CE3E",
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
        <div className="flex flex-col  lg:flex-row gap-x-4 mx-auto justify-center  pr-0">
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
              <div className="grid grid-cols-2  gap-y-2 ">
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

      <div className="px-20 py-[40px] flex  flex-col md:flex-row items-center justify-center gap-x-20">
        <div className=" max-h-[300px]">
          <img
            className="object-contain h-[200px]"
            src={product.imageSrc}
            alt={product.name}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          {product?.Features?.map((feature: any, index: any) => (
            <div
              key={index}
              className="flex flex-row h-[70px] w-[500px] text-white whitespace-normal gap-4 items-center px-4"
              style={{ backgroundColor: feature.backgroundColor }}
            >
              <img
                src={feature.icon}
                className="w-[40px] h-[40px]"
                alt={feature.title}
              />
              <div className="flex flex-col">
                <p className="font-bold text-">{feature.title}</p>
                <p className="font-semibold text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[#2D617B] font-bold text-4xl text-center">
        More Products
      </p>
      <Productscom filter={[productId]} />
    </div>
  );
}
