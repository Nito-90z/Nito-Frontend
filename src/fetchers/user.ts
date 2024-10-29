import { clientInstance } from '@/libs/instance.client';

export async function generateNicknameFetcher() {
  return clientInstance.get('/api/user/nickname').then((res) => res.data);
}

export async function nicknameValidationCheckFetcher(nickname: string) {
  return clientInstance
    .get(`/api/user/validate?nickname=${nickname}`)
    .then((res) => res.data);
}

export type SignInData = {
  lang: 'en' | 'ko';
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
    .post('/api/user/register', {
      body,
    })
    .then((res) => res.data);
}

export type UserData = {
  lang: 'en' | 'ko';
  isAlarm: boolean;
  nickname: string;
  social: {
    email: string;
    socialKind: string;
  } | null;
  agreement: {
    isOverAge14: boolean;
    isServiceAccept: boolean;
    isInfoAccept: boolean;
    isMarketing: boolean;
  } | null;
};

//  유저 데이터를 가져옴
export async function getUserFetcher(): Promise<UserData> {
  return clientInstance.get('/api/user/me').then((res) => res.data);
}

