'use client';

import { NotionRenderer } from 'react-notion-x';

type RendererProps = {
  recordMap: any;
  rootPageId: string;
};

export const NotionRender = ({ recordMap, rootPageId }: RendererProps) => {
  return (
    <div className="notion__container">
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
        previewImages
      />
    </div>
  );
};

export default NotionRender;
