import { useModalStore } from '@/stores/modal';
import Button from '../common/Button';

export default function RecentSearchDeleteModal({
  onClear,
}: {
  onClear: () => void;
}) {
  const setModal = useModalStore.use.setModal();

  const handleDelete = () => {
    onClear();
    setModal(null);
  };
  return (
    <div className="flex flex-col gap-5 px-4 py-6">
      <div className="mb-4 text-xl font-bold leading-[29px] text-[#171717]">
        <p>최근검색어를 모두 삭제하시겠습니까?</p>
      </div>
      <div className="flex gap-2 font-bold">
        <Button
          className="border border-border bg-white text-gray-text"
          onClick={() => setModal(null)}
        >
          취소
        </Button>
        <Button onClick={handleDelete}>확인</Button>
      </div>
    </div>
  );
}
