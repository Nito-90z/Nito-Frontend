import { useRouter } from 'next/navigation';
import Button from '../common/Button';
import { useModalStore } from '@/stores/modal';

export default function CompleteSignInModal() {
  const router = useRouter();
  const setModal = useModalStore.use.setModal();

  const handleLearnMore = () => {
    setModal(null);
    router.push('/mypage/use-nito');
  };
  return (
    <div className="flex flex-col gap-5 px-4 py-6">
      <div>
        <div className="mb-4 text-xl font-bold leading-[29px] text-[#171717]">
          <p>성공적으로 회원가입을 완료했어요!</p>
          <p>지금부터 NITO 사용법을 알려드릴게요!</p>
        </div>
        <p className="leading-7 text-text">
          가격이 떨어질 때 알림을 받으려면 상품을 추가해야 해요. 지금부터
          차근차근 알려드릴게요!
        </p>
      </div>
      <div className="flex gap-2 font-bold">
        <Button
          className="border border-border bg-white text-gray-text"
          onClick={() => setModal(null)}
        >
          건너뛰기
        </Button>
        <Button onClick={handleLearnMore}>네, 알려주세요</Button>
      </div>
    </div>
  );
}
