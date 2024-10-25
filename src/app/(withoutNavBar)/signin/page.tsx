import SignInForm from '@/components/signIn/SignInForm';
import { generateNickname } from '@/services/user';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

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
    staleTime: 60 * 1000,
  });
  return (
    <section className="h-full px-4 pt-4">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SignInForm callbackUrl={callbackUrl} />
      </HydrationBoundary>
    </section>
  );
}
