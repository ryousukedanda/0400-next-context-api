import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faCodeCommit,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';
import AppDate from '@/api/lib/date';
import useFetchProjects from '../hooks/useFetchProjects';

const ProjectList = () => {
  const projectList = useFetchProjects();

  return (
    <div className="grow shrink mr-8 ">
      <h2 className="flex justify-between text-[14px] font-thin items-center">
        プロジェクト
      </h2>
      <div className="py-4 px-0 ">
        {projectList.map((project) => {
          return (
            <a href={`/projects/${project.slug}`} key={project.id}>
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
                      {AppDate.parse(project.createdAt)?.toString()}
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
                <div className="flex justify-end text-dark-week">
                  <div className="flex items-center">
                    <p className="cursor-pointer flex items-center">
                      <span className="mr-1 ml-2">
                        <FontAwesomeIcon
                          icon={faCodeCommit}
                          className="w-3 h-3"
                        />
                      </span>
                      <span className="text-[12px] text-dark-week ">4</span>
                    </p>
                    <p className="cursor-pointer flex items-center">
                      <span className="mr-1 ml-2">
                        <FontAwesomeIcon
                          icon={faFileLines}
                          className="w-3 h-3"
                        />
                      </span>
                      <span className="text-[12px] text-dark-week">30</span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="flex justify-end">
        <a href="/projects" className="text-[10px] text-primary">
          プロジェクト一覧
        </a>
      </div>
    </div>
  );
};

export default ProjectList;
