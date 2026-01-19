import AppDate from '@/api/lib/date';
import { useProject } from 'features/projects/context/ProjectProvider';
import Link from 'next/link';

interface SidebarProjectRowProps {
  pathName: string;
}
const SidebarProjectRow = ({ pathName }: SidebarProjectRowProps) => {
  const { projectList } = useProject();
  return (
    <ul className="my-4 mr-0 ml-8">
      {projectList.map((project) => {
        const path = `/projects/${project.slug}`;
        const isActive = path === pathName;
        return (
          <Link
            key={project.id}
            className={`cursor-pointer block py-4 pr-4 pl-8 text-[14px] whitespace-nowrap hover:bg-[#8fe3c740] ${
              isActive ? 'bg-hover' : ''
            }`}
            href={`/projects/${project.slug}`}
          >
            <div className="flex justify-between items-end text-dark">
              <div className={`${isActive ? 'text-dark font-bold' : ''}`}>
                <span
                  style={{ backgroundColor: project.color }}
                  className="inline-block h-2 w-2 rounded-sm mr-2"
                ></span>
                {project.name}
              </div>
              <span className="inline-block text-[10px] ml-8">
                {project.deadline
                  ? AppDate.parse(project.deadline)?.toString()
                  : ''}
              </span>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export default SidebarProjectRow;
