import { CreateTask, TaskInfo, Tasks, UpdateTask } from '../types/tasks';
import { instance } from '@/lib/axios';

//タスクリスト取得
export const getTasks = async (): Promise<TaskInfo[]> => {
  const res = await instance.get<Tasks>('/tasks');
  return res.data.data;
};

//タスク詳細取得
export const getTaskDetail = async (id: string) => {
  const res = await instance.get<Tasks>(`/tasks/${id}`);
  return res.data.data;
};

//タスク更新
export const updateTask = async (
  id: string,
  updatedTask: UpdateTask
): Promise<TaskInfo> => {
  const res = await instance.patch(`/tasks/${id}`, updatedTask);
  return res.data.data;
};

//タスク登録
export const createTask = async (newTask: CreateTask) => {
  await instance.post(`/tasks`, newTask);
};
