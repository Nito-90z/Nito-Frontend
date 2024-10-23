import SubHeader from '@/components/header/SubHeader';
import SelectButton from '@/components/myPage/SelectButton';

export default function UseNitoPage() {
  return (
    <section className='relative flex flex-col h-full'>
      <SubHeader text='니토 사용법' />
      <div className='flex flex-col overflow-y-auto'>
        <SelectButton />
      </div>
    </section>
  );
}
