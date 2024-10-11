"use client";

import { ChangeEvent, useEffect, useState } from "react";
import NicknameForm from "./NicknameForm";
import Button from "../common/Button";
import CloseIcon from "../common/icons/CloseIcon";
import Agreement from "./Agreement";
import { useSuspenseQuery } from "@tanstack/react-query";
import { generateNicknameFetcher } from "@/fetchers/user";

export type AgreementType = {
  isOverAge14: boolean;
  isServiceAccept: boolean;
  isInfoAccept: boolean;
  isMarketing: boolean;
};

const INITIAL_AGREEMENT = {
  isOverAge14: false,
  isServiceAccept: false,
  isInfoAccept: true,
  isMarketing: false,
};

const TRUE_AGREEMENTS = {
  isOverAge14: true,
  isServiceAccept: true,
  isInfoAccept: true,
  isMarketing: true,
};

const INITIAL_ERROR_MESSAGE = {
  value: "",
  color: "",
};

export default function SignInForm() {
  const { data } = useSuspenseQuery<{ nickname: string }>({
    queryKey: ["generate-nickname"],
    queryFn: generateNicknameFetcher,
  });
  const [nickname, setNickname] = useState(data.nickname);
  const [nicknameComment, setNicknameComment] = useState(INITIAL_ERROR_MESSAGE);
  const [agreement, setAgreement] = useState<AgreementType>(INITIAL_AGREEMENT);
  const isAllAgree = Object.values(agreement).every((v) => v === true);
  const isValidate = isAllAgree && nickname.trim() !== "";

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handleNicknameComment = (value: string, color: string) => {
    setNicknameComment({ value, color });
  };
  const handleAgreementChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAgreement((prev) => ({ ...prev, [name]: checked }));
  };
  const handleAllAgreementChange = () => {
    if (isAllAgree) {
      setAgreement(INITIAL_AGREEMENT);
    } else {
      setAgreement(TRUE_AGREEMENTS);
    }
  };

  useEffect(() => {
    if (nickname) return;

    setNicknameComment(INITIAL_ERROR_MESSAGE);
  }, [nickname]);
  return (
    <div className="flex flex-col h-full">
      <div className="grow flex flex-col gap-6">
        <Button className="self-end p-1 w-fit h-fit bg-transparent">
          <CloseIcon />
        </Button>
        <NicknameForm
          nickname={nickname}
          onChange={handleNicknameChange}
          commentMessage={nicknameComment}
          onCommentChange={handleNicknameComment}
        />
        <Agreement
          agreement={agreement}
          onChange={handleAgreementChange}
          onAllChange={handleAllAgreementChange}
        />
      </div>
      <div className="px-4 py-5">
        <Button
          className="bg-brand disabled:bg-light-gray"
          disabled={!isValidate}
        >
          회원가입 완료하기
        </Button>
      </div>
    </div>
  );
}
