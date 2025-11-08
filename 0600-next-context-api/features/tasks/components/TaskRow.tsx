'use client';
import React, { useEffect, useState } from 'react';
import { TaskInfo } from '../types/tasks';
import { getTasks } from '../repository';
import TitleCol from './TitleCol';
import ProjectCol from './ProjectCol';
import StatusCol from './StatusCol';
import DeadlineCol from './DeadlineCol';
import DetailCol from './DetailCol';
import { ProjectInfo } from 'features/projects/types/projects';

interface TaskRowProps {
  projectList: ProjectInfo[];
}

const TaskRow = ({ projectList }: TaskRowProps) => {
  const [taskList, setTaskList] = useState<TaskInfo[]>([]);

  //レンダリング時
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

  //タスク更新メソッド
  const updateTask = (task: TaskInfo) => {
    setTaskList((prev) => prev.map((it) => (it.id === task.id ? task : it)));
  };

  return (
    <div>
      {taskList.map((task) => {
        return (
          <div
            key={task.id}
            className="flex py-2 px-0 transition-all duration-500 hover:scale-101 hover:shadow-[1px_1px_3px_1px_#22222210]"
          >
            <TitleCol task={task} onUpdate={updateTask} />
            <ProjectCol task={task} onUpdate={updateTask} />
            <StatusCol task={task} onUpdate={updateTask} />
            <DeadlineCol task={task} onUpdate={updateTask} />
            <DetailCol />
          </div>
        );
      })}
    </div>
  );
};

export default TaskRow;
