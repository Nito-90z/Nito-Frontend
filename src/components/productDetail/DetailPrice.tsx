import PriceBox from './PriceBox';
import { ProductPrice } from '@/models/product';

export default function DetailPrice({ prices }: { prices: ProductPrice }) {
  return (
    <div className="px-4 pb-4">
      <PriceBox prices={prices} />
    </div>
  );
}
