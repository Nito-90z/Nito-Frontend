import { getNotion } from '@/libs/notion';
import NotionRender from '@/components/myPage/NotionRender';
import BackHeader from '@/components/header/BackHeader';

// 노션 페이지 스타일링
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';
import { NOTION_POLICY_ERROR } from '@/constants';


export default async function PrivacyPolicyPage() {

  const pageId = process.env.NEXT_PUBLIC_NOTION_PRIVACY_POLICY;
  if (!pageId) {
    throw new Error(NOTION_POLICY_ERROR);
  }
  const data = await getNotion(pageId);
  return (
    <section className='relative flex flex-col h-full'>
      <BackHeader mainText='개인정보처리방침' />
      <div className='flex flex-col overflow-y-auto'>
      <NotionRender recordMap={data} rootPageId={pageId} />
      </div>
    </section>
  );
}