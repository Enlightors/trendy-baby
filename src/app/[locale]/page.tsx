import Header from "@/src/components/Header";
import { prisma } from "@/lib/prisma";
import Aboutcom from "@/src/components/Aboutcom";
import Banner from "@/src/components/Banner";
import Contacthome from "@/src/components/Contacthome";
import Productscom from "@/src/components/Productscom";
import TwoVideoSection from "@/src/components/TwoVideoSection";

export default async function Home() {
  const FeaturedProducts = await prisma.product.findMany({
    where: {
      featured: true,
    },
    include: {
      category: true,
      brand: true,
      features: true,
    },
  });
  //// name and id only
  const products = await prisma.product.findMany({
    include: {
      category: true,
      brand: true,
      features: true,
    },
  });
  return (
    <div>
      <Header />
      <p className="text-center text-[#2D617B] text-3xl sm:text-3xl md:text-4xl font-semibold lg:text-4xl xl:pt-[20px] pb-1 px-20">
        Make feeding your baby easier with TrendingBaby
      </p>
      <div className="my-[20px]">
        <Productscom
          hasBackground={true}
          setPopoverOpen={undefined}
          FeaturedProducts={FeaturedProducts}
        />
      </div>
      <Banner />
      <Aboutcom />
      <TwoVideoSection />
      <Contacthome products={products} />
    </div>
  );
}
