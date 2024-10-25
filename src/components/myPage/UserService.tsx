import Button from '../common/Button';
import MoreRightIcon from '../common/icons/MoreRight';

export default function UserService() {
  return (
    <div>
      <div className="border-b border-border bg-bar px-4 py-3.5">
        <span className="text-sm text-gray">유저 서비스</span>
      </div>
      <div className="flex items-center justify-between px-4 py-4">
        <span className="pt-1 text-base text-dark-gray">NITO 사용법</span>
        <Button className="h-6 w-10 bg-white">
          <MoreRightIcon />
        </Button>
      </div>
      <div className="flex items-center justify-between px-4 py-4">
        <span className="items-center pt-1 text-base text-dark-gray">
          개인정보처리방침
        </span>
        <Button className="h-6 w-10 bg-white">
          <MoreRightIcon />
        </Button>
      </div>
      <div className="flex items-center justify-between px-4 py-4">
        <span className="items-center pt-1 text-base text-dark-gray">
          이용약관
        </span>
        <Button className="h-6 w-10 bg-white">
          <MoreRightIcon />
        </Button>
      </div>
      <div className="flex items-center justify-between px-4 py-4">
        <span className="text-base text-dark-gray">고객 문의</span>
        <p className="text-sm text-gray-text">email@email.com</p>
      </div>
      <p className="w-96 px-4 py-2 text-sm text-gray-text">
        문의 사항이 있으신 경우 이메일을 보내주시면 신속하게 확인하고 답변해
        드리겠습니다.
      </p>
      <div className="h-2 w-full bg-bar" />
      <div className="flex justify-between px-4 pb-8 pt-2">
        <span className="text-white">Logout</span>
        <Button className="h-7 w-20 bg-white text-sm text-gray-text">
          회원탈퇴
        </Button>
      </div>
    </div>
  );
}
