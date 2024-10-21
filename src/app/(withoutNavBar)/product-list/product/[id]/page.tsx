import Header from "@/components/productDetail/Header";
import Description from "@/components/productDetail/Description";
import { Suspense } from "react";
import Skeleton from "@/components/productDetail/Skeleton";
import DetailPrice from "@/components/productDetail/DetailPrice";
import RelatedProducts from "@/components/productDetail/RelatedProducts";

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetailPage({ params: { id } }: Props) {
  return (
    <section className="flex flex-col h-full overflow-y-auto">
      <Header />
      <Suspense fallback={<Skeleton />}>
        <Description id={id} />
        <DetailPrice id={id} />
        <RelatedProducts id={id} />
      </Suspense>
    </section>
  );
}
