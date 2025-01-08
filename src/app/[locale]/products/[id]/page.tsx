import { prisma } from "@/lib/prisma";
import { Feature } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageGallery from "./ImageGallery";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const productId = Number(id);
  const product = await prisma.product.findUnique({
    where: { id: productId },
    include: {
      category: true,
      brand: true,
      features: true,
      ProductImages: true,
    },
  });
  if (!product) {
    return notFound();
  }

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
                className="w-full h-auto"
              />
              <ImageGallery images={product.ProductImages} />
            </div>
            <div className="order-2 col-span-1 rounded-lg md:order-last md:col-span-2">
              <h1 className="mb-4 mt-0 !line-clamp-2 block text-2xl font-bold text-gray-900 sm:text-3xl md:!hidden lg:my-0 lg:mt-8">
                {product.name}
              </h1>
              <div>
                {/* /// Show BuyNow button that messages a whatsap number  */}
                <Link
                  href={`/contact?product_id=${product.id}`}
                  className="bg-[#00b1d5] text-white px-4 py-2 rounded-md w-full"
                >
                  Contact Us
                </Link>
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
                    {product?.category?.name}
                  </div>
                  {product?.brand && (
                    <div className="flex flex-row flex-wrap gap-2">
                      | <p className="text-black font-bold">Brand : </p>
                      <p>{product?.brand?.name}</p>
                    </div>
                  )}

                  {product?.colors.length > 0 && (
                    <div className="flex flex-row flex-wrap gap-2">
                      | <p className="text-black font-bold">Colors: </p>
                      {product?.colors?.map((color, index) => {
                        return (
                          <p key={index}>
                            {color}
                            {product?.colors &&
                              index !== product?.colors?.length - 1 &&
                              ","}
                          </p>
                        );
                      })}
                    </div>
                  )}
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
                {product?.features?.map((feature: Feature) => (
                  <div key={feature.id} className="grid grid-cols-2 ">
                    <div className="flex flex-row items-center gap-x-2">
                      <div className="flex h-[30px] w-[30px] bg-[#FF8189] rounded-full justify-center items-center">
                        <img
                          src={feature.image}
                          className=" object-contain w-[18px] h-[18px]"
                        />
                      </div>
                      <div className="font-medium">
                        <p> {feature.name}</p>
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
