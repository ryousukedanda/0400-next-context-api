import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { TaskInfo } from '../types/tasks';
import { getTasks } from '../repository';

interface TaskProviderProps {
  children: ReactNode;
}
type ProjectContextType = [
  TaskInfo[],
  Dispatch<SetStateAction<TaskInfo[]>>,
  (task: TaskInfo) => void
];
const TaskContext = createContext<ProjectContextType | undefined>(undefined);

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [taskList, setTaskList] = useState<TaskInfo[]>([]);

  //taskList取得
  useEffect(() => {
    const getTaskList = async () => {
      try {
        const res = await getTasks();
        setTaskList(res);
      } catch (err) {
        console.log(err);
      }
    };
    getTaskList();
  }, []);

  //task更新メソッド
  const onUpdateTask = (task: TaskInfo) => {
    setTaskList((prev) => prev.map((it) => (it.id === task.id ? task : it)));
  };

  return (
    <TaskContext.Provider value={[taskList, setTaskList, onUpdateTask]}>
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
