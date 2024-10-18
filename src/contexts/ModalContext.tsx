"use client";

import ModalPortal from "@/components/common/ModalPortal";
import Modal from "@/components/common/Modal";
import { useModalStore } from "@/stores/modal";

type Props = {
  children: React.ReactNode;
};

export default function ModalProvider({ children }: Props) {
  const isModalOpen = useModalStore.use.isModalOpen();
  const contents = useModalStore.use.contents();
  const setModal = useModalStore.use.setModal();

  return (
    <>
      {children}
      {isModalOpen && (
        <ModalPortal>
          <Modal onClose={() => setModal(null)}>{contents}</Modal>
        </ModalPortal>
      )}
    </>
  );
}
