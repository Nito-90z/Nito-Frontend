import SubHeader from '@/components/header/SubHeader';
import Intro from '@/components/myPage/Intro';
import NotiSetting from '@/components/myPage/NotiSetting';
import SocialLogin from '@/components/myPage/SocialLogin';
import UserService from '@/components/myPage/UserService';
import UserSetting from '@/components/myPage/UserSetting';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마이페지이',
  description: '본인의 정보를 손쉽게 관리해보세요',
};

export default function MyPage() {
  return (
    <section className="relative flex h-full flex-col">
      <SubHeader text="마이페이지" />
      <div className="flex flex-col overflow-y-auto">
        <Intro />
        <SocialLogin />
        <NotiSetting />
        <UserSetting />
        <UserService />
      </div>
    </section>
  );
}
