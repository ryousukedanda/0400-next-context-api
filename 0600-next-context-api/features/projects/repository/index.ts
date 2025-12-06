import { instance } from '@/lib/axios';
import { ProjectInfo, Projects } from 'features/projects/types/projects';

export const getProjects = async (page?: number, limit?: number) => {
  const res = await instance.get<Projects>('/projects', {
    params: { page, limit },
  });
  return res.data;
};

export const getProjectDetail = async (slug: string) => {
  const res = await instance.get<{ data: ProjectInfo }>(`/projects/${slug}`);
  return res.data.data;
};
