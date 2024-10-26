import { DetailProduct } from '@/models/product';
import Link from 'next/link';
import CircleButton from '../common/CircleButton';
import PlusIcon from '../common/icons/PlusIcon';
import { useAddFavorite } from '@/hooks/product';
import { useToastStore } from '@/stores/toast';
import RestockAlarmIcon from '../common/icons/RestockAlarmIcon';
import RestockAlarmOffIcon from '../common/icons/RestockAlarmOffIcon';
import AlarmIcon from '../common/icons/AlarmIcon';
import AlarmOffIcon from '../common/icons/AlarmOffIcon';

type Props = {
  id: string;
  product: DetailProduct;
};

export default function Footer({ id, product }: Props) {
  const { isAlarm, isFavorite, isOutOfStock, isStopSelling } = product;
  const isUnavailable = isOutOfStock || isStopSelling;
  const setToast = useToastStore.use.setToast();
  const { mutateAsync } = useAddFavorite(['product', id]);

  const handleAddFavorite = async () => {
    await mutateAsync({ id: Number(id) });
    setToast('상품을 추가했어요', 5000);
  };
  return (
    <footer className="sticky bottom-0 z-50 flex w-full items-center gap-4 border-t border-border bg-white px-5 py-4">
      <Link
        href={product.affiliateUrl}
        target="_blank"
        className="w-full bg-brand py-[14px] text-center text-white"
      >
        구매하러가기
      </Link>
      {!isFavorite ? (
        <CircleButton
          size="lg"
          className="bg-dark-gray"
          onClick={handleAddFavorite}
        >
          <PlusIcon size="lg" />
        </CircleButton>
      ) : isUnavailable ? (
        <CircleButton size="lg" className={isAlarm ? '' : 'bg-gray'}>
          {isAlarm ? (
            <RestockAlarmIcon size="lg" />
          ) : (
            <RestockAlarmOffIcon size="lg" />
          )}
        </CircleButton>
      ) : (
        <CircleButton size="lg" className={isAlarm ? '' : 'bg-gray'}>
          {isAlarm ? <AlarmIcon size="lg" /> : <AlarmOffIcon size="lg" />}
        </CircleButton>
      )}
    </footer>
  );
}
