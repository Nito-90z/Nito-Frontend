import { ChangeEvent, FormEvent, useRef } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import {
  NICKNAME_VALID_MESSAGE,
  NICKNAME_VALIDATION_ERROR_MESSAGE,
} from "@/constants/message/nickname";
import { twMerge } from "tailwind-merge";
import { NICKNAME_PATTERN } from "@/constants/regex/nickname";
import { useNicknameCheck } from "@/hooks/user";
import axios from "axios";

type Props = {
  nickname: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  commentMessage: { value: string; color: string };
  onCommentChange: (value: string, color: string) => void;
};

export default function NicknameForm({
  nickname,
  onChange,
  commentMessage,
  onCommentChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { mutateAsync, isPending } = useNicknameCheck();

  const handleBlur = () => {
    if (!isValidateNickname(nickname)) {
      onCommentChange(NICKNAME_VALIDATION_ERROR_MESSAGE, "text-brand");
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidateNickname(nickname)) {
      onCommentChange(NICKNAME_VALIDATION_ERROR_MESSAGE, "text-brand");
      inputRef.current?.focus();
      return;
    }

    try {
      await mutateAsync({ nickname });
      onCommentChange(NICKNAME_VALID_MESSAGE, "text-[#4850FF]");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          onCommentChange(error.response.data.message, "text-brand");
          inputRef.current?.focus();
        }
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[6px]">
      <label htmlFor="nickname">
        닉네임 <span className="text-brand">*</span>
      </label>
      <div className="flex gap-2">
        <Input
          ref={inputRef}
          type="text"
          id="nickname"
          className="h-14"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={onChange}
          onBlur={handleBlur}
        />
        {/* 로딩 시간이 길어지는 경우 로딩 UI를 보여주는 것도 생각! */}
        <Button
          className={twMerge(
            "relative px-4 w-[85px] bg-brand disabled:bg-light-gray whitespace-nowrap",
            isPending && "disabled:bg-brand"
          )}
          disabled={!nickname || isPending}
        >
          중복확인
        </Button>
      </div>
      {commentMessage && (
        <p className={twMerge("text-xs", commentMessage.color)}>
          {commentMessage.value}
        </p>
      )}
    </form>
  );
}

function isValidateNickname(nickname: string) {
  if (nickname.trim() === "") return false;

  return NICKNAME_PATTERN.test(nickname.trim());
}
