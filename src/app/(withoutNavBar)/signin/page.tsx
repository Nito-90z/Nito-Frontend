import SignInForm from '@/components/signIn/SignInForm';
import { generateNickname } from '@/services/user';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입',
  description:
    '닉네임만 입력하고 간편하게 Nito에 가입하세요. 복잡한 절차 없이 쉽고 빠르게 시작할 수 있습니다',
};

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignInPage({
  searchParams: { callbackUrl },
}: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['nickname'],
    queryFn: generateNickname,
    staleTime: Infinity,
  });

  return (
    <section className="h-full px-4 pt-4">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SignInForm callbackUrl={callbackUrl} />
      </HydrationBoundary>
    </section>
  );
}
