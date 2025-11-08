import axios from 'axios';
import { BASE_URL } from '@/constants/endPoint';
import { TaskInfo, Tasks, UpdateTask } from '../types/tasks';

export const getTasks = async (): Promise<TaskInfo[]> => {
  const res = await axios.get<Tasks>(`${BASE_URL}/tasks`);
  return res.data.data;
};

export const getTaskDetail = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/tasks/${id}`, {});
};

export const updateTask = async (
  id: string,
  updatedEntries: UpdateTask
): Promise<TaskInfo> => {
  const res = await axios.patch(`${BASE_URL}/tasks/${id}`, updatedEntries);
  return res.data.data;
};
