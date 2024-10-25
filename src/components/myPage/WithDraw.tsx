import Button from '../common/Button';
import CheckBox from '../common/CheckBox';
import CloseIcon from '../common/icons/CloseIcon';

export default function WithDraw() {
  const reasons = [
    '온라인 쇼핑을 잘 이용하지 않아요',
    '아마존을 잘 이용하지 않아요',
    '앱 사용이 불편해요',
    '원하는 상품의 가격이 떨어지지 않아요',
    '많은 알림에 피로를 느껴요',
    '기타',
  ];

  return (
    <div className="absolute bottom-0 z-50 w-full rounded-t-2xl bg-white p-4 shadow-xl">
      <div className="flex items-center justify-center gap-36">
        <div className="h-6 w-10" />
        <div className="h-6 w-10" />
        <Button className="flex h-8 w-8 items-center justify-center bg-white">
          <CloseIcon />
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-xl font-bold text-black">
          탈퇴하시는 이유가 무엇인가요?
        </span>
        {reasons.map((reason, index) => (
          <div key={index} className="flex gap-1">
            <CheckBox />
            <p>{reason}</p>
          </div>
        ))}
      </div>
      <textarea
        className="text-gray-500 my-4 h-48 w-full rounded-sm bg-bar p-4 placeholder:text-sm focus:outline-none"
        placeholder="자유롭게 작성해주세요."
      ></textarea>

      <Button>회원 탈퇴</Button>
    </div>
  );
}
