import DetailPageBottomSection from "@/components/product/detailpagebottomsec";
import DetailPageTopSection from "@/components/product/detailpagetopsec";
import { TProduct } from "@/type";
import { notFound } from "next/navigation";

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${id}`,
  );
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
