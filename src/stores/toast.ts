import { create } from "zustand";
import createSelectors from "./selectors";

type ToastState = {
  text: string | null;
  setToast: (text: string | null) => void;
};

const toastStore = create<ToastState>()((set) => ({
  text: null,
  setToast: (text: string | null) => set(() => ({ text })),
}));

export const useToastStore = createSelectors(toastStore);
