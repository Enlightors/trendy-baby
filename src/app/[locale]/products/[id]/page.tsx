import Productscom from "@/src/components/Productscom";
import { notFound } from "next/navigation";
import React from "react";
import {
  productData,
  Products,
  categoriesData,
  Categories,
} from "@/lib/products";
import Image from "next/image";

// interface Product {
//   id: number;
//   imageSrc: string;
//   name: string;
//   description: string;
//   Features?: any;
//   header?: any;
//   headericon?: any;
// }

// const productData: Product[] = [
//   {
//     id: 1,
//     imageSrc: "/images/trending-baby-1.png",
//     name: "Smart Formula Milk Maker",
//     description: `Safety Design & Fast Done – Formula Milk Maker

// Our advanced Formula Milk Maker combines cutting-edge technology and safety to create the perfect bottle for your baby in seconds. Equipped with 4 safety sensors, it ensures the utmost protection during formula preparation. Say goodbye to waiting for your bottle—just press the "START" button and receive a warm formula bottle instantly, saving you time compared to traditional machines.`,
//     header: [
//       {
//         media: {
//           type: "image",
//           url: "/images/trending-baby-12.png",
//         },
//         img: "",
//         title: "Smart Formula Milk Maker O5",
//         description: ` Quickly prepare a safe, warm bottle with one touch.  Equipped with safety sensors, adjustable settings, and instant heating, it ensures a fresh, BPA-free bottle every time.
//             Self-cleaning, easy-to-clean design fits all
//             bottle sizes and formula types.`,
//       },
//     ],
//     headericon: [
//       {
//         bg: "#FF8189",
//         icon: "/images/smart-formula-1.png",
//         description: "Safety Design & Fast Done",
//       },
//       {
//         bg: "",
//         icon: "/images/smart-formula-2.png",
//         description: "Automatic & Intelligent",
//       },
//       {
//         bg: "",
//         icon: "/images/smart-formula-3.png",
//         description: "Healthy & Durable",
//       },
//       {
//         bg: "",
//         icon: "/images/smart-formula-4.png",
//         description: "Customized Design",
//       },
//     ],
//   },
//   {
//     id: 2,
//     imageSrc: "/images/trending-baby-2.png",
//     name: "Wavy Video Baby Monitor",
//     description: "",
//     header: [
//       {
//         media: {
//           type: "video",
//           url: "/videos/Trending-baby-2.mp4",
//         },
//         title: " Wavy Monitor",
//         description: "  ",
//       },
//     ],
//     headericon: [
//       {
//         bg: "#FF8189",
//         icon: "/images/wavy-1.png",
//         description: "360 View",
//       },
//       {
//         bg: "",
//         icon: "/images/wavy-2.png",
//         description: "Temprature Monitoring",
//       },
//       {
//         bg: "",
//         icon: "/images/wavy-3.png",
//         description: "Two Way-Communication",
//       },
//       {
//         bg: "",
//         icon: "/images/wavy-4.png",
//         description: "2x Close Up zoom",
//       },
//     ],
//   },
//   {
//     id: 3,
//     imageSrc: "/images/trending-baby-3.png",
//     name: "Mona Full HD Video Baby Monitor",
//     description: "",
//     header: [
//       {
//         media: {
//           type: "video",
//           url: "/videos/Trending-baby-2.mp4",
//         },
//         title: " Mona Monitor",

//         description: "  ",
//       },
//     ],
//     headericon: [
//       {
//         bg: "#FF8189",
//         icon: "/images/mona-1.png",
//         description: "Wi-Fi Connection",
//       },
//       {
//         bg: "",
//         icon: "/images/mona-2.png",
//         description: "Lullabies",
//       },
//       {
//         bg: "",
//         icon: "/images/mona-3.png",
//         description: "Infraded Night vision",
//       },
//       {
//         bg: "",
//         icon: "/images/mona-4.png",
//         description: "1080 HD 5.0 Display",
//       },
//     ],
//   },
//   {
//     id: 4,
//     imageSrc: "/images/trending-baby-4.png",
//     name: "",
//     description: "",
//     // header: [
//     //   {
//     //     media: {
//     //       type: "video",
//     //       url: "/videos/Trending-baby-2.mp4",
//     //     },
//     //     title: " Mona Monitor",

//     //     description: "  ",
//     //   },
//     // ],
//     // headericon: [
//     //   {
//     //     bg: "#FF8189",
//     //     icon: "/images/mona-1.png",
//     //     description: "Wi-Fi Connection",
//     //   },
//     //   {
//     //     bg: "",
//     //     icon: "/images/mona-2.png",
//     //     description: "Lullabies",
//     //   },
//     //   {
//     //     bg: "",
//     //     icon: "/images/mona-3.png",
//     //     description: "Infraded Night vision",
//     //   },
//     //   {
//     //     bg: "",
//     //     icon: "/images/mona-4.png",
//     //     description: "1080 HD 5.0 Display",
//     //   },
//     // ],
//   },
//   {
//     id: 2,
//     imageSrc: "/images/2.png",
//     name: "Wavy Video Baby Monitor",
//     description: "",
//     header: [
//       {
//         media: {
//           type: "video",
//           url: "/videos/Trending-baby-2.mp4",
//         },
//         title: " Wavy Monitor",
//         description: "  ",
//       },
//     ],
//     // headericon: [
//     //   {
//     //     bg: "#FF8189",
//     //     icon: "/images/wavy-1.png",
//     //     description: "360 View",
//     //   },
//     //   {
//     //     bg: "",
//     //     icon: "/images/wavy-2.png",
//     //     description: "Temprature Monitoring",
//     //   },
//     //   {
//     //     bg: "",
//     //     icon: "/images/wavy-3.png",
//     //     description: "Two Way-Communication",
//     //   },
//     //   {
//     //     bg: "",
//     //     icon: "/images/wavy-4.png",
//     //     description: "2x Close Up zoom",
//     //   },
//     // ],
//   },
// ];

export default function Page({ params: { id } }: { params: { id: string } }) {
  const productId = Number(id);
  const product: Products | undefined = productData.find(
    (p) => p.id === productId
  );

  if (!product) {
    return notFound();
  }
  const category: Categories | undefined = categoriesData.find(
    (c) => c.id === product.category_id
  );

  return (
    <div className="min-h-screen pt-12 h-auto mx-auto max-w-[90vw] lg:max-w-[80vw]">
      <div className="mx-auto h-full pb-20">
        <div className="pt-6">
          <div className="mx-auto grid w-full grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-9 lg:gap-8 2xl:grid-cols-12">
            <div className="mx-auto w-full md:col-span-3">
              <Image
                src={product.imageSrc}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-auto bg-white"
              />
            </div>
            <div className="order-2 col-span-1 rounded-lg md:order-last md:col-span-2">
              <h1 className="mb-4 mt-0 !line-clamp-2 block text-2xl font-bold text-gray-900 sm:text-3xl md:!hidden lg:my-0 lg:mt-8">
                {product.name}
              </h1>
              <div>
                {/* /// Show BuyNow button that messages a whatsap number  */}
                <button className="bg-[#00b1d5] text-white px-4 py-2 rounded-md w-full">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="order-3 col-span-1 mt-4 md:order-2 md:col-span-4 md:mt-0 2xl:col-span-7">
              <h3 className="sr-only">{product.name}</h3>
              <h1 className="hidden text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:block">
                {product.name}
              </h1>
              <div className={`mt-2 flex w-full flex-row gap-2 items-center`}>
                <div className="flex flex-row flex-wrap gap-2">
                  <div className="flex flex-row flex-wrap gap-2">
                    <p className="text-black font-bold">Category: </p>
                    {category?.name}
                  </div>
                  |
                  <div className="flex flex-row flex-wrap gap-2">
                    <p className="text-black font-bold">Brand : </p>
                    <p>{product?.Brand}</p>
                  </div>
                  |
                  <div className="flex flex-row flex-wrap gap-2">
                    <p className="text-black font-bold">Colors: </p>
                    {product?.Colors?.map((color, index) => {
                      return (
                        <p key={index}>
                          {color}
                          {product?.Colors &&
                            index !== product?.Colors?.length - 1 &&
                            ","}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="my-2 w-full border-t border-gray-200 dark:border-gray-700"></div>
              <div
                className="w-full max-w-[90%] whitespace-pre-line text-gray-500 dark:text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: product?.description || "",
                }}
              ></div>
              <div className="flex flex-col gap-2 mt-2">
                {product?.Features?.map((feature: any, index: any) => (
                  <div className="grid grid-cols-2 ">
                    <div className="flex flex-row items-center gap-x-2">
                      <div className="flex h-[30px] w-[30px] bg-[#FF8189] rounded-full justify-center items-center">
                        <img
                          src={feature.icon}
                          className=" object-contain w-[18px] h-[18px]"
                        />
                      </div>
                      <div className="font-medium">
                        <p> {feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
