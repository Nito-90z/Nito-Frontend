import { create } from 'zustand';
import createSelectors from './selectors';

type ModalState = {
  isModalOpen: boolean;
  contents: React.ReactNode | null;
  setModal: (contents: React.ReactNode | null) => void;
};

const modalStore = create<ModalState>()((set) => ({
  isModalOpen: false,
  contents: null,
  setModal: (contents: React.ReactNode | null) =>
    set(() => ({ isModalOpen: !!contents, contents })),
}));

export const useModalStore = createSelectors(modalStore);
