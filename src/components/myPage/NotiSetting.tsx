'use client';

import ToggleButton from '../common/ToggleButton';
import Button from '../common/Button';
import { useState } from 'react';
import Toast from '../common/Toast';
import MoreRightIcon from '../common/icons/MoreRight';

export default function NotiSetting() {
  const [serviceToast, setServiceToast] = useState(true);
  const [showServiceToast, setShowServiceToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [eventToast, setEventToast] = useState(false);
  const [showEventToast, setShowEventToast] = useState(false);

  const handleToggleService = () => {
    if (serviceToast) {
      // 서비스 알림을 끌 때
      setToastMessage(
        '주요 서비스 알림을 해제하여\n가격 할인 알람을 받을 수 없어요!',
      );
    } else {
      // 서비스 알림을 켤 때
      setToastMessage(
        '주요 서비스 알림을 켜서\n가격 할인 알림을 받을 수 있어요!',
      );
    }
    setShowServiceToast(true);
    setTimeout(() => setShowServiceToast(false), 50000);
    setServiceToast(!serviceToast);
  };

  const handleToggleEvent = () => {
    if (eventToast) {
      // 서비스 알림을 끌 때
      setToastMessage('2024년 11월 5일, 마케팅 정보 수신 동의를 철회했어요.');
    } else {
      // 서비스 알림을 켤 때
      setToastMessage('2024년 11월 5일, 마케팅 정보 수신 동의를 유지해요.');
    }
    setShowEventToast(true);
    setTimeout(() => setShowEventToast(false), 3000);
    setEventToast(!eventToast);
  };

  return (
    <div className="relative border-b border-border">
      <div className="border-b border-border bg-bar px-4 py-3.5">
        <span className="text-sm text-gray">알림 설정</span>
      </div>
      <div className="pb-4">
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-base text-dark-gray">주요 서비스 알림</h2>
          <ToggleButton
            isOn={serviceToast}
            toggleHandler={handleToggleService}
          />
        </div>
        <p className="w-96 px-4 text-sm text-gray-text">
          역대 최저가, 평균 대비 하락세, 설정된 n% 도달 시 알림을 받을 수
          있습니다.
        </p>
      </div>

      <div className="flex items-center justify-between px-4">
        <h3 className="text-base text-dark-gray">광고성 알림</h3>
        <ToggleButton isOn={eventToast} toggleHandler={handleToggleEvent} />
      </div>
      <div className="flex items-center justify-between px-4 pb-5 pt-2">
        <p className="pb-1 text-sm text-gray-text">
          다양한 이벤트와 혜택에 대한 정보를 받아보세요.
        </p>
        <Button className="h-6 w-10 bg-white">
          <MoreRightIcon />
        </Button>
      </div>
      {showServiceToast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 transform text-sm">
          <Toast text={toastMessage} />
        </div>
      )}

      {showEventToast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 transform text-sm">
          <Toast text={toastMessage} position="flex" />
        </div>
      )}
    </div>
  );
}
