import AllProducts from "@/components/home/allproducts";
import Hero from "@/components/home/hero";
import PriceDecreased from "@/components/home/pricedecreased";
import PriceIncreased from "@/components/home/priceincreased";

export default function Home() {
  return (
    <div className="bg-[#f0f5f0]">
      <Hero />
      <PriceIncreased />
      <PriceDecreased />
      <AllProducts />
    </div>
  );
}
