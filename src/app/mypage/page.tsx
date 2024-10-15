import ChangeName from '@/components/myPage/ChangeName';
import Intro from '@/components/myPage/Intro';
import NotiSetting from '@/components/myPage/NotiSetting';
import SocialLogin from '@/components/myPage/SocialLogin';
import UserService from '@/components/myPage/UserService';
import UserSetting from '@/components/myPage/UserSetting';
import WithDraw from '@/components/myPage/WithDraw';

export default function MyPage() {
  return (
    <>
      <Intro />
      <SocialLogin />
      <NotiSetting />
      <UserSetting />
      <UserService />
      <ChangeName />
      <WithDraw/>
    </>
  );
}
