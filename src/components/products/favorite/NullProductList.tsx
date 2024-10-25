import HeartIcon from '../../common/icons/HeartIcon';

export default function NullProductList() {
  return (
    <div className="flex h-[calc(100%-102px)] flex-col items-center justify-center text-center">
      <HeartIcon className="h-14 w-[71.24px]" />
      <div className="mt-3 flex flex-col gap-[6px]">
        <p className="text-text">아직 찜한 상품이 없어요</p>
        <p className="text-sm text-[#8F8F8F]">
          아래 +버튼을 눌러 최저가 알림 받고싶은 상품을
          <br />
          담아보세요!
        </p>
      </div>
    </div>
  );
}
