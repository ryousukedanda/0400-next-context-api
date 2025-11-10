import DateDecorator, { now } from '@/api/datastore/models/date';
import { TaskCreateState } from '../types/tasks';

// 現在の日付
const today = now();

// 1週間後の日付を作る
export const nextWeek = new DateDecorator(
  today.date!.add(7, 'day').format('YYYY-MM-DD')
).toString() as string;

export const statusOptions = [
  { label: '未完了', value: 'scheduled' },
  { label: '完了', value: 'completed' },
  { label: 'アーカイブ済み', value: 'archived' },
];

export const initialNewTask: TaskCreateState = {
  projectId: null,
  projectName: null,
  title: null,
  description: '',
  deadline: nextWeek,
  status: 'scheduled',
};

export const taskSuccessMessage = 'タスクの追加に成功しました。';

export const taskErrorMessage = 'タスクの追加に失敗しました。';
