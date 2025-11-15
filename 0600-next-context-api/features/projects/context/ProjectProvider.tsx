import { getProjects } from '@/api/datastore';
import { useMessage } from '@/context/MessageProvider';
import { ProjectInfo } from 'features/projects/types/projects';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { projectGetEroorMessage } from '../constants/projectConstants';

interface ProjectProviderProps {
  children: ReactNode;
}

type ProjectContextType = [ProjectInfo[], () => Promise<void>];

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const [projectList, setProjectList] = useState<ProjectInfo[]>([]);
  const [, , showMessage] = useMessage();

  const fetchProjectList = async () => {
    try {
      const res = await getProjects();
      setProjectList(res);
    } catch (err) {
      showMessage('error', projectGetEroorMessage);
    }
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  return (
    <ProjectContext.Provider value={[projectList, fetchProjectList]}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};

export default ProjectProvider;
