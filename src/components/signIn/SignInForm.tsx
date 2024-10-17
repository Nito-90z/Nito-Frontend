"use client";

import { ChangeEvent, useEffect, useState } from "react";
import NicknameForm from "./NicknameForm";
import Button from "../common/Button";
import CloseIcon from "../common/icons/CloseIcon";
import Agreement from "./Agreement";
import { useSuspenseQuery } from "@tanstack/react-query";
import { generateNicknameFetcher } from "@/fetchers/user";
import axios from "axios";
import { useSignIn } from "@/hooks/user";
import { AgreementType } from "@/models/user";

const INITIAL_AGREEMENT = {
  isOverAge14: false,
  isServiceAccept: false,
  isInfoAccept: true,
  isMarketing: false,
};

const ALL_AGREEMENTS = {
  isOverAge14: true,
  isServiceAccept: true,
  isInfoAccept: true,
  isMarketing: true,
};

const INITIAL_ERROR_COMMNET = {
  value: "",
  color: "",
};

export default function SignInForm() {
  const { data } = useSuspenseQuery<{ nickname: string }>({
    queryKey: ["nickname"],
    queryFn: generateNicknameFetcher,
    staleTime: 60 * 1000,
  });
  const [nickname, setNickname] = useState(data.nickname);
  const [nicknameComment, setNicknameComment] = useState(INITIAL_ERROR_COMMNET);
  const [agreement, setAgreement] = useState<AgreementType>(INITIAL_AGREEMENT);
  const isAllAgree = Object.values(agreement).every((v) => v === true);
  const isValidate =
    agreement.isOverAge14 &&
    agreement.isServiceAccept &&
    nickname.trim() !== "";
  const { mutateAsync } = useSignIn();

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
      setAgreement(ALL_AGREEMENTS);
    }
  };
  const handleSignIn = async () => {
    if (!isValidate) return;

    try {
      await mutateAsync({ nickname, agreement });
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          setNicknameComment({
            value: error.response.data.message,
            color: "text-brand",
          });
        }
      }
    }
  };

  useEffect(() => {
    setNicknameComment(INITIAL_ERROR_COMMNET);
  }, [nickname]);
  return (
    <div className="flex flex-col h-full">
      <div className="grow flex flex-col gap-6">
        <Button className="self-end p-1 w-fit h-fit bg-transparent">
          <CloseIcon />
        </Button>
        <NicknameForm
          nickname={nickname}
          onChange={(e) => setNickname(e.target.value)}
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
          onClick={handleSignIn}
        >
          회원가입 완료하기
        </Button>
      </div>
    </div>
  );
}
