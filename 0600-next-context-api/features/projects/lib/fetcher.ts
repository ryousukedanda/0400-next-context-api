import { ProjectInfo } from '@/types/projects';
import axios, { AxiosResponse } from 'axios';

export const getProjects = async (): Promise<ProjectInfo> => {
  try {
    const res = await axios.get<ProjectInfo>(
      'http://localhost:3000/api/v1/users/projects'
    );
    return res.data;
  } catch (err) {
    console.log(`error:`, err);
    return {
      data: [],
    };
  }
};

export const getProjectDetail = async (projectName: string) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/v1/users/projects/${projectName}`
    );
    return res;
  } catch (err) {
    console.log(`error:`, err);
  }
};
