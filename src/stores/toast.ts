import { create } from "zustand";
import createSelectors from "./selectors";

type ToastState = {
  text: string | null;
  setToast: (text: string | null, time?: number) => void;
};

const toastStore = create<ToastState>()((set) => ({
  text: null,
  setToast: (text: string | null, time?: number) => {
    set(() => ({ text }));
    if (text !== null && time) {
      setTimeout(() => {
        set(() => ({ text: null }));
      }, time);
    }
  },
}));

export const useToastStore = createSelectors(toastStore);
