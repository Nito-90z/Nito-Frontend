"use client";

import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import ModalPortal from "@/components/common/ModalPortal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TutorialPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  return (
    <section className="flex justify-center items-center h-full">
      <h2 className="text-[32px] font-bold">튜토리얼</h2>
      {isModalOpen && (
        <ModalPortal>
          <Modal onClose={() => setIsModalOpen(false)}>
            <div className="flex flex-col gap-5 px-4 py-6">
              <div>
                <div className="mb-4 text-xl text-[#171717] font-bold leading-[29px]">
                  <p>성공적으로 회원가입을 완료했어요!</p>
                  <p>지금부터 NITO 사용법을 알려드릴게요!</p>
                </div>
                <p className="text-text leading-7">
                  가격이 떨어질 때 알림을 받으려면 상품을 추가해야 해요.
                  지금부터 차근차근 알려드릴게요!
                </p>
              </div>
              <div className="flex gap-2 font-bold">
                <Button
                  className="bg-white text-gray-text border border-border"
                  onClick={() => router.push("/")}
                >
                  건너뛰기
                </Button>
                <Button onClick={() => setIsModalOpen(false)}>
                  네, 알려주세요
                </Button>
              </div>
            </div>
          </Modal>
        </ModalPortal>
      )}
    </section>
  );
}
