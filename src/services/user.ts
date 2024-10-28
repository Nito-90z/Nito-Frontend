import { SignInData } from '@/fetchers/user';
import { serverInstance } from '@/libs/instance.server';
import { checkIosDevice } from '@/utils/device';
import axios from 'axios';
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
  },
) {
  return serverInstance
    .post('/v1/user/register/', body)
    .then((res) => res.data);
}

export async function refresh() {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;

  return axios
    .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/refresh/`, {
      refreshToken,
    })
    .then((res) => res.data);
}

export async function login() {
  const headersList = headers();
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  const uid = cookieStore.get('uid')?.value;
  const token = cookieStore.get('token')?.value;

  const body = {
    device: {
      os: checkIosDevice(headersList.get('user-agent') || '')
        ? 'ios'
        : 'android',
      uid,
      token,
    },
    refreshToken,
  };

  return axios
    .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/login/`, body)
    .then((res) => res.data);
}

// 유저 데이터 가져옴
export async function getUserInfo() {
  return serverInstance.get(`/v1/user/me/`).then((res) => res.data);
}
