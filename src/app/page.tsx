import BestSellers from "@/components/BestSellers";
import FloralLegacy from "@/components/FloralLegacy";
import GharanaStrip from "@/components/GharanaStrip";
import Hero from "@/components/Hero";
import MustardOilFeature from "@/components/MustardOilFeature";
import Reviews from "@/components/Reviews";
import Roots from "@/components/Roots";
import SweetNews from "@/components/SweetNews";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
      <FloralLegacy />
      <GharanaStrip />
      <Roots />
      <MustardOilFeature />
      <SweetNews />
      <Reviews />
    </>
  );
}
