import Button from '../common/Button';

export default function SelectButton() {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2">
      <Button className="h-10 w-20 rounded-full px-2.5 py-2 text-xs font-bold text-white">
        상품 추가
      </Button>
      <Button className="h-10 w-24 rounded-full bg-border px-2.5 py-2 text-xs font-bold text-gray-text">
        가격 할인 설정
      </Button>
    </div>
  );
}
