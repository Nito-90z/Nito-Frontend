import Button from '../common/Button';

export default function SelectButton() {
  return (
    <div className='flex items-center px-4 py-2 gap-2.5'>
      <Button className='rounded-full py-2 px-2.5 w-20 h-10 text-xs font-bold text-white'>상품 추가</Button>
      <Button className='rounded-full py-2 px-2.5 w-24 h-10 text-xs font-bold bg-border text-gray-text'>가격 할인 설정</Button>
    </div>
  );
}
