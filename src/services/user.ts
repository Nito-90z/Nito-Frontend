export async function generateNickname() {
  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/nickname/`) //
    .then((res) => res.json());
}

export async function nicknameValidationCheck(nickname: string) {
  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/validate/?nickname=${nickname}`
  ).then((res) => res.json());
}
