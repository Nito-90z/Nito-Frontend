import SubHeader from '@/components/header/SubHeader';
import ChangeName from '@/components/myPage/ChangeName';
import Intro from '@/components/myPage/Intro';
import NotiSetting from '@/components/myPage/NotiSetting';
import PriceDiscount from '@/components/myPage/PriceDiscount';
import SocialLogin from '@/components/myPage/SocialLogin';
import UserService from '@/components/myPage/UserService';
import UserSetting from '@/components/myPage/UserSetting';
import WithDraw from '@/components/myPage/WithDraw';

export default function MyPage() {
  return (
    <section className='relative flex flex-col h-full'>
      <SubHeader text='마이페이지'/>
      <div className='flex flex-col overflow-y-auto'>
      <Intro />
      <SocialLogin />
      <NotiSetting />
      <UserSetting />
      <UserService />
      {/* <ChangeName />
      <WithDraw />
      <PriceDiscount/> */}
      </div>
    </section>
  );
}
