export async function generateNicknameFetcher() {
  return fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/auth`, {
    cache: "no-store",
  }).then((res) => res.json());
}
