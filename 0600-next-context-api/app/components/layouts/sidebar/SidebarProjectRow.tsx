import AppDate from '@/api/lib/date';
import useFetchProjects from 'features/projects/hooks/useFetchProjects';
import Link from 'next/link';

const SidebarProjectRow = () => {
  const projectList = useFetchProjects();
  return (
    <ul className="my-4 mr-0 ml-8">
      {projectList.map((project) => {
        return (
          <Link
            key={project.id}
            className="cursor-pointer block py-4 pr-4 pl-8 text-[14px] whitespace-nowrap hover:bg-[#8fe3c740]"
            href={`/projects/${project.slug}`}
          >
            <div className="flex justify-between items-end text-dark">
              <div>
                <span
                  style={{ backgroundColor: project.color }}
                  className="inline-block h-2 w-2 rounded-sm mr-2"
                ></span>
                {project.name}
              </div>
              <span className="inline-block text-[10px] ml-8">
                {AppDate.parse(project.deadline)?.toString()}
              </span>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export default SidebarProjectRow;
