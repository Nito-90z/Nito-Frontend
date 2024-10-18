import Button from '../common/Button';
import MoreRightIcon from '../common/icons/MoreRight';

export default function UserSetting() {
  return (
    <div className='border-b border-border'>
      <div className='px-4 py-3.5 border-b bg-bar border-border'>
        <span className='text-sm text-gray'>유저 설정</span>
      </div>

      <div className='flex items-center justify-between px-4 py-4'>
        <span className=' pt-1 text-base text-dark-gray'>언어 변경</span>
        <Button className='w-10 h-6 bg-white'>
          <MoreRightIcon />
        </Button>
      </div>

      <div className='flex items-center justify-between px-4 py-4'>
        <span className='pt-1 text-base text-dark-gray items-center'>
          가격 할인 설정
        </span>
        <Button className='w-10 h-6 bg-white'>
          <MoreRightIcon />
        </Button>
      </div>
    </div>
  );
}
