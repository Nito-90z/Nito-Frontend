'use client';

import { NotionRenderer } from 'react-notion-x';

type RendererProps = {
  recordMap: any;
  rootPageId: string;
};

export default function NotionRender({ recordMap, rootPageId }: RendererProps) {
  return (
    <div>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
        previewImages
      />
    </div>
  );
}
