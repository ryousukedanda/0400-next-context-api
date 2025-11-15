'use client';
import TaskRow from './TaskRow';
import TaskHeader from './TaskHeader';

const TaskList = () => {
  return (
    <div className="w-full">
      <TaskHeader />
      <TaskRow />
    </div>
  );
};

export default TaskList;
