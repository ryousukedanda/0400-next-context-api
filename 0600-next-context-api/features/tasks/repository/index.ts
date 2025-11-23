import { TaskInfo, Tasks } from '../types/tasks';
import { instance } from '@/lib/axios';

//タスクリスト取得
export const getTasks = async (
  page?: number,
  limit?: number
): Promise<Tasks> => {
  const res = await instance.get<Tasks>('/tasks', { params: { page, limit } });
  return res.data;
};

//タスク詳細取得
export const getTaskDetail = async (id: string) => {
  const res = await instance.get(`/tasks/${id}`);
  return res.data.data;
};

//タスク更新
export const updateTask = async (
  id: string,
  updatedTask: TaskInfo
): Promise<TaskInfo> => {
  const res = await instance.patch(`/tasks/${id}`, updatedTask);
  return res.data.data;
};

//タスク登録
export const createTask = async (newTask: TaskInfo) => {
  await instance.post(`/tasks`, newTask);
};

//タスク削除
export const deleteTask = async (id: string) => {
  const res = await instance.delete(`/tasks/${id}`);
};
