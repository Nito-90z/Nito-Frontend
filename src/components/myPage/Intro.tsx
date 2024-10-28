'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PencilIcon from '../common/icons/PencilIcon';
import Button from '../common/Button';
import ChangeName from './ChangeName';
import { getUserFetcher, UserData } from '@/fetchers/user';

export default function Intro() {
  const [showChangeName, setShowChangeName] = useState(false);

  const { data: userData, isLoading } = useQuery<UserData>({
    queryKey: ['userData'],
    queryFn: getUserFetcher,
    staleTime: Infinity, // 데이터를 한 번만 가져오도록 설정
    refetchOnWindowFocus: false,
  });

  const onPencilClick = () => {
    setShowChangeName(true);
  };

  const handleClose = () => {
    setShowChangeName(false);
  };

  if (isLoading) {
    return null;
  }
  return (
    <>
      <div className="pt-5 px-4 pb-4 border-b border-border">
        <div className="flex items-center gap-0">
          <span className="text-xl font-bold text-dark-gray">
            안녕하세요, {userData?.nickname}님
          </span>
          <Button
            type="button"
            onClick={onPencilClick}
            className="ml-2 w-7 h-7 flex items-center justify-center bg-border rounded-full"
          >
            <PencilIcon />
          </Button>
        </div>
      </div>
      {showChangeName && <ChangeName onClose={handleClose} />}
    </>
  );
}
