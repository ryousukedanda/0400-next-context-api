'use client';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';
import { TaskInfo } from '../types/tasks';
import { getTasks } from '../repository';
import { useMessage } from '@/context/MessageProvider';
import { taskGetErrorMessage } from '../constants/taskConstants';
import { PageInfoParams } from '@/api/datastore/models/pagination';

interface TaskProviderProps {
  children: ReactNode;
}

interface ProjectContextType {
  tasks: TaskInfo[];
  pageInfo: PageInfoParams;
  setTasks: Dispatch<SetStateAction<TaskInfo[]>>;
  onUpdateTask: (task: TaskInfo) => void;
  fetchTasks: (page?: number, limit?: number) => Promise<void>;
}
const TaskContext = createContext<ProjectContextType | undefined>(undefined);

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<TaskInfo[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfoParams>({});
  const { showMessage } = useMessage();
  const pathname = usePathname();

  const fetchTasks = useCallback(async (page?: number, limit?: number) => {
    try {
      const res = await getTasks(page, limit);
      setTasks(res.data);
      setPageInfo(res.pageInfo);
    } catch (err) {
      showMessage('error', taskGetErrorMessage);
    }
  }, [showMessage]);

  // 一覧ページ表示時にタスクを取得
  useEffect(() => {
    if (pathname === '/tasks') {
      fetchTasks();
    }
  }, [pathname, fetchTasks]);

  //task更新メソッド
  const onUpdateTask = (task: TaskInfo) => {
    setTasks((prev) => prev.map((it) => (it.id === task.id ? task : it)));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, pageInfo, setTasks, onUpdateTask, fetchTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};

export default TaskProvider;
