import { ChangeEvent } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

type Props = {
  nickname: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function NicknameForm({ nickname, onChange }: Props) {
  return (
    <form className="flex flex-col gap-[6px]">
      <label htmlFor="nickname">
        닉네임 <span className="text-brand">*</span>
      </label>
      <div className="flex gap-2">
        <Input
          type="text"
          id="nickname"
          className="h-14"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={onChange}
        />
        <Button className="px-4 w-fit bg-brand disabled:bg-light-gray whitespace-nowrap">
          중복확인
        </Button>
      </div>
    </form>
  );
}
