import Header from "@/components/productDetail/Header";
import { Suspense } from "react";
import Skeleton from "@/components/productDetail/Skeleton";
import DetailDataFetcher from "@/components/productDetail/DetailDataFetcher";

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
        <DetailDataFetcher id={id} />
      </Suspense>
    </section>
  );
}
