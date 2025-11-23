'use client';
import Pagination from '@/components/elements/Pagination';
import Select from '@/components/elements/Select';
import { limitLabel, limitOptions } from '@/constants';
import TaskList from 'features/tasks/components/taskList/TaskList';
import { useTask } from 'features/tasks/context/TaskProvider';

const page = () => {
  const { pageInfo, fetchTasks } = useTask();
  const currentLimit = pageInfo.limit;
  const currentPage = pageInfo.page;
  const totalPage = Math.ceil((pageInfo.totalCount ?? 0) / (currentLimit ?? 1));

  const handleFetchTasks = ({
    page = 1, //Selectでlimitが変わったら、表示ページは1から
    limit = currentLimit, //Pagination遷移時、現在のlimitを参照
  }: {
    page?: number;
    limit?: number;
  }) => {
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
                      id="limit"
                      onChange={(e) => {
                        const limit = Number(e.target.value);
                        handleFetchTasks({ limit });
                      }}
                    />
                  </div>
                  <div>
                    <span className="inline-block mr-4">
                      {pageInfo.totalCount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* tasklist */}
            <TaskList />
            {/* {footer} */}
            <Pagination
              pageInfo={pageInfo}
              onClick={(page) => handleFetchTasks({ page })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
