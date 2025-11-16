'use client';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { TaskInfo, Tasks } from '../types/tasks';
import { getTasks } from '../repository';
import { useMessage } from '@/context/MessageProvider';
import { taskGetErrorMessage } from '../constants/taskConstants';

interface TaskProviderProps {
  children: ReactNode;
}
type ProjectContextType = [
  Tasks | null,
  Dispatch<SetStateAction<Tasks | null>>,
  (task: TaskInfo) => void,
  (page?: number, limit?: number) => Promise<void>
];
const TaskContext = createContext<ProjectContextType | undefined>(undefined);

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Tasks | null>(null);
  const [, , showMessage] = useMessage();

  const fetchTasks = async (page?: number, limit?: number) => {
    try {
      const res = await getTasks(page, limit);
      setTasks(res);
    } catch (err) {
      showMessage('error', taskGetErrorMessage);
    }
  };

  //taskList取得
  useEffect(() => {
    fetchTasks();
  }, []);

  //task更新メソッド
  const onUpdateTask = (task: TaskInfo) => {
    setTasks((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        data: prev.data.map((it) => (it.id === task.id ? task : it)),
      };
    });
  };

  return (
    <TaskContext.Provider value={[tasks, setTasks, onUpdateTask, fetchTasks]}>
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
