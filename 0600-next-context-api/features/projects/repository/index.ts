import { instance } from '@/lib/axios';
import { Projects } from 'features/projects/types/projects';

export const getProjects = async () => {
  const res = await instance.get<Projects>('/projects');
  return res.data.data;
};

export const getProjectDetail = async (projectName: string) => {
  const res = await instance.get<Projects>(`/projects/${projectName}`);
  return res.data.data;
};
