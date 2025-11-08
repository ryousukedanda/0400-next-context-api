'use client';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Chart from 'features/chart/components/Chart';
import ProjectList from 'features/projects/components/ProjectList';
import { ProjectInfo } from 'features/projects/types/projects';
import TaskList from 'features/tasks/components/TaskList';
import { useEffect, useState } from 'react';
import { getProjects } from './api/datastore';
import { useProject } from './context/ProjectContext';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [projectList, setProjectList] = useProject();

  return (
    <div className="p-8 w-full h-full overflow-scroll bg-content">
      <div className="w-full h-full">
        {/* dashboard */}
        <div className="p-8 flex justify-between bg-light2 ">
          <ProjectList />
          <Chart />
        </div>
        {/* tasks */}
        <div className="p-8 bg-light2">
          {/* taskHeader */}
          <div className="flex justify-between">
            <h2 className="flex justify-between text-[14px] font-thin items-center">
              タスク
            </h2>
            <a
              href="/tasks"
              className="items-center flex text-primary tracking-[.1rem] text-[10px]"
            >
              タスク一覧
              <div className="flex justify-center items-center h-full">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-2.5 h-2.5 text-primary"
                />
              </div>
            </a>
          </div>
          {/* taskList */}
          <div className="min-w-full py-4 px-0">
            <div className="w-full">
              <TaskList projectList={projectList} />
            </div>
          </div>
          {/* taskfooter */}
          <div className="flex justify-end">
            <a
              href="/tasks"
              className="items-center flex text-primary tracking-[.1rem] text-[10px]"
            >
              あと4ページ
              <div className="flex justify-center items-center h-full">
                <FontAwesomeIcon icon={faArrowRight} className="w-2.5 h-2.5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
