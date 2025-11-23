'use client';
import TitleCol from './TitleCol';
import ProjectCol from './ProjectCol';
import StatusCol from './StatusCol';
import DeadlineCol from './DeadlineCol';
import DetailCol from './DetailCol';
import { useTask } from '../../context/TaskProvider';
import { useEffect } from 'react';

const TaskRow = () => {
  const { tasks, fetchTasks } = useTask();

  //taskList取得
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            className="flex py-2 px-0 transition-all duration-500 hover:scale-101 hover:shadow-[1px_1px_3px_1px_#22222210]"
          >
            <TitleCol task={task} />
            <ProjectCol task={task} />
            <StatusCol task={task} />
            <DeadlineCol task={task} />
            <DetailCol id={task.id} />
          </div>
        );
      })}
    </div>
  );
};

export default TaskRow;
