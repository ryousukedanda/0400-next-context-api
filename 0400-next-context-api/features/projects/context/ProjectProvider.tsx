'use client';

import { useMessage } from '@/context/MessageProvider';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { projectGetEroorMessage } from '../constants/projectConstants';
import { PageInfoParams } from '@/api/datastore/models/pagination';
import { ProjectInfo } from '../types/projects';
import { getProjects } from '../repository';

interface ProjectContextType {
  projectList: ProjectInfo[];
  pageInfo: PageInfoParams;
  fetchProjects: (page?: number, limit?: number) => Promise<void>;
  isLoading: boolean;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projectList, setProjectList] = useState<ProjectInfo[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfoParams>({});
  const [isLoading, setIsLoading] = useState(false);
  const { showMessage } = useMessage();

  const fetchProjects = async (page?: number, limit?: number) => {
    try {
      setIsLoading(true);
      const res = await getProjects(page, limit);
      setProjectList(res.data);
      setPageInfo(res.pageInfo);
    } catch (err) {
      showMessage('error', projectGetEroorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ projectList, pageInfo, fetchProjects, isLoading }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within ProjectProvider');
  }
  return context;
};
