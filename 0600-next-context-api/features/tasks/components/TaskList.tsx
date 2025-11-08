'use client';
import { ProjectInfo } from 'features/projects/types/projects';
import TaskRow from './TaskRow';
import TaskHeader from './TaskHeader';

interface TaskListProps {
  projectList: ProjectInfo[];
}

const TaskList = ({ projectList }: TaskListProps) => {
  return (
    <div className="w-full">
      <TaskHeader />
      <TaskRow projectList={projectList} />
    </div>
  );
};

export default TaskList;
