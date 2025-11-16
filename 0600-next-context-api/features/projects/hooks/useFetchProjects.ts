import { useEffect, useState } from 'react';
import { getProjects } from '@/api/datastore';
import { useMessage } from '@/context/MessageProvider';
import { ProjectInfo } from 'features/projects/types/projects';
import { projectGetEroorMessage } from '../constants/projectConstants';

export const useFetchProjects = () => {
  const [projectList, setProjectList] = useState<ProjectInfo[]>([]);
  const [, , showMessage] = useMessage();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        setProjectList(res);
      } catch (err) {
        showMessage('error', projectGetEroorMessage);
      }
    };
    fetchProjects();
  }, []);

  return projectList;
};

export default useFetchProjects;
