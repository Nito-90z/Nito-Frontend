import Product1Icon from '../common/icons/Product1Icon';
import Product2Icon from '../common/icons/Product2Icon';
import Product3Icon from '../common/icons/Product3Icon';
import Product4Icon from '../common/icons/Product4Icon';

export default function ProductMenual() {
  return (
    <div>
      <div className="px-4 pt-4">
        <div className="flex gap-2.5">
          <div className="text-bold flex h-5 w-5 items-center justify-center rounded-full bg-brand p-1.5 text-base text-white">
            1
          </div>
          <p className="text-base font-bold text-dark-gray">
            공유 버튼을 누르고, NITO를 선택하면 상품 추가
            <br />
            완료돼요!
          </p>
        </div>
        <p className="px-7 pb-4 pt-2 text-sm text-gray-text">
          아마존의 공유 버튼은 상품 이미지 우측 상단에 있어요.
        </p>
        <div className="flex items-center justify-center rounded-xl bg-platinum px-4 py-6">
          <Product1Icon />
        </div>
      </div>
      <div className="px-4 pt-4">
        <div className="flex gap-2.5">
          <div className="text-bold flex h-5 w-5 items-center justify-center rounded-full bg-brand p-1.5 text-base text-white">
            2
          </div>
          <p className="text-base font-bold text-dark-gray">
            공유 버튼 누를시, NITO가 보이지 않는다면,
            <br />
            아래 내용을 따라 진행해보세요!
          </p>
        </div>
        <p className="px-7 pb-4 pt-2 text-sm text-gray-text">
          더보기 버튼을 눌러주세요.
        </p>
        <div className="flex items-center justify-center rounded-xl bg-platinum px-4 py-6">
          <Product2Icon />
        </div>
      </div>
      <div className="px-4 pt-4">
        <div className="flex gap-2.5 pb-4">
          <div className="text-bold flex h-5 w-5 items-center justify-center rounded-full bg-brand p-1.5 text-base text-white">
            3
          </div>
          <p className='text-base font-bold text-dark-gray'>
            앱 리스트에서 NITO를 클릭하면 상품 추가가 완료 돼요!
          </p>
        </div>       
        <div className='rounded-xl bg-platinum px-4 py-6 items-center justify-center flex'>
          <Product3Icon />
        </div>
      </div>
      <div className='px-4 py-4'>
        <div className='flex gap-2.5 pb-4'>
          <div className='bg-brand h-5 w-5 text-white text-base text-bold rounded-full items-center justify-center flex p-1.5'>
            4
          </div>
          <p className='text-base font-bold text-dark-gray'>
            우측 상단의 편집 버튼을 눌러 NITO를 맨 앞으로
            <br />고정할 수도 있어요!
          </p>
        </div>

        <div className="flex items-center justify-center rounded-xl bg-platinum px-4 py-6">
          <Product3Icon />
        </div>
      </div>
      <div className="px-4 py-4">
        <div className="flex gap-2.5 pb-4">
          <div className="text-bold flex h-5 w-5 items-center justify-center rounded-full bg-brand p-1.5 text-base text-white">
            4
          </div>
          <p className="text-base font-bold text-dark-gray">
            우측 상단의 편집 버튼을 눌러 NITO를 맨 앞으로
            <br />
            고정할 수도 있어요!
          </p>
        </div>

        <div className="flex items-center justify-center rounded-xl bg-platinum px-4 py-6">
          <Product4Icon />
        </div>
      </div>
    </div>
  );
}
