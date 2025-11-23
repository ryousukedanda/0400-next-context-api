'use client';
import EditableField from './EditableField';
import { TaskInfo } from '../../types/tasks';
import { useTask } from 'features/tasks/context/TaskProvider';

interface DeadlineColColProps {
  task: TaskInfo;
}

const DeadlineCol = ({ task }: DeadlineColColProps) => {
  const { onUpdateTask } = useTask();
  return (
    <div className="w-1/10 flex items-center py-2 px-0 text-[12px]">
      <EditableField type={'date'} task={task} onUpdate={onUpdateTask} />
    </div>
  );
};

export default DeadlineCol;
