export async function generateNicknameFetcher() {
  return fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/user/nickname`, {
    cache: "no-store",
  }).then((res) => res.json());
}

export async function nicknameValidationCheckFetcher(nickname: string) {
  return fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/api/user/validate?nickname=${nickname}`
  ).then((res) => res.json());
}
