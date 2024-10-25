import NullProductIcon from '../common/icons/NullProductIcon';

export default function NullProductList() {
  return (
    <div className="flex h-full max-h-[calc(100%-232px)] flex-col items-center justify-center text-center text-text">
      <NullProductIcon />
      <div className="mt-3">
        <p>
          현재 상품 준비중이에요
          <br />
          조금만 기다려주세요!
        </p>
      </div>
    </div>
  );
}
