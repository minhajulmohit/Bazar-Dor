import AllProducts from "@/components/home/allproducts";
import Hero from "@/components/home/hero";
import PriceDecreased from "@/components/home/pricedecreased";
import PriceIncreased from "@/components/home/priceincreased";


export default function Home() {
  return (
    <div>
      <Hero />
      <PriceIncreased />
      <PriceDecreased />
      <AllProducts />
     
    </div>
  );
}
