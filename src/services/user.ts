import { SignInData } from "@/fetchers/user";
import { instance } from "@/libs/instance";

export async function generateNickname() {
  return instance.get("/v1/user/nickname/").then((res) => res.data);
}

export async function nicknameValidationCheck(nickname: string) {
  return instance
    .get(`/v1/user/validate/?nickname=${nickname}`)
    .then((res) => res.data);
}

export async function signIn(
  body: SignInData & {
    device: {
      os: "ios" | "android";
      uid: string;
      token: string;
    };
  }
) {
  return instance.post("/v1/user/register/", body).then((res) => res.data);
}
