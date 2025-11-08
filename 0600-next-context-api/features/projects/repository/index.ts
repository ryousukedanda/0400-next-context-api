import { ProjectInfo, Projects } from 'features/projects/types/projects';
import axios from 'axios';
import { BASE_URL } from '@/constants/endPoint';

export const getProjects = async (): Promise<ProjectInfo[]> => {
  const res = await axios.get<Projects>(`${BASE_URL}/projects`);
  return res.data.data;
};

export const getProjectDetail = async (projectName: string) => {
  const res = await axios.get(`${BASE_URL}/projects/${projectName}`);
};
