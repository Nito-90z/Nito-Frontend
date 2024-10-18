import CompleteSignInModal from "@/components/common/CompleteSignInModal";
import { nicknameValidationCheckFetcher, signInFetcher } from "@/fetchers/user";
import { AgreementType } from "@/models/user";
import { useModalStore } from "@/stores/modal";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export function useNicknameCheck() {
  return useMutation({
    mutationFn: ({ nickname }: { nickname: string }) =>
      nicknameValidationCheckFetcher(nickname),
  });
}

export function useSignIn(callbackUrl: string) {
  const router = useRouter();
  const setModal = useModalStore.use.setModal();

  return useMutation({
    mutationFn: ({
      nickname,
      agreement,
    }: {
      nickname: string;
      agreement: AgreementType;
    }) =>
      signInFetcher({
        lang: "ko",
        isAlarm: false,
        nickname,
        agreement,
      }),
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data;
      setCookie("accessToken", accessToken);
      setCookie("refreshToken", refreshToken);
      router.push(callbackUrl);
      setModal(<CompleteSignInModal />);
    },
  });
}
