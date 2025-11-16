'use client';
import Pagenation from '@/components/elements/Pagenation';
import Select from '@/components/elements/Select';
import { limitLabel, limitOptions } from '@/constants';
import TaskList from 'features/tasks/components/taskList/TaskList';

import { useTask } from 'features/tasks/context/TaskProvider';

const page = () => {
  const [tasks, , , fetchTasks] = useTask();
  const limit = tasks?.pageInfo.limit;
  const currentPage = tasks?.pageInfo.page;
  const hasNext = tasks?.pageInfo.hasNext;
  const hasPrevious = tasks?.pageInfo.hasPrevious;
  const totalPage = Math.ceil((tasks?.pageInfo.totalCount ?? 0) / (limit ?? 1));
  const previousPage = (currentPage ?? 1) - 1;
  const nextPage = (currentPage ?? 1) + 1;
  const pageArr = Array.from({ length: totalPage }, (_, i) => i + 1);

  const handleFetchTasks = (page?: number, limit?: number) => {
    fetchTasks(page, limit);
  };

  return (
    <div className="p-8 w-full h-full overflow-scroll bg-content">
      <div>
        <div className="bg-light2 p-8">
          <div className="font-light text-[14px]">
            <h2 className="font-light text-[14px]">タスク</h2>
          </div>
          <div className="w-full">
            {/* header */}
            <div className="border-b-table my-4 mx-0">
              <div className="flex items-center justify-between">
                <div className="flex text-[12px] items-center">
                  <div className="mr-4">
                    <span>{`${currentPage}/${totalPage}`}</span>
                  </div>
                  <div className="mr-4">
                    <Select
                      options={limitOptions}
                      label={limitLabel}
                      selectId="limit"
                      onChange={handleFetchTasks}
                      currentPage={currentPage}
                    />
                  </div>
                  <div>
                    <span className="inline-block mr-4">
                      {tasks?.pageInfo.totalCount}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">{/* {謎のdiv} */}</div>
              </div>
            </div>
            {/* tasklist */}
            <TaskList />
            {/* {footer} */}
            <Pagenation
              hasNext={hasNext}
              hasPrevious={hasPrevious}
              pageArr={pageArr}
              currentPage={currentPage}
              previousPage={previousPage}
              nextPage={nextPage}
              limit={limit}
              onClick={handleFetchTasks}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
