import BackHeader from '@/components/header/BackHeader';
import SelectButton from '@/components/myPage/SelectButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nito 사용법',
  description: 'Nito의 사용법을 알아보세요!',
};

export default function UseNitoPage() {
  return (
    <section className='relative flex flex-col h-full'>
      <BackHeader mainText='니토 사용법' />
      <div className='flex flex-col overflow-y-auto'>
        <SelectButton />
      </div>
    </section>
  );
}
