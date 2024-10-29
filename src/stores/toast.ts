import { create } from 'zustand';
import createSelectors from '.';

type ToastState = {
  text: string | null;
  setToast: (text: string | null, time?: number) => void;
};

let timer: number | null = null;

const toastStore = create<ToastState>()((set) => ({
  text: null,
  setToast: (text: string | null, time?: number) => {
    set(() => ({ text }));

    if (text) {
      if (timer) {
        window.clearTimeout(timer);
      }
      timer = window.setTimeout(() => {
        set(() => ({ text: null }));
      }, time);
    }
  },
}));

export const useToastStore = createSelectors(toastStore);
