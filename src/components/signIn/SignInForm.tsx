"use client";

import { ChangeEvent, useState } from "react";
import NicknameForm from "./NicknameForm";
import Button from "../common/Button";
import CloseIcon from "../common/icons/CloseIcon";
import Agreement from "./Agreement";
import { useSuspenseQuery } from "@tanstack/react-query";
import { generateNicknameFetcher } from "@/fetchers/auth";

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

export default function SignInForm() {
  const { data } = useSuspenseQuery<{ nickname: string }>({
    queryKey: ["generate-nickname"],
    queryFn: generateNicknameFetcher,
  });
  const [nickname, setNickname] = useState(data.nickname);
  const [nicknameComment, setNicknameComment] = useState("");
  const [agreement, setAgreement] = useState<AgreementType>(INITIAL_AGREEMENT);
  const isAllAgree = Object.values(agreement).every((v) => v === true);

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
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
          onCommentChange={setNicknameComment}
        />
        <Agreement
          agreement={agreement}
          onChange={handleAgreementChange}
          onAllChange={handleAllAgreementChange}
        />
      </div>
      <div className="px-4 py-5">
        <Button className="bg-brand disabled:bg-light-gray">
          회원가입 완료하기
        </Button>
      </div>
    </div>
  );
}
