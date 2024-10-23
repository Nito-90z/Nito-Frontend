import Header from "@/components/productDetail/Header";
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
      <DetailDataFetcher id={id} />
    </section>
  );
}
