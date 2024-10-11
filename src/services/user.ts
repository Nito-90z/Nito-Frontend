export async function generateNickname() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/nickname/`
  );
  const data = await res.json();

  return data;
}

export async function nicknameValidationCheck(nickname: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/validate/?nickname=${nickname}`
  );
  const data = await res.json();

  return data;
}