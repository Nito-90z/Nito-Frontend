'use client';

import ToggleButton from '../common/ToggleButton';
import Button from '../common/Button';
import { useState } from 'react';
import MoreRightIcon from '../common/icons/MoreRight';
import { useToastStore } from '@/stores/toast';
import { getToday } from '@/utils/date';

export default function NotiSetting() {
  const setToast = useToastStore.use.setToast();
  const [serviceOn, setServiceOn] = useState(true);
  const [eventOn, setEventOn] = useState(false);

  // 주요 서비스 알림
  const handleToggleService = () => {
    setToast(
      serviceOn
        ? '주요 서비스 알림을 해제하여\n가격 할인 알람을 받을 수 없어요!'
        : '주요 서비스 알림을 켜서\n가격 할인 알림을 받을 수 있어요!',
      3000,
    );
    setServiceOn((prev) => !prev);
  };

  // 마켓팅 정보 수신 동의
  const handleToggleEvent = () => {
    const today = getToday();
    setToast(
      eventOn
        ? `${today}, 마케팅 정보 수신 동의를 철회했어요.`
        : `${today}, 마케팅 정보 수신 동의를 유지해요.`,
      3000,
    );
    setEventOn((prev) => !prev);
  };

  return (
    <div className="relative border-b border-border">
      <div className="border-b border-border bg-bar px-4 py-3.5">
        <span className="text-sm text-gray">알림 설정</span>
      </div>
      <div className="pb-4">
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-base text-dark-gray">주요 서비스 알림</h2>
          <ToggleButton isOn={serviceOn} toggleHandler={handleToggleService} />
        </div>
        <p className="w-96 px-4 text-sm text-gray-text">
          역대 최저가, 평균 대비 하락세, 설정된 n% 도달 시 알림을 받을 수
          있습니다.
        </p>
      </div>
      <div className="flex items-center justify-between px-4">
        <h3 className="text-base text-dark-gray">광고성 알림</h3>
        <ToggleButton isOn={eventOn} toggleHandler={handleToggleEvent} />
      </div>
      <div className="flex items-center justify-between px-4 pb-5 pt-2">
        <p className="pb-1 text-sm text-gray-text">
          다양한 이벤트와 혜택에 대한 정보를 받아보세요.
        </p>
        <Button className="h-6 w-7 bg-white">
          <MoreRightIcon />
        </Button>
      </div>
    </div>
  );
}
