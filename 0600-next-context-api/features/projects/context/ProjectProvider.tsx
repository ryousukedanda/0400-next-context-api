import { getProjects } from 'features/projects/repository';
import { ProjectInfo } from 'features/projects/types/projects';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ProjectProviderProps {
  children: ReactNode;
}

type ProjectContextType = [
  ProjectInfo[], // ← 現在の状態（プロジェクトの配列）
  Dispatch<SetStateAction<ProjectInfo[]>> // ← 状態を更新する関数
];

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const [projectList, setProjectList] = useState<ProjectInfo[]>([]);

  useEffect(() => {
    const getProjectList = async () => {
      try {
        const res = await getProjects();
        setProjectList(res);
      } catch (err) {
        console.log(err);
      }
    };
    getProjectList();
  }, []);

  return (
    <ProjectContext.Provider value={[projectList, setProjectList]}>
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
