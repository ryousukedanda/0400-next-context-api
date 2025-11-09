'use client';
import EditableField from './EditableField';
import { TaskInfo } from '../../types/tasks';

interface TitleColProps {
  task: TaskInfo;
}

const TitleCol = ({ task }: TitleColProps) => {
  return (
    <div className="w-1/2 pl-4 flex items-center py-2 px-0 text-[12px]">
      <EditableField type={'text'} task={task} />
    </div>
  );
};

export default TitleCol;
