import { useEffect, useState } from 'react';
import { useMessage } from '@/context/MessageProvider';
import { ProjectInfo } from 'features/projects/types/projects';
import { projectGetEroorMessage } from '../constants/projectConstants';
import { PageInfoParams } from '@/api/datastore/models/pagination';
import { getProjects } from '../repository';

const useFetchProjects = () => {
  const [projectList, setProjectList] = useState<ProjectInfo[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfoParams>({});
  const { showMessage } = useMessage();

  const fetchProjects = async (page?: number, limit?: number) => {
    try {
      const res = await getProjects(page, limit);
      setProjectList(res.data);
      setPageInfo(res.pageInfo);
    } catch (err) {
      showMessage('error', projectGetEroorMessage);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projectList, pageInfo, fetchProjects };
};

export default useFetchProjects;
