import { NotionAPI } from 'notion-client';

export const notion = new NotionAPI();

export async function getNotion(rootPageId: string) {
  return notion.getPage(rootPageId);
}