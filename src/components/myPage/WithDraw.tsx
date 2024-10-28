import Button from '../common/Button';
import CheckBox from '../common/CheckBox';
import CloseIcon from '../common/icons/CloseIcon';

type Props = {
  onClose: () => void;
};

export default function WithDraw({ onClose }: Props) {
  
  const reasons = [
    '온라인 쇼핑을 잘 이용하지 않아요',
    '아마존을 잘 이용하지 않아요',
    '앱 사용이 불편해요',
    '원하는 상품의 가격이 떨어지지 않아요',
    '많은 알림에 피로를 느껴요',
    '기타',
  ];

  return (
    <div className="absolute bottom-0 z-50 w-full rounded-t-2xl bg-white shadow-xl p-4">
      <div className="flex justify-center items-center gap-36">
        <div className="h-6 w-10" />
        <div className="h-6 w-10" />
        <Button
          className="justify-center items-center flex h-8 w-8 bg-white"
          onClick={onClose}
        >
          <CloseIcon />
        </Button>
      </div>
      <div className="gap-4 flex flex-col">
        <span className="font-bold text-xl text-black">
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
        className="h-48 w-full my-4 p-4 bg-bar rounded-sm text-gray-500 focus:outline-none placeholder:text-sm"
        placeholder="자유롭게 작성해주세요."
      ></textarea>
      <Button>회원탈퇴</Button>
    </div>
  );
}
