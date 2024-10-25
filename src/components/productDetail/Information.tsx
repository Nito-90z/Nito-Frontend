import { DetailProduct } from '@/models/product';
import Badge from '../common/Badge';
import { convertDollarToWon } from '@/utils/currency-converter';
import { parseDateFromNow } from '@/utils/date';
import Link from 'next/link';

export default function Information({ product }: { product: DetailProduct }) {
  const {
    title,
    price,
    presentPrice,
    isLowestPriceEver,
    discountRate,
    crawlingUpdatedAt,
    presentPriceUpdatedAt,
    optionStatus,
    affiliateUrl,
  } = product;
  return (
    <div className="flex flex-col gap-3 py-4">
      <h1 className="leading-7 text-dark-gray">{title}</h1>
      <div className="flex flex-col gap-1">
        <div className="flex gap-[6px]">
          {isLowestPriceEver && <Badge direction="up">역대최저가</Badge>}
          {!!discountRate && (
            <Badge direction="down" icon>
              {discountRate}%
            </Badge>
          )}
        </div>
        <p className="text-sm text-gray-text">
          List Price{' '}
          <span className={discountRate ? 'line-through' : ''}>${price}</span>
        </p>
        <div>
          <p className="flex items-center gap-[6px]">
            <span className="text-[26px] font-bold leading-[38px]">
              $ {presentPrice}
            </span>
            <span className="text-text">
              {convertDollarToWon(presentPrice)}
            </span>
          </p>
          {/* 환율 정보 */}
        </div>
      </div>
      <div className="bg-platinum px-3 py-2 text-sm">
        <p className="mb-1 font-bold text-black">아마존 가격</p>
        <p className="text-text">
          {crawlingUpdatedAt && (
            <span>{`마지막 업데이트: ${parseDateFromNow(
              crawlingUpdatedAt,
            )}, `}</span>
          )}
          <span>
            마지막 가격 변경: {parseDateFromNow(presentPriceUpdatedAt)}
          </span>
        </p>
      </div>
      {optionStatus && (
        <Link
          href={affiliateUrl}
          target="_blank"
          className="border border-brand bg-white py-[14px] text-center font-bold leading-7 text-brand"
        >
          더 많은 옵션 보러가기
        </Link>
      )}
    </div>
  );
}
