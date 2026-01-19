import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faCodeCommit,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';
import AppDate from '@/api/lib/date';
import { useProject } from '../context/ProjectProvider';
import Link from 'next/link';

const ProjectList = () => {
  const { projectList } = useProject();

  return (
    <>
      {projectList.map((project) => {
        return (
          <Link href={`/projects/${project.slug}`} key={project.id}>
            <div
              className="p-4 border-0 shadow-[1px_1px_3px_1px_#22222210] mb-4 bg-light2 transition-all duration-500 text-dark-week hover:scale-105 hover:shadow-[1px_1px_8px_1px_#22222210]"
              style={{ borderLeft: `5px solid ${project.color}` }}
            >
              <div className="flex justify-between items-center">
                <h2
                  className="text-[10px] font-bold"
                  style={{ color: project.color }}
                >
                  {project.name}
                </h2>
                <div className="flex items-center text-dark">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="w-2.5! h-2.5! inline-block mr-2 relative top-0"
                  />
                  <p className="text-[10px] font-bold">
                    {project.createdAt
                      ? AppDate.parse(project.createdAt)?.toString()
                      : ''}
                  </p>
                </div>
              </div>
              <div className="py-4 px-0">
                <div className="flex items-center mr-4 mb-2 text-[20px] text-dark font-bold">
                  <p>{project.goal}</p>
                </div>
                <div className="flex items-center text-[14px] font-thin text-dark-week ">
                  <p>{project.shouldbe}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ProjectList;
