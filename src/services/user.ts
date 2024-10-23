import { SignInData } from '@/fetchers/user';
import { serverInstance } from '@/libs/instance.server';
import { checkIosDevice } from '@/utils/device';
import { cookies, headers } from 'next/headers';
export async function generateNickname() {
  return serverInstance.get('/v1/user/nickname/').then((res) => res.data);
}
export async function nicknameValidationCheck(nickname: string) {
  return serverInstance
    .get(`/v1/user/validate/?nickname=${nickname}`)
    .then((res) => res.data);
}
export async function signIn(
  body: SignInData & {
    device: {
      os: 'ios' | 'android';
      uid: string;
      token: string;
    };
  }
) {
  return serverInstance
    .post('/v1/user/register/', body)
    .then((res) => res.data);
}
export async function refresh() {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  return serverInstance
    .post('/v1/user/refresh/', { refreshToken })
    .then((res) => res.data);
}
export async function getUserInfo() {
  return serverInstance.get(`/v1/user/me/`).then((res) => res.data);
}
export async function updateUserInfo(data: any) {
  return serverInstance.patch('/v1/user/me/', data).then((res) => res.data);
}

export async function changeNickname() {
  return serverInstance.put('/v1/user/me/').then((res) => res.data);
}
export async function withdrawUser(body: { reason: string }) {
  await serverInstance.post('/v1/user/me/withdrawal/', { body });
}
