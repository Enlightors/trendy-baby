import Header from "@/src/components/Header";

import Aboutcom from "@/src/components/Aboutcom";
import Banner from "@/src/components/Banner";
import Contacthome from "@/src/components/Contacthome";
import Productscom from "@/src/components/Productscom";
import TwoVideoSection from "@/src/components/TwoVideoSection";

export default function Home() {
  return (
    <div>
      <Header />
      <p className="text-center text-[#2D617B] text-3xl sm:text-3xl md:text-4xl font-semibold lg:text-4xl xl:pt-[20px] pb-1 px-20">
        Make feeding your baby easier with TrendingBaby
      </p>
      <Productscom hasBackground={true} setPopoverOpen={null} />
      <Banner />
      <Aboutcom />
      <TwoVideoSection />
      <Contacthome />
    </div>
  );
}
