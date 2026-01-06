'use client';
import Pagination from '@/components/elements/Pagination';
import ProjectList from 'features/projects/components/ProjectList';
import useFetchProjects from 'features/projects/hooks/useFetchProjects';

const page = () => {
  const { pageInfo, fetchProjects } = useFetchProjects();
  const currentLimit = pageInfo.limit;
  const currentPage = pageInfo.page;
  const totalPage = Math.ceil((pageInfo.totalCount ?? 0) / (currentLimit ?? 1));
  const totalCount = pageInfo.totalCount;

  const handleFetchTasks = ({
    page,
    limit,
  }: {
    page?: number;
    limit?: number;
  }) => {
    fetchProjects(page, limit);
  };

  return (
    <div className="p-8 w-full h-full overflow-scroll bg-content">
      <div className="bg-light2 p-8">
        <div className="p-8">
          <div>
            <h2 className="font-light text-[14px]">プロジェクト</h2>
          </div>
          <div className="max-w-[800px] mt-16 mx-auto mb-auto">
            <div className="flex justify-between py-4 px-0">
              {/* プロジェクトの数 */}
              <p className="font-light">
                {currentPage} / {totalPage} ({totalCount} 件)
              </p>
            </div>
            <ProjectList />
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
