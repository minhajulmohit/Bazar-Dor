import DetailPageBottomSection from "@/components/product/detailpagebottomsec";
import DetailPageTopSection from "@/components/product/detailpagetopsec";
import { TProduct } from "@/types";
import { notFound } from "next/navigation";

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${id}`,
  );

  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }
  const product: TProduct = await res.json();
  if (!product) {
    notFound();
  }

  return (
    <>
      <DetailPageTopSection product={product} />
      <DetailPageBottomSection product={product} />
    </>
  );
};

export default DetailsPage;
