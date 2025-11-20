import DateDecorator, { now } from '@/api/datastore/models/date';
import { StatusType, TaskInfo } from '../types/tasks';

//1週間後の日付
export const getNextWeek = (): string => {
  const today = now();
  return new DateDecorator(
    today.date!.add(7, 'day').format('YYYY-MM-DD')
  ).toString() as string;
};

export const statusOptions: { label: string; value: StatusType }[] = [
  { label: '未完了', value: 'scheduled' },
  { label: '完了', value: 'completed' },
  { label: 'アーカイブ済み', value: 'archived' },
];

export const noSlectOption = [
  { label: 'プログラムを選択してください', value: '0' },
];

//エラメッセージ
export const taskAddSuccessMessage = 'タスクの追加に成功しました。';

export const taskAddErrorMessage = 'タスクの追加に失敗しました。';

export const taskGetErrorMessage = 'タスク一覧の取得に失敗しました。';

export const taskUpdateErrorMessage = 'タスクの更新に失敗しました。';

export const taskUpdateSuccessMessage = 'タスクの更新に成功しました。';

export const taskDeleteSuccessMessage = 'タスクの削除に成功しました。';

export const taskDeleteErrorMessage = 'タスクの削除に失敗しました。';

//タスク追加ダイアログのtitleフィールドのプレースホルダー
export const titleFieldPlaceholder =
  'タスクを入力。 例)  英会話レッスンの予約、React公式ドキュメントを1ページ読む';

export const descriptionFieldPlaceholder = 'タスクの説明・メモ';

export const defaultTask: TaskInfo = {
  id: '',
  title: '',
  description: '',
  status: 'scheduled',
  createdAt: '',
  updatedAt: '',
  deadline: '',
  project: {
    id: '',
    name: '',
    slug: '',
    goal: '',
    shouldbe: '',
    color: '',
    createdAt: '',
    updatedAt: '',
    deadline: '',
  },
};
