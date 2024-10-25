import Header from '@/components/productDetail/Header';
import Skeleton from '@/components/productDetail/Skeleton';
import DetailDataFetcher from '@/components/productDetail/DetailDataFetcher';
import SSRSafeSuspense from '@/components/common/SSRSafeSuspense';

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetailPage({ params: { id } }: Props) {
  return (
    <section className="flex h-full flex-col overflow-y-auto">
      <Header />
      <SSRSafeSuspense fallback={<Skeleton />}>
        <DetailDataFetcher id={id} />
      </SSRSafeSuspense>
    </section>
  );
}
