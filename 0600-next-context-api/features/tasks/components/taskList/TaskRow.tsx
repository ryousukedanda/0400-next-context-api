'use client';
import TitleCol from './TitleCol';
import ProjectCol from './ProjectCol';
import StatusCol from './StatusCol';
import DeadlineCol from './DeadlineCol';
import DetailCol from './DetailCol';
import { useTask } from '../../context/TaskProvider';

const TaskRow = () => {
  const [tasks] = useTask();

  return (
    <div>
      {tasks?.data.map((task) => {
        return (
          <div
            key={task.id}
            className="flex py-2 px-0 transition-all duration-500 hover:scale-101 hover:shadow-[1px_1px_3px_1px_#22222210]"
          >
            <TitleCol task={task} />
            <ProjectCol task={task} />
            <StatusCol task={task} />
            <DeadlineCol task={task} />
            <DetailCol />
          </div>
        );
      })}
    </div>
  );
};

export default TaskRow;
