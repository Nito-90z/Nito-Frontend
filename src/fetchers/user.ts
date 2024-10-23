import { clientInstance } from "@/libs/instance.client";

export async function generateNicknameFetcher() {
  return clientInstance.get("/api/user/nickname").then((res) => res.data);
}

export async function nicknameValidationCheckFetcher(nickname: string) {
  return clientInstance
    .get(`/api/user/validate?nickname=${nickname}`)
    .then((res) => res.data);
}

export type SignInData = {
  lang: "en" | "ko";
  isAlarm: boolean;
  nickname: string;
  agreement: {
    isOverAge14: boolean;
    isServiceAccept: boolean;
    isInfoAccept: boolean;
    isMarketing: boolean;
  };
};

export async function signInFetcher(body: SignInData) {
  return clientInstance
    .post("/api/user/register", {
      body,
    })
    .then((res) => res.data);
}
