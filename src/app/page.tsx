import { Suspense } from "react";

import AllProducts from "@/components/home/allproducts";
import Hero from "@/components/home/hero";
import PriceDecreased from "@/components/home/pricedecreased";
import PriceIncreased from "@/components/home/priceincreased";
import ProductSkeleton from "@/components/home/homeskeleton";

export default function Home() {
  return (
    <div>
      <Hero />

      <Suspense fallback={<ProductSkeleton count={6} />}>
        <PriceIncreased />
      </Suspense>

      <Suspense fallback={<ProductSkeleton count={6} />}>
        <PriceDecreased />
      </Suspense>

      <Suspense fallback={<ProductSkeleton count={33} />}>
        <AllProducts />
      </Suspense>
    </div>
  );
}
