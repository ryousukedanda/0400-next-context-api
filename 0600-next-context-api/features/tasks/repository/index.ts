import axios from 'axios';
import { BASE_URL } from '@/constants/endPoint';
import { CreateTask, TaskInfo, Tasks, UpdateTask } from '../types/tasks';

//タスクリスト取得
export const getTasks = async (): Promise<TaskInfo[]> => {
  const res = await axios.get<Tasks>(`${BASE_URL}/tasks`);
  return res.data.data;
};

//タスク詳細取得
export const getTaskDetail = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/tasks/${id}`, {});
};

//タスク更新
export const updateTask = async (
  id: string,
  updatedTask: UpdateTask
): Promise<TaskInfo> => {
  const res = await axios.patch(`${BASE_URL}/tasks/${id}`, updatedTask);
  return res.data.data;
};

//タスク登録
export const createTask = async (newTask: CreateTask) => {
  await axios.post(`${BASE_URL}/tasks`, newTask);
};
