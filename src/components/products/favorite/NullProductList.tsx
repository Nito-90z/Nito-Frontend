import HeartIcon from "../../common/icons/HeartIcon";

export default function NullProductList() {
  return (
    <div className="flex flex-col justify-center items-center text-center h-[calc(100%-102px)]">
      <HeartIcon className="w-[71.24px] h-14" />
      <div className="flex flex-col gap-[6px] mt-3">
        <p className="text-text">아직 찜한 상품이 없어요</p>
        <p className="text-[#8F8F8F] text-sm">
          아래 +버튼을 눌러 최저가 알림 받고싶은 상품을
          <br />
          담아보세요!
        </p>
      </div>
    </div>
  );
}
