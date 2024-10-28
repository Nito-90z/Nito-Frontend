import { ChangeEvent } from 'react';
import CheckBox from '../common/CheckBox';
import NextIcon from '../common/icons/NextIcon';
import { AgreementType } from '@/models/user';

type Props = {
  agreement: AgreementType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAllChange: () => void;
};

export default function Agreement({ agreement, onChange, onAllChange }: Props) {
  const isAllAgree = Object.values(agreement).every((value) => value === true);

  return (
    <div className="flex flex-col gap-5">
      <div className="border border-light-gray px-4 py-[14px]">
        <CheckBox checked={isAllAgree} onChange={onAllChange}>
          <span className="font-bold">전체동의</span>
        </CheckBox>
      </div>
      <div className="flex flex-col gap-3">
        <CheckBox
          name="isOverAge14"
          checked={agreement.isOverAge14}
          onChange={onChange}
        >
          <span className="font-bold text-brand">[필수]</span> 만 14세 이상
        </CheckBox>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <CheckBox
              name="isServiceAccept"
              checked={agreement.isServiceAccept}
              onChange={onChange}
            >
              <span className="font-bold text-brand">[필수]</span> 서비스 이용
              약관 동의
            </CheckBox>
            <NextIcon className="cursor-pointer" />
          </div>
          <p className="pl-7 text-[#8F8F8F]">개인정보처리방침 [보기]</p>
        </div>
        <div className="flex items-center justify-between">
          <CheckBox
            name="isMarketing"
            checked={agreement.isMarketing}
            onChange={onChange}
          >
            <span className="font-bold text-[#8F8F8F]">[선택]</span> 마케팅 수신
            동의
          </CheckBox>
          <NextIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
