import SubHeader from '@/components/header/SubHeader';
import { getNotion } from '@/libs/notion';
import NotionRender from '@/components/myPage/NotionRender';

// 노션 페이지 스타일링
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

export default async function PrivacyPolicyPage() {

  const pageId = process.env.NEXT_PUBLIC_NOTION_PRIVACY_POLICY;
  if (!pageId) {
    throw new Error('NEXT_PUBLIC_NOTION_PRIVACY_POLICY is not defined');
  }
  const data = await getNotion(pageId);
  return (
    <section className='relative flex flex-col h-full'>
      <SubHeader text='개인정보처리방침' />
      <div className='flex flex-col overflow-y-auto'>
      <NotionRender recordMap={data} rootPageId={pageId} />
      </div>
    </section>
  );
}