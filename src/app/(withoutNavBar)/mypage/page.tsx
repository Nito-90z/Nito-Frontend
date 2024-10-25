import SubHeader from '@/components/header/SubHeader';
import Intro from '@/components/myPage/Intro';
import NotiSetting from '@/components/myPage/NotiSetting';
import SocialLogin from '@/components/myPage/SocialLogin';
import UserService from '@/components/myPage/UserService';
import UserSetting from '@/components/myPage/UserSetting';

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
