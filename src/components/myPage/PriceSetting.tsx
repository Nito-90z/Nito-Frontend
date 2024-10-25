import PriceSettingIcon from '@/components/common/icons/PriceSettingIcon';

export default function PriceSetting() {
  return (
    <div className="px-4 pt-4">
      <p className="py-1 text-base font-bold text-dark-gray">
        사용자 별로 알림설정이 가능해요!
      </p>
      <p className="pb-4 text-sm text-gray-text">
        평균가 대비 유의미한 변동이 발생한 경우, 설정하신 기준에 맞춰 알림을
        보내드릴게요
      </p>
      <div className="flex items-center justify-center rounded-xl bg-platinum px-4 py-6">
        <PriceSettingIcon />
      </div>
    </div>
  );
}
