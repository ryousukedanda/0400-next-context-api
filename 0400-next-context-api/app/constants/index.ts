import { OptionsType } from '@/types';

export const sidebarList = [
  { name: 'ダッシュボード', path: '/' },
  { name: 'タスク', path: '/tasks' },
  { name: 'プロジェクト', path: '/projects' },
];

export const limitLabel = '表示件数 : ';

export const limitOptions: OptionsType[] = [
  { id: 1, value: '20', display: '20件' },
  { id: 2, value: '50', display: '50件' },
  { id: 3, value: '100', display: '100件' },
];
