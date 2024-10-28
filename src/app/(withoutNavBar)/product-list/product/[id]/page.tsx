import Header from '@/components/productDetail/Header';
import Skeleton from '@/components/productDetail/Skeleton';
import DetailDataFetcher from '@/components/productDetail/DetailDataFetcher';
import SSRSafeSuspense from '@/components/common/SSRSafeSuspense';
import { Metadata } from 'next';
import { getProductMetaData } from '@/services/product';

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

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const { title, image } = await getProductMetaData(id);

  return {
    title: title,
    description: `${title}의 가격을 비교해 보세요`,
    openGraph: {
      images: image || undefined,
    },
  };
}
