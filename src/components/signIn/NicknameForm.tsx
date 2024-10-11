import { ChangeEvent, FormEvent, useRef } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useMutation } from "@tanstack/react-query";
import { nicknameValidationCheckFetcher } from "@/fetchers/user";
import {
  NICKNAME_DUPLICATE_ERROR_MESSAGE,
  NICKNAME_VALID_MESSAGE,
} from "@/constants/message/nickname";
import { twMerge } from "tailwind-merge";

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

  const { mutate } = useMutation({
    mutationFn: () => nicknameValidationCheckFetcher(nickname),
    onSuccess: () => {
      onCommentChange(NICKNAME_VALID_MESSAGE, "text-[#4850FF]");
    },
    onError: () => {
      onCommentChange(NICKNAME_DUPLICATE_ERROR_MESSAGE, "text-brand");
      inputRef.current?.focus();
    },
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate();
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
        />

        <Button
          className="px-4 w-fit bg-brand disabled:bg-light-gray whitespace-nowrap"
          disabled={!nickname}
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
